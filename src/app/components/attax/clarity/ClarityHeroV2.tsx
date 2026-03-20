import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, CheckCircle2, Shield, Activity, Bell, FileText } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import svgPaths from "../../../imports/svg-sgovbpraxs";

export function ClarityHeroV2() {
  return (
    <section className="relative pt-[100px] md:pt-[160px] pb-[60px] md:pb-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Content Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12 md:mb-16">

          {/* Left: Heading & Description */}
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1d1ee3] text-[14px] md:text-[16px] font-medium mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [ATTAX Clarity]
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[34px] md:text-[44px] lg:text-[72px] leading-[1.1] tracking-[-0.02em] text-[#03030f] font-semibold mb-6 md:mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Know Before the <br />
              <div className="flex items-center gap-3">
                <span>IRS</span>
                <span className="italic text-[#1d1ee3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Acts.
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[14px] md:text-[16px] lg:text-[20px] leading-[1.6] text-[rgba(3,3,15,0.7)] max-w-[620px] mb-8 md:mb-12"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              ATTAX Clarity is a proactive monitoring and scoring system   built so you're never caught off guard by your tax standing again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => document.querySelector("#clarity")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start group relative bg-[#1d1ee3] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 inline-flex items-center gap-5 hover:bg-[#1618c7] transition-all"
              >
                <span className="text-white text-[14px] md:text-[16px] font-medium whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Join Our Waitlist
                </span>
                <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-[#1d1ee3]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: Statistics Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:max-w-[380px] shrink-0"
          >
            
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative rounded-[16px] overflow-hidden h-[220px] sm:h-[360px] md:h-[480px] lg:aspect-[1140/580] lg:h-auto mb-12 md:mb-24"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1080"
            alt="Clarity Solution Celebration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {[
            { label: "Transcript Sync", icon: FileText },
            { label: "Notice Analysis", icon: Bell },
            { label: "Score Calculation", icon: Activity },
            { label: "Crisis Prevention", icon: Shield }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="pt-6 border-t border-[#eaeaff] flex flex-col items-start gap-4 group"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-[#eaeaff] flex items-center justify-center transition-transform group-hover:scale-110">
                <item.icon size={22} className="text-[#1d1ee3]" />
              </div>
              <span className="text-[14px] md:text-[16px] lg:text-[20px] text-[#03030f] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
