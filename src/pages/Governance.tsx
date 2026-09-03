import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import RepresentativesSection from "@/components/RepresentativesSection";
import { org, documents, leadership } from "@/config/site";
import { FileText, Users, Scale } from "lucide-react";

const Governance = () => (
  <Layout>
    <PageHeader
      eyebrow="Accountability & Structure"
      title="Governance"
      subtitle={`How ${org.name} is organized, led, and held accountable to the communities we serve.`}
    />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our leadership is youth-led, volunteer-driven, and committed to transparent stewardship of every resource entrusted to us.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {leadership.map((person) => (
                  <div key={person.name} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{person.name}</p>
                      <p className="text-muted-foreground text-xs">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Governance Documents</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are working to publish our constitution, policies, reports, and safeguarding documents here as they are finalized.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {documents.map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href || undefined}
                    className={`bg-card border border-border rounded-lg p-4 flex items-start gap-3 transition-colors ${doc.href ? "hover:border-primary/50" : "opacity-70 cursor-not-allowed"}`}
                    aria-disabled={!doc.href}
                  >
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{doc.title}</p>
                      <p className="text-muted-foreground text-xs mt-1">{doc.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Scale className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Commitment to Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe good governance means open decision-making, clear roles, regular reporting, and listening to the communities we serve. If you have questions about our structure or policies, please contact us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Our Values</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Compassion & dignity for all</li>
                <li>Integrity in every decision</li>
                <li>Inclusivity regardless of background</li>
                <li>Accountability for resources</li>
                <li>Sustainable, youth-driven impact</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <RepresentativesSection />
  </Layout>
);

export default Governance;
