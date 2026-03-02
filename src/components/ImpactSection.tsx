import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 1200, label: "Children Supported", suffix: "+" },
  { value: 45, label: "Schools Reached", suffix: "" },
  { value: 300, label: "Volunteers", suffix: "+" },
  { value: 5000, label: "Donations Distributed", suffix: "+" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);
  return count;
}

const StatCard = ({ value, label, suffix, inView }: { value: number; label: string; suffix: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-accent">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={ref} className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Our Impact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Making a Difference</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
