# ATTAX Solutions - Project Guidelines

## 1. Project Overview
A pixel-perfect Figma replica for **ATTAX Solutions**, a national tax relief firm. The design follows a 1440px desktop-first approach with rigorous mobile optimization.

### Core Mission & Tone
- **Professionalism & Trust**: Use high-quality imagery, clean spacing, and trust indicators.
- **Urgency & Relief**: Content should feel supportive yet authoritative.
- **Growth Focus**: Emphasize being "The fastest growing tax relief company in the nation."

---

## 2. Design System

### Typography
- **Primary Sans**: `Inter Tight` (Used for body, UI elements, and most headings).
- **Secondary Serif**: `Playfair Display` (Used for italicized highlights within headings to add sophistication).
- **Mobile Scale**:
  - H2: Exactly **32px**.
  - H3: Exactly **26px**.
  - Body: Exactly **15px**.
  - Inner Card Body: Exactly **12px**.

### Color Palette
- **Primary Blue**: `#1D1EE3` (Brand primary).
- **Primary Dark**: `#1618C7` (Hovers/Active states).
- **Deep Navy**: `#0A1628` (Hero backgrounds, Footers).
- **Soft Light**: `#F7F9FF` (Alternating section backgrounds).
- **Accent Indigo**: `#A5B4FC` (Highlights, icons).
- **Border Light**: `#EAEEFF` (Card borders).
- **Icon Circle BG**: `#EAEEFF` (Used for contact list icon containers).

### Layout & Spacing
- **Desktop Grid**: 1440px container.
- **Section Gaps**: Default to `40px` or `80px` for clear separation.
- **Vertical Spacing**: `py-[120px]` (Desktop), `py-[60px]` (Mobile).
- **Strategic Platform Layout**: 
  - **Ratio**: 45% (Left content/image) : 55% (Right cards/features).
  - **Gap**: Maintain a strict `40px` gap between columns.
- **Mobile Padding**: Standard **20px** (px-5) horizontal padding across all sections.

---

## 3. UI Components & Patterns

### CTA Banners
- **Style**: Glassmorphic effects.
- **Properties**: `backdrop-blur-[20px] bg-white/10 border border-white/20`.
- **Button Style**: `rounded-full`, padding `pl-6 pr-2 py-2`, with an icon inside a secondary white circle.
- **Mobile Buttons**: Max width **250px-280px**; capped to prevent full-width stretching.

### Trust Indicators
- **Trust Bar**: A 4-column layout (Desktop) or 2-column (Mobile) featuring key trust metrics.
- **Badges**: Use Trustpilot and "Expert Representation" badges near high-intent CTAs.

### Cards
- **Structure**: `bg-[#F7F9FF]`, `rounded-[16px]`, `border-[#EAEEFF]`, `p-8`.
- **Shadows**: Subtle or none; prefer borders and background shifts for depth.

---

## 4. Technical Implementation

### Animations (`motion/react`)
- Use `motion` for all entry transitions.
- **Standard Entrance**: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`.
- **Staggered Lists**: Use `staggerChildren` for service cards or process steps.

### Editorial Guidelines
- **Terminology**: ALWAYS use **"Tax Specialist"**. NEVER use "Enrolled Agent".
- **National Tagline**: "The fastest growing tax relief company in the nation."
- **Debt Mention**: Do NOT mention specific debt figures (e.g., "$10k+") unless explicitly requested.
- **Contact Info**:
  - **HQ**: Irvine, CA.
  - **Phone**: `+1 (949) 287-3015`.

### File Organization
- `/src/app/components/attax`: Standard brand components.
- `/src/app/components/ui`: Shadcn-based primitives.
- `/src/app/pages`: Top-level route components.

---

## 5. Component Checklist
When creating new pages, ensure the following are included in the hierarchy:
1. `AttaxNavbar` (with scrolled state support).
2. `Hero` (with Playfair italic highlight).
3. `TrustBar` or `StatsSection`.
4. `StrategicPlatform` (45:55 layout).
5. `Glassmorphic Mid-CTA`.
6. `FAQ` or `Testimonials`.
7. `AttaxFooter` (with Irvine HQ details).

---

## 6. Development Workflow

### Adding a New Component
1. **File Location**: `/src/app/components/attax/` for brand-specific, `/src/app/components/ui/` for primitives.
2. **Naming**: PascalCase with `Attax` prefix for brand components (e.g., `AttaxNewFeature.tsx`).
3. **Props**: Explicitly type all props using TypeScript.
4. **Icons**: Use `lucide-react`. Wrap icons in a background circle or square for better visual hierarchy.

### Adding a New Page
1. Create the page in `/src/app/pages/`.
2. Register the route in `/src/app/Router.tsx`.
3. Follow the **Page Hierarchy** established in the checklist (Section 5).

---

## 7. Accessibility & Performance
- **Contrast**: Ensure text on glassmorphic backgrounds meets WCAG AA standards (use dark overlays if needed).
- **Responsive**: Always test on 375px (mobile) and 1440px (desktop). Use `hidden md:block` and `block md:hidden` sparingly; prefer flex/grid layout shifts.
- **Images**: Use `ImageWithFallback` for all external image assets.
