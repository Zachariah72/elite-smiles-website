import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MembershipCard from "@/components/MembershipCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Printer } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import type { Tables } from "@/integrations/supabase/types";

const MembershipCardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [member, setMember] = useState<Tables<"members"> | null>(null);
  const [loading, setLoading] = useState(true);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }
    if (user) {
      supabase
        .from("members")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle()
        .then(({ data }) => {
          if (!data) {
            navigate("/register");
          } else {
            setMember(data);
          }
          setLoading(false);
        });
    }
  }, [user, authLoading]);

  const downloadPNG = async () => {
    if (!frontRef.current || !backRef.current) return;
    for (const [ref, label] of [[frontRef, "front"], [backRef, "back"]] as const) {
      const canvas = await html2canvas(ref.current!, { scale: 3, useCORS: true, backgroundColor: null });
      const link = document.createElement("a");
      link.download = `mabawa-card-${label}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const downloadPDF = async () => {
    if (!frontRef.current || !backRef.current) return;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [85.6, 54] });

    const frontCanvas = await html2canvas(frontRef.current!, { scale: 3, useCORS: true, backgroundColor: null });
    pdf.addImage(frontCanvas.toDataURL("image/png"), "PNG", 0, 0, 85.6, 54);

    pdf.addPage([85.6, 54], "landscape");
    const backCanvas = await html2canvas(backRef.current!, { scale: 3, useCORS: true, backgroundColor: null });
    pdf.addImage(backCanvas.toDataURL("image/png"), "PNG", 0, 0, 85.6, 54);

    pdf.save(`mabawa-card-${member?.member_no}.pdf`);
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  if (!member) return null;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>

        <h1 className="font-display text-3xl text-foreground mb-2">Your Membership Card</h1>
        <p className="text-muted-foreground mb-8">Member No: <span className="text-primary font-semibold">{member.member_no}</span></p>

        {/* Card Preview */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Front</h2>
            <div ref={frontRef} className="inline-block shadow-2xl rounded-2xl">
              <MembershipCard member={member} side="front" />
            </div>
          </div>

          <div>
            <h2 className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Back</h2>
            <div ref={backRef} className="inline-block shadow-2xl rounded-2xl">
              <MembershipCard member={member} side="back" />
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <Button onClick={downloadPNG} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="h-4 w-4 mr-2" /> Download PNG
          </Button>
          <Button onClick={downloadPDF} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Printer className="h-4 w-4 mr-2" /> Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MembershipCardPage;
