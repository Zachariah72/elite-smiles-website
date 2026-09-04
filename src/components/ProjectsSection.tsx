import { motion } from "framer-motion";
import { Recycle, Users, Target, CalendarDays, Leaf } from "lucide-react";

const stats = [
  { icon: CalendarDays, value: "12", label: "Month Program" },
  { icon: Users, value: "100+", label: "Youth Engaged" },
  { icon: Target, value: "5", label: "Schools Targeted" },
];

const pillars = [
  { title: "Environment", desc: "Cleaner streets, healthier communities." },
  { title: "Youth", desc: "Skills, jobs, leadership and purpose." },
  { title: "Circular Economy", desc: "Reducing waste, creating value, sustaining lives." },
];

const stages = [
  { n: "1", title: "Mobilise", desc: "Recruit community volunteers and youth teams for collection drives." },
  { n: "2", title: "Collect", desc: "Street sweeps, estate drives and school campaigns across target areas." },
  { n: "3", title: "Sort & Clean", desc: "Separate, wash and grade plastics by type at the storage hub." },
  { n: "4", title: "Create", desc: "Youth artists craft upcycled art pieces, sculptures and products." },
  { n: "5", title: "Sell & Send", desc: "Art sold at markets; bulk plastic sent to refining companies." },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Project 01 · Environment</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Project Green Kenya</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Plastic collection, community art and environmental impact in Nairobi, Kenya. A community-driven initiative
          that collects plastic waste, transforms it into art, and channels usable material to Kenyan recycling
          companies — while empowering youth and building a greener Kenya.
        </p>
        <p className="mt-4 font-display text-lg text-accent">Collect · Create · Empower · Sustain</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 mb-14">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-card"
            >
              <Icon className="h-6 w-6 text-accent mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-4">
              {p.title === "Circular Economy" ? (
                <Recycle className="h-6 w-6 text-primary-foreground" />
              ) : p.title === "Youth" ? (
                <Users className="h-6 w-6 text-primary-foreground" />
              ) : (
                <Leaf className="h-6 w-6 text-primary-foreground" />
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">How We Work</h3>
      <p className="text-muted-foreground text-center mb-8">A 5-stage circular model</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-5 border border-border"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm mb-3">
              {s.n}
            </span>
            <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
