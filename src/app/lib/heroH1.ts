import type { CSSProperties } from "react";

/** Primary marketing H1 — matches AboutHero (size, line-height, tracking, Inter Tight 700). */
export const HERO_H1_CLASS =
  "text-[34px] md:text-[44px] lg:text-[64px] leading-[1.2] md:leading-[1.1] tracking-[-0.5px]";

export const HERO_H1_STYLE: CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontWeight: 700,
};

export const HERO_H1_CLASS_ON_LIGHT = `${HERO_H1_CLASS} text-[#03030f]`;
export const HERO_H1_CLASS_ON_DARK = `${HERO_H1_CLASS} text-white`;

/** Primary section H2 on light backgrounds — matches AttaxServices / home “Services” block. */
export const SECTION_H2_CLASS_LIGHT =
  "text-[32px] md:text-[36px] lg:text-[50px] leading-[1.2] md:leading-[1.1] text-[#03030f] font-semibold";

export const SECTION_H2_STYLE: CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
};
