import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/config/site";
import farmImage from "@/assets/smart-farm.jpg";

const ProjectsSection = () => {
  const greenProject = featuredProjects[0];
  const farmProject = featuredProjects[1];

  return (
    <section id="projects" className="border-y border-border bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold text-accent">Featured initiatives</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">Ideas with room to grow</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Each initiative is labelled by its current status. Updates will be added as verified milestones become available.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <article className="border-t-2 border-accent pt-6">
            <div className="flex items-center gap-3 text-accent"><Leaf className="h-5 w-5" /><p className="text-sm font-bold">{greenProject.status}</p></div>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{greenProject.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{greenProject.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-primary">
              <li>Plastic recovery</li><li>Recycling and upcycling</li><li>Community climate action</li>
            </ul>
            <Button asChild variant="link" className="mt-4 h-auto px-0 text-primary">
              <Link to={`/projects/${greenProject.slug}`}>Explore Project Green Kenya<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </article>

          <article className="grid gap-6 border-t-2 border-primary pt-6 sm:grid-cols-[0.9fr_1.1fr]">
            <img src={farmImage} alt="Farm site at Ruaka for the Integrated Smart Farm, which is under construction" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div>
              <p className="text-sm font-bold text-primary">{farmProject.status}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{farmProject.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{farmProject.description}</p>
              <Button asChild variant="link" className="mt-3 h-auto px-0 text-primary">
                <Link to={`/projects/${farmProject.slug}`}>View Farm Project<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;