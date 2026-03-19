import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Play, ShieldAlert, FileCheck } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import svgPaths from "../../../imports/svg-tbbnbj1wyr";
import svgPathsShield from "../../../imports/svg-w6in6wygdq";

const heroBg = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXglMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NzczNDg4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1200";

export function AttaxHero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-[100vh] lg:min-h-[85vh] bg-[#0a1628] overflow-hidden flex items-center">
      {/* BG color/solid as requested */}
      <div className="absolute inset-0 bg-[#0a1628]">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} 
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,22,40,1) 0%, rgba(10,22,40,0.8) 50%, rgba(29,30,227,0.15) 100%)",
          }}
        />
      </div>

      {/* Blue accent glow */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1d1ee3 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-[100px] pb-[60px] w-full">
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              {/* 5 Golden Stars */}
              <div className="h-[16px] relative shrink-0 w-[64px]">
                {[0, 12, 24, 36, 48].map((left, index) => (
                  <div key={index} className="absolute size-[16px] top-0" style={{ left: `${left}px` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path 
                        d={svgPaths.p17f48400} 
                        fill="#F59E0B" 
                        stroke="#F59E0B" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.33333" 
                      />
                    </svg>
                  </div>
                ))}
              </div>
              
              {/* Text */}
              <p className="font-normal leading-[21px] text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Over 500+ Cases Resolved Successfully
              </p>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span
                className="block text-[34px] md:text-[44px] lg:text-[72px] leading-[1.2] md:leading-[1.1] text-white tracking-[-1px] lg:tracking-[-1.5px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Tax Debt Doesn't
              </span>
              <span
                className="block text-[34px] md:text-[44px] lg:text-[72px] leading-[1.2] md:leading-[1.1] tracking-[-1px] lg:tracking-[-1.5px] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Have to{" "}
                <span
                  className="italic text-[#a5b4fc]"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, letterSpacing: "-1.44px" }}
                >
                  Define You
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 leading-[1.65] lg:leading-[1.7] text-[rgba(255,255,255,0.72)] max-w-[340px] md:max-w-[520px] text-[15px] md:text-[18.5px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >ATTAX Solutions resolves IRS and state tax debt — with honesty, clarity, and a plan that actually works.</motion.p>

            {/* Italic caption */}
            

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col md:flex-row md:items-center gap-4 mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(29,30,227,0.45)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
                className="flex items-center gap-5 bg-[#1d1ee3] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 group self-start"
              >
                <span
                  className="text-white text-[13px] md:text-[16px] whitespace-nowrap"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Start Your Complimentary Consultation
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                  <ArrowUpRight size={18} className="md:w-5 md:h-5" color="#1d1ee3" />
                </div>
              </motion.button>

              {/* 100% Confidential Consultation */}
              <div className="flex gap-[8px] items-center justify-start mt-2 md:mt-0">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_18_50)">
                      <path d={svgPathsShield.p22e960f0} stroke="#A5B4FC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPathsShield.p3e012060} stroke="#A5B4FC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_18_50">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-normal leading-[22.5px] text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  100% Confidential Consultation
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — floating stat cards */}
          
        </div>

        {/* Stats row - Unified Design from Optimo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-8 md:gap-16 mt-10 pt-8 border-t border-white/10 items-center flex-wrap"
        >
          <div className="max-w-[520px]">
            <div
              className="text-[22px] text-white leading-tight italic"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              "The fastest growing tax relief company in the nation"
            </div>
          </div>

          
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[12px] tracking-widest uppercase" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Scroll</span>
        <ChevronDown size={18} className="text-white/40" />
      </motion.div>
    </section>
  );
}