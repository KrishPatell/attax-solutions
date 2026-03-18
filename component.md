# Component Reference - ATTAX Solutions

## Core Components

### `AttaxNavbar.tsx`
The primary navigation bar.
- **Props**: None.
- **Links**: Home, Services, Our Process, Clarity, About, Resources, Contact, Client Portal.
- **Responsive**: Mobile hamburger menu with full-screen overlay.
- **States**: Scrolled (scrolled property) for height reduction.

### `AttaxFooter.tsx`
The main footer.
- **Links**: Full site map.
- **Branding**: BrandLogo, HQ Address (Irvine), Phone (+1 (949) 287-3015).
- **Legals**: Terms and Conditions, Privacy Policy.

### `AttaxHero.tsx`
High-impact hero section with primary CTA and trust stats.
- **Visuals**: Dark background (#0a1628), blue accent glows.
- **Content**: 5-star rating, H1 with Playfair italic highlight, "The fastest growing tax relief company in the nation" tagline.

### `AttaxTrustBar.tsx`
A 4-column trust indicators bar (Expert Representation, Irvine HQ, Free Consultation, Client Portal).
- **Layout**: Grid-cols-2 on mobile, grid-cols-4 on desktop.

### `AttaxServices.tsx`
Showcases the three core services (Tax Resolution, Tax Relief, Tax Negotiation).
- **Layout**: 3-column cards with highlights.

### `AttaxProcess.tsx`
Four-step accordion (Consultation, Analysis, Strategic Defense, Resolution).
- **Interaction**: Animated image switching based on active step.

### `AttaxClarity.tsx`
"Coming Soon" section for the proprietary ATTAX Clarity platform.
- **Visuals**: White/Blue gradient background.
- **Interactions**: Waitlist email form.

### `AttaxMidCTA.tsx`
Glassmorphic CTA banner based on Optimo/AX design patterns.
- **Visuals**: Dark background, floating glow elements, blur effects.

### `AttaxResults.tsx`
Client results and success stories.
- **Layout**: 3-column grid on desktop.
- **Mobile Interaction**: Functions as a **manual, single-card carousel** slider.
- **Component Rules**: Cards use `#F7F9FF` backgrounds with `#EAEEFF` borders.

### `AttaxContactForm.tsx`
Primary lead generation form.
- **Layout**: Grid-cols-12. Left column (5) for ContactDetails, right column (7) for the form.
- **Inputs**: Name, Email, Phone, Message, Preferred Contact Method.
- **Handoff Detail**: Left side uses a vertical list of `#EAEEFF` circular icon containers (**50x50px**).
- **Mobile Optimization**: Buttons capped at **280px** width, `p-6` padding for form card.

### `ContactDetails.tsx`
Branded contact information list.
- **Visuals**: Vertical list with 50px rounded-full containers.
- **Typography**: Labels 15-16px (weight 500), values 20-22px (weight 600).
- **Data Points**: General Email, Support Email, Founder Direct, Phone Number, Irvine HQ.

### `BrandLogo.tsx`
Unifies branding across the application.
- **Props**: `className` for styling, `color` for light/dark modes.
- **Visuals**: Integrated Shield icon + ATTAX Solutions text.
