import { motion } from "framer-motion";
import { Recycle, GraduationCap, Landmark } from "lucide-react";

const projects = [
  {
    icon: Recycle,
    title: "Plastic Recycling Initiative",
    tag: "Environment",
    desc: "Collecting, sorting, and recycling plastic waste in Kenyan communities to protect ecosystems, create green jobs, and educate youth on sustainability.",
    points: ["Community collection drives", "Youth-led recycling clubs", "Partnerships with local recyclers"],
  },
  {
    icon: GraduationCap,
    title: "Mabawa Scholars Program",
    tag: "Education",
    desc: "Keeping children in school through fee sponsorship, stationery support, mentorship, and outreach in underserved schools across Kenya.",
    points: ["School fee sponsorship", "Books, uniforms & stationery", "Mentorship & outreach visits"],
  },
  {
    icon: Landmark,
    title: "The Living Archive Initiative",
    tag: "Culture & Heritage",
    desc: "Preserving Kenyan heritage by training youth to digitally document elders' stories, languages, crafts and traditions before they disappear.",
    points: ["Elder–Youth recording bridge", "Digital cultural archive", "Ethical craft marketplace"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Our Projects</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Building Futures Across Kenya
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Three flagship projects working hand-in-hand to uplift communities through environment, education, and cultural heritage.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
