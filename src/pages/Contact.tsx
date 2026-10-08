import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EngagementForm from "@/features/platform/EngagementForm";
import { Section } from "@/features/platform/Shared";
import CTABand from "@/components/CTABand";
import { contact, socials } from "@/config/site";
import { Mail, Phone, MapPin, Instagram, Music2 } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHeader
      eyebrow="Contact"
      title="Talk to Mabawa Uplift Foundation"
      subtitle="Questions, partnership ideas, volunteering or media — we would love to hear from you."
    />

    <section className="py-14 bg-background">
      <div className="container mx-auto px-4 grid sm:grid-cols-3 gap-6">
        <a href={`mailto:${contact.email}`} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:border-primary transition-colors">
          <Mail className="h-6 w-6 text-primary mb-3" />
          <h2 className="font-display font-semibold text-foreground mb-1">Email</h2>
          <p className="text-muted-foreground text-sm break-all">{contact.email}</p>
        </a>
        <a href={contact.phoneHref} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:border-primary transition-colors">
          <Phone className="h-6 w-6 text-accent mb-3" />
          <h2 className="font-display font-semibold text-foreground mb-1">Phone</h2>
          <p className="text-muted-foreground text-sm">{contact.phone}</p>
        </a>
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
          <MapPin className="h-6 w-6 text-primary mb-3" />
          <h2 className="font-display font-semibold text-foreground mb-1">Location</h2>
          <p className="text-muted-foreground text-sm">{contact.location}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6 flex gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${s.label} ${s.handle}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {s.icon === "instagram" ? <Instagram className="h-4 w-4" /> : <Music2 className="h-4 w-4" />} {s.handle}
          </a>
        ))}
      </div>
    </section>

    <Section title="Send a Message"><div className="max-w-4xl"><EngagementForm kind="contact" cta="Send Message" /></div></Section>
    <CTABand />
  </Layout>
);

export default Contact;
