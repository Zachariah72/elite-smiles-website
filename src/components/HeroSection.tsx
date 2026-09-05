import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/site";
import athena1 from "@/assets/athena-1.jpg";
import athena2 from "@/assets/athena-2.jpg";
import athena4 from "@/assets/athena-4.jpg";
import athena5 from "@/assets/athena-5.jpg";
import programSchool from "@/assets/program-school.jpg";
import programSupplies from "@/assets/program-supplies.jpg";
import programOutreach from "@/assets/program-outreach.jpg";
import smartFarm from "@/assets/smart-farm.jpg";

const slides = [
  { src: athena2, alt: "Mabawa Uplift volunteers addressing learners at Athena School, Thika" },
  { src: programOutreach, alt: "Community outreach in session" },
  { src: athena5, alt: "A learner receiving sanitary towels during the Athena School outreach" },
  { src: smartFarm, alt: "The Integrated Smart Farm in Ruaka" },
  { src: programSchool, alt: "Keep a Child in School initiative" },
  { src: athena1, alt: "Distributing sanitary towels to learners at Athena School" },
  { src: programSupplies, alt: "School supplies and uniform drive" },
  { src: athena4, alt: "A volunteer talking with a learner during the outreach" },
];

const upcoming = projects.filter((p) => p.status === "Upcoming / Proposed").slice(0, 3);

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slides[index].src}
          alt={slides[index].alt}
          initial={{ opacity: 0, x: 60, scale: 1.06 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -60, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          Keeping Smiles<br />in School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Empowering every child in Kenya with education, love, and the chance to build a brighter future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            <a href="#donate">Donate Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
            <a href="#volunteer">Volunteer</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
            <a href="#partner">Partner With Us</a>
          </Button>
        </motion.div>

        {upcoming.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14"
          >
            <p className="text-accent font-semibold uppercase tracking-wider text-xs mb-4">Upcoming Outreaches</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {upcoming.map((p) => (
                <Link
                  key={p.slug}
                  to="/programs"
                  className="text-left bg-card/80 backdrop-blur border border-border rounded-xl p-4 hover:border-accent transition-colors"
                >
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">{p.title}</h3>
                  {p.date && (
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary shrink-0" /> {p.date}
                    </p>
                  )}
                  <p className="flex items-start gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p.location}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
