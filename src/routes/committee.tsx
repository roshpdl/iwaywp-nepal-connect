import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/site/Container";
import { MemberCard } from "@/components/site/MemberCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { committeeMembers } from "@/data/site";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Steering Committee | IWA YWP Nepal" },
      {
        name: "description",
        content:
          "Meet the IWA YWP Nepal Steering Committee 2026/27 and explore the professional backgrounds of the chapter’s young water leaders.",
      },
      { property: "og:title", content: "Steering Committee | IWA YWP Nepal" },
      {
        property: "og:description",
        content:
          "Meet the IWA YWP Nepal Steering Committee 2026/27 and explore the professional backgrounds of the chapter’s young water leaders.",
      },
      { property: "og:url", content: "/committee" },
    ],
    links: [{ rel: "canonical", href: "/committee" }],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  const featured = committeeMembers.slice(0, 2);
  const rest = committeeMembers.slice(2);

  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Steering Committee 2026/27"
              title="Meet the young professionals shaping the chapter’s direction"
              description="The committee brings expertise across water resources, WASH, environmental planning, research, communication, and climate resilience."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featured.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((member, index) => (
              <Reveal key={member.name} delay={index * 60}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
