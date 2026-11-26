import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ContentStatus, Section } from "@/features/platform/Shared";
import { useContent } from "@/features/platform/data";
import { focusAreas } from "@/config/site";

const ProgramDetail = () => {
  const { slug } = useParams();
  const query = useContent("program");
  const published = query.data?.find((item) => item.slug === slug);
  const area = focusAreas.find((item) => item.slug === slug);
  const title = published?.title ?? area?.title;

  if (!title) return <Layout><PageHeader title={query.isLoading ? "Loading program…" : "Program unavailable"} subtitle="Program details are published as they are confirmed." /><Section title="Our Programs"><ContentStatus loading={query.isLoading} error={query.error} /><Button asChild><Link to="/programs">Browse Programs</Link></Button></Section></Layout>;

  return (
    <Layout>
      <PageHeader eyebrow="Our Programs" title={title} subtitle={published?.excerpt ?? area?.desc} />
      <Section title="Program overview">
        <ContentStatus loading={query.isLoading} error={query.error} />
        <div className="max-w-3xl space-y-5 text-muted-foreground">
          {published?.body ? <p className="whitespace-pre-line leading-relaxed">{published.body}</p> : <p className="leading-relaxed">This is one of Mabawa Uplift Foundation’s areas of work. Specific activities, dates and outcomes are shared when verified and approved.</p>}
          {published?.status && <p className="text-sm font-semibold text-primary">Publication status: {published.status}</p>}
        </div>
      </Section>
      <Section title="Ways to participate" tone>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">Share your skills, volunteer or discuss a collaboration with Mabawa. Participation details are reviewed individually.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><Link to="/get-involved#volunteer">Volunteer<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          <Button asChild variant="outline"><Link to="/partnerships#partner-form">Explore a Partnership</Link></Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ProgramDetail;