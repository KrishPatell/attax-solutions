import { motion } from "motion/react";

export function ResourcesHero() {
  return (
    <section className="bg-white pt-[180px] pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
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
          className="text-[56px] lg:text-[72px] leading-[1.1] text-[#0a1628] font-medium max-w-[900px] mx-auto mb-6"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          The ATTAX Insights <br />
          <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tax Resources & Blog
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
