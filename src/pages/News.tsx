import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { projects } from "@/config/site";
import { CalendarDays, MapPin } from "lucide-react";
import athena2 from "@/assets/athena-2.jpg";
import athena5 from "@/assets/athena-5.jpg";
import smartFarm from "@/assets/smart-farm.jpg";

const stories = [
  {
    img: athena2,
    date: "29 April 2026",
    title: "Endometriosis Awareness Outreach at Athena School",
    body: "Together with Marvel Five Investments, we held an endometriosis and menstrual health awareness session in Thika, Kiambu County, and distributed Marvel Girl sanitary towels to learners.",
  },
  {
    img: athena5,
    date: "29 April 2026",
    title: "Dignity Packs for Learners",
    body: "Learners received sanitary towels alongside guidance on menstrual health, so that no girl misses class because of her period.",
  },
  {
    img: smartFarm,
    date: "Ongoing",
    title: "Integrated Smart Farm Takes Shape in Ruaka",
    body: "Our climate-smart demonstration farm — livestock, aquaculture, seedlings, renewable energy and water conservation — continues to grow as a learning hub for young people.",
  },
];

const upcoming = projects.filter((p) => p.status === "Upcoming / Proposed");

const News = () => (
  <Layout>
    <PageHeader
      eyebrow="News & Stories"
      title="What is happening at Mabawa"
      subtitle="Updates from our outreaches, projects and the communities we walk with."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {stories.map((s) => (
          <article key={s.title} className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <img src={s.img} alt={s.title} loading="lazy" className="w-full h-52 object-cover" />
            <div className="p-6">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">{s.date}</p>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    {upcoming.length > 0 && (
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Coming Up Next</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((p) => (
              <article key={p.slug} className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">{p.title}</h3>
                {p.date && (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 text-primary shrink-0" /> {p.date}
                  </p>
                )}
                <p className="flex items-start gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {p.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )}

    <CTABand />
  </Layout>
);

export default News;
