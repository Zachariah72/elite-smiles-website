import { Link } from "react-router-dom";
import { Instagram, Music2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { org, contact, socials } from "@/config/site";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Impact", to: "/impact" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Donate", to: "/donate" },
  { label: "Contact", to: "/contact" },
];

const policyLinks = [
  { label: "Governance", to: "/governance" },
  { label: "Transparency", to: "/transparency" },
  { label: "Safeguarding", to: "/safeguarding" },
  { label: "Mental Health", to: "/mental-health" },
];

const Footer = () => (
  <footer className="bg-card pt-16 pb-8 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt={`${org.name} logo`} className="h-11 w-11 object-contain" loading="lazy" />
            <span className="font-display font-bold text-lg text-foreground leading-tight">
              Mabawa Uplift<span className="block text-xs font-body font-normal text-primary">{org.motto}</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A youth-led Kenyan organization empowering young people, supporting education, advancing mental wellness and strengthening communities.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${s.label} ${s.handle}`}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {s.icon === "instagram" ? <Instagram className="w-4 h-4" /> : <Music2 className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display font-semibold text-foreground mb-4 text-base">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display font-semibold text-foreground mb-4 text-base">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li><a className="flex items-start gap-2 text-muted-foreground hover:text-primary" href={`mailto:${contact.email}`}><Mail className="w-4 h-4 mt-0.5 shrink-0" />{contact.email}</a></li>
            <li><a className="flex items-center gap-2 text-muted-foreground hover:text-primary" href={contact.phoneHref}><Phone className="w-4 h-4 shrink-0" />{contact.phone}</a></li>
            <li className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4 shrink-0" />{contact.location}</li>
          </ul>
          <ul className="mt-5 space-y-2">
            {policyLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display font-semibold text-foreground mb-4 text-base">Newsletter</h2>
          <p className="text-muted-foreground text-sm mb-3">Get outreach updates and stories from the communities we serve.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <Input id="newsletter-email" type="email" placeholder="Your email" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
            <Button size="sm" className="gradient-warm shrink-0 text-primary-foreground">Subscribe</Button>
          </form>
          <Button asChild className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/donate">Support Our Work</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© 2026 {org.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/transparency" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/transparency" className="hover:text-primary">Terms</Link>
          <Link to="/safeguarding" className="hover:text-primary">Safeguarding</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
