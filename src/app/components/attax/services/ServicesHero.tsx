import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Breadcrumbs } from "../about/Breadcrumbs";
import svgPaths from "../../../../imports/svg-tbbnbj1wyr";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../../../lib/heroH1";

export function ServicesHero() {
  return (
    <section className="bg-[#f9faff] pt-[120px] md:pt-[160px] pb-8 md:pb-12 lg:pb-14 rounded-b-[28px] md:rounded-b-[40px] lg:rounded-b-[48px] mb-8 md:mb-12 shadow-[0_28px_80px_rgba(29,30,227,0.07)] border-b border-[rgba(29,30,227,0.08)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="w-full mb-8 md:mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Breadcrumbs current="Services" light />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex flex-wrap items-center gap-2 mb-7"
          >
            <div className="h-[16px] relative shrink-0 w-[64px]" aria-hidden>
              {[0, 12, 24, 36, 48].map((left, index) => (
                <div key={index} className="absolute size-[16px] top-0" style={{ left: `${left}px` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path
                      d={svgPaths.p17f48400}
                      fill="#F59E0B"
                      stroke="#F59E0B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-[#03030f]/50" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              The fastest growing tax relief company in the nation
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${HERO_H1_CLASS_ON_LIGHT} min-w-0 flex-1`}
              style={HERO_H1_STYLE}
            >
              Tax Relief Services
              <br />
              For{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Situation
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="shrink-0 sm:pt-2 lg:pt-4"
            >
              <Link to="/contact" className="block w-fit sm:ml-auto">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-5 w-fit group"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  <span className="whitespace-nowrap">Free Consultation</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                    <ArrowRight size={17} className="text-[#1d1ee3]" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.65] text-[rgba(3,3,15,0.68)] max-w-[720px] mt-6 md:mt-8 w-full"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Every case gets a dedicated Tax Specialist and a strategy built around your specific debt, history, and circumstances — not a template.
          </motion.p>
        </div>

        {/* Hero image — rounded capsule so the section ends with clear geometry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative rounded-[20px] md:rounded-[24px] lg:rounded-[28px] overflow-hidden h-[220px] sm:h-[340px] md:h-[460px] lg:h-[540px] border border-[rgba(29,30,227,0.1)] shadow-[0_16px_48px_rgba(10,22,40,0.08)]"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1440"
            alt="ATTAX Solutions Tax Specialists at work"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/25 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
