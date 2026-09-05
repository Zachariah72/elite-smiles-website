import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";
import TransparencySection from "@/components/TransparencySection";
import CTABand from "@/components/CTABand";
import { impactStats, impactAreas, impactTimeline } from "@/config/site";

const Impact = () => (
  <Layout>
    <PageHeader
      eyebrow="Our Impact"
      title="Impact & Accountability"
      subtitle="We publish only verified figures. Reporting grows with every outreach we complete."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-7 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                {"prefix" in s && s.prefix ? s.prefix : ""}
                {s.value.toLocaleString()}
                {s.suffix}
              </p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Where We Measure Impact</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {impactAreas.map((a) => (
            <div key={a.label} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-display font-semibold text-foreground mb-1">{a.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.note}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Our Journey</h2>
        <ol className="relative border-l border-border ml-3 space-y-8">
          {impactTimeline.map((t) => (
            <li key={t.title} className="pl-6">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t.date}</p>
              <h3 className="font-display text-lg font-semibold text-foreground mt-1">{t.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <GallerySection />
    <TransparencySection />
    <CTABand />
  </Layout>
);

export default Impact;
