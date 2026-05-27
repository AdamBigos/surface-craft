
# WrapWorks — Single-Page Marketing Site

A frontend-only React + Tailwind prototype for a premium car and window wrapping company. No backend, all placeholder content.

## Stack & Scaffold
- Scaffold a `web_app` artifact (TanStack Start template, React + Tailwind + shadcn/ui).
- All sections live on one route (`/`) with anchor-based smooth scrolling.
- Placeholder images via `imagegen` (hero, services, portfolio) saved under `src/assets/`.

## Design Direction
- **Palette:** deep charcoal (#0E0E10) base, off-white text, single utilitarian accent — neon yellow (#E8FF3A) used sparingly for CTAs, active filters, and section indices.
- **Typography:** bold sans-serif headlines (oversized, tight tracking), neutral sans body. Numeric labels (01 / 02 / 03) for process steps.
- **Mood:** industrial, precise, high-contrast. Edge-to-edge imagery. Minimal chrome. Restrained motion (subtle scale/opacity on hover, no parallax soup).

## Page Sections (top → bottom)
1. **Sticky Nav** — logo left, anchor links (Work, Process, Services, Contact), "Request Quote" pill right. Mobile: hamburger → full-screen overlay menu with oversized tap targets.
2. **Hero** — full-bleed image placeholder of a wrapped vehicle, bold headline ("Transforming surfaces into high-impact visual assets."), supporting line, two CTAs: primary "Request a Free Quote" (#contact), secondary "Explore Our Work" (#gallery).
3. **Trust Badges** — horizontal marquee of partner wordmarks (3M, Avery Dennison, Oracal, Hexis, KPMF, Arlon) as styled text logos. Subtle auto-scroll on desktop, static wrap on mobile.
4. **Process Overview** — 3-column grid (stacks on mobile): 01 Design & Consultation · 02 Surface Preparation · 03 Precision Application. Each with icon, short copy, accent number.
5. **Services Briefing** — two-card split: "Vehicle Fleet Wrapping" and "Storefront / Architectural Wrapping". Each with image, 3 bullet capabilities, inline CTA.
6. **Portfolio Gallery** — filter chips (All / Vehicles / Windows), responsive masonry-style grid (CSS columns), hover reveals project label. Touch-friendly tap targets.
7. **Contact Module** — left: static form (Name, Email, Project Type select, Message, Submit — UI only, no submission). Right: phone, email, address, Google Maps embed placeholder (styled iframe stub or static map image).
8. **Footer** — minimal: logo, anchor links, social, copyright.
9. **Sticky Mobile Quote Bar** — fixed bottom bar on `<md` viewports with "Request a Free Quote" → #contact.

## Responsiveness
- Mobile-first Tailwind breakpoints. CSS grid / flex throughout.
- Gallery: `columns-1 sm:columns-2 lg:columns-3` for masonry; no horizontal overflow.
- All interactive targets ≥ 44px.

## Interactions
- Smooth scroll via `scroll-behavior: smooth` + anchor IDs.
- Gallery filter: local React state, no routing.
- Hover transitions: `transition-transform`, `transition-opacity` only — no layout-shifting effects.

## Out of Scope
- No form submission, no auth, no DB, no analytics.
- No CMS — copy hard-coded.

## Technical Notes
- Files: `src/routes/index.tsx` composing section components in `src/components/sections/` (Hero, TrustBar, Process, Services, Gallery, Contact, Footer, StickyQuoteBar, Nav).
- Tokens in `src/index.css` (`--background`, `--foreground`, `--accent`) and mirrored in Tailwind config.
- Generate 4–6 portfolio images + 1 hero + 2 service images with `imagegen` (fast tier).
