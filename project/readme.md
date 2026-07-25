# Income N Filing — Compliance OS Design System

## Company & context

**Income N Filing** is a business tax and compliance advisory firm based in Kolkata (with a second office in Bhagalpur, Bihar), operating since 2017. It serves startups, SMEs, and established businesses pan-India across ~94 services in 10 categories: incorporation & registrations, GST compliance, income tax, corporate compliance, insolvency advisory, documentation & drafting, contracts & agreements, accounting & bookkeeping, licenses & registrations, and advisory/notice handling.

The existing site (screenshots in `uploads/`) is a conventional CA-firm brochure: navy-and-gold palette, rounded icon-badge cards, a stock skyscraper photo, star-rated testimonials, and a WhatsApp bubble. This design system captures the brand's real palette and voice but re-expresses it under a new creative direction:

**"Compliance OS"** — the site should feel like operating compliance software, not scrolling a brochure. Two systems carry this:
1. **Terminal search** — a CLI-styled live search (monospace, blinking cursor, cycling placeholder queries) that filters the full service directory and returns CLI-style output blocks with a `[ book ]` command instead of a normal button.
2. **Dashboard logic** — stats, deadlines, and office locations render as a live ops panel (status dots, pulses, scrolling tickers) instead of static brochure numbers.

**Sources provided:** `uploads/00…12-*.png` (screenshots of the current live site — home, about, stats, how-it-works, services hub, why-choose, testimonials, office locations, FAQ, contact, footer) and `uploads/INF logo` (the brand mark, flattened JPEG on a light-gray square, no vector/transparent source given). No Figma file, codebase, or brand guideline PDF was attached — this system was authored from those screenshots plus the written creative brief, not from a source of truth codebase. If a Figma or repo becomes available later, treat it as the new ground truth over this system.

Required site scope (for the consuming project, not built page-by-page here): Home, About, Services Hub (searchable directory), Live Chat (terminal-styled, routes to WhatsApp — not a staffed backend), 7 flagship service pages (ITR Filing, GST Registration & Filing, Company Incorporation, TCS Filing & Compliance, Tax Notice Handling, Capital Gains Advisory, NRI Income Tax Filing), Testimonials/Case Studies, FAQ, Contact — 14 pages total. **Hard constraint: no prices, dollar figures, or numeric ranges anywhere** — pricing is discussed only through direct contact.

## Content fundamentals

- **Voice:** confident, plain-spoken, procedural — a firm that has clearly done this thousands of times. Short declarative sentences ("We handle everything with precision and professionalism"). No jargon-stuffing despite the tax subject matter.
- **Person:** mostly first-person-plural ("we/our") describing the firm, second-person ("you/your business") addressing the client. Never third-person distancing.
- **Casing:** Title Case for headings and nav labels, sentence case for body copy and form labels.
- **Compliance-OS vocabulary layer (new):** services are **"available,"** not "offered"; a completed filing shows **"status: deployed"**; CLI framing replaces generic verbs — "search," "deploy," "run," "[ book ]" instead of "Submit"/"Contact Us." Apply this quietly — it's a register shift, not a rebrand of every sentence into computer-speak. Marketing copy outside the terminal/dashboard modules stays in the plain, confident voice above.
- **No emoji anywhere** — the existing site uses none, and the OS framing rewards restraint (status dots and monospace symbols carry the "system" feeling instead).
- **No pricing content** — never a number tied to currency, a range, or "starting at." Every CTA is "Book Free Consultation" / "book" / "continue on WhatsApp," never a price link.
- **Numbers as proof points, reframed as live data:** "500+ Businesses Served," "7+ Years of Excellence," "94 Services Live" — keep exact figures, but present them as dashboard stats (see `StatBlock`) rather than static hero numbers.

## Visual foundations

- **Palette:** deep navy (`--navy-*`) is the dominant chrome — headers, hero backgrounds, footer — paired with a warm gold/amber accent (`--gold-*`) for CTAs and highlights, on light paper backgrounds (`--paper`, `--paper-alt`) for content sections. This is the site-wide register.
- **The terminal module breaks the palette on purpose** — a "system within a system." It runs on near-black (`--term-bg`) with amber prompt text and green success/status text (`--term-green`, `--term-amber`), monospace only. Never blend the terminal palette into the rest of the page chrome, and never use navy/gold inside a terminal panel.
- **Type:** two families outside the terminal — Space Grotesk (display, headings, module titles) and IBM Plex Sans (body, forms, UI labels) — plus JetBrains Mono reserved strictly for the terminal/CLI register and live data readouts (stat labels, status badges). See `guidelines/type-*.html`.
- **Backgrounds:** flat color or a very subtle diagonal-stripe navy gradient in the hero (no photography, no illustration, no busy texture). The old site's stock skyscraper photo is intentionally dropped — this direction reads as software, not a photo brochure.
- **Animation:** minimal and purposeful, never decorative bounce/spring. A blinking terminal cursor (`blink-cursor`), a soft pulse on live-status dots (`pulse-dot`), and a slow linear scroll for the deadline ticker (`ticker-scroll`). Standard easing is `cubic-bezier(.2,.8,.2,1)`; card hover lifts use `--duration-base` (200ms).
- **Hover states:** buttons darken/lighten one step within their own palette (gold buttons lighten, dark outline buttons get a faint white wash); cards lift 2px with an upgraded shadow; terminal command links shift from amber to green on hover (a "state change," not just a color tweak).
- **Press states:** no scale/shrink bounce; rely on the same hover treatment with slightly reduced shadow — compliance software doesn't feel springy.
- **Borders & shadows:** light-mode cards use a hairline `--ink-100` border plus a soft navy-tinted shadow (`--shadow-sm`/`md`/`lg`) — no colored left-border accent stripes. The terminal module instead gets a thin bordered panel with a faint green outer glow (`--shadow-terminal`) rather than a drop shadow.
- **Corner radii:** cards and inputs round softly (`--radius-md`/`lg`, 10–16px); pills/badges are fully rounded (`--radius-pill`). The terminal panel is the deliberate exception — sharp/near-sharp corners (`--radius-none`/`sm`) to read as a console window, not a soft card.
- **Transparency & blur:** used sparingly — a faint white wash (`rgba(255,255,255,.06-.08)`) for outlined pills/buttons on the dark hero, and translucent border tints (`--border-inverse`) on navy surfaces. No frosted-glass/backdrop-blur panels.
- **Imagery:** the old site's photography (generic office/skyscraper stock) is deliberately not carried forward — this direction is data- and type-led, not photo-led. If real photography is wanted later, keep it cool-toned and architectural, never warm lifestyle stock.
- **Layout rules:** header is a simple static top bar (not sticky-blur); footer is a fixed 3-column navy panel. Section content is capped at `--container-max` (1200px) and centered.

## Iconography

No icon font, SVG sprite, or icon library was found in the provided source (screenshots only show simple line glyphs inside circular badges — Feather/Lucide-style, but no exportable source asset). **Substitution:** component demos use short monospace text glyphs (`GST`, `ITR`, category codes) as a deliberate "module code" motif that fits the OS concept, rather than reconstructing icons by hand. If a production build needs pictorial icons, the closest CDN match is **Lucide** (same thin 1.5–2px stroke weight as the old site's badges) — pull it from `unpkg.com/lucide` rather than hand-drawing SVGs. No emoji is used anywhere, matching the source site.

## Components

Authored from scratch (no Figma/codebase inventory was provided, so a standard set was sized to the brief's two systems — terminal + dashboard — rather than a generic component library):

- **Core** (`components/core/`): `Button` (primary/secondary/ghost/command variants), `CommandButton` (the `[ book ]` bracket pattern), `Badge` (status pill), `Input`, `Select`, `Textarea`.
- **Dashboard** (`components/dashboard/`): `ModuleCard` (service-category module), `StatBlock` (live ops stat), `OfficeCard` (location with pulse dot), `DeadlineTicker` (scrolling compliance deadlines).
- **Terminal** (`components/terminal/`): `TerminalSearch` (the hero's CLI search), `CommandOutputLine` (one CLI-style result row with `[ book ]`).
- **Feedback** (`components/feedback/`): `Accordion` (FAQ), `TestimonialCard` (client review).
- **Navigation** (`components/navigation/`): `NavBar`, `Footer`.

## Index

- `styles.css` — root stylesheet; imports everything under `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `motion.css`, `fonts.css` — design tokens.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.
- `assets/logo.jpg` — the only brand mark provided (flattened JPEG, no transparent/vector source).
- `components/` — reusable primitives, grouped as above; each directory has one `*.card.html` demo.
- `ui_kits/website/` — interactive click-through recreation of 5 core screens (Home, Services Hub, a flagship service page, Live Chat, Contact) composed from the components above. See `ui_kits/website/README.md`.
- `thumbnail.html` — homepage tile for this design system.
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point.

## Caveats / open questions

- Only a flattened, non-transparent JPEG logo was provided — no vector (SVG/AI) or transparent-background version. The lockup card (`guidelines/brand-logo.html`) shows it on both light and navy; on navy it sits inside its own light-gray square. **Please attach a transparent or vector logo file if one exists.**
- Fonts (Space Grotesk / IBM Plex Sans / JetBrains Mono) are a **new choice for this revamp**, not a substitution for an existing brand font — no typeface was specified in the source material. Loaded via Google Fonts `@import`; flag if a different pairing is preferred.
- No icon asset source was available — see Iconography above.
- The `ui_kits/website` kit covers 5 of the 14 required pages to demonstrate both systems (terminal search + dashboard) end to end; the remaining 9 pages (About, the other 6 flagship service pages, Testimonials/Case Studies, FAQ) should be straightforward compositions of the same components in a consuming project.
