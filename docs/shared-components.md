# Shared Components — ATTAX Solutions

This document records components that are **reused across multiple pages** and their consistent behavior. Use this as a reference before auditing any page so you know which sections are shared globals vs. page-specific.

---

## Global / Shared Components

### `AttaxNavbar`
- **File:** `src/app/components/attax/AttaxNavbar.tsx`
- **Used on:** All pages (every route renders it via the page component convention)
- **Behavior:** Fixed at top, `z-50`. Hamburger menu at `<xl`, full nav at `xl:`. Phone number shows at `lg:`.
- **Height:** ~64px (`py-4` + logo height). Sticky offset for any `sticky` children should account for this.
- **Note:** Each page file (`ATTAX.tsx`, `AboutUs.tsx`, etc.) imports and renders `<AttaxNavbar />` at the top — it is NOT in a shared layout wrapper. Verify each page includes it.

---

### `AttaxFooter`
- **File:** `src/app/components/attax/AttaxFooter.tsx`
- **Used on:** Home page (`ATTAX.tsx`). Check if other pages include it individually.
- **Always-the-same content:**
  - CTA headline: *"Ready to resolve your tax problem?"*
  - CTA button: "Free Consultation" → scrolls to `#contact-form`
  - Phone: `+1 (949) 287-3015`
  - Email: `info@attaxsolutions.com`
  - Address: Irvine, CA
  - Nav columns: Company (`About`, `Our Process`, `ATTAX`, `Clarity`, `Contact`) and Resources (`Blog`, `Tax Resources`, `IRS Fresh Start`, `Offer in Compromise`, `Client Portal`)
  - Social: LinkedIn, Twitter, Facebook (all `href="#"` placeholder)
  - Newsletter email input (no backend wired)
  - Copyright: `© 2026 ATTAX Solutions LLC`
  - Links: `/privacy`, `/terms`
- **Typography:** CTA heading `32px / 38px md: / 44px lg:` (after audit fix). Body `14px–15px`.
- **Audit note:** When auditing other pages, check that `AttaxFooter` is present and not duplicated with custom footer markup.

---

### `AttaxCtaBanner` (`CtaBannerSection.tsx`)
- **File:** `src/app/components/attax/CtaBannerSection.tsx`
- **Status:** Returns `null` — **currently disabled / not rendering**.
- **Used on:** Home page (imported in `ATTAX.tsx` between FAQ and Contact Form).
- **Action needed:** Either implement the banner content or remove the import if permanently dropped.

---

## Page-Specific Sections (Home Page Only)

These components appear only on the home page (`/` → `ATTAX.tsx`):

| Component | Section |
|---|---|
| `AttaxHero` | Hero banner |
| `AttaxTrustBar` | Trust statistics bar |
| `AttaxStrategicPlatformV2` | "The Problem" section with image + cards |
| `AttaxServices` | Services grid |
| `AttaxProcess` | How it works / accordion |
| `AttaxClarity` | ATTAX Clarity platform preview |
| `AttaxResults` | Testimonials carousel |
| `AttaxMidCTA` | Mid-page call-to-action |
| `AttaxAbout` | Founder / About section |
| `AttaxFAQ` | FAQ accordion |
| `AttaxContactForm` | Contact form |

---

## CTA Section Pattern

The following CTA button pattern is used consistently throughout the site:

```
bg-[#1d1ee3] rounded-[50px] pl-5/6 pr-1.5/2 py-1.5/2
  → Text label (white, Inter Tight, 14–16px)
  → Circle icon (white bg, ArrowUpRight or similar, #1d1ee3 icon)
```

This pill-button-with-circle-icon pattern is the **primary CTA style** across all sections. Width is `w-full md:w-auto` on mobile to go full-width, then inline on desktop.

---

## Color System Reference

| Token | Value | Usage |
|---|---|---|
| Brand blue | `#1d1ee3` | CTAs, accents, links, borders |
| Dark navy | `#0a1628` | Hero bg, footer bg, dark text |
| Light blue bg | `#f7f9ff` | Alternating section backgrounds |
| Light blue tint | `#eaeaff` | Card borders, icon backgrounds |
| Body text | `#03030f` / `#0a1628` | Primary text |
| Muted text | `rgba(10,22,40,0.6–0.7)` | Secondary / descriptions |
| Accent purple | `#a5b4fc` | Hero italic text, shield icon |

---

## Section Padding Convention

Most sections follow this vertical padding pattern:
- `py-[60px] md:py-[120px]` — standard section
- `py-10 lg:py-16` — footer sub-sections

Horizontal padding:
- `px-5 md:px-8` — content wrapper (inside `max-w-[1200px] mx-auto`)
- `px-5 lg:px-8` — some sections use `lg:` instead of `md:`
