import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Because of Mabawa Uplift, I can go to school every day. I want to be a doctor and help my community. Thank you for believing in me!",
    name: "Faith M.",
    role: "Student Beneficiary",
  },
  {
    quote: "I couldn't afford school fees for my daughter. Elite Smiles came like a miracle. Now she's top of her class and dreaming big.",
    name: "Mary W.",
    role: "Parent",
  },
  {
    quote: "Volunteering with Elite Smiles changed my life. Seeing children's faces light up when they receive school supplies is unforgettable.",
    name: "James K.",
    role: "Volunteer",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Stories of Hope</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-card relative border border-border"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-primary text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
