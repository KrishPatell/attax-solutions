import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Light section — matches rest of About. Sticky left column needs NO overflow:hidden on ancestors.
 */
const BG = "#ffffff";
const TEXT_PRIMARY = "#0a1628";
const TEXT_SECONDARY = "rgba(10, 22, 40, 0.58)";
const LINE_INACTIVE = "rgba(10, 22, 40, 0.12)";
const LINE_ACTIVE = "#1d1ee3";

export interface TeamRole {
  title: string;
  role: string;
  description: string;
}

const ROLES: TeamRole[] = [
  {
    title: "Case Managers",
    role: "Your first point of contact",
    description:
      "They guide onboarding, gather documents, keep your file organized, and make sure nothing falls through the cracks. You always know what the IRS or state has requested and what we need from you next.",
  },
  {
    title: "Tax Consultants",
    role: "Strategy & program fit",
    description:
      "They review your financial picture, transcripts, and enforcement stage to map realistic options—installment agreements, offers in compromise, currently not collectible status, and more—before any paperwork goes to the IRS.",
  },
  {
    title: "Tax Specialists & Enrolled Agents",
    role: "Licensed IRS representation",
    description:
      "Our Enrolled Agents and specialists speak directly with revenue officers, appeals, and ACS. They handle audits, collections, levies, and negotiations so you are not facing the IRS alone.",
  },
  {
    title: "Compliance & Filing Support",
    role: "Returns, deadlines, and transcripts",
    description:
      "They help you get current on filings where needed, pull and interpret IRS transcripts, and align your account status with the resolution path your case requires.",
  },
  {
    title: "Resolution & Negotiation",
    role: "Offers, agreements, and relief",
    description:
      "They build and submit structured resolutions—OIC packages, payment plans, penalty abatement requests, lien and levy releases—and follow through until the IRS or state responds.",
  },
];

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  /**
   * Scroll progress through THIS section only (0 → 1):
   * rect.top vs viewport; scrolledPastStart = -rect.top; divide by (section height − viewport height), clamped.
   */
  const updateProgress = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrolledPastStart = -rect.top;
    const scrollRange = Math.max(1, rect.height - vh);
    setProgress(clamp01(scrolledPastStart / scrollRange));
  }, []);

  useEffect(() => {
    const onScrollOrResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  return (
    <section
      ref={sectionRef}
      id="our-team"
      className="relative py-[72px] md:py-[120px]"
      style={{ backgroundColor: BG, color: TEXT_PRIMARY }}
    >
      {/* overflow:hidden breaks position:sticky — do not add it here */}

      <div className="max-w-[1200px] mx-auto px-5 md:px-0 relative min-w-0">
        {/* Mobile: left-edge progress line */}
        <div
          className="md:hidden absolute left-5 top-[72px] bottom-[72px] w-[3px] -translate-x-1/2 pointer-events-none rounded-full"
          style={{ backgroundColor: LINE_INACTIVE }}
          aria-hidden
        >
          <div
            className="absolute top-0 left-0 w-full origin-top rounded-full"
            style={{
              height: `${progress * 100}%`,
              backgroundColor: LINE_ACTIVE,
            }}
          />
        </div>

        {/*
          Default grid align-items is stretch. Both columns share the row height (tall column wins),
          so the left cell is as tall as the scrolling right column — that gives position:sticky
          a tall containing block to slide within. md:items-start breaks sticky by shrinking the
          left cell to content height only.
        */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:items-stretch min-w-0">
          {/* Desktop: vertical center line */}
          <div
            className="hidden md:block pointer-events-none absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0 rounded-full"
            style={{ backgroundColor: LINE_INACTIVE }}
            aria-hidden
          >
            <div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                height: `${progress * 100}%`,
                backgroundColor: LINE_ACTIVE,
              }}
            />
          </div>

          {/* Left: fill stretched row height so sticky has a tall containing block (see grid comment above). */}
          <div className="relative z-[1] pl-8 md:pl-0 md:pr-8 md:h-full md:min-h-0 min-w-0">
            <div className="sticky top-28 max-w-[480px] pb-4 md:pb-0 z-[1]">
              <p
                className="text-[14px] uppercase tracking-widest font-bold mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", color: LINE_ACTIVE }}
              >
                [Our Team]
              </p>
              <h2
                className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.12] font-semibold mb-5"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Who We{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Are
                </span>
              </h2>
              <p
                className="text-[15px] md:text-[16px] leading-[1.75] max-w-[420px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", color: TEXT_SECONDARY }}
              >
                No headshots—just the roles that touch your case from first call to resolution. Everyone here works toward
                the same outcome: clarity, compliance, and the strongest position we can put you in with the IRS and state
                agencies.
              </p>
            </div>
          </div>

          {/* Right: scrolling role cards */}
          <div className="relative z-[1] pl-10 md:pl-14 md:pr-0 min-w-0">
            {ROLES.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <article
                  key={item.title}
                  className="relative mb-[min(42vh,320px)] last:mb-16 md:last:mb-24"
                >
                  <span
                    className="hidden md:flex absolute top-0 -left-14 -translate-x-1/2 z-[2] min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-[#1d1ee3]/20 text-[16px] font-extrabold tabular-nums tracking-tight shadow-[0_4px_14px_rgba(29,30,227,0.12)]"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      color: LINE_ACTIVE,
                      backgroundColor: "#eaeeff",
                    }}
                    aria-hidden
                  >
                    {num}
                  </span>

                  <div>
                    <span
                      className="md:hidden inline-flex items-center justify-center min-w-10 min-h-10 rounded-full text-[15px] font-extrabold tabular-nums tracking-tight mb-3 border-2 border-[#1d1ee3]/25 shadow-sm"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        color: LINE_ACTIVE,
                        backgroundColor: "#eaeeff",
                      }}
                    >
                      {num}
                    </span>
                    <h3
                      className="text-[22px] md:text-[26px] font-semibold leading-tight mb-2"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[13px] md:text-[14px] font-medium uppercase tracking-wide mb-4"
                      style={{ fontFamily: "'Inter Tight', sans-serif", color: LINE_ACTIVE }}
                    >
                      {item.role}
                    </p>
                    <p
                      className="text-[15px] md:text-[16px] leading-[1.8] max-w-[520px]"
                      style={{ fontFamily: "'Inter Tight', sans-serif", color: TEXT_SECONDARY }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
