import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/site/Container";
import { ResourceCard } from "@/components/site/ResourceCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { resourcesByCategory } from "@/data/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Resources | IWA YWP Nepal" },
      {
        name: "description",
        content:
          "Explore research highlights, newsletters, webinar outputs, and useful resources curated by IWA YWP Nepal.",
      },
      { property: "og:title", content: "Research & Resources | IWA YWP Nepal" },
      {
        property: "og:description",
        content:
          "Explore research highlights, newsletters, webinar outputs, and useful resources curated by IWA YWP Nepal.",
      },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Research and resources"
              title="Knowledge sharing for young water professionals"
              description="The chapter promotes youth-led research, practice-based learning, and access to useful information, outputs, and opportunities."
            />
          </Reveal>
          <div className="mt-12 space-y-12">
            {resourcesByCategory.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground">{category.title}</h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    {category.items.map((resource) => (
                      <ResourceCard key={resource.title} resource={resource} />
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
