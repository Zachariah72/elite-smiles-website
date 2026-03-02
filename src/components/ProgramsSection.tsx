import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import programSchool from "@/assets/program-school.jpg";
import programSupplies from "@/assets/program-supplies.jpg";
import programOutreach from "@/assets/program-outreach.jpg";

const programs = [
  {
    title: "Keep a Child in School Initiative",
    desc: "We sponsor school fees, provide mentorship, and ensure children stay enrolled through their education journey.",
    img: programSchool,
  },
  {
    title: "School Supplies & Uniform Drive",
    desc: "From books to uniforms, we equip students with everything they need to learn comfortably and confidently.",
    img: programSupplies,
  },
  {
    title: "Community Smile Outreach",
    desc: "We visit communities to share love, provide essentials, and create moments of joy for children and families.",
    img: programOutreach,
  },
];

const ProgramsSection = () => (
  <section id="programs" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">What We Do</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Programs</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
          >
            <div className="overflow-hidden h-56">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
