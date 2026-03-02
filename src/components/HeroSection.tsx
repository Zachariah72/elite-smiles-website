import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-children.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Smiling Kenyan school children" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
      >
        Keeping Smiles<br />in School
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
      >
        Empowering every child in Kenya with education, love, and the chance to build a brighter future.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button asChild size="lg" className="gradient-warm shadow-warm text-lg px-8">
          <a href="#donate">Donate Now</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
          <a href="#volunteer">Volunteer</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
          <a href="#partner">Partner With Us</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
