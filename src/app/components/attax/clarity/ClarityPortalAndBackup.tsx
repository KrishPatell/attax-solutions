import { motion } from "motion/react";
import { LogIn, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ClarityPortalAndBackup() {
  return (
    <section className="py-[60px] md:py-[120px] bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Section 06: Portal Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="h-full bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-10 lg:p-12 transition-all duration-300 hover:border-slate-200 hover:shadow-[0_12px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
              <div className="w-[50px] h-[50px] md:w-16 md:h-16 rounded-full bg-[#eaeeff] flex items-center justify-center mb-6 md:mb-8 border border-[#1d1ee3]/10">
                <LogIn size={22} className="text-[#1d1ee3]" />
              </div>
              <h3 className="text-[22px] md:text-[26px] lg:text-[28px] text-[#060e1e] mb-4" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
                Already a Clarity member?
              </h3>
              <p className="text-slate-500 text-[14px] md:text-[16px] mb-6 md:mb-8 max-w-[320px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Access your dashboard, manage payments, and view your tax score.
              </p>
              <a
                href="https://portal.attaxsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-[#1d1ee3] font-bold text-[16px] underline underline-offset-8 transition-all hover:gap-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Access Client Portal
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Section 07: Help Now Backup CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative"
          >
            <div className="h-full bg-[#1d1ee3] rounded-[32px] p-8 md:p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_24px_48px_rgba(29,30,227,0.2)] flex flex-col items-center text-center">
              <div className="w-[50px] h-[50px] md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 md:mb-8 border border-white/20">
                <ArrowRight size={22} className="text-white rotate-[-45deg]" />
              </div>
              <h3 className="text-[22px] md:text-[26px] lg:text-[28px] text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
                Have an active tax issue?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[16px] mb-6 md:mb-8 max-w-[340px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Clarity is proactive monitoring. If you need immediate help with an existing debt, start here.
              </p>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center gap-2 text-white font-bold text-[16px] underline underline-offset-8 transition-all hover:gap-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Start with a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decorative Grids */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: "radial-gradient(circle, #1d1ee3 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
    </section>
  );
}
