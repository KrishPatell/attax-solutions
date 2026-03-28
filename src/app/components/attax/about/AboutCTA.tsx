import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { Link } from "react-router";
import ctaBg from "../../../../assets/29be9e144d4cbc3f542ccc4e6b661999b17fa2ee.png";

export function AboutCTA() {
  return (
    <section className="bg-white py-[60px] md:py-[120px] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f9faff] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[24px] md:rounded-[48px] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
        >
          {/* Background image */}
          <img src={ctaBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/75 pointer-events-none" />
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10"
            >
              <ShieldCheck size={16} className="text-[#a5b4fc]" />
              <span 
                className="text-white text-[13px] tracking-widest uppercase font-bold" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                100% Confidential
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-[52px] lg:text-[50px] leading-[1.2] md:leading-[1.1] text-white mb-6 md:mb-8 max-w-[800px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Start Your{" "}
              <span className="italic font-normal text-[#a5b4fc]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Complimentary
              </span>{" "}
              Consultation
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <a href="https://getstarted.attaxsolutions.com/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="flex items-center gap-5 bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 group self-start mx-auto"
                >
                  <span className="text-[18px] font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Get Started</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                    <ArrowRight size={22} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
                    <ArrowRight size={22} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out translate-x-[-150%] group-hover:translate-x-0" />
                  </div>
                </motion.button>
              </a>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12"
              >
                <div
                  className="flex items-center gap-2.5 text-white/90 text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  <Clock size={18} className="text-white/60" />
                  <span>Responds within 1 business day</span>
                </div>
                <div
                  className="flex items-center gap-2.5 text-white/90 text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  <Lock size={18} className="text-white/60" />
                  <span>Private & Secure</span>
                </div>
                <div
                  className="flex items-center gap-2.5 text-white/90 text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  <ShieldCheck size={18} className="text-white/60" />
                  <span>Licensed Representation</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
