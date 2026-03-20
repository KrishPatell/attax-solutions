import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Play, ShieldAlert, FileCheck } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import svgPaths from "../../../imports/svg-tbbnbj1wyr";
import svgPathsShield from "../../../imports/svg-w6in6wygdq";
import taxPrepImg from "../../../assets/Individual-Tax-Preparation-1024x683.webp";

export function AttaxHero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[88vh] bg-[#0a1628] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        {/* Image pinned to right half   mask-image fades its left edge into the dark bg */}
        <img
          src={taxPrepImg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 h-full"
          width={1500}
          height={1000}
          fetchPriority="high"
          style={{
            width: "62%",
            objectFit: "cover",
            objectPosition: "center 15%",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 25%, black 55%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 25%, black 55%)",
          }}
        />
        {/* Dark veil so text column stays clean */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0a1628 40%, rgba(10,22,40,0.55) 58%, rgba(10,22,40,0.1) 100%)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content — horizontal padding matches Services / Process / navbar inset */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-[100px] pb-[60px] w-full">
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Left   copy */}
          <div className="col-span-12 lg:col-span-7">
            {/* Eyebrow   avatar stack + stars + count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              {/* Overlapping avatar circles */}
              <div className="flex items-center">
                {[
                  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-[44px] h-[44px] rounded-full border-[2.5px] border-[#0a1628] overflow-hidden shrink-0"
                    style={{ marginLeft: i === 0 ? 0 : "-12px", zIndex: 3 - i }}
                  >
                    <img src={src} alt={`Client avatar ${i + 1} of 3`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-7 bg-white/15 shrink-0" />

              {/* Label */}
              <p className="text-[14px] text-white/60 whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <span className="text-white font-semibold">2,400+</span> Satisfied Clients
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
            >ATTAX Solutions resolves IRS and state tax debt   with honesty, clarity, and a plan that actually works.</motion.p>

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

          {/* Right   floating stat cards */}
          
        </div>

        {/* Tagline trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <div className="inline-flex items-center gap-4 bg-white/[0.05] border border-white/[0.09] rounded-[14px] px-5 py-3.5 backdrop-blur-sm">
            {/* Gold stars */}
            <div className="flex gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="w-px h-4 bg-white/20 shrink-0" />
            <p
              className="text-[16.1px] md:text-[18.4px] text-white/85 italic leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              "The fastest growing tax relief company in the nation"
            </p>
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