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

## Critical Constraints
- **Mobile-First Refinement**: Standardized H2 tags to **32px** and H3 tags to **26px** on mobile.
- **Button Sizing**: All buttons must have a maximum width of **250-280px** on mobile; use `mx-auto` for centering.
- **Section Spacing**: Consistent horizontal padding (**px-5**) on mobile. Standard vertical padding: `py-[60px]` (Mobile) / `py-[120px]` (Desktop).
- **Icon Circles**: For contact/feature lists, use **50x50px** (rounded-full) containers with background color `#EAEEFF` and primary blue icons.
- **Device Support**: 1440px desktop layout; mobile optimization is a priority.
- **Terminology**: ALWAYS use "Tax Specialist", NEVER "Enrolled Agent".
- **Contact Details**: 
  - HQ: Irvine, CA.
  - Phone: +1 (949) 287-3015.
  - Emails: `info@attaxsolutions.com` (General), `support@attaxsolutions.com` (Support), `omar@attaxsolutions.com` (Founder).
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
