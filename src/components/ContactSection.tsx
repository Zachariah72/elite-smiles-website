import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Reach Out</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Contact Us</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
          {[
            { icon: Mail, label: "Email", value: "abigailisika@gmail.com", href: "mailto:abigailisika@gmail.com" },
            { icon: Phone, label: "Phone", value: "+254 724 301 244", href: "tel:+254724301244" },
            { icon: MapPin, label: "Location", value: "Kenya", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 bg-background p-8 rounded-xl shadow-card border border-border" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Your Name" className="bg-muted border-border" />
          <Input placeholder="Email Address" type="email" className="bg-muted border-border" />
          <Input placeholder="Subject" className="bg-muted border-border" />
          <Textarea placeholder="Your Message..." className="bg-muted border-border" rows={4} />
          <Button className="w-full gradient-warm shadow-warm text-primary-foreground">Send Message</Button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
