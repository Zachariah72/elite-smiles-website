import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import type { Tables } from "@/integrations/supabase/types";

const Verify = () => {
  const { memberNo } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<Tables<"members"> | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (memberNo) {
      supabase
        .from("members")
        .select("*")
        .eq("member_no", memberNo)
        .maybeSingle()
        .then(({ data }) => {
          if (data) {
            setMember(data);
          } else {
            setNotFound(true);
          }
          setLoading(false);
        });
    }
  }, [memberNo]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Verifying membership...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>

        <Card className="border-border bg-card text-center">
          <CardHeader>
            <img src={logo} alt="Mabawa Uplift Foundation" className="h-16 w-16 mx-auto mb-2 object-contain" />
            <CardTitle className="font-display text-xl text-foreground">Member Verification</CardTitle>
          </CardHeader>
          <CardContent>
            {notFound ? (
              <div className="space-y-4">
                <XCircle className="h-16 w-16 mx-auto text-destructive" />
                <p className="text-foreground font-semibold">Member Not Found</p>
                <p className="text-muted-foreground text-sm">
                  No member with number <span className="font-mono">{memberNo}</span> was found.
                </p>
              </div>
            ) : member ? (
              <div className="space-y-4">
                <CheckCircle className="h-16 w-16 mx-auto text-accent" />
                <p className="text-accent font-bold text-lg">Verified Member ✓</p>
                <div className="text-left space-y-2 bg-muted rounded-lg p-4">
                  {member.photo_url && (
                    <img src={member.photo_url} alt={member.full_name} className="w-20 h-20 rounded-lg object-cover mx-auto mb-3" />
                  )}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="text-foreground font-medium">{member.full_name}</span>
                    <span className="text-muted-foreground">Member No:</span>
                    <span className="text-foreground font-medium">{member.member_no}</span>
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground font-medium">{member.membership_type === "18+" ? "18+ Member" : "Junior Member"}</span>
                    <span className="text-muted-foreground">Since:</span>
                    <span className="text-foreground font-medium">{member.date_joined}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Verify;
