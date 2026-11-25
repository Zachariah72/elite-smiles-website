import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, CreditCard, Heart, LogIn, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
import { org } from "@/config/site";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const additionalLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Governance", to: "/governance" },
];

export const navLinks = [...primaryLinks, ...additionalLinks];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav aria-label="Main navigation" className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-4">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={`${org.name} home`}>
          <img src={logo} alt="" className="h-11 w-11 object-contain" width={44} height={44} />
          <span className="font-display text-sm font-extrabold leading-tight text-foreground sm:text-base">
            Mabawa Uplift Foundation
            <span className="mt-1 block font-body text-[11px] font-medium text-primary">{org.motto}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          {primaryLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>{link.label}</NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2 text-sm font-semibold text-muted-foreground">More</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-48">
              {additionalLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to}>{link.label}<ArrowUpRight className="ml-auto h-4 w-4" /></Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          {user ? (
            <>
              <Button size="sm" variant="outline" onClick={() => navigate("/membership-card")}>
                <CreditCard className="mr-2 h-4 w-4" />My Card
              </Button>
              <Button size="icon" variant="ghost" onClick={signOut} aria-label="Sign out" title="Sign out">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button asChild size="sm" variant="ghost">
              <Link to="/auth"><LogIn className="mr-2 h-4 w-4" />Join / Login</Link>
            </Button>
          )}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/donate"><Heart className="mr-2 h-4 w-4" />Support</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-border bg-background px-4 pb-5 shadow-card xl:hidden">
          <div className="container mx-auto grid gap-1 pt-2">
            {[...primaryLinks, ...additionalLinks].map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `border-b border-border/70 py-3 text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                {link.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-4">
              {user ? (
                <>
                  <Button asChild variant="outline"><Link to="/membership-card"><CreditCard className="mr-2 h-4 w-4" />My Card</Link></Button>
                  <Button variant="ghost" onClick={signOut}><LogOut className="mr-2 h-4 w-4" />Sign Out</Button>
                </>
              ) : (
                <Button asChild variant="outline"><Link to="/auth"><LogIn className="mr-2 h-4 w-4" />Join / Login</Link></Button>
              )}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/donate"><Heart className="mr-2 h-4 w-4" />Support</Link></Button>
              <Button asChild variant="outline" className="col-span-2"><Link to="/partnerships">Partner With Us</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;