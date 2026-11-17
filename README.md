# Ibroad Education — Frontend (Next.js 16 + Tailwind CSS 4)

The public website for **Ibroad Education**, a study-abroad consultancy.
Built with the Next.js App Router, React 19, Tailwind CSS 4 and TypeScript,
following the Navy/Gold design system documented in the Architecture &
Design Plan.

> **All catalogue data (universities, courses, testimonials, statistics) is
> SAMPLE data**, defined in [`lib/data.ts`](lib/data.ts) and clearly badged in
> the UI. It stands in for the MongoDB collections until the live
> Route Handlers / Prisma layer is added. No form on this site stores or
> transmits data — submission only shows a success state.

---

## Quick start

```bash
cd ibroad-frontend
npm install        # Node 18.18+ / 20+ / 22+
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

> Building uses `next/font/google`, which fetches the Inter font files from
> Google Fonts at build time — the build machine needs internet access.

---

## Tech stack

| Layer        | Choice                                          |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16 (App Router, RSC)                    |
| UI runtime   | React 19                                        |
| Styling      | Tailwind CSS 4 (`@theme` tokens in `app/globals.css`) |
| Language     | TypeScript (strict)                             |
| Font         | Inter via `next/font/google`                    |
| Data         | In-memory sample data in `lib/data.ts` (no DB)  |

---

## Design tokens

Defined as Tailwind v4 `@theme` variables in
[`app/globals.css`](app/globals.css) — a one-file edit changes the brand
site-wide:

| Token            | Value     | Tailwind utility example |
| ---------------- | --------- | ------------------------ |
| `--color-primary` | `#1F3A5F` | `bg-primary`, `text-primary` |
| `--color-primary-deep` | `#16314F` | `bg-primary-deep` |
| `--color-accent` | `#C9A227` | `bg-accent`, `text-accent` |
| `--color-page`   | `#F4F6F9` | `bg-page`                |
| `--color-surface`| `#E9EEF4` | `bg-surface`             |
| `--color-ink`    | `#14233A` | `text-ink`               |
| `--color-muted`  | `#6B7785` | `text-muted`             |
| `--color-line`   | `#C7D0DB` | `border-line`            |

---

## Project structure

```
ibroad-frontend/
├── app/
│   ├── layout.tsx              # root: Inter font, TopBar + Navbar + Footer, metadata
│   ├── globals.css             # Tailwind v4 @import + @theme tokens + base
│   ├── page.tsx                # Home
│   ├── not-found.tsx           # 404
│   ├── about/page.tsx
│   ├── destinations/page.tsx
│   ├── universities/
│   │   ├── page.tsx            # list + filters (reads ?country=)
│   │   └── [id]/page.tsx       # university detail (generateStaticParams)
│   ├── courses/
│   │   ├── page.tsx            # list + filters (reads ?country=)
│   │   └── [id]/page.tsx       # course detail
│   ├── register/page.tsx       # <RegisterForm/> (client)
│   └── contact/page.tsx        # <ContactForm/> (reads ?subject=)
├── components/
│   ├── layout/   TopBar · Navbar · Footer
│   ├── ui/       Button · Badge · Container · Field · SectionHeading · EmptyState
│   ├── cards/    DestinationCard · UniversityCard · CourseCard · ServiceCard · TestimonialCard
│   ├── Logo · icons · PageHero · SearchTabs · Reveal · StatCounter · CtaBand
│   ├── UniversityFilters.tsx   # client: country/search/featured filters
│   ├── CourseFilters.tsx       # client: country/uni/level/field/fee filters
│   ├── RegisterForm.tsx        # client: validated multi-section form
│   └── ContactForm.tsx         # client: validated contact form
└── lib/
    ├── types.ts                # domain types
    ├── data.ts                 # SAMPLE data + lookup helpers
    └── utils.ts                # cn(), money(), isEmail(), isPhone()
```

### Server vs client components

- **Server components** (default): every page shell and the presentational
  cards — they read sample data directly and render as HTML.
- **Client components** (`"use client"`): `Navbar` (scroll/drawer/active link),
  `Reveal`, `StatCounter`, `UniversityFilters`, `CourseFilters`,
  `RegisterForm`, `ContactForm` — anything with interactivity or hooks.

---

## What's implemented (Stage 3 — public website)

- 9 routes: Home, About, Destinations, Universities, University Details,
  Courses, Course Details, Register, Contact (+ 404).
- Sticky navbar with top contact bar + mobile drawer; active-link highlight.
- Home matches the plan's section order: hero (animated stat counters),
  destinations, featured universities, services, testimonials, CTA band.
- Universities & Courses pages: SearchTabs + live, stacking filters
  (country, search, featured, university, level, field, max tuition).
- Detail pages: hero, overview, entry requirements, related courses/university,
  sticky quick-facts summary box, inquiry CTAs.
- Register form: personal / academic / preferences sections, honeypot,
  field-level validation, success state.
- Contact form: validated, prefilled subject via `?subject=`, success state.
- Fully responsive (sm/md/lg/xl breakpoints), accessible focus rings,
  reveal-on-scroll, sample-data badges everywhere.

---

## Wiring the real backend (next steps)

This is the **frontend**. To connect the live data layer from the plan:

1. Replace the imports from `lib/data.ts` with `fetch()` calls to Route
   Handlers (`/api/universities`, `/api/courses`, `/api/public/settings`, …)
   backed by Prisma + MongoDB.
2. Turn `UniversityFilters` / `CourseFilters` into fetch-on-filter components
   that pass query params to the API (keep the same UI).
3. Replace `RegisterForm` / `ContactForm`'s `setSubmitted(true)` with a
   **Server Action** that runs a Zod schema, persists via Prisma, and
   dispatches email/WhatsApp notifications.
4. Add the admin dashboard (Stage 8) under `app/(admin)/` with the same design
   tokens.
