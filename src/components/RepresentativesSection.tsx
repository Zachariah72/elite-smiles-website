import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import kevin from "@/assets/kevin-ombui.png";
import rueben from "@/assets/rueben-makana.png";

const reps = [
  {
    name: "Kevin Ombui",
    role: "Head, Kisii County",
    photo: kevin,
    county: "Kisii County",
  },
  {
    name: "Rueben Makana",
    role: "Deputy, Kisii County",
    photo: rueben,
    county: "Kisii County",
  },
];

const RepresentativesSection = () => (
  <section id="representatives" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Regional Leadership</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Kisii County Representatives</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Our regional leads help extend Mabawa Uplift's programs, partnerships, and outreach across Kisii County.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {reps.map((rep, i) => (
          <motion.div
            key={rep.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-background rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center border border-border"
          >
            <img
              src={rep.photo}
              alt={`${rep.name}, ${rep.role} at Mabawa Uplift Foundation`}
              className="w-28 h-28 rounded-full mx-auto mb-5 object-cover object-top border-2 border-primary/40"
              loading="lazy"
            />
            <h3 className="font-display text-xl font-semibold text-foreground">{rep.name}</h3>
            <p className="text-primary font-medium text-sm mb-2">{rep.role}</p>
            <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{rep.county}, Kenya</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RepresentativesSection;
