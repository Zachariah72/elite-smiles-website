import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Rocket, HeartHandshake, Stethoscope, Leaf } from "lucide-react";
import { focusAreas } from "@/config/site";

const icons: Record<string, typeof Brain> = {
  brain: Brain,
  book: BookOpen,
  rocket: Rocket,
  handshake: HeartHandshake,
  stethoscope: Stethoscope,
  leaf: Leaf,
};

const ProgramsSection = () => (
  <section id="programs" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">What We Do</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Focus Areas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Six areas guide every outreach, project and partnership we take on.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((f, i) => {
          const Icon = icons[f.icon] ?? HeartHandshake;
          return (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/get-involved">Get Involved</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
