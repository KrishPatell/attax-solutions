import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { Link } from "react-router";

export function AboutCTA() {
  return (
    <section className="bg-white py-[60px] md:py-[120px] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f9faff] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a1628] rounded-[24px] md:rounded-[48px] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
        >
          {/* Blue accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1d1ee3]/20 rounded-full blur-[100px] pointer-events-none" />
          
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
              className="text-[32px] md:text-[52px] lg:text-[64px] leading-[1.2] md:leading-[1.1] text-white mb-6 md:mb-8 max-w-[800px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Start Your{" "}
              <span className="italic font-normal text-[#a5b4fc]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Complimentary
              </span>{" "}
              Consultation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-[18px] mb-12 max-w-[580px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Take the first step toward resolution. Speak with a licensed tax professional about your situation today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29,30,227,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 bg-[#1d1ee3] text-white rounded-[50px] pl-6 md:pl-10 pr-2 md:pr-4 py-2 md:py-4 group self-start mx-auto"
                >
                  <span className="text-[18px] font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Get Started</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1d1ee3] group-hover:bg-blue-50 transition-colors">
                    <ArrowRight size={22} />
                  </div>
                </motion.button>
              </Link>

              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2 text-white/40 text-[14px]">
                  <Clock size={16} />
                  <span>Responds within 1 business day</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[14px]">
                  <Lock size={16} />
                  <span>Private & Secure</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[14px]">
                  <ShieldCheck size={16} />
                  <span>Licensed Representation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
