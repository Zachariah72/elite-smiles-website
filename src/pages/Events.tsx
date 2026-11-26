import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ContentStatus, Section } from "@/features/platform/Shared";
import { details, isUpcomingEvent, useContent, type Content } from "@/features/platform/data";

function EventItem({ item, past = false }: { item: Content; past?: boolean }) {
  const info = details(item);
  return (
    <article className="border-t-2 border-primary py-5">
      <p className="text-xs font-bold uppercase text-accent">{past ? "Scheduled date passed · status update pending" : "Confirmed upcoming event"}</p>
      <h3 className="mt-2 font-display text-xl font-bold text-foreground">{item.title}</h3>
      {item.excerpt && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>}
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {info.date && <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />{info.date}{info.time ? ` · ${info.time}` : ""}</span>}
        {info.location && <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{info.location}</span>}
      </p>
      <Button asChild variant="link" className="mt-3 h-auto px-0">
        <Link to={`/events/${item.slug}`}>Event details <span aria-hidden="true">→</span></Link>
      </Button>
    </article>
  );
}

const Events = () => {
  const query = useContent("event");
  const events = query.data ?? [];
  const upcoming = events.filter((item) => isUpcomingEvent(item));
  const datedPast = events.filter((item) => !!details(item).date && !isUpcomingEvent(item));
  const needsDate = events.filter((item) => !details(item).date);

  return (
    <Layout>
      <PageHeader eyebrow="Community calendar" title="Events & Outreach" subtitle="Confirmed dates and event details are shared here. Planned activities are not presented as completed events." />
      <Section title="Upcoming events">
        <ContentStatus loading={query.isLoading} error={query.error} />
        {!query.isLoading && !query.error && !upcoming.length && <p className="border-y border-border py-6 text-muted-foreground">No upcoming event dates have been confirmed. Please check back for verified updates.</p>}
        <div className="grid gap-x-10 md:grid-cols-2">{upcoming.map((item) => <EventItem key={item.id} item={item} />)}</div>
      </Section>
      {datedPast.length > 0 && <Section title="Past scheduled dates" tone><div className="grid gap-x-10 md:grid-cols-2">{datedPast.map((item) => <EventItem key={item.id} item={item} past />)}</div></Section>}
      {needsDate.length > 0 && <Section title="Event dates being finalized"><div className="grid gap-x-10 md:grid-cols-2">{needsDate.map((item) => <EventItem key={item.id} item={item} />)}</div></Section>}
    </Layout>
  );
};

export default Events;