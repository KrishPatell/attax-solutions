import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, CheckCircle2, Shield, Activity, Bell, FileText } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import svgPaths from "../../../imports/svg-sgovbpraxs";

export function ClarityHeroV2() {
  return (
    <section className="relative pt-[160px] pb-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Content Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          
          {/* Left: Heading & Description */}
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1d1ee3] text-[16px] font-medium mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [ATTAX Clarity]
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[72px] leading-[1.1] tracking-[-0.02em] text-[#03030f] font-semibold mb-8"
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
              className="text-[20px] leading-[1.6] text-[rgba(3,3,15,0.7)] max-w-[620px] mb-12"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              ATTAX Clarity is a proactive monitoring and scoring system — built so you're never caught off guard by your tax standing again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => document.querySelector("#clarity")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative bg-[#1d1ee3] rounded-[50px] pl-8 pr-2 py-2 inline-flex items-center gap-12 hover:bg-[#1618c7] transition-all"
              >
                <span className="text-white text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Join Our Waitlist
                </span>
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={20} className="text-[#1d1ee3]" />
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
          className="relative rounded-[16px] overflow-hidden aspect-[1140/580] mb-24"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695067058684-da5a90013c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZGl2ZXJzZSUyMGJ1c2luZXNzJTIwcGVvcGxlJTIwaGlnaCUyMGZpdmUlMjBjZWxlYnJhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzM2NTY3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clarity Solution Celebration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Features Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="w-[52px] h-[52px] rounded-full bg-[#eaeaff] flex items-center justify-center transition-transform group-hover:scale-110">
                <item.icon size={24} className="text-[#1d1ee3]" />
              </div>
              <span className="text-[20px] text-[#03030f] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
