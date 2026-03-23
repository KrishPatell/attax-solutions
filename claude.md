# Claude Reference - ATTAX Solutions

## Context
This project is a pixel-perfect Figma replica for ATTAX Solutions, a tax relief company.

## Technical Stack
- React
- Tailwind CSS v4
- Motion (motion/react)
- React Router (Data mode)
- Lucide React (Icons)
- Playfair Display (Serif typography)
- Inter Tight (Sans-serif typography)

## Typography Scale (Current Standard — Do Not Change)
These are the exact correct values in use. Do not "fix" or "standardize" them.

### H1 — Page Heroes
- Main hero (AttaxHero, AboutHero): `text-[34px] md:text-[44px] lg:text-[72px]`
- Secondary page heroes (Services, Process, Contact, Clarity, Resources): `text-[48px]–text-[72px]` (desktop-first, large)

### H2 — Section Headers
- Standard: `text-[32px]` mobile → `md:text-[34px–48px] lg:text-[44px–56px]`
- Examples:
  - AttaxServices: `text-[32px] md:text-[36px] lg:text-[56px]`
  - AttaxProcess: `text-[32px] md:text-[34px]`
  - AttaxFAQ, AttaxFooter CTA: `text-[32px] lg:text-[44px–52px]`
  - AttaxMidCTA: `text-[32px] md:text-[40px] lg:text-[56px]`
  - AttaxResults: `text-[26px] md:text-[36px] lg:text-[52px]` *(intentionally smaller)*

### H3 — Card / Feature Titles
- Standard: `text-[24px] md:text-[26px]`
- Examples:
  - AttaxServices cards: `text-[24px] md:text-[26px]`
  - AttaxClarity cards: `text-[26px]`
  - WhatHappensNext steps: `text-[24px]`

### H4 — Section Label Badges (e.g. "COMPANY", "RESOURCES")
- Footer nav headers: `text-[13px]` uppercase tracking-wider
- Sub-section labels in components: `text-[16px]–text-[20px]` (varies by context — do not standardize)

## Critical Constraints
- **NO inner padding on max-width wrappers**: The `max-w-[1200px] mx-auto` content wrapper div must NEVER have horizontal padding (`px-*`, `md:px-*`, `lg:px-*`). Do not add `px-5`, `px-8`, or any responsive horizontal padding variant to this div. Ever. The correct pattern is always `className="max-w-[1200px] mx-auto"` — nothing else on that div.
- **Vertical Spacing**: Standard vertical padding: `py-[60px]` (Mobile) / `py-[120px]` (Desktop).
- **Button Sizing**: Use `self-start` on buttons inside flex-col containers to prevent full-width stretch. CTA pill pattern: `flex items-center gap-5 rounded-[50px] pl-5 pr-1.5 py-1.5` — `gap-5` is the standard gap, no `w-full` or `max-w` constraints.
- **Icon Circles**: For contact/feature lists, use **50x50px** (rounded-full) containers with background color `#EAEEFF` and primary blue icons.
- **Device Support**: 1440px desktop layout; mobile optimization is a priority.
- **Terminology**: ALWAYS use "Tax Specialist", NEVER "Enrolled Agent".
- **Contact Details**:
  - HQ: Newport Beach, CA.
  - Phone: +1 (855) 829-2829.
  - Emails: `info@attaxsolutions.com` (General), `support@attaxsolutions.com` (Support), `omar@attaxsolutions.com` (Founder — never display publicly on site).
- **Tagline**: "The fastest growing tax relief company in the nation" (No debt figures).
- **Design Patterns**: Glassmorphic CTA banners, trust badges, Optimo/AX hierarchy.

## Project Structure
- `/src/app/pages`: Main page views.
- `/src/app/components/attax`: Core branding and functional components.
- `/src/app/components/figma`: System components (ImageWithFallback).
- `/src/imports`: Imported assets (SVGs, paths).

## Page Hierarchy
1. Home (ATTAX)
2. Services
3. Our Process
4. Clarity (Portal)
5. About Us
6. Resources
7. Contact
8. Legal (Terms/Privacy)
