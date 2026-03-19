import { motion } from "motion/react";

export function ResourcesHero() {
  return (
    <section className="bg-white pt-[120px] md:pt-[180px] pb-[60px] md:pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-semibold block mb-4"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          [Blog]
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[34px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[#0a1628] font-medium max-w-[900px] mx-auto mb-6"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          The ATTAX Insights <br />
          <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tax Resources & Blog
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[14px] md:text-[16px] lg:text-[18px] text-[rgba(3,3,15,0.7)] max-w-[600px] mx-auto leading-[1.7]"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Expert guidance, real stories, and actionable strategies to help you navigate IRS challenges and reclaim your financial peace of mind.
        </motion.p>
      </div>
    </section>
  );
}
