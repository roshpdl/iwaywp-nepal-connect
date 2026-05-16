import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { membershipBenefits } from "@/data/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | Join IWA YWP Nepal" },
      {
        name: "description",
        content:
          "Join IWA YWP Nepal to access networking, events, leadership opportunities, and a national community of young water professionals.",
      },
      { property: "og:title", content: "Membership | Join IWA YWP Nepal" },
      {
        property: "og:description",
        content:
          "Join IWA YWP Nepal to access networking, events, leadership opportunities, and a national community of young water professionals.",
      },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Membership"
              title="Join a platform built for students, researchers, and early-career water professionals"
              description="Membership is designed for young professionals in Nepal working across water, sanitation, climate resilience, engineering, research, and policy."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal delay={120}>
              <article className="rounded-xl border border-border bg-background p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Who can join</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>• Students and recent graduates in water-related fields</li>
                  <li>• Young practitioners, utility professionals, researchers, and consultants</li>
                  <li>• Early-career professionals interested in WASH, climate resilience, SDG 6, and water governance</li>
                  <li>• Members are typically below 35 and committed to collaborative professional growth</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={220}>
              <article className="rounded-xl border border-accent/25 bg-primary p-7 text-primary-foreground shadow-elegant">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/75">Access and affordability</p>
                <h2 className="mt-4 text-3xl font-semibold">Free chapter membership</h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  The chapter is focused on inclusion and access. Join the community, stay informed, and participate in activities while growing your connection to the wider water sector.
                </p>
                <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#" target="_blank" rel="noreferrer">
                    Open membership form
                  </a>
                </Button>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="What members gain through the chapter"
              description="Membership supports visibility, learning, leadership, and stronger professional connections across Nepal and beyond."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {membershipBenefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 60}>
                <article className="flex gap-3 rounded-xl border border-border bg-background p-5 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-7 text-muted-foreground">{benefit}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
