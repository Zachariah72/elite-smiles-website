import { motion } from "framer-motion";
import m5Logo from "@/assets/m5-logo.png";

const PartnersSection = () => (
  <section id="partners" className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Partners</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Working Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          We partner with organizations that share our commitment to dignity, health and opportunity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-card text-center"
      >
        <img
          src={m5Logo}
          alt="Marvel Five Investments Ltd (M5) logo"
          className="h-16 mx-auto object-contain bg-white rounded-lg p-2 mb-5"
          loading="lazy"
        />
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">Marvel Five Investments Ltd (M5)</h3>
        <p className="text-muted-foreground leading-relaxed">
          Partnered with us on the Athena School Endometriosis Awareness Outreach on 29 April, supplying Marvel Girl
          sanitary towels that were distributed to learners alongside menstrual and reproductive health education.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PartnersSection;
