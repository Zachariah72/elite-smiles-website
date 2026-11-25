import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { org } from "@/config/site";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Mabawa Uplift Foundation", description: "A youth-led Kenyan organization supporting education, mental wellness, community outreach and sustainable development." },
  "/about": { title: "About Mabawa", description: "Learn about Mabawa Uplift Foundation’s mission, vision, values, community approach and leadership." },
  "/programs": { title: "Our Programs", description: "Explore Mabawa Uplift Foundation’s community programs and verified upcoming outreach dates." },
  "/projects": { title: "Our Projects", description: "Explore Mabawa Uplift Foundation’s proposed and in-development community initiatives." },
  "/impact": { title: "Our Impact", description: "Read verified Mabawa Uplift Foundation stories, outreach records and published impact information." },
  "/get-involved": { title: "Get Involved", description: "Volunteer, share skills, explore opportunities or join Mabawa Uplift Foundation." },
  "/partnerships": { title: "Partnerships", description: "Explore partnership pathways with Mabawa Uplift Foundation in Kenya." },
  "/news": { title: "News & Stories", description: "Read reviewed Mabawa Uplift Foundation news, community stories and project updates." },
  "/donate": { title: "Support Our Work", description: "Learn how to support Mabawa Uplift Foundation through verified instructions, in-kind support or skills." },
  "/contact": { title: "Contact Mabawa", description: "Contact Mabawa Uplift Foundation in Nairobi, Kenya." },
  "/governance": { title: "Governance", description: "Meet Mabawa Uplift Foundation’s leadership and learn about accountability and governance." },
  "/events": { title: "Events", description: "View confirmed upcoming and past Mabawa Uplift Foundation events." },
  "/gallery": { title: "Photo Gallery", description: "Browse approved Mabawa Uplift Foundation community photographs and published story media." },
  "/privacy": { title: "Privacy Notice", description: "Read Mabawa Uplift Foundation’s privacy notice and data practices." },
  "/terms": { title: "Website Terms", description: "Read the terms for using Mabawa Uplift Foundation’s website." },
  "/transparency": { title: "Transparency & Accountability", description: "Learn how Mabawa Uplift Foundation shares verified activity and financial information." },
  "/safeguarding": { title: "Safeguarding", description: "Read Mabawa Uplift Foundation’s safeguarding information and contact pathways." },
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 100);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? (
      pathname.startsWith("/news/") ? { title: "News Story", description: "Read a reviewed story from Mabawa Uplift Foundation." } :
      pathname.startsWith("/projects/") ? { title: "Project Details", description: "Learn about a Mabawa Uplift Foundation community initiative." } :
      pathname.startsWith("/programs/") ? { title: "Program Details", description: "Learn about a Mabawa Uplift Foundation program area." } :
      pathname.startsWith("/events/") ? { title: "Event Details", description: "View event information from Mabawa Uplift Foundation." } :
      { title: "Page Not Found", description: "This Mabawa Uplift Foundation page could not be found." }
    );
    const title = pathname === "/" ? `${org.name} | ${org.motto}` : `${metadata.title} | ${org.name}`;
    const canonicalUrl = new URL(pathname, org.url).toString();
    document.title = title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;