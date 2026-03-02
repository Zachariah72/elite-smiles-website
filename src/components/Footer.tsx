import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => (
  <footer className="bg-card py-16 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-display font-bold text-lg text-foreground">Elite Smiles</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Keeping every child in school. Sharing love and smiles across Kenya and beyond.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Programs", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Get Involved</h4>
          <div className="space-y-2">
            {["Donate", "Volunteer", "Partner With Us"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "")}`} className="block text-muted-foreground hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-3">Stay updated on our impact.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <Input placeholder="Your email" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
            <Button size="sm" className="gradient-warm shrink-0 text-primary-foreground">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Elite Smiles Charity Organization. All rights reserved.</p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
