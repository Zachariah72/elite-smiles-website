import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, BarChart3 } from "lucide-react";

const TransparencySection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Accountability</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Transparency & Reports</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: "100% Transparent", desc: "Every donation is tracked and reported. We believe in full accountability." },
          { icon: BarChart3, title: "Impact Reports", desc: "Quarterly reports detailing how funds are utilized and the lives changed." },
          { icon: FileText, title: "Annual Report", desc: "Download our comprehensive annual report for a complete overview." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card text-center"
          >
            <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg">
          <FileText className="w-4 h-4 mr-2" />
          Download Annual Report
        </Button>
      </div>
    </div>
  </section>
);

export default TransparencySection;
