import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  detail,
  className,
}: {
  value: string;
  label: string;
  detail?: string;
  className?: string;
}) {
  return (
    <article className={cn("rounded-xl border border-border bg-background p-6 shadow-soft", className)}>
      <p className="text-3xl font-semibold text-foreground sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-accent">{label}</p>
      {detail ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p> : null}
    </article>
  );
}
