import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PartnersSection from "@/components/PartnersSection";
import CTABand from "@/components/CTABand";
import { contact } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Building2, School, HeartHandshake, Leaf } from "lucide-react";

const areas = [
  { icon: School, title: "Schools & Institutions", desc: "Host outreaches, mental health talks, menstrual health sessions and environmental clubs." },
  { icon: Building2, title: "Corporate Partners", desc: "Sponsor an outreach, donate products or support youth skills and green enterprise work." },
  { icon: HeartHandshake, title: "Community Organisations", desc: "Co-deliver programs, share volunteers and reach more households together." },
  { icon: Leaf, title: "Environmental Allies", desc: "Work with Project Green Kenya on collection, recycling and green skills training." },
];

const Partnerships = () => (
  <Layout>
    <PageHeader
      eyebrow="Partnerships"
      title="Partner With Mabawa"
      subtitle="We build honest, practical partnerships with schools, companies, county offices and community groups across Kenya."
    />
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 gap-6">
        {areas.map(({ icon: Icon, ...a }) => (
          <article key={a.title} className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">{a.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
          </article>
        ))}
      </div>
      <div className="container mx-auto px-4 mt-10 text-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={`mailto:${contact.email}?subject=Partnership%20with%20Mabawa%20Uplift%20Foundation`}>Start a Partnership Conversation</a>
        </Button>
      </div>
    </section>
    <PartnersSection />
    <CTABand />
  </Layout>
);

export default Partnerships;
