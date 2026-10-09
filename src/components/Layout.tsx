import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (hash) { const timer = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 100); return () => window.clearTimeout(timer); } window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname, hash]);

  useEffect(() => { document.title = `${pathname === '/' ? 'Mabawa Uplift Foundation' : pathname.split('/')[1].replace(/-/g, ' ')} | Giving Wings to Hope`; }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
