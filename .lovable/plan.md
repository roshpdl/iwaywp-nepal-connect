
# IWA YWP Nepal — Website Plan (Revised)

Modern, professional, responsive site for the IWA Young Water Professionals Nepal Chapter, built on the existing TanStack Start + Tailwind v4 + shadcn stack. Now incorporates the real logo, team bios, and the 2026 Work Plan content from the uploaded files.

## Brand assets (from uploads)

- **Logo**: `user-uploads://Logo.png` → copy to `src/assets/logo.png`, used in header and footer (replaces any text-only mark).
- **Committee portraits**: extract from the Team_Details.pdf parse (`page_X_image_2_v2.jpg`) → copy each to `src/assets/team/<slug>.jpg` and wire into the committee data file. Where a portrait isn't present in the PDF (Nibesh, Aastha, Prashant), use a clean monogram avatar fallback.
- **Color palette**: derived from the logo — IWA cyan-blue accent `oklch(0.70 0.15 230)` and deep ink black `oklch(0.18 0.02 250)`, on white. Stored as oklch tokens in `src/styles.css`.

## Design system (`src/styles.css`)

- `--primary`: deep ink (logo black) for headings/nav
- `--accent`: IWA cyan-blue (the wave color) for CTAs, links, highlights
- `--secondary`: very light aqua `oklch(0.97 0.02 220)` for section backgrounds
- `--background`: white; `--muted-foreground`: slate
- Gradient tokens: `--gradient-hero` (deep ink → cyan), `--gradient-wave` (cyan → light aqua)
- `--shadow-elegant`, `--shadow-soft`
- Heading font: Outfit / Inter via Google Fonts links in root head. Body: Inter.
- Rounded-2xl cards, generous spacing, restrained fade/slide-in on scroll via a small `Reveal` IO hook.

Dark mode kept; tuned to navy/teal.

## Routes (file-based, `src/routes/`)

```
__root.tsx     → site shell (Header + Outlet + Footer, global Org JSON-LD)
index.tsx      → Home
about.tsx      → About Us
committee.tsx  → Steering Committee
events.tsx     → Events & Webinars
membership.tsx → Membership
research.tsx   → Research & Resources
gallery.tsx    → Gallery
contact.tsx    → Contact / Collaborate
```

Each leaf route defines its own `head()` (unique title, description, og:title/description, canonical). Single H1, semantic sections, alt text on images.

## Shared components (`src/components/site/`)

`Header` (sticky, logo + nav + mobile Sheet + "Join YWP" CTA), `Footer` (brand + quick links + contact + social: Linkedin/Facebook/Youtube/Mail), `Hero`, `SectionHeading`, `StatCard`, `FeatureCard`, `EventCard`, `MemberCard`, `ResourceCard`, `Reveal`, `Container`.

## Content data (`src/data/`)

Editable TS modules acting as a lightweight CMS.

- `committee.ts` — 12 real members with name, role, slug, photo import, full bio (verbatim from Team_Details.pdf), email (where provided in Work Plan: Roshan, Kaushal, Sabi, Nibesh, Sambuddha, Sarana), and LinkedIn placeholder `#`.
- `events.ts` — `past[]` (Navigating Groundwater Complexity, Leveraging Data, South Asia Water Dialogues, Social Enterprise, WAFON Launch, IWA Water & Development Congress 2025) and `upcoming[]` (World Environment Day cryosphere webinar, LCA webinar, EIA training workshop, 5-Year Anniversary, joint YWP chapter events).
- `objectives.ts` — pulled from Work Plan §5: build national YWP network, professional development, foster collaboration, support IWA & SDG 6, empower inclusive youth participation, promote research & innovation.
- `stats.ts` — 367+ members by Dec 2025, 3+ major webinars, national + international collaborations, research/newsletter highlights. Plus Work Plan ambitions (15+ steering members target, 3+ capacity-building events/yr) as a secondary panel on About.
- `resources.ts`, `gallery.ts` — category-grouped placeholders.

## Page contents

**Home** — Hero with logo + headline "Empowering Young Water Professionals in Nepal", sub, three CTAs (Join YWP, Explore Events, Partner With Us) over a generated water-themed hero image. 4 StatCards. "What we do" 3-up (Connect / Build Capacity / Innovate). Featured upcoming events strip (from `events.ts`). SDG 6 callout band. Partners strip (WAFON + placeholders). Closing CTA.

**About** — Sections: What is IWA, What is YWP Nepal, Mission (verbatim from prompt + Work Plan rationale paragraph), 6 Objective cards, SDG 6 & Nepal WASH alignment with imagery.

**Steering Committee** — Intro paragraph; Chair + Vice-Chair featured row; responsive grid of remaining 10 MemberCards with portrait, name, role, bio excerpt, mail/linkedin icon links; "Read more" expands full bio in a Dialog.

**Events** — shadcn `Tabs` (Upcoming / Past). EventCard grid with date chip, title, summary, tags. Upcoming priorities section.

**Membership** — Hero, eligibility (Nepali YWPs, students, researchers, practitioners; recommended below 35), "Free membership" highlight, benefits grid (events, networking, volunteering, newsletter, research highlights, leadership), Join Now button → placeholder Google Form URL.

**Research & Resources** — Sections per category (Newsletter, Member research highlights, Reports, Webinar recordings, Publications & opportunities, Calls for abstracts) with ResourceCards (external/download placeholders).

**Gallery** — Category filter chips (Webinars, Steering Committee, WAFON, Conferences, Trainings, Youth engagement) + responsive grid with generated placeholder images reused across cells.

**Contact** — Contact info (`ywpnepal@gmail.com`), social icons (LinkedIn/Facebook/YouTube links from prompt), Collaboration section ("Partner with IWA YWP Nepal" + partner types list), and a presentational contact form (Name, Email, Organization, Purpose Select, Message) with shadcn toast on submit.

## Images

- Use real logo for header/footer.
- Copy real committee portraits from the parsed PDF.
- Generate 3–4 reusable hero/section images (fast tier, saved in `src/assets/`): aerial Himalayan river, water professionals in the field, conference/training scene, abstract water gradient. Reused for gallery placeholders too.

## SEO & a11y

Per-route `head()`, single H1, semantic landmarks, alt text, focus-visible rings, Organization JSON-LD in `__root.tsx` (name, url, logo, sameAs social links, contact email). Smooth scroll, responsive across mobile/tablet/desktop.

## Out of scope

No backend / Lovable Cloud. Contact form is client-only with toast confirmation; membership uses external Google Form placeholder URL. Content lives in `src/data/*.ts` for easy edits.

## Technical notes

- TanStack Start file-based routing; never edit `routeTree.gen.ts`.
- All colors via semantic tokens — no hardcoded hex in components.
- Mobile nav via shadcn Sheet; tabs via shadcn Tabs; form via Input/Textarea/Select with toast (sonner).
- Animations: CSS transitions + Reveal hook; no Motion/Framer dependency added.
