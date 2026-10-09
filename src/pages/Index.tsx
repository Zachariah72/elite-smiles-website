import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import CTABand from "@/components/CTABand";
import { Section, Metrics, StoryCards } from "@/features/platform/Shared";
import { useContent } from "@/features/platform/data";
import Footer from "@/components/Footer";

const Index = () => { const stories=useContent("story"); return (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Section title="Our Impact"><Metrics /></Section>
    <ProgramsSection />
    <TeamSection />
    <GallerySection />
    <PartnersSection />
    <Section title="News & Stories"><StoryCards items={stories.data??[]} /></Section>
    <CTABand />
    <Footer />
  </>
);};

export default Index;
