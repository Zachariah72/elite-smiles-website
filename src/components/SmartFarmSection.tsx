import { motion } from "framer-motion";
import { Cpu, Droplets, Fish, Sprout, Sun, Users } from "lucide-react";
import farmAsset from "@/assets/smart-farm.jpg.asset.json";

const pillars = [
  { icon: Fish, title: "Livestock & Aquaculture", desc: "Integrated piggery and fish production sharing water, feed and waste streams." },
  { icon: Sprout, title: "Seedling Production", desc: "Tree and crop nurseries supplying communities and reforestation drives." },
  { icon: Sun, title: "Renewable Energy", desc: "Solar-powered pumps, lighting and monitoring across the farm." },
  { icon: Droplets, title: "Water Conservation", desc: "Rainwater harvesting, recirculation and drip irrigation to cut waste." },
  { icon: Cpu, title: "AI-Assisted Monitoring", desc: "Sensors and smart tools guiding feeding, water quality and crop health." },
  { icon: Users, title: "Youth Learning Hub", desc: "Hands-on training in climate-smart agriculture and agribusiness." },
];

const SmartFarmSection = () => (
  <section id="smart-farm" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Youth Empowerment · Under Construction</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Integrated Smart Farm</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
          A climate-smart agriculture initiative combining livestock, aquaculture, seedling production, renewable energy,
          water conservation and innovative technology — designed as a sustainable, AI-assisted demonstration and learning
          hub where modern farming practices, circular resource use and environmental conservation create resilient
          livelihoods for young people and communities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden border border-border shadow-card mb-12"
      >
        <img
          src={farmAsset.url}
          alt="Integrated smart farm at Ruaka with livestock pens, aquaculture ponds and seedling beds"
          className="w-full h-64 md:h-[420px] object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="bg-background rounded-xl p-6 border border-border text-center">
          <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-1">Location</p>
          <p className="text-foreground font-medium">Ruaka, Kiambu County</p>
        </div>
        <div className="bg-background rounded-xl p-6 border border-border text-center">
          <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-1">Land Donation</p>
          <p className="text-foreground font-medium">Humbly donated by Ronald Nyakwara</p>
        </div>
      </div>
    </div>
  </section>
);

export default SmartFarmSection;
