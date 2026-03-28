/**
 * Bundled tax-themed images used when remote Unsplash URLs fail (blocked network, ad blockers, etc.).
 */
import handlingCases from "../../../../assets/handling-cases.webp";
import taxPrep from "../../../../assets/Individual-Tax-Preparation-1024x683.webp";
import heroSeniors from "../../../../assets/hero-tax-seniors.jpg";
import dedicated from "../../../../assets/tab-dedicated-representation.jpg";
import transparency from "../../../../assets/tab-total-transparency.jpg";
import ctaDependent from "../../../../assets/contact-cta-dependent.jpg";
import processConsult from "../../../../assets/9ac5963fc0e77b27818e101e597556691793370f.webp";
import clarityHero from "../../../../assets/clarity-hero.webp";

export const defaultBlogImageFallback = handlingCases;

/** Hero / card image when `featuredImage` URL errors */
export const blogHeroFallbackBySlug: Record<string, string> = {
  "what-to-do-owe-irs-money": handlingCases,
  "irs-audit-survival-guide": taxPrep,
  "offer-in-compromise-guide": dedicated,
  "wage-garnishment-bank-levy-guide": transparency,
  "tax-debt-relief-scams": clarityHero,
  "penalty-abatement-guide": processConsult,
  "installment-agreement-guide": taxPrep,
  "tax-lien-guide": heroSeniors,
};

/** Mid-article image when `interstitialImage` URL errors */
export const blogInterstitialFallbackBySlug: Record<string, string> = {
  "what-to-do-owe-irs-money": taxPrep,
  "irs-audit-survival-guide": dedicated,
  "offer-in-compromise-guide": transparency,
  "wage-garnishment-bank-levy-guide": ctaDependent,
  "tax-debt-relief-scams": handlingCases,
  "penalty-abatement-guide": heroSeniors,
  "installment-agreement-guide": processConsult,
  "tax-lien-guide": clarityHero,
};

export const quoteAvatarFallback = dedicated;

export function heroFallbackForSlug(slug: string): string {
  return blogHeroFallbackBySlug[slug] ?? defaultBlogImageFallback;
}

export function interstitialFallbackForSlug(slug: string): string {
  return blogInterstitialFallbackBySlug[slug] ?? defaultBlogImageFallback;
}
