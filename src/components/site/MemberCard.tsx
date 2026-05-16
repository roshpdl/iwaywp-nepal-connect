"use client";

import { Mail, Linkedin } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
};

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-background shadow-soft">
      <div className="aspect-[4/4.3] overflow-hidden bg-secondary">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          className="h-full w-full object-cover"
          loading="lazy"
          width={768}
          height={768}
        />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{member.role}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{member.name}</h3>
        <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
        <div className="mt-5 flex items-center gap-3">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          ) : null}
          {member.linkedin ? (
            <a
              href={member.linkedin}
              aria-label={`${member.name} LinkedIn`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          ) : null}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-auto rounded-md">
                Read more
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-xl border-border">
              <DialogHeader>
                <DialogTitle>{member.name}</DialogTitle>
                <DialogDescription>{member.role}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 sm:grid-cols-[220px_1fr]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full rounded-lg border border-border bg-secondary object-cover"
                  loading="lazy"
                  width={768}
                  height={768}
                />
                <p className="text-sm leading-7 text-muted-foreground">{member.bio}</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </article>
  );
}
