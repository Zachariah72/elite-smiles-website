import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HandHeart, Users, Handshake, GraduationCap } from "lucide-react";

const ways = [
  {
    icon: Users,
    title: "Volunteer With Us",
    desc: "Join outreach days, mentorship sessions, clean-ups and school visits. We onboard volunteers for every activity we run.",
    to: "/register",
    cta: "Join the Movement",
  },
  {
    icon: HandHeart,
    title: "Support Community Action",
    desc: "Fund sanitary towels, learning materials, transport and outreach logistics. Every contribution is recorded and reported.",
    to: "/donate",
    cta: "Give Wings to Hope",
  },
  {
    icon: Handshake,
    title: "Partner With Mabawa",
    desc: "Schools, companies, county offices and fellow organisations can co-deliver programs with us.",
    to: "/partnerships",
    cta: "Partner With Us",
  },
  {
    icon: GraduationCap,
    title: "Become a Member",
    desc: "Members receive a Mabawa membership card, take part in decisions and lead activities in their own counties.",
    to: "/register",
    cta: "Become a Member",
  },
];

const GetInvolved = () => (
  <Layout>
    <PageHeader
      eyebrow="Get Involved"
      title="There is a place for you at Mabawa"
      subtitle="Volunteer, give, partner or become a member — every role moves a community forward."
    />
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 gap-6">
        {ways.map(({ icon: Icon, ...w }) => (
          <article key={w.title} className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">{w.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{w.desc}</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={w.to}>{w.cta}</Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
    <CTABand />
  </Layout>
);

export default GetInvolved;
