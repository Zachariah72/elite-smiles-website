import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Mabawa Uplift Foundation logo" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-lg text-foreground">Mabawa Uplift</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          {user ? (
            <>
              <Button size="sm" variant="outline" onClick={() => navigate("/membership-card")} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <CreditCard className="h-4 w-4 mr-1" /> My Card
              </Button>
              <Button size="sm" variant="ghost" onClick={signOut} className="text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4 mr-1" /> Sign Out
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={() => navigate("/auth")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <LogIn className="h-4 w-4 mr-1" /> Join / Login
            </Button>
          )}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#donate">Donate Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          {user ? (
            <>
              <button onClick={() => { setOpen(false); navigate("/membership-card"); }} className="block w-full text-left py-2 text-sm font-medium text-primary">
                My Card
              </button>
              <button onClick={() => { setOpen(false); signOut(); }} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground">
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => { setOpen(false); navigate("/auth"); }} className="block w-full text-left py-2 text-sm font-medium text-primary">
              Join / Login
            </button>
          )}
          <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#donate" onClick={() => setOpen(false)}>Donate Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
