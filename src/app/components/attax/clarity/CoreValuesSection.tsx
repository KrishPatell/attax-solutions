import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import clarityScoreCardImg from "../../../../assets/tab-total-transparency.jpg";

/** Same interaction pattern as [ValuesSection.tsx](src/app/components/ValuesSection.tsx); copy is ATTAX Score / tax health. */
const gradeTabs = [
  {
    id: "filing",
    label: "Filing History",
    content:
      "Late or missing returns raise your risk score. We track your compliance across all years on file so gaps in your filing history never hide in the background.",
  },
  {
    id: "payment",
    label: "Payment Status",
    content:
      "Outstanding balances and deferred liabilities all factor into your overall tax health. We surface what you owe, what’s in limbo, and what the IRS sees the same day.",
  },
  {
    id: "penalty",
    label: "Penalty Accrual",
    content:
      "Failure-to-pay penalties compound daily. We flag them before they escalate so you can act while options like abatement or resolution programs still matter.",
  },
  {
    id: "liens",
    label: "Liens & Levies",
    content:
      "Federal tax liens and account levies are the IRS’s most aggressive actions. We detect them immediately and fold them into your score so nothing hits by surprise.",
  },
] as const;

export function CoreValuesSection() {
  const [active, setActive] = useState<string>(gradeTabs[0].id);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-[60px] md:py-[120px] bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: sticky visual + CTA (pattern from ValuesSection) */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="w-full lg:w-[min(440px,42%)] shrink-0 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative w-full aspect-[4/5] max-h-[560px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(10,22,40,0.08)]">
              <ImageWithFallback
                src={clarityScoreCardImg}
                alt="Transparent view of tax account monitoring and ATTAX Score insights"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <p
                  className="text-white/90 text-[13px] uppercase tracking-widest font-bold mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  ATTAX Clarity
                </p>
                <h3
                  className="text-[26px] md:text-[32px] leading-[1.15] text-white mb-6"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  What We Track.{" "}
                  <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                    What It Means.
                  </span>
                </h3>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector("#clarity-waitlist")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-3 bg-white rounded-[50px] pl-6 pr-2 py-2 w-fit group"
                >
                  <span
                    className="text-[#0a1628] text-[15px] md:text-[16px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    Join the Waitlist
                  </span>
                  <div className="w-11 h-11 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors duration-200">
                    <ArrowUpRight size={18} color="white" />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: heading + intro + tabs */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex-1 min-w-0 flex flex-col gap-8 lg:gap-10 lg:pt-1"
          >
            <div>
              <span
                className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                [ATTAX Score]
              </span>
              <h2
                className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.12] text-[#0a1628] mb-5"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                How We Grade{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your Tax Health
                </span>
              </h2>
              <p
                className="text-[15px] md:text-[17px] text-[#0a1628]/60 leading-[1.7] max-w-[560px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Your ATTAX Score is a single number from 0 to 100 — a real-time picture of your IRS standing. Select a
                factor below to see how it shapes your score and what we monitor for you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-x-1 gap-y-0 border-b border-[rgba(10,22,40,0.14)]">
                {gradeTabs.map((tab) => {
                  const isActive = active === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActive(tab.id)}
                      className="flex items-center gap-2 pb-3.5 px-3 -mx-1 first:pl-0 relative text-left touch-manipulation"
                      aria-pressed={isActive}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <motion.span
                        aria-hidden
                        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="w-2 h-2 rounded-full bg-[#1d1ee3] shrink-0"
                      />
                      <span
                        className="text-[15px] md:text-[17px] transition-colors duration-200 whitespace-nowrap"
                        style={{
                          fontFamily: "'Inter Tight', sans-serif",
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? "#0a1628" : "rgba(10,22,40,0.45)",
                        }}
                      >
                        {tab.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="clarity-grade-tab-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1d1ee3] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="min-h-[4.5rem]"
                >
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.65] text-[#0a1628]/65"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {gradeTabs.find((t) => t.id === active)?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
