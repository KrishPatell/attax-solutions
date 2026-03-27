import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function ServicesHero() {
  return (
    <section className="bg-white pt-[120px] md:pt-[160px] pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* Label + heading + desc + CTA — left-aligned */}
        <div className="max-w-[820px] mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1d1ee3] text-[13px] uppercase tracking-widest font-bold block mb-5"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Our Services]
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] md:text-[58px] lg:text-[76px] leading-[1.05] text-[#0a1628] font-semibold mb-8"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Comprehensive Tax{" "}
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Relief
            </span>
            {" "}Services
            <br />
            Tailored to{" "}
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Situation
            </span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] md:text-[17px] leading-[1.7] text-[rgba(10,22,40,0.55)] max-w-[480px]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Every case gets a dedicated Tax Specialist and a strategy built around your specific debt, history, and circumstances — not a template.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="shrink-0"
            >
              <Link to="/contact">
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
        </div>

        {/* Full-width hero image — flush bottom, rounded top corners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative rounded-t-[20px] overflow-hidden h-[220px] sm:h-[340px] md:h-[460px] lg:h-[540px]"
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
