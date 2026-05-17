"use client";

import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Committee", to: "/committee" },
  { label: "Events", to: "/events" },
  { label: "Membership", to: "/membership" },
  { label: "Research", to: "/research" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="IWA YWP Nepal logo"
            className="h-11 w-auto rounded-sm"
            width={478}
            height={160}
          />
          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-sm font-semibold text-foreground">IWA Young Water Professionals Nepal Chapter</p>
            <p className="truncate text-xs text-muted-foreground">Empowering young water professionals for a water-secure Nepal</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="https://forms.gle/eh4eFChSN2mGUi1x8" target="_blank" rel="noreferrer">Join YWP</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm border-l border-border bg-background">
            <SheetHeader>
              <SheetTitle>Navigate IWA YWP Nepal</SheetTitle>
              <SheetDescription>Explore our chapters, events, membership, and resources.</SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                      active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-3">
                <a href="https://forms.gle/eh4eFChSN2mGUi1x8" target="_blank" rel="noreferrer">Join YWP</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
