import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/ProjectsSection";
import SmartFarmSection from "@/components/SmartFarmSection";
import { org } from "@/config/site";

const Projects = () => (
  <Layout>
    <PageHeader
      eyebrow="Our Projects"
      title="Long-term Projects"
      subtitle={`Flagship initiatives ${org.name} is building for lasting community impact — environment, education, heritage, and climate-smart agriculture.`}
    />
    <ProjectsSection />
    <SmartFarmSection />
  </Layout>
);

export default Projects;
