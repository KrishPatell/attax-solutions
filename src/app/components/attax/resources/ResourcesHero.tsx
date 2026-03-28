import { motion } from "motion/react";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../../../lib/heroH1";

export function ResourcesHero() {
  return (
    <section className="bg-white pt-[120px] md:pt-[180px] pb-[40px] md:pb-[60px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          [Resources]
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${HERO_H1_CLASS_ON_LIGHT} max-w-[860px] mx-auto mb-7`}
          style={HERO_H1_STYLE}
        >
          Understand Your Situation{" "}
          <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
            Before You Do Anything Else
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-[#0a1628]/55 max-w-[580px] mx-auto leading-[1.7]"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Real information about IRS processes, tax terms, and what your notices mean — written clearly, without the legal fog.
        </motion.p>
      </div>
    </section>
  );
}
