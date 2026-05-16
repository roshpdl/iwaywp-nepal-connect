import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { galleryItems } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | IWA YWP Nepal" },
      {
        name: "description",
        content:
          "View the IWA YWP Nepal gallery featuring field engagement, chapter events, conference participation, and communication highlights.",
      },
      { property: "og:title", content: "Gallery | IWA YWP Nepal" },
      {
        property: "og:description",
        content:
          "View the IWA YWP Nepal gallery featuring field engagement, chapter events, conference participation, and communication highlights.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Scenes from learning, collaboration, and engagement"
              description="A visual snapshot of the chapter’s focus areas—from technical events and research culture to field-based collaboration."
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {[...new Set(galleryItems.map((item) => item.category))].map((category) => (
              <span key={category} className="rounded-md bg-background px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground shadow-soft">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <figure className="overflow-hidden rounded-xl border border-border bg-background shadow-soft">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    width={1600}
                    height={1067}
                  />
                  <figcaption className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{item.category}</p>
                    <p className="mt-2 text-base font-medium text-foreground">{item.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
