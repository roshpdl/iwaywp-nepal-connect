import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Globe2, GraduationCap, Lightbulb, ShieldCheck, Users } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import fieldWorkImage from "@/assets/field-work.jpg";
import { objectives } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IWA YWP Nepal | Mission, SDG 6, WASH" },
      {
        name: "description",
        content:
          "Learn about IWA YWP Nepal’s mission, goals, and alignment with SDG 6, WASH, climate resilience, and professional development in Nepal.",
      },
      { property: "og:title", content: "About IWA YWP Nepal | Mission, SDG 6, WASH" },
      {
        property: "og:description",
        content:
          "Learn about IWA YWP Nepal’s mission, goals, and alignment with SDG 6, WASH, climate resilience, and professional development in Nepal.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const focusAreas = [
  {
    icon: Users,
    title: "National network building",
    description: "Strengthen a connected, volunteer-driven community of young professionals across Nepal’s water sector.",
  },
  {
    icon: GraduationCap,
    title: "Professional development",
    description: "Support technical growth and leadership through regular training, webinars, and collaborative learning.",
  },
  {
    icon: Globe2,
    title: "Global collaboration",
    description: "Link Nepal’s young professionals with regional and international networks, partners, and opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Youth-led innovation",
    description: "Highlight research, field insights, and practical solutions led by young professionals.",
  },
  {
    icon: Droplets,
    title: "WASH and water security",
    description: "Align activities with Nepal’s WASH priorities, water resilience needs, and public interest outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Inclusion and resilience",
    description: "Embed gender and social inclusion while strengthening climate resilience and leadership pathways.",
  },
] as const;

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">About the chapter</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold text-foreground sm:text-5xl">
                A national chapter advancing youth leadership in Nepal’s water sector.
              </h1>
              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Nepal’s water sector faces growing pressures from rising demand, climate change, limited technical capacity, and slow progress toward achieving SDG 6. IWA YWP Nepal was formed to help address these gaps through innovation, research, technical leadership, and stronger collaboration among young professionals.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                With momentum from an active national community and stronger institutional linkages, the chapter is building a coordinated platform that empowers emerging professionals and connects Nepal to wider global water networks.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={fieldWorkImage}
              alt="Young water professionals collaborating at a field site in Nepal"
              className="w-full rounded-xl border border-border object-cover shadow-elegant"
              loading="lazy"
              width={1600}
              height={1067}
            />
          </Reveal>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Mission"
              title="Building and strengthening a national network of young water professionals"
              description="The chapter’s 2026 work plan centres on collaboration, membership growth, capacity building, youth-led innovation, stronger partnerships, and sustained communication and outreach."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Objectives"
              title="What IWA YWP Nepal aims to achieve in 2026"
              description="These objectives are drawn from the chapter’s work plan and define the structure for annual activities and impact."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {objectives.map((objective, index) => (
              <Reveal key={objective.title} delay={index * 80}>
                <article className="rounded-xl border border-border bg-background p-6 shadow-soft">
                  <h3 className="text-xl font-semibold text-foreground">{objective.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    {objective.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
