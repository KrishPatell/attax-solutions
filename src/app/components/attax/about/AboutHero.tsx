import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import svgPaths from "../../../../imports/svg-tbbnbj1wyr";
import { Breadcrumbs } from "./Breadcrumbs";
import heroImg from "../../../../assets/hero-tax-seniors.jpg";

export function AboutHero() {
  return (
    <section className="bg-white pt-[120px] md:pt-[160px] pb-[60px] md:pb-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Breadcrumbs current="About Us" light />
        </motion.div>

        {/* Stars + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 mb-7"
        >
          <div className="h-[16px] relative shrink-0 w-[64px]">
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

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[34px] md:text-[44px] lg:text-[64px] leading-[1.2] md:leading-[1.1] text-[#03030f] tracking-[-0.5px] mb-7"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
        >
          Resolve Your IRS Debt<br />
          with{" "}
          <span
            className="italic font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Confidence
          </span>
        </motion.h1>

        {/* Paragraph + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12 md:mb-16"
        >
          <p
            className="text-[15px] md:text-[17px] text-[#03030f]/55 leading-[1.7] max-w-[460px]"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            ATTAX Solutions provides direct IRS representation and case resolution. Honest advocacy, real results, zero pressure.
          </p>

          <Link
            to="/contact"
            className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 font-bold text-[15px] inline-flex items-center gap-5 self-start w-fit"
          >
            <span>Book a Free Call</span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              <ArrowUpRight size={18} className="text-[#1d1ee3]" />
            </div>
          </Link>
        </motion.div>

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="rounded-[20px] md:rounded-[28px] overflow-hidden h-[340px] md:h-[520px] lg:h-[620px] w-full"
        >
          <ImageWithFallback
            src={heroImg}
            alt="ATTAX Solutions Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
