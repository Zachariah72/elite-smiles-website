import { Link } from "react-router-dom";
import { Instagram, Music2, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Subscribe } from "@/features/platform/Shared";
import logo from "@/assets/logo.png";
import { org, contact, socials } from "@/config/site";

const quickLinks = [
  { label: "About Mabawa", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Our Impact", to: "/impact" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "News & Stories", to: "/news" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
];

const policyLinks = [
  { label: "Governance", to: "/governance" },
  { label: "Transparency", to: "/transparency" },
  { label: "Safeguarding", to: "/safeguarding" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card pt-14 pb-7">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 pb-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link to="/" aria-label={`${org.name} home`} className="mb-5 inline-flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
            <span className="font-display text-base font-extrabold leading-tight text-foreground">Mabawa Uplift Foundation<span className="mt-1 block font-body text-xs font-medium text-primary">{org.motto}</span></span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A youth-led Kenyan organization working to uplift communities and create meaningful opportunities.</p>
          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={`${social.label} ${social.handle}`} className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {social.icon === "instagram" ? <Instagram className="h-4 w-4" /> : <Music2 className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 font-display text-base font-bold text-foreground">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {quickLinks.map((link) => <li key={link.to}><Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link></li>)}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-display text-base font-bold text-foreground">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li><a className="flex items-start gap-3 break-all text-muted-foreground hover:text-primary" href={`mailto:${contact.email}`}><Mail className="mt-0.5 h-4 w-4 shrink-0" />{contact.email}</a></li>
            <li><a className="flex items-center gap-3 text-muted-foreground hover:text-primary" href={contact.phoneHref}><Phone className="h-4 w-4 shrink-0" />{contact.phone}</a></li>
            <li className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4 shrink-0" />{contact.location}</li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {policyLinks.map((link) => <li key={link.to}><Link to={link.to} className="text-xs text-muted-foreground hover:text-primary">{link.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 font-display text-base font-bold text-foreground">Stay connected</h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">Receive updates when verified Mabawa stories and opportunities are published.</p>
          <Subscribe />
          <Button asChild className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/donate">Support Our Work<ArrowUpRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {org.name}. All rights reserved.</p>
        <Link to="/partnerships" className="font-semibold text-primary hover:underline">Partner with Mabawa</Link>
      </div>
    </div>
  </footer>
);

export default Footer;