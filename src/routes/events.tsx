import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/site/Container";
import { EventCard } from "@/components/site/EventCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pastEvents, upcomingEvents } from "@/data/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Webinars | IWA YWP Nepal" },
      {
        name: "description",
        content:
          "Browse upcoming and past IWA YWP Nepal events, webinars, trainings, and collaboration opportunities for young water professionals.",
      },
      { property: "og:title", content: "Events & Webinars | IWA YWP Nepal" },
      {
        property: "og:description",
        content:
          "Browse upcoming and past IWA YWP Nepal events, webinars, trainings, and collaboration opportunities for young water professionals.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Events and webinars"
              title="Learning, networking, and chapter engagement throughout the year"
              description="Explore chapter activities designed to strengthen technical knowledge, foster collaboration, and support emerging water leaders."
            />
          </Reveal>
          <Reveal delay={120}>
            <Tabs defaultValue="upcoming" className="mt-10">
              <TabsList className="h-auto rounded-lg bg-secondary p-1">
                <TabsTrigger value="upcoming" className="rounded-md px-4 py-2">Upcoming</TabsTrigger>
                <TabsTrigger value="past" className="rounded-md px-4 py-2">Past</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {upcomingEvents.map((event, index) => (
                    <Reveal key={event.title} delay={index * 70}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="past" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {pastEvents.map((event, index) => (
                    <Reveal key={event.title} delay={index * 70}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
