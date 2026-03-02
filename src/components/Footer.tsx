import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-display font-bold text-lg">Elite Smiles</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Keeping every child in school. Sharing love and smiles across Kenya and beyond.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Programs", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-primary-foreground/60 hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Get Involved</h4>
          <div className="space-y-2">
            {["Donate", "Volunteer", "Partner With Us"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "")}`} className="block text-primary-foreground/60 hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Newsletter</h4>
          <p className="text-primary-foreground/60 text-sm mb-3">Stay updated on our impact.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <Input placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            <Button size="sm" className="gradient-warm shrink-0">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} Elite Smiles Charity Organization. All rights reserved.</p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
