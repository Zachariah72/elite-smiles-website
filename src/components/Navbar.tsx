import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut, CreditCard, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
import { org } from "@/config/site";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Our Projects", to: "/projects" },
  { label: "Impact", to: "/impact" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "News & Stories", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav aria-label="Main navigation" className="container mx-auto flex items-center justify-between h-16 px-4 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={`${org.name} home`}>
          <img src={logo} alt={`${org.name} logo`} className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="font-display font-bold text-base sm:text-lg text-foreground leading-none">
            Mabawa Uplift
            <span className="block text-[10px] font-body font-normal tracking-wide text-primary">{org.motto}</span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-2">
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
            <Button size="sm" variant="ghost" onClick={() => navigate("/auth")} className="text-muted-foreground hover:text-foreground">
              <LogIn className="h-4 w-4 mr-1" /> Join / Login
            </Button>
          )}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/donate"><Heart className="h-4 w-4 mr-1" /> Donate</Link>
          </Button>
        </div>

        <button
          className="xl:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="xl:hidden bg-background border-b border-border px-4 pb-5 pt-1 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => `block py-2.5 text-sm font-medium border-b border-border/50 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/governance" className="block py-2.5 text-sm font-medium text-muted-foreground border-b border-border/50">Governance</Link>
          {user ? (
            <>
              <Link to="/membership-card" className="block py-2.5 text-sm font-medium text-primary">My Card</Link>
              <button onClick={signOut} className="block w-full text-left py-2.5 text-sm font-medium text-muted-foreground">Sign Out</button>
            </>
          ) : (
            <Link to="/auth" className="block py-2.5 text-sm font-medium text-primary">Join / Login</Link>
          )}
          <Button asChild size="sm" className="w-full mt-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/donate">Donate / Support Us</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
