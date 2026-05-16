import { Badge } from "@/components/ui/badge";

export type SiteEvent = {
  title: string;
  date: string;
  location: string;
  summary: string;
  tags: string[];
};

export function EventCard({ event }: { event: SiteEvent }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{event.date}</p>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{event.title}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{event.location}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{event.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
