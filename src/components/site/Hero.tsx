import { Link } from "@tanstack/react-router";

import { Container } from "@/components/site/Container";
import logo from "@/assets/logo.png";
import heroRiver from "@/assets/hero-river.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroRiver}
        alt="River valley in Nepal representing water resilience and stewardship"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-[color:var(--hero-tint)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <Container className="relative flex min-h-[78svh] items-center py-24 sm:min-h-[84svh] lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.75fr] lg:gap-16">
          <div className="max-w-3xl">
            <img
              src={logo}
              alt="IWA Young Water Professionals Nepal Chapter logo"
              className="mb-8 h-16 w-auto rounded-sm bg-white/95 p-2 shadow-soft sm:h-20"
              width={478}
              height={160}
            />
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              National platform for young water leaders
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Empowering young water professionals for a water-secure Nepal.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
              IWA YWP Nepal connects students, researchers, practitioners, and early-career leaders working across WASH,
              climate resilience, research, utilities, and water governance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/membership"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Join YWP
              </Link>
              <Link
                to="/events"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
              >
                Explore events
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-transparent px-5 py-3 text-sm font-semibold text-white/92 transition-colors hover:bg-white/10"
              >
                Partner with us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-white/14 bg-white/10 p-5 backdrop-blur-sm shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">2026 focus</p>
              <p className="mt-3 text-lg font-semibold">Leadership, capacity building, collaboration, and visibility</p>
            </div>
            <div className="rounded-xl border border-white/14 bg-white/10 p-5 backdrop-blur-sm shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">Aligned with</p>
              <p className="mt-3 text-lg font-semibold">SDG 6, climate resilience, WASH, and professional development</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
