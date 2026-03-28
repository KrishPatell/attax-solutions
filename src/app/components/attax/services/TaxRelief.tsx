import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

type ReliefProgram = {
  title: string;
  description: string;
  tags: [string, string];
  image: string;
  imageAlt: string;
};

const programs: ReliefProgram[] = [
  {
    title: "Offer in Compromise (OIC)",
    description:
      "Settle your total tax debt for less than the full balance when your financial picture meets IRS standards. We prepare the package, document hardship, and negotiate from a position of fact—not hope.",
    tags: ["Settlement", "IRS"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Tax professional reviewing financial documents for an offer in compromise",
  },
  {
    title: "Installment Agreements",
    description:
      "Structured monthly plans that fit real cash flow and stop escalations when handled correctly. We align the term, payment, and compliance path so you can pay over time without surprise enforcement.",
    tags: ["Payment plans", "Collections"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Consultation on payment options and installment planning",
  },
  {
    title: "Currently Not Collectible (CNC)",
    description:
      "When paying the IRS would leave you unable to meet basic living expenses, CNC can pause active collection. We document your situation thoroughly so the pause is defensible if the IRS pushes back.",
    tags: ["Hardship", "Pause collections"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Supportive meeting about financial hardship and tax options",
  },
  {
    title: "Penalty Abatement",
    description:
      "Penalties can inflate a balance fast. If you had reasonable cause—or qualify under first-time abatement rules—we request removal methodically so you are not paying more than the law requires.",
    tags: ["Penalties", "Compliance"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Professional review of IRS notices and penalty history",
  },
  {
    title: "Innocent Spouse Relief",
    description:
      "When a joint return understates tax because of a spouse or ex-spouse, you may not have to carry the full liability. We map the facts to the right relief type and handle the IRS correspondence for you.",
    tags: ["Joint returns", "Liability"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Confidential discussion about joint tax liability",
  },
];

export function TaxRelief() {
  return (
    <section id="tax-relief" className="py-[72px] md:py-[120px] lg:py-[140px] bg-white scroll-mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1d1ee3] text-[13px] md:text-[14px] uppercase tracking-widest font-bold block mb-5"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Tax Relief
        </motion.span>

        {/* Header: headline + primary CTA (matches long services list pattern) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-10 md:mb-14 lg:mb-16 pb-10 md:pb-14 border-b border-[rgba(10,22,40,0.08)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-[820px] min-w-0"
          >
            <h2
              className="text-[#0a1628] font-semibold text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              <span className="block">
                Strategic IRS Relief Through{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Program Navigation
                </span>
              </span>
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.75] text-[rgba(10,22,40,0.58)] max-w-[640px]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Tax relief is not one-size-fits-all. We match your income, assets, and compliance history to the
              programs the IRS actually grants—then we execute the paperwork, deadlines, and follow-up so nothing
              slips.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="shrink-0 lg:pt-2"
          >
            <Link
              to="/our-process"
              className="group block w-fit lg:ml-auto rounded-[50px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span
                className="inline-flex items-center gap-4 md:gap-5 bg-[#1d1ee3] text-white rounded-[50px] pl-5 md:pl-6 pr-1.5 py-1.5 text-[14px] md:text-[15px] font-medium shadow-[0_12px_40px_rgba(29,30,227,0.25)]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <span className="whitespace-nowrap">Explore Fresh Start Programs</span>
                <span className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} className="text-[#1d1ee3]" aria-hidden />
                </span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Long list: image | content + arrow */}
        <div className="flex flex-col">
          {programs.map((program, idx) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: Math.min(idx * 0.05, 0.2) }}
              className={`py-10 md:py-14 lg:py-16 ${
                idx < programs.length - 1 ? "border-b border-[rgba(10,22,40,0.08)]" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-14">
                {/* Image — full width on mobile, fixed proportion on desktop */}
                <div className="w-full lg:w-[min(44%,480px)] shrink-0">
                  <div className="relative w-full aspect-[4/3] rounded-[18px] md:rounded-[22px] overflow-hidden bg-[#f0f2f8] shadow-[0_20px_50px_rgba(10,22,40,0.08)] border border-[rgba(0,0,0,0.04)]">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Title + CTA row first, then tags, then body copy */}
                <div className="flex-1 min-w-0 flex flex-col gap-6 lg:gap-8">
                  <div className="flex flex-row items-center justify-between gap-4 sm:gap-8">
                    <h3
                      className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#0a1628] leading-[1.15] max-w-[min(520px,calc(100%-4rem))] min-w-0"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {program.title}
                    </h3>
                    <Link
                      to="/contact"
                      className="shrink-0 group"
                      aria-label={`Learn more about ${program.title}`}
                    >
                      <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-[rgba(10,22,40,0.08)] bg-[rgba(10,22,40,0.04)] text-[#0a1628] transition-all duration-300 group-hover:bg-[#1d1ee3] group-hover:border-[#1d1ee3] group-hover:text-white">
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-md bg-[rgba(10,22,40,0.05)] text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-[rgba(10,22,40,0.55)]"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.75] text-[rgba(10,22,40,0.58)] max-w-[640px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-[rgba(10,22,40,0.08)] text-center"
        >
          <p
            className="text-[14px] md:text-[15px] text-[rgba(10,22,40,0.45)] mb-5"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Not sure which program applies? We’ll tell you in a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#1d1ee3] font-bold text-[15px] hover:gap-3 transition-all"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Schedule a free review
            <ArrowRight size={18} className="shrink-0" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
