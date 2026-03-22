import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Camera, Upload } from "lucide-react";
import logo from "@/assets/logo.png";

const Register = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    full_name: "",
    id_number: "",
    phone: "",
    email: user?.email || "",
    membership_type: "18+" as "18+" | "junior",
    date_joined: new Date().toISOString().split("T")[0],
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File too large", description: "Photo must be under 5MB", variant: "destructive" });
        return;
      }
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoading(true);

    try {
      // Check if user already has a membership
      const { data: existing } = await supabase
        .from("members")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (existing) {
        toast({ title: "Already registered", description: "You already have a membership.", variant: "destructive" });
        navigate("/membership-card");
        setLoading(false);
        return;
      }

      // Generate member number
      const { data: memberNo, error: rpcError } = await supabase.rpc("generate_member_number");
      if (rpcError) throw rpcError;

      // Upload photo
      let photoUrl = "";
      if (photo) {
        const ext = photo.name.split(".").pop();
        const path = `${user.id}/passport.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("member-photos")
          .upload(path, photo, { upsert: true });
        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("member-photos")
          .getPublicUrl(path);
        photoUrl = urlData.publicUrl;
      }

      // Insert member
      const { error: insertError } = await supabase.from("members").insert({
        user_id: user.id,
        full_name: form.full_name,
        member_no: memberNo,
        id_number: form.id_number,
        phone: form.phone,
        email: form.email,
        membership_type: form.membership_type,
        photo_url: photoUrl,
        date_joined: form.date_joined,
      });

      if (insertError) throw insertError;

      toast({ title: "Welcome to Mabawa Uplift!", description: `Your member number is ${memberNo}` });
      navigate("/membership-card");
    } catch (err: any) {
      toast({ title: "Registration failed", description: err.message, variant: "destructive" });
    }
    setLoading(false);
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>

        <Card className="border-border bg-card">
          <CardHeader className="text-center">
            <img src={logo} alt="Mabawa Uplift Foundation" className="h-16 w-16 mx-auto mb-2 object-contain" />
            <CardTitle className="font-display text-2xl text-foreground">Member Registration</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill in your details to become a Mabawa Uplift Foundation member
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-32 h-32 rounded-xl border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Camera className="h-8 w-8 mx-auto mb-1" />
                      <span className="text-xs">Passport Photo</span>
                    </div>
                  )}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-1" /> Upload Photo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Full Name *</Label>
                  <Input
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">ID Number *</Label>
                  <Input
                    value={form.id_number}
                    onChange={(e) => setForm({ ...form, id_number: e.target.value })}
                    placeholder="12345678"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Phone Number *</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0724301244"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Email *</Label>
                  <Input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Date Joined</Label>
                  <Input
                    value={form.date_joined}
                    onChange={(e) => setForm({ ...form, date_joined: e.target.value })}
                    type="date"
                    className="bg-muted border-border text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-foreground">Membership Type *</Label>
                <RadioGroup
                  value={form.membership_type}
                  onValueChange={(v) => setForm({ ...form, membership_type: v as "18+" | "junior" })}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="18+" id="adult" />
                    <Label htmlFor="adult" className="text-foreground cursor-pointer">18+ Member</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="junior" id="junior" />
                    <Label htmlFor="junior" className="text-foreground cursor-pointer">Junior Member</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6">
                {loading ? "Registering..." : "Complete Registration"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
