import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Handshake, Users } from "lucide-react";

import { Container } from "@/components/site/Container";
import { EventCard } from "@/components/site/EventCard";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCard } from "@/components/site/StatCard";
import { Button } from "@/components/ui/button";
import { features, partnerNames, stats, upcomingEvents } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IWA YWP Nepal | Young Water Professionals Nepal" },
      {
        name: "description",
        content:
          "Discover IWA YWP Nepal, a national platform connecting and developing young water professionals through events, membership, research, and collaboration.",
      },
      { property: "og:title", content: "IWA YWP Nepal | Young Water Professionals Nepal" },
      {
        property: "og:description",
        content:
          "Discover IWA YWP Nepal, a national platform connecting and developing young water professionals through events, membership, research, and collaboration.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-shell bg-background">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="A youth-driven platform for water leadership, learning, and collaboration"
              description="We support young professionals across research, utilities, engineering, policy, WASH, climate resilience, and community practice in Nepal."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <StatCard {...stat} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Connecting emerging leaders across Nepal’s water sector"
              description="Our chapter builds community, strengthens professional skills, and elevates youth-led knowledge and practice."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal delay={80}>
              <FeatureCard icon={Users} title={features[0].title} description={features[0].description} />
            </Reveal>
            <Reveal delay={160}>
              <FeatureCard icon={BookOpen} title={features[1].title} description={features[1].description} />
            </Reveal>
            <Reveal delay={240}>
              <FeatureCard icon={Handshake} title={features[2].title} description={features[2].description} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Featured events"
                title="Upcoming opportunities to learn, connect, and contribute"
                description="Planned events focus on climate resilience, technical learning, and stronger regional engagement."
              />
            </Reveal>
            <Reveal delay={120}>
              <Button asChild variant="outline">
                <Link to="/events">
                  View all events <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {upcomingEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * 90}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-primary text-primary-foreground">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/75">SDG 6 and Nepal’s WASH priorities</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
                  Advancing a resilient, inclusive, and water-secure future.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
                  The chapter’s work is shaped by SDG 6, climate resilience, WASH, water security, and the need for stronger youth leadership in Nepal’s water sector.
                </p>
              </div>
              <div className="rounded-xl border border-white/12 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">Partners and ecosystem</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/82">
                  {partnerNames.map((partner) => (
                    <li key={partner}>• {partner}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-elegant sm:p-10">
              <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
                Join a growing community of young water professionals in Nepal.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Become part of a national platform for learning, collaboration, visibility, and leadership in the water sector.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/membership">Explore membership</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact the chapter</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
