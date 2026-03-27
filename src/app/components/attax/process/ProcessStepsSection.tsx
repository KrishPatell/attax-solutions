import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    num: "01",
    label: "Complimentary Consultation",
    summary: "A free call with a licensed Tax Specialist. We listen first — no judgment, no pressure, no sales pitch.",
    bullets: [
      "Understand your full tax situation in plain language",
      "Identify which IRS programs may apply to your case",
      "You don't need documents to start",
    ],
  },
  {
    num: "02",
    label: "Detailed Case Analysis",
    summary: "We pull your IRS transcripts directly and build a complete picture of what you owe, what you qualify for, and what options are on the table.",
    bullets: [
      "IRS transcript access — no paperwork needed from you",
      "Full assessment of balances, penalties, and active actions",
      "Clear options presented before any fees are discussed",
    ],
  },
  {
    num: "03",
    label: "Strategic Defense",
    summary: "We represent you directly before the IRS. You don't take calls, attend meetings, or respond to notices — we handle all of it.",
    bullets: [
      "All IRS communications go through our team",
      "We file, negotiate, and respond on your behalf",
      "Active enforcement halted as quickly as possible",
    ],
  },
  {
    num: "04",
    label: "Resolution & Close",
    summary: "Your case reaches a defined, documented conclusion — a settlement, payment plan, or collections stopped.",
    bullets: [
      "Outcome formalized with the IRS in writing",
      "Compliance plan provided so this never happens again",
      "Case summary and full documentation delivered to you",
    ],
  },
];

export function ProcessStepsSection() {
  return (
    <section id="process-steps" className="py-[60px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[13px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Step by Step]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-[#0a1628] font-semibold"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Four Steps.{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                One Team.
              </span>
              <br />
              Your Resolution.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 border border-[rgba(10,22,40,0.12)] rounded-[50px] pl-5 pr-1.5 py-1.5 text-[14px] font-medium text-[#0a1628] hover:border-[#1d1ee3] hover:text-[#1d1ee3] transition-colors group"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              <span>Start your case</span>
              <div className="w-9 h-9 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300 shrink-0">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Steps list */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="hidden md:block absolute left-[27px] top-6 bottom-6 w-px bg-[rgba(10,22,40,0.07)]"
            aria-hidden="true"
          />

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex gap-8 md:gap-14 py-9 md:py-10 border-b border-[rgba(10,22,40,0.06)] last:border-0 group"
              >
                {/* Number dot on timeline */}
                <div className="hidden md:flex shrink-0 pt-0.5">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[rgba(10,22,40,0.08)] flex items-center justify-center z-10 group-hover:border-[#1d1ee3] group-hover:bg-[#eaeeff] transition-all duration-300">
                    <span
                      className="text-[13px] font-bold text-[#0a1628]/35 group-hover:text-[#1d1ee3] transition-colors"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-5 md:gap-16">
                  {/* Title column */}
                  <div className="md:w-[260px] shrink-0">
                    <span
                      className="md:hidden text-[12px] font-bold text-[#1d1ee3] uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {step.num}
                    </span>
                    <h3
                      className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#0a1628] leading-snug"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {step.label}
                    </h3>
                  </div>

                  {/* Description + bullets */}
                  <div className="flex-1">
                    <p
                      className="text-[15px] md:text-[16px] text-[#0a1628]/55 leading-[1.7] mb-5"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {step.summary}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-[5px] h-[5px] rounded-full bg-[#1d1ee3] mt-[9px] shrink-0" />
                          <span
                            className="text-[14px] text-[#0a1628]/50 leading-[1.65]"
                            style={{ fontFamily: "'Inter Tight', sans-serif" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
