import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Youtube } from "lucide-react";

import { Container } from "@/components/site/Container";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Membership", to: "/membership" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "Email", href: "mailto:ywpnepal@gmail.com", icon: Mail },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
        <div>
          <img
            src={logo}
            alt="IWA Young Water Professionals Nepal Chapter logo"
            className="h-14 w-auto rounded-sm"
            width={478}
            height={160}
            loading="lazy"
          />
          <h2 className="mt-5 text-xl font-semibold text-foreground">IWA Young Water Professionals Nepal Chapter</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Empowering young water professionals for a water-secure Nepal.
          </p>
          <a href="mailto:ywpnepal@gmail.com" className="mt-4 inline-flex text-sm font-medium text-accent hover:underline">
            ywpnepal@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">Connect</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
