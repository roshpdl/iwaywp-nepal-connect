import { ArrowUpRight } from "lucide-react";

export type ResourceItem = {
  title: string;
  description: string;
  type: string;
  href: string;
};

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <article className="rounded-xl border border-border bg-background p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{resource.type}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{resource.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{resource.description}</p>
      <a
        href={resource.href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
      >
        Explore resource <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
