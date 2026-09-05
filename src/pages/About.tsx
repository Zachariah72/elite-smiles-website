import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import CTABand from "@/components/CTABand";
import { org, coreValues, foundingMembers } from "@/config/site";

const About = () => (
  <Layout>
    <PageHeader eyebrow="Who We Are" title="About Mabawa Uplift Foundation" subtitle={org.intro} />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">{org.vision}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">{org.mission}</p>
        </div>
        <div className="md:col-span-2 bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">{org.about}</p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Founding members: {foundingMembers.join(", ")}.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <TeamSection />
    <CTABand />
  </Layout>
);

export default About;
