import { Link, useParams } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import EngagementForm from "@/features/platform/EngagementForm";
import { ContentStatus, Section } from "@/features/platform/Shared";
import { details, isUpcomingEvent, useContent } from "@/features/platform/data";

const EventDetail = () => {
  const { slug } = useParams();
  const query = useContent("event");
  const event = query.data?.find((item) => item.slug === slug);

  if (!event) return <Layout><PageHeader title={query.isLoading ? "Loading event…" : "Event unavailable"} subtitle="Only published event details appear here." /><Section title="Community calendar"><ContentStatus loading={query.isLoading} error={query.error} /><Button asChild><Link to="/events">Browse Events</Link></Button></Section></Layout>;

  const info = details(event);
  const upcoming = isUpcomingEvent(event);
  return (
    <Layout>
      <PageHeader eyebrow={upcoming ? "Confirmed upcoming event" : "Scheduled date passed · status update pending"} title={event.title} subtitle={event.excerpt} />
      <Section title="Event details">
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {info.date && <p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />{info.date}{info.time ? ` · ${info.time}` : ""}</p>}
          {info.location && <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{info.location}</p>}
        </div>
        <p className="mt-7 max-w-3xl whitespace-pre-line leading-relaxed text-muted-foreground">{event.body}</p>
      </Section>
      <Section title={upcoming ? "Register for this event" : "Registration is closed"} tone>
        {upcoming ? <div className="max-w-3xl"><EngagementForm kind="event" contentId={event.id} cta="Register for Event" /></div> : <p className="text-muted-foreground">Registration is not available because this event date has passed or is not confirmed.</p>}
      </Section>
    </Layout>
  );
};

export default EventDetail;