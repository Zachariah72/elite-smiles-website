import { motion } from "framer-motion";

type Props = { eyebrow?: string; title: string; subtitle?: string };

const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 border-b border-border overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.14]"
      style={{ background: "radial-gradient(60% 80% at 20% 0%, hsl(var(--primary)) 0%, transparent 60%), radial-gradient(50% 70% at 90% 10%, hsl(var(--accent)) 0%, transparent 60%)" }}
    />
    <div className="container mx-auto px-4 relative">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
        {eyebrow && <p className="text-primary font-semibold uppercase tracking-wider text-xs md:text-sm mb-3">{eyebrow}</p>}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">{subtitle}</p>}
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
