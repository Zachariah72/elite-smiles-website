import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import abigail from "@/assets/abigail-isika.jpg";
import zachariah from "@/assets/zachariah-manani.png";

const team = [
  {
    name: "Abigail Isika Ndanu",
    role: "Team Lead",
    photo: abigail,
    bio: "A passionate advocate for children's education, Abigail founded Mabawa Uplift with a vision to ensure no child is left behind.",
  },
  {
    name: "Zachariah Manani",
    role: "Assistant Lead",
    photo: zachariah,
    bio: "Zachariah brings strategic leadership and a deep commitment to community empowerment, driving our programs forward.",
  },
  {
    name: "Christine Mbanda",
    role: "Operations & Support",
    bio: "Christine ensures every outreach runs smoothly, bringing warmth and efficiency to everything she touches.",
  },
];

const TeamSection = () => (
  <section id="team" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Leadership</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Meet Our Team</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center border border-border"
          >
            {t.photo ? (
              <img
                src={t.photo}
                alt={`${t.name}, ${t.role} at Mabawa Uplift Foundation`}
                className="w-24 h-24 rounded-full mx-auto mb-5 object-cover object-top border-2 border-primary/40"
                loading="lazy"
              />
            ) : (
              <div className="w-24 h-24 rounded-full gradient-warm mx-auto mb-5 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-primary-foreground">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
            )}
            <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
            <p className="text-primary font-medium text-sm mb-3">{t.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.bio}</p>
            <div className="flex justify-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
