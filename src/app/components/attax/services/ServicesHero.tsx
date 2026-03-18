import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ServicesHero() {
  return (
    <section className="bg-[#f9faff] pt-[200px] pb-[100px] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1d1ee3]/5 rounded-full blur-[120px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a5b4fc]/10 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-6"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Our Services]
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] md:text-[64px] lg:text-[82px] leading-[1.05] text-[#0a1628] font-medium mb-10"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Comprehensive Tax Relief Services — <br />
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tailored to Your Situation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[22px] leading-[1.6] text-[rgba(10,22,40,0.6)] mb-12 max-w-[800px] mx-auto"
          >
            We don't apply one-size-fits-all solutions. Every case gets a dedicated Tax Specialist and a strategy built around your specific debt, history, and circumstances.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29,30,227,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1d1ee3] text-white rounded-full px-10 py-5 text-[18px] font-bold flex items-center gap-4 mx-auto group shadow-[0_10px_30px_rgba(29,30,227,0.1)] transition-all"
              >
                <span>Start Your Complimentary Consultation</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
