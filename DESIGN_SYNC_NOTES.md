# Design sync notes — new screen since the original handoff

The original Claude Design bundle (`project/ui_kits/website/`) covers 5 screens: Home,
Services Hub, ITR Filing detail, Live Chat, Contact. One additional screen was designed
and built during implementation that doesn't exist in the design bundle yet — this doc
is what a `/design-sync` session needs to bring it back in.

## New screen: `/services/apply` — "Let's get your paperwork moving"

Reached when a user finishes picking services in the Services Hub's picker modal (or
the floating "N selected" bar) and clicks "Request N selected →". That CTA used to jump
straight to Contact; it now lands here first.

**Purpose:** turn a service selection into a lightweight intake — without requiring
document upload (no backend exists for that).

**Sections, top to bottom:**
1. Dark navy hero, same register as the Services Hub / Contact hero ("Get started"
   eyebrow + headline + subhead).
2. Recap chips of the exact services selected.
3. "Skip the form — WhatsApp us directly" shortcut card — prefilled WhatsApp message
   listing the selected services.
4. White card, gold top accent bar (same treatment as the Contact form card):
   - **"Have these ready?"** — self-checklist grouped by category, sourced from a new
     `docs` field per category. Checkbox rows, self-declared (no upload), with a live
     "X of Y ready" counter.
   - **"What you'll receive"** — deliverables list, sourced from a new `deliverables`
     field per category.
   - Contact form: name / phone / email / notes.
   - Submit button.
5. **Success state** (replaces the form in place): checkmark, recap of what was
   requested, a 4-step numbered "what happens next" timeline (Advisor calls → Documents
   verified → Filed with authorities → Confirmation shared — ends on "status: deployed",
   a deliberate callback to the original brief's vocabulary), WhatsApp handoff + "Browse
   more services" buttons.
6. **Empty state** (direct nav with nothing selected): "No services selected yet" + CTA
   back to Services.

**Visual language:** reuses existing tokens/components entirely — no new colors, fonts,
or primitives introduced. Same card style as Contact, same button styles, same
navy/gold palette.

## Exact reference implementation (in this repo's `web/` Next.js port)

- `web/app/services/apply/page.js` — the full screen. Structurally mirrors the
  `ServiceDetailV2.jsx` / `ContactV2.jsx` pattern already in `project/ui_kits/website/`
  (inline styles via `var(--token)`, one component, same card/section conventions).
- `web/lib/selectionStorage.js` — sessionStorage carry-over so the selection survives
  navigation from the picker to this screen. Browser-only plumbing, not a design element.
- `web/data/categories.js` — each of the 10 `HUB_CATEGORIES` entries gained `docs`
  (array of required documents) and `deliverables` (array of what's received). These
  fields don't exist yet on the original `CATEGORIES` array in `ServicesHubV2.jsx`.

## What changed in existing screens

- `ServicesHubV2.jsx`: the picker's "Request N selected →" button and the floating
  bottom-bar "Request quote →" button both now route to the new screen instead of
  straight to Contact.

## To bring this into the Claude Design project

1. Add a new `ServiceApplyV2.jsx` (or similarly named) screen file into
   `project/ui_kits/website/`, following the exact conventions already used there
   (inline `var(--token)` styles, single default export, `window.__NAMESPACE`
   registration).
2. Wire it into `index-v2.html`'s `AppV2` hash router as a new `apply` screen key.
3. Update `ServicesHubV2.jsx`'s two CTA handlers to `go('apply')` instead of
   `go('contact')`.
4. Add the `docs` / `deliverables` fields to `ServicesHubV2.jsx`'s `CATEGORIES` array
   (see `web/data/categories.js` for the authored content — 10 categories, each with a
   5-item document list and a 3–4 item deliverables list).

`web/app/services/apply/page.js` is styled identically to the design system's
conventions and can be used directly as the porting reference — most of the
translation is mechanical (swap `next/link` / `next/navigation` / `next/image` calls
back to plain `<a>` / `<img>` / the `go()` router function).
