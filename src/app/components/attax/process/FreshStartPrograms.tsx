import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { SECTION_H2_CLASS_LIGHT, SECTION_H2_STYLE } from "../../../lib/heroH1";

const programs = [
  {
    name: "Offer in Compromise (OIC)",
    tag: "Settle for Less",
    desc: "Settle for less than you owe when the IRS accepts your offer. We prepare the full financial package and submission.",
    link: "/contact",
  },
  {
    name: "Installment Agreement",
    tag: "Structured Payments",
    desc: "Monthly payments that stop most collection actions. We match you to the installment type that fits your case.",
    link: "/contact",
  },
  {
    name: "Currently Non-Collectible (CNC)",
    tag: "Pause Collections",
    desc: "Collection pauses when you cannot pay basic expenses. No levies or garnishments while the status holds.",
    link: "/contact",
  },
  {
    name: "Penalty Abatement",
    tag: "Reduce Your Balance",
    desc: "Remove or reduce penalties through First-Time Abatement or Reasonable Cause when you qualify.",
    link: "/contact",
  },
  {
    name: "Innocent Spouse Relief",
    tag: "Joint Return Protection",
    desc: "Relief when a joint return understated tax and you were not at fault. We map you to the right IRS option.",
    link: "/contact",
  },
];

export function FreshStartPrograms() {
  return (
    <section id="fresh-start" className="py-[60px] md:py-[120px] bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* Header */}
        <div className="max-w-[680px] lg:max-w-none mb-12 md:mb-16 min-w-0">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [IRS Fresh Start Programs]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${SECTION_H2_CLASS_LIGHT} mb-5 lg:whitespace-nowrap`}
            style={SECTION_H2_STYLE}
          >
            IRS Fresh Start Programs — What’s Available to You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[15px] md:text-[17px] text-[#0a1628]/55 leading-[1.7] lg:whitespace-nowrap"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            These are official IRS programs. We determine which you qualify for based on your specific case — not guesswork.
          </motion.p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-[20px] p-6 md:p-7 flex flex-col gap-4 group hover:shadow-[0_12px_32px_rgba(29,30,227,0.08)] transition-shadow"
              style={{ border: "1px solid rgba(10,22,40,0.06)" }}
            >
              <span
                className="inline-block self-start text-[11px] font-bold uppercase tracking-widest text-[#1d1ee3] bg-[#eaeeff] px-3 py-1 rounded-full"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {prog.tag}
              </span>
              <h3
                className="text-[18px] md:text-[20px] font-semibold text-[#0a1628] leading-snug"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {prog.name}
              </h3>
              <p
                className="text-[14px] text-[#0a1628]/55 leading-snug flex-1 line-clamp-2 min-h-0 min-w-0"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {prog.desc}
              </p>
              <Link
                to={prog.link}
                className="inline-flex items-center gap-2 text-[#1d1ee3] text-[13px] font-semibold mt-auto group-hover:gap-3 transition-all"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                See if you qualify
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="bg-[#1d1ee3] rounded-[20px] p-6 md:p-7 flex flex-col justify-between"
          >
            <p
              className="text-[20px] md:text-[24px] font-semibold text-white leading-snug mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Not sure which program applies to you?
            </p>
            <Link
              to="/contact"
              className="self-start group inline-flex items-center gap-4 bg-white rounded-[50px] pl-4 pr-1 py-1 hover:bg-white/90 transition-colors"
            >
              <span
                className="text-[#1d1ee3] text-[14px] font-semibold"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Free Consultation
              </span>
              <div className="w-9 h-9 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
