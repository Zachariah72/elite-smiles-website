import { Cpu, Droplets, Fish, Sprout, Sun, Users } from "lucide-react";
import farmAsset from "@/assets/smart-farm.jpg";
import { featuredProjects } from "@/config/site";

const pillars = [
  { icon: Fish, title: "Livestock and aquaculture", desc: "Integrated livestock and fish production are part of the planned farm model." },
  { icon: Sprout, title: "Seedling production", desc: "Seedling production is planned as part of the farm’s learning and conservation work." },
  { icon: Sun, title: "Renewable energy", desc: "Renewable energy is one of the proposed elements of the climate-smart site." },
  { icon: Droplets, title: "Water conservation", desc: "Water conservation is central to the farm’s sustainable design." },
  { icon: Cpu, title: "AI-assisted learning", desc: "Innovative technology is intended to support monitoring and learning as the project develops." },
  { icon: Users, title: "Youth learning hub", desc: "The project is designed as a demonstration and learning hub for young people and communities." },
];

const SmartFarmSection = () => {
  const farm = featuredProjects[1];

  return (
    <section id="smart-farm" className="bg-background py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold text-accent">Youth empowerment · {farm.status}</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">Integrated Smart Farm</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{farm.description} The vision is to support resilient livelihoods, biodiversity, responsible resource management and food security.</p>
            <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">{farm.acknowledgement}</p>
            <p className="mt-5 text-sm font-semibold text-foreground">Location: {farm.location}</p>
          </div>
          <figure>
            <img src={farmAsset} alt="The Ruaka farm site for Mabawa’s Integrated Smart Farm project" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="mt-3 text-xs text-muted-foreground">The farm project is under construction.</figcaption>
          </figure>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="font-display text-xl font-bold text-foreground">Planned elements</h3>
          <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="border-l-2 border-primary pl-4">
                <Icon aria-hidden="true" className="mb-3 h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFarmSection;