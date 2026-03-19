# ATTAX Solutions — Design System

This file is the authoritative design reference for the ATTAX Solutions website. It describes the visual language, component patterns, spacing rules, and interaction behaviors used throughout the project. All AI tools and contributors must read this before generating or modifying any UI.

---

## 1. Visual Theme & Atmosphere

ATTAX Solutions is a premium tax relief company — the design must feel authoritative, trustworthy, and modern without being cold. Think: a financial institution that has been humanized.

**Mood:** Professional confidence. Clients are under stress; the interface should feel like a steady hand.

**Aesthetic:** Dark navy anchors the brand as serious and expert. Electric blue signals action and energy. Clean white sections breathe. Subtle glassmorphism on CTAs adds polish without decoration for its own sake.

**Density:** Medium. Generous whitespace on desktop. Compact but legible on mobile. Never cramped, never wasteful.

**Tone of motion:** Purposeful. Fade-up on scroll entry, subtle scale on button hover. No bounce, no spin, no distraction.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| Primary Blue | `#1d1ee3` | CTAs, active states, brand accents, icon fill on light BG |
| Dark Navy | `#0a1628` | Hero backgrounds, dark section BG, secondary CTA buttons |
| Blue Hover | `#1618c7` | Hover state for primary blue buttons/elements |
| Lavender Accent | `#a5b4fc` | Hero accent text (italic spans), icon tints on dark BG |
| Icon Circle BG | `#eaeeff` | Icon container background on white/light sections |
| Card BG Light | `#f7f7f4` | Service cards, feature cards (warm off-white) |
| Section BG Alt | `#f7f9ff` | Alternating section background (cool off-white) |
| Body Text | `#03030f` | All primary text on white/light backgrounds |
| Muted Text | `rgba(3,3,15,0.7)` | Body copy, descriptions, secondary information |
| Subtle Text | `rgba(3,3,15,0.4)` | Placeholder, tertiary labels |
| White | `#ffffff` | Cards on dark BG, button text, reversed content |
| Border Light | `rgba(0,0,0,0.07)` | Dividers, card borders, accordion borders |
| Border White | `rgba(255,255,255,0.1)` | Borders on dark/navy sections |

**Color rules:**
- Never use `#1d1ee3` for body text — blue is for action only
- `#0a1628` is used for secondary CTAs ("Start Your Case", "Book Free Call") to distinguish from primary blue
- White buttons with navy text are used on dark section backgrounds (footer "Free Consultation")
- `#f7f9ff` and `#f7f7f4` alternate with white — never two consecutive white sections

---

## 3. Typography

### Font Families

| Use | Family | Style |
|-----|--------|-------|
| All UI, body, buttons, labels | `'Inter Tight', sans-serif` | Default |
| Heading accents (1–2 words only) | `'Playfair Display', serif` | Always italic |

**Rule:** Playfair Display is used exclusively for a single italic word or short phrase within a heading — never for full sentences, body copy, or buttons. It creates a contrast beat, not a full typographic system.

**Implementation:** Always pass `fontFamily` as an inline style AND include `font-['Inter_Tight',sans-serif]` as a Tailwind class on elements where inheritance could override it (especially accordion titles and card headings).

### Type Scale

#### H1 — Page Heroes
- `text-[34px] md:text-[44px] lg:text-[72px]`
- Weight: 600, Tracking: `-1px` mobile / `-1.5px` desktop, Line height: `1.2` mobile / `1.1` desktop

#### H2 — Section Headers
- Standard: `text-[32px] md:text-[36px] lg:text-[44–56px]`
- Compact: `text-[32px] md:text-[34px]`
- Intentionally smaller (results/stats): `text-[26px] md:text-[36px] lg:text-[52px]`
- Weight: 500–600

Exact values per component (do not change):
- AttaxServices: `text-[32px] md:text-[36px] lg:text-[56px]`
- AttaxProcess: `text-[32px] md:text-[34px]`
- AttaxMidCTA: `text-[32px] md:text-[40px] lg:text-[56px]`
- AttaxFAQ: `text-[32px] lg:text-[52px]`
- AttaxFooter CTA: `text-[32px] lg:text-[44px]`
- AttaxResults: `text-[26px] md:text-[36px] lg:text-[52px]`

#### H3 — Card & Feature Titles
- Standard: `text-[24px] md:text-[26px]`, weight 500–600
- AttaxClarity cards: `text-[26px]`
- WhatHappensNext steps: `text-[24px]`

#### H4 — Section Label Badges
- Footer nav headers (COMPANY, RESOURCES, CONTACT): `text-[13px]` uppercase `tracking-wider`, weight 600
- Feature/card sub-labels: `text-[16px]–text-[20px]` — varies by context, do not standardize

#### Eyebrow Labels
- Format: `[Label Text]` (square brackets always)
- Size: `text-[14px] md:text-[16px]`, color `#1d1ee3`, weight 500, Inter Tight

#### Body & Card Text
- Standard body: `text-[14px] md:text-[15px]`
- Section intro paragraph: `text-[14px] md:text-[16px] lg:text-[18px]`
- Line height: `leading-[1.6]` to `leading-[1.7]`

#### Navigation
- Desktop nav links: `text-[14px]`, weight 400, `rgba(10,22,40,0.7)`
- Mobile nav links: `text-[15px]`, weight 400
- Navbar CTA: `text-[14px]`, weight 500

---

## 4. Component Specifications

### Navbar
- Fixed top, `z-50`, white pill container: `rounded-[16px] px-6 py-3.5`
- At rest: `shadow-[0_2px_16px_rgba(0,0,0,0.07)]`
- Scrolled: `shadow-[0_8px_32px_rgba(0,0,0,0.14)]`, reduced `py-2`
- Desktop nav: centered links, `gap-0.5`, hover `rounded-lg bg-[#f0f4ff]`
- CTA button: `bg-[#1d1ee3] rounded-[10px] px-5 py-2.5 text-[14px]` — rectangle, not pill
- Mobile: hamburger → animated dropdown, links + phone + CTA

### Hero Sections
- Always `bg-[#0a1628]`, `min-h-[100vh] lg:min-h-[85vh]`
- Content: `pt-[100px] pb-[60px] md:pt-[120px]`, `px-5 md:px-8`, `max-w-[1200px] mx-auto`
- Decorative: dot grid `opacity-[0.03]`, blue radial glow `opacity-10` at top-right
- Home hero H1: split into two lines, second line ends with Playfair italic in `#a5b4fc`
- Tagline quote: `text-[22px]` Playfair italic, white
- Stats row: `border-t border-white/10 mt-10 pt-8`
- Scroll cue: `ChevronDown` bouncing at bottom center, `text-white/40`

### CTA Pill Buttons (Primary Pattern)
```
self-start
flex items-center gap-5
rounded-[50px]
pl-5 md:pl-6
pr-1.5 md:pr-2
py-1.5 md:py-2
```

Background variants:
- Primary: `bg-[#1d1ee3]` — main page CTAs
- Dark: `bg-[#0a1628]` — secondary CTAs (FAQ "Book Free Call")
- White: `bg-white text-[#0a1628]` — CTAs on dark backgrounds (footer)

Label: `text-[14px] md:text-[16px]`, weight 500, `whitespace-nowrap`, Inter Tight

Arrow circle:
- `w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0`
- Blue button → `bg-white`, ArrowUpRight in `#1d1ee3`
- Dark button → `bg-[#1d1ee3]`, ArrowUpRight white
- White button → `bg-[#1d1ee3]`, icon white

Hover: `whileHover={{ scale: 1.03–1.04 }}`, tap: `whileTap={{ scale: 0.97 }}`

**Never use:** `w-full`, `w-auto`, or `max-w-[Xpx]` on pill buttons. `self-start` is the only width control.
**Exception:** Form submit buttons are full-width (`w-full`) inside their form column.

### Icon Circles
- Light sections: `w-[50px] h-[50px] rounded-full bg-[#eaeeff]`, blue Lucide icon inside
- Dark sections: `bg-white/10`, white icon inside
- Small variant: `w-10 h-10` (card context), standard: `w-12 h-12`

### Service Cards
- BG: `#f7f7f4`, `rounded-[12px] p-[30px]`
- Icon container: `w-12 h-12 bg-white rounded-lg shadow-sm`, `#1d1ee3` icon
- Title: H3 `text-[24px] md:text-[26px]` weight 600
- Body: `text-[14px] md:text-[15px]` `rgba(3,3,15,0.7)` `leading-[1.6]`
- "Read More": `text-[13.9px]` weight 500 + `size-[39px]` arrow circle with hover dark fill
- Card hover: `hover:shadow-lg`

### Glassmorphic CTA Banner (AttaxMidCTA)
- `bg-[#1d1ee3] rounded-[24px] p-6 md:p-16`
- `shadow-[0_32px_80px_rgba(29,30,227,0.35)]`
- Decoration layers: dot grid `opacity-[0.07]`, corner white glows, diagonal shine `opacity-20`
- Badge: `bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2`
- All text white; CTA button inverts to white bg with blue text + circle

### FAQ Accordion (AttaxFAQ)
- Section: `bg-[#f7f9ff] py-[60px] md:py-[120px]`
- Two-column layout: heading/CTA left (`w-full lg:w-[360px]`), accordion right (`flex-1`)
- Question: `text-[18px]` weight 500 `#0a1628`, hover to `#1d1ee3`
- Toggle: `w-[36px] h-[36px] rounded-full bg-[#eaeaff]`, Plus icon `#1d1ee3`; hover: `bg-[#1d1ee3]` white icon
- Answer: `text-[16px]` `rgba(10,22,40,0.65)` `leading-[1.6] pb-6 pr-12`
- CTA button: dark navy `bg-[#0a1628]` pill — never primary blue

### Process Accordion (AttaxProcess)
- Section: `bg-[#f7f9ff]`
- Rows: `bg-white border-t border-[rgba(0,0,0,0.07)]`
- Step number: `text-[18px] md:text-[24px]` weight 500, Inter Tight
- Step title: `text-[16px] md:text-[20px]` Inter Tight weight 500 — add `not-italic font-['Inter_Tight',sans-serif]` class explicitly to override inherited Playfair
- Expanded: description + checklist + "Explore Service" blue pill with `self-start`
- Bottom bar: `bg-[#0a1628] rounded-[18px]`, TrustPilot badge right-aligned on desktop

### Contact Form (AttaxContactForm)
- Section: `overflow-x-hidden`
- Card: `p-5 md:p-10 overflow-hidden`
- Layout: two-column `gap-8 lg:gap-16`, contact info left, form right
- Contact value text: flat `text-[17px]` (not responsive)
- Icon circles: `#eaeeff` bg, `#1d1ee3` icon
- Trustpilot wrapper: `w-full max-w-[240px]`
- Form submit: `w-full` (full-width, exempt from pill rule)

### TrustpilotBadge
- Container: `w-[199.953px] h-[116px] bg-[rgba(255,255,255,0.04)] rounded-[8px]`
- All internal sub-elements: `left-[14px]` offset from edge
- Wrapper scale: `scale-[0.92] md:scale-[1.08] origin-left py-2 md:py-0`

### Footer
- BG: `bg-[#0a1628]`
- CTA bar: H2 `text-[32px] lg:text-[44px]`, "tax problem?" in Playfair italic
- "Free Consultation" button: `bg-white text-[#0a1628]` with `bg-[#1d1ee3]` mail circle — never primary blue
- Phone link: `text-[14px] md:text-[15px] text-white/70`
- Section headers: `text-[13px]` uppercase `tracking-wider` weight 600
- Nav links: `text-[15px] text-white/50` weight 400
- Contact links: `text-[15px] text-white/50` weight 400
- Newsletter: `bg-white/10 rounded-full`, input `min-w-0 text-[14px]`
- Bottom bar: `text-[12px] text-white/35`
- Social icons: `w-9 h-9 rounded-full bg-white/10`, hover `bg-[#1d1ee3]`

---

## 5. Layout Principles

### Widths & Gutters
- Standard content max: `max-w-[1200px] mx-auto`
- Extended layouts: `max-w-[1240px]`
- Navbar container: `max-w-[1440px]`
- Horizontal padding: `px-5 md:px-8` — always both mobile and desktop

### Section Vertical Spacing
- **Every section:** `py-[60px] md:py-[120px]` — no exceptions
- Hero: `pt-[100px] pb-[60px]` (clears fixed navbar, leaves breathing room below)
- Card internal: `p-5 md:p-8`

### Section BG Alternation
`bg-white` → `bg-[#f7f9ff]` → `bg-white` → `bg-[#f7f9ff]`
- Never two consecutive white sections
- Dark sections (`bg-[#0a1628]`) break the pattern intentionally

### Mobile-First Grid Rules
- All grids collapse to single column on mobile
- Use `col-span-12 lg:col-span-X` — never bare `col-span-6`
- Form inputs: `grid-cols-1 sm:grid-cols-2` — never bare `grid-cols-2`
- Sticky sidebars: `md:sticky md:top-X` — remove sticky behavior on mobile
- Anchor nav rows in heroes: `hidden md:flex`

### Responsive Image Heights
| Context | Mobile | Desktop |
|---------|--------|---------|
| Hero images | `h-[220px] sm:h-[360px]` | `md:h-[480px] lg:h-auto` |
| Feature/split images | `h-[300px] md:h-[480px]` | `lg:h-[620px]` |
| Process image panel | `min-h-[360px]` | `lg:min-h-[520px]` |
| Problem section image | `h-[420px]` | `lg:h-auto lg:self-stretch` |

---

## 6. Animation System

### Scroll Entry (standard)
```ts
initial={{ opacity: 0, y: 30 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.7 }}
```
- `useInView(ref, { once: true, margin: "-80px" })`
- Stagger: `delay: 0.1 * index`

### Hero Entry (above fold — no inView)
```ts
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.1 }}
```

### Button Interactions
```ts
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
```
Primary blue CTA adds: `boxShadow: "0 12px 40px rgba(29,30,227,0.45)"`

### Scroll Cue
```ts
animate={{ y: [0, 8, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

---

## 7. Content & Copy Rules

- **Terminology:** "Tax Specialist" always — never "Enrolled Agent"
- **Tagline:** "The fastest growing tax relief company in the nation" (no debt figures)
- **Phone:** +1 (949) 287-3015
- **Email (General):** info@attaxsolutions.com
- **Email (Support):** support@attaxsolutions.com
- **Email (Founder):** omar@attaxsolutions.com
- **HQ:** Irvine, CA
- **Calendly:** https://calendly.com/attax-solutions (all "Book" / "Schedule" CTAs)
- **Eyebrow format:** Always `[Label]` with square brackets, primary blue

---

## 8. figma:asset/ Import Rule

Files using `import x from "figma:asset/..."` render blank in the browser. Always replace with Unsplash URLs:

```ts
// BROKEN
import imgBackground from "figma:asset/abc123.png";

// CORRECT
const imgBackground = "https://images.unsplash.com/photo-XXXXXX?...&w=1080";
```

Choose contextually appropriate images: professional office settings, tax documents, consultation meetings, confident professionals.

---

## 9. Page Structure

Every page follows this shell:

1. `AttaxNavbar` (fixed, outside scroll flow)
2. Hero (dark, `bg-[#0a1628]`, page-specific)
3. Content sections (alternating white / `#f7f9ff`)
4. `AttaxFAQ` (shared component, `bg-[#f7f9ff]`)
5. `AttaxContactForm` (shared component, `bg-white`)
6. `AttaxFooter` (dark, `bg-[#0a1628]`)

### Page Hierarchy
1. Home (`/`)
2. Services (`/services`) — components in `src/app/components/attax/services/`
3. Our Process (`/our-process`) — components in `src/app/components/attax/process/`
4. Clarity (`/clarity`) — components in `src/app/components/attax/clarity/`
5. About Us (`/about`) — components in `src/app/components/attax/about/`
6. Resources (`/resources`) — components in `src/app/components/attax/resources/`
7. Contact (`/contact`) — components in `src/app/components/attax/contact/`
8. Legal (`/privacy`, `/terms`)
