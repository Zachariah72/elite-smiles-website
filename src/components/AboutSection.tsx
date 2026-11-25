import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { org } from "@/config/site";

const AboutSection = () => (
  <section id="about" className="bg-background py-16 md:py-24">
    <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <p className="mb-4 text-sm font-bold text-accent">Who We Are</p>
        <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">Local knowledge. Shared opportunity.</h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{org.intro}</p>
        <Button asChild variant="outline" className="mt-7">
          <Link to="/about">Discover Mabawa<ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <article className="border-t-2 border-primary pt-5">
          <p className="mb-3 text-sm font-bold text-primary">Our Mission</p>
          <p className="text-base leading-relaxed text-muted-foreground">{org.mission}</p>
        </article>
        <article className="border-t-2 border-accent pt-5">
          <p className="mb-3 text-sm font-bold text-accent">Our Vision</p>
          <p className="text-base leading-relaxed text-muted-foreground">{org.vision}</p>
        </article>
      </div>
    </div>
  </section>
);

export default AboutSection;