import { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-border bg-background p-6 shadow-soft transition-transform hover:-translate-y-1">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}
