import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProgramsSection from "@/components/ProgramsSection";
import { org, projects } from "@/config/site";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const Programs = () => (
  <Layout>
    <PageHeader
      eyebrow="What We Do"
      title="Our Programs"
      subtitle={`Ongoing and upcoming outreach programs run by ${org.name} across Kenyan communities.`}
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Upcoming Outreach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Outreach Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Community health and school outreach programs planned in the months ahead. Everyone is welcome to join,
            volunteer, or support with in-kind donations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-shadow"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {p.status}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{p.title}</h3>

              <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p.location}
                </li>
                {p.date && (
                  <li className="flex items-start gap-2">
                    <CalendarDays className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p.date}
                  </li>
                )}
                {p.time && (
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p.time}
                  </li>
                )}
                {p.target && (
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p.target}
                  </li>
                )}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.activities.map((a) => (
                  <span key={a} className="text-xs bg-background border border-border rounded-full px-3 py-1 text-foreground/85">
                    {a}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <ProgramsSection />
  </Layout>
);

export default Programs;
