import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ServicesHero() {
  return (
    <section className="bg-[#f9faff] pt-[140px] md:pt-[200px] pb-[60px] md:pb-[100px] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1d1ee3]/5 rounded-full blur-[120px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a5b4fc]/10 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4 md:mb-6"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Our Services]
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[34px] md:text-[52px] lg:text-[72px] leading-[1.1] text-[#0a1628] font-medium mb-6 md:mb-10"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Comprehensive Tax Relief Services —{" "}
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tailored to Your Situation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[rgba(10,22,40,0.6)] mb-8 md:mb-12 max-w-[800px] mx-auto"
          >
            We don't apply one-size-fits-all solutions. Every case gets a dedicated Tax Specialist and a strategy built around your specific debt, history, and circumstances.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29,30,227,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 text-[14px] md:text-[16px] font-medium flex items-center gap-5 w-fit shadow-[0_10px_30px_rgba(29,30,227,0.1)] transition-all group"
              >
                <span className="whitespace-nowrap">Start Your Complimentary Consultation</span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowRight size={18} className="text-[#1d1ee3]" />
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
