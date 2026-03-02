import { motion } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const values = [
  { icon: BookOpen, title: "Education First", desc: "We believe every child deserves access to quality education regardless of their background." },
  { icon: Heart, title: "Love & Care", desc: "We share love and smiles, ensuring children feel valued and supported in their journey." },
  { icon: Users, title: "Community", desc: "We work hand-in-hand with local communities to create lasting, sustainable impact." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl mx-auto text-center mb-16">
        <motion.p variants={fadeIn} custom={0} className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">About Us</motion.p>
        <motion.h2 variants={fadeIn} custom={1} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Who We Are
        </motion.h2>
        <motion.p variants={fadeIn} custom={2} className="text-muted-foreground text-lg leading-relaxed">
          Elite Smiles Charity Organization is a Kenyan-based nonprofit dedicated to keeping children in school. Born from witnessing too many bright futures cut short by poverty, lack of supplies, and school dropouts, we took action. Our mission is simple yet powerful: <strong className="text-foreground">keep every child in school</strong> and <strong className="text-foreground">share love and smiles</strong> across Kenya and beyond.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeIn}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center"
          >
            <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
            <p className="text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mt-16 bg-muted rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To ensure every child in Kenya has the opportunity to stay in school, receive essential learning materials, and grow in an environment filled with love and hope.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A Kenya where no child is forced to leave school due to poverty — where every smile represents a future full of possibility.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
