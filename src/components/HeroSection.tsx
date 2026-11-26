import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetUrl, details, isUpcomingEvent, useContent } from "@/features/platform/data";
import { org } from "@/config/site";
import athena1 from "@/assets/athena-1.jpg";
import athena2 from "@/assets/athena-2.jpg";
import athena3 from "@/assets/athena-3.jpg";
import athena5 from "@/assets/athena-5.jpg";
import farmImage from "@/assets/smart-farm.jpg";
import kenyenyaPoster from "@/assets/kenyenya-poster.png.asset.json";

const slides = [
  { src: athena2, alt: "Mabawa volunteers engaging with learners at Athena School in Thika" },
  { src: farmImage, alt: "Ruaka farm site for the Integrated Smart Farm project" },
  { src: athena1, alt: "Mabawa volunteers supporting learners during the Athena School outreach" },
  { src: athena3, alt: "Mabawa team with Marvel Five Investments at the Athena School outreach" },
  { src: athena5, alt: "A learner receiving menstrual health supplies during the Athena School outreach" },
  { src: athena2, alt: "Kenyenya Community Health Outreach poster shown with a Mabawa outreach photograph", poster: kenyenyaPoster.url },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const events = useContent("event");
  const upcoming = (events.data ?? []).filter((event) => isUpcomingEvent(event)).slice(0, 2);
  const slide = slides[index];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section aria-label="Mabawa Uplift Foundation introduction" className="relative isolate flex min-h-[min(46rem,calc(100svh-7rem))] items-center overflow-hidden bg-foreground">
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={`${index}-background`}
          src={assetUrl(slide.src)}
          alt={slide.alt}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
      </AnimatePresence>
      <div aria-hidden="true" className="absolute inset-0 bg-foreground/70" />

      {slide.poster && (
        <motion.img
          key={`${index}-poster`}
          src={assetUrl(slide.poster)}
          alt="Kenyenya Community Health Outreach poster"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="absolute bottom-20 right-4 z-10 max-h-[34%] w-24 bg-background p-1.5 object-contain shadow-card md:bottom-16 md:right-[7%] md:top-8 md:max-h-[80%] md:w-[min(26vw,21rem)] md:p-3"
        />
      )}

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <div className={slide.poster ? "max-w-[72%] md:max-w-3xl" : "max-w-3xl"}>
          <p className="mb-5 text-sm font-bold text-on-media-muted">Mabawa Uplift Foundation · Kenya</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-on-media sm:text-5xl md:text-6xl">
            Giving Wings to Hope.<br />Building Opportunities for All.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-media-muted md:text-lg">
            {org.intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/programs">Explore Our Work<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/80 bg-background/10 text-on-media hover:bg-background hover:text-foreground">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
          <Button asChild variant="link" className="mt-2 h-auto px-0 text-on-media-muted hover:text-on-media">
            <Link to="/get-involved">Get involved with Mabawa<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>

          <div className="mt-7 border-t border-background/30 pt-4" aria-live="polite">
            {upcoming.length ? (
              <div className="flex flex-wrap items-start gap-x-7 gap-y-3">
                <p className="text-xs font-bold uppercase text-on-media-muted">Upcoming</p>
                {upcoming.map((event) => (
                  <Link key={event.id} to={`/events/${event.slug}`} className="text-sm text-on-media hover:underline">
                    <span className="font-semibold">{event.title}</span>
                    <span className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-on-media-muted">
                      {details(event).date && <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{details(event).date}</span>}
                      {details(event).location && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{details(event).location}</span>}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-on-media-muted">Outreach dates will be shared here once confirmed.</p>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-background/25 bg-foreground/50 px-2 py-1.5">
        {slides.map((item, slideIndex) => (
          <Button
            key={item.alt}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Show image ${slideIndex + 1}${item.poster ? ", including the Kenyenya outreach poster" : ""}`}
            aria-pressed={index === slideIndex}
            onClick={() => setIndex(slideIndex)}
            className={`h-5 w-5 min-w-5 rounded-full p-0 ${index === slideIndex ? "bg-accent hover:bg-accent" : "bg-background/60 hover:bg-background"}`}
          />
        ))}
        <Button type="button" variant="ghost" size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play image carousel" : "Pause image carousel"} className="ml-1 h-7 w-7 text-on-media hover:bg-background/15 hover:text-on-media">
          {paused || reduceMotion ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;