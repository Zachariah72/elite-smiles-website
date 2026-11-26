import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/ProjectsSection";
import CTABand from "@/components/CTABand";
import { org } from "@/config/site";

const Projects = () => (
  <Layout>
    <PageHeader
      eyebrow="Our Projects"
      title="Long-term Projects"
      subtitle={`${org.name} shares the status of each initiative clearly, distinguishing project concepts from work under development.`}
    />
    <ProjectsSection />
    <CTABand title="Build a project with us" actions={[{ label: "Partner With Us", to: "/partnerships#partner-form" }, { label: "Support Our Work", to: "/donate", variant: "accent" }]} />
  </Layout>
);

export default Projects;
