import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function ContactHero() {
  return (
    <section className="relative pt-[180px] pb-[80px] overflow-hidden bg-[#f9faff]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1d1ee3]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1d1ee3]/3 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px]"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link 
              to="/" 
              className="text-[14px] text-[#0a1628]/40 hover:text-[#1d1ee3] transition-colors"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-[#0a1628]/20" />
            <span 
              className="text-[14px] text-[#1d1ee3]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Contact
            </span>
          </div>

          <h1
            className="text-[64px] lg:text-[72px] leading-[1.05] text-[#0a1628] mb-6 tracking-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
          >
            Let's Talk About Your{" "}
            <span 
              className="italic font-normal" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Situation
            </span>
          </h1>
          <p
            className="text-[20px] lg:text-[22px] leading-[1.6] text-[#0a1628]/60 max-w-[640px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            Your first consultation is free. No pressure, no commitment — just an honest conversation about what you're facing and what we can do about it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
