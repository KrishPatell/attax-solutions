import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function ProcessHero() {
  return (
    <section className="relative pt-[120px] md:pt-[180px] pb-[60px] md:pb-[100px] overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20">
        <div className="flex flex-col items-center text-center gap-6 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#1d1ee3] text-[14px] md:text-[16px] font-medium font-['Inter_Tight']">
              [Our Process]
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[34px] md:text-[44px] lg:text-[72px] leading-[1.1] text-[#0a1628] font-medium font-['Inter_Tight'] max-w-[900px]"
          >
            Strategic Solutions <br />
            That Drive <span className="italic font-['Playfair_Display']">Success</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[16/10] md:aspect-[16/7] lg:aspect-[21/9] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1440"
            className="w-full h-full object-cover"
            alt="Tax Specialists Team"
          />
        </motion.div>
      </div>
    </section>
  );
}
