import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Smartphone, Globe, Handshake } from "lucide-react";

const GetInvolvedSection = () => (
  <>
    {/* Donate */}
    <section id="donate" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
          <p className="text-primary-foreground/80 font-semibold uppercase tracking-wider text-sm mb-3">Make a Difference</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Donate Today</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Your donation keeps a child in school. Every shilling counts towards a brighter future.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: Smartphone, label: "M-Pesa" },
              { icon: CreditCard, label: "Card" },
              { icon: Globe, label: "PayPal" },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 rounded-xl py-4 px-3 text-primary-foreground transition-colors flex flex-col items-center gap-2">
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {[500, 1000, 2500, 5000].map((amount) => (
              <Button key={amount} variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                KES {amount.toLocaleString()}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Volunteer */}
    <section id="volunteer" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Get Involved</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Volunteer With Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Join our passionate community of volunteers. Whether you can spare a day or a month, your time creates lasting impact in children's lives.
            </p>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 bg-card p-8 rounded-xl shadow-card" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Full Name" className="bg-muted" />
            <Input placeholder="Email Address" type="email" className="bg-muted" />
            <Input placeholder="Phone Number" className="bg-muted" />
            <Textarea placeholder="Tell us why you'd like to volunteer..." className="bg-muted" rows={3} />
            <Button className="w-full gradient-warm shadow-warm">Submit Application</Button>
          </motion.form>
        </div>
      </div>
    </section>

    {/* Partner */}
    <section id="partner" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Handshake className="w-14 h-14 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Corporate Partnerships</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Partner with Elite Smiles to create shared value. We offer sponsorship packages, CSR programs, and collaborative opportunities that make a real difference.
          </p>
          <Button size="lg" className="gradient-warm shadow-warm">
            <a href="mailto:abigailisika@gmail.com">Become a Partner</a>
          </Button>
        </motion.div>
      </div>
    </section>
  </>
);

export default GetInvolvedSection;
