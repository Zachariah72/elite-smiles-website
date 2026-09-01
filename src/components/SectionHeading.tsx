import { motion } from "framer-motion";

type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" };

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
  >
    {eyebrow && <p className="text-primary font-semibold uppercase tracking-wider text-xs md:text-sm mb-3">{eyebrow}</p>}
    <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-4 leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
