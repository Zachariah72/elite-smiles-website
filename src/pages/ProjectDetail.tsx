import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { ContentStatus, Section, imageFor } from "@/features/platform/Shared";
import { details, useContent } from "@/features/platform/data";
import { featuredProjects } from "@/config/site";
import SmartFarmSection from "@/components/SmartFarmSection";

const ProjectDetail = () => {
  const { slug } = useParams();
  const query = useContent("project");
  const published = query.data?.find((item) => item.slug === slug);
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!published && !project) return <Layout><PageHeader title={query.isLoading ? "Loading project…" : "Project unavailable"} subtitle="Only published and verified project information appears here." /><Section title="Our Projects"><ContentStatus loading={query.isLoading} error={query.error} /><Button asChild><Link to="/projects">Browse Projects</Link></Button></Section></Layout>;

  if (project?.slug === "integrated-smart-farm" && !published) return <Layout><SmartFarmSection /><CTABand title="Help this project grow" actions={[{ label: "Partner With Us", to: "/partnerships#partner-form" }, { label: "Support Our Work", to: "/donate", variant: "accent" }]} /></Layout>;

  const title = published?.title ?? project?.title ?? "Project details";
  const status = published ? details(published).stage || "Status to be confirmed" : project?.status;
  const body = published?.body || published?.excerpt || project?.description || "";

  return (
    <Layout>
      <PageHeader eyebrow={status} title={title} subtitle={published?.excerpt || project?.description} />
      <Section title="Project overview">
        <ContentStatus loading={query.isLoading} error={query.error} />
        {published && imageFor(published) && <img src={imageFor(published)} alt={published.title} className="mb-8 aspect-[16/8] w-full object-cover" />}
        <p className="max-w-3xl whitespace-pre-line leading-relaxed text-muted-foreground">{body}</p>
        {published && details(published).location && <p className="mt-5 text-sm font-semibold text-foreground">Location: {details(published).location}</p>}
        {published && details(published).impact && <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{details(published).impact}</p>}
      </Section>
      <Section title="Work with Mabawa" tone>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">Contact Mabawa to discuss a partnership or support pathway. Project support is recorded as an expression of interest; it is not a payment.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/partnerships#partner-form">Discuss a Partnership</Link></Button><Button asChild variant="outline"><Link to="/donate?project={encodeURIComponent(slug ?? "")}">Support this project</Link></Button></div>
      </Section>
    </Layout>
  );
};

export default ProjectDetail;