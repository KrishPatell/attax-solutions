# Page Audit Guidelines — ATTAX Solutions

Use this document as a checklist when auditing any page for desktop and mobile responsiveness.

---

## Pre-Audit: Know What's Shared

Before auditing a page, check `shared-components.md`:
- Does the page include `AttaxNavbar`? (Every page should)
- Does the page include `AttaxFooter`? (Footer content is always identical — do not re-audit its text)
- Are any other shared components reused (e.g. `AttaxCtaBanner`, `AttaxContactForm`)?

**Footer rule:** The footer text, links, phone, email, and copyright are **always the same** across all pages. Only audit footer for layout/responsiveness issues, not content correctness.

---

## Typography Audit Checklist

For each heading, check against `typography-system.md`:

- [ ] Does the H2/H1 have a `mobile` size (~`32px`)?
- [ ] Does it have an `md:` intermediate step to bridge the gap to desktop?
- [ ] Does it reach a proper desktop size (`lg:` variant)?
- [ ] Is `Inter Tight` used for UI headings?
- [ ] Is `Playfair Display` used only for italic accent words?
- [ ] Are eyebrow labels `#1d1ee3` blue with `Inter Tight 500`?

---

## Responsive Layout Checklist

For each section:

- [ ] Does content **stack** on mobile (flex-col) and go side-by-side on desktop (lg:flex-row)?
- [ ] Are images **height-responsive** (no single hardcoded height without `md:` and `lg:` variants)?
- [ ] Does the section use `py-[60px] md:py-[120px]` (or similar scaling padding)?
- [ ] Are buttons `w-full md:w-auto` (full-width on mobile, inline on desktop)?
- [ ] Are grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or appropriate stacking)?

---

## Mobile-Specific Issues to Watch

1. **Overflow:** Large fixed-width decorative elements (glow circles, blobs) must use responsive sizing or be hidden on mobile.
2. **Sticky elements:** Any `sticky top-[N]` must account for navbar height (~64px). Use `sm:` variants for fine-tuning.
3. **Text alignment:** Centered on mobile (`text-center`) → left-aligned on desktop (`md:text-left`) for most body sections.
4. **Button layout:** CTA buttons should stack (`flex-col`) on mobile and go inline (`md:flex-row`) on desktop.
5. **Grid gaps:** Large gaps like `gap-8 gap-12` should have smaller mobile variants like `gap-5 md:gap-8`.

---

## Known Fixed Issues (Home Page — Applied)

These were fixed during the home page audit and should be used as reference patterns:

| Issue | Fix Applied |
|---|---|
| Hero glow circle `600×600` too large on mobile | `w-[300px] h-[300px] md:w-[600px] md:h-[600px]` |
| Strategic Platform image height jumped from 480px to 642px (no md) | Added `md:h-[560px]` |
| Results heading jumped 32px → 52px (no md) | Added `md:text-[42px]` |
| Clarity sticky cards used fixed offsets (80/100/120px) | Added `sm:` variants (70→80, 90→100, 110→120) |
| About heading jumped 32px → 48px (no md) | Added `md:text-[40px]` |
| About section had no mobile padding scaling | Changed to `py-[60px] md:py-[120px]` |
| FAQ heading jumped 32px → 52px (no md) | Added `md:text-[42px]` |
| FAQ answer text `pr-12` too large on narrow mobile | Changed to `pr-8 md:pr-12` |
| Footer CTA heading jumped 32px → 44px (no md) | Added `md:text-[38px]` |

---

## Page Inventory

| Route | Page Component | Shared Navbar | Shared Footer | Status |
|---|---|---|---|---|
| `/` | `ATTAX.tsx` | ✅ | ✅ | ✅ Audited |
| `/about` | `AboutUs.tsx` | ? | ? | ⬜ Pending |
| `/services` | `Services.tsx` | ? | ? | ⬜ Pending |
| `/our-process` | `OurProcess.tsx` | ? | ? | ⬜ Pending |
| `/resources` | `Resources.tsx` | ? | ? | ⬜ Pending |
| `/resources/:slug` | `BlogPost.tsx` | ? | ? | ⬜ Pending |
| `/contact` | `Contact.tsx` | ? | ? | ⬜ Pending |
| `/clarity` | `Clarity.tsx` | ? | ? | ⬜ Pending |
| `/terms` | `Terms.tsx` | ? | ? | ⬜ Pending |
| `/privacy` | `Privacy.tsx` | ? | ? | ⬜ Pending |
