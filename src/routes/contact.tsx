import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Youtube } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact IWA YWP Nepal | Partnerships and inquiries" },
      {
        name: "description",
        content:
          "Contact IWA YWP Nepal for membership questions, event collaboration, partnerships, and chapter inquiries.",
      },
      { property: "og:title", content: "Contact IWA YWP Nepal | Partnerships and inquiries" },
      {
        property: "og:description",
        content:
          "Contact IWA YWP Nepal for membership questions, event collaboration, partnerships, and chapter inquiries.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
] as const;

function ContactPage() {
  return (
    <div className="bg-background">
      <section className="section-shell bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Connect with the chapter"
                description="Reach out for membership, collaboration, events, knowledge sharing, or organisational partnerships."
              />
              <div className="mt-8 rounded-xl border border-border bg-background p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Chapter email</p>
                    <a href="mailto:ywpnepal@gmail.com" className="mt-2 inline-flex text-base font-medium text-foreground hover:text-accent">
                      ywpnepal@gmail.com
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Partner with IWA YWP Nepal</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                    <li>• Capacity-building events and webinars</li>
                    <li>• Youth engagement, mentoring, and professional exchange</li>
                    <li>• Research dissemination and communication partnerships</li>
                    <li>• Sector collaboration aligned with SDG 6 and climate resilience</li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
