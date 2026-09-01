import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  body?: string;
  actions?: { label: string; to: string; variant?: "accent" | "outline" }[];
};

const CTABand = ({
  title = "Give wings to hope",
  body = "Whether you donate, volunteer, partner or join, your support extends the reach and quality of our community programs.",
  actions = [
    { label: "Donate", to: "/donate", variant: "accent" },
    { label: "Partner With Us", to: "/partnerships", variant: "outline" },
    { label: "Join Mabawa", to: "/register", variant: "outline" },
  ],
}: Props) => (
  <section className="py-16 md:py-20 bg-card border-y border-border">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">{body}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {actions.map((a) =>
          a.variant === "accent" ? (
            <Button key={a.to + a.label} asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to={a.to}>{a.label}</Link>
            </Button>
          ) : (
            <Button key={a.to + a.label} asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to={a.to}>{a.label}</Link>
            </Button>
          )
        )}
      </div>
    </div>
  </section>
);

export default CTABand;
