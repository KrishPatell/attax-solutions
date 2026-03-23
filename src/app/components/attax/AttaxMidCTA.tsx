import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import ctaBg from "../../../assets/638b11cd6ed56ff750f40755e53285b0ad327e7f.png";

const micros = [
  "Licensed IRS advocacy",
  "100% Private consultation",
  "Immediate relief strategy",
];

export function AttaxMidCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-[60px] md:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-[24px] p-6 md:p-16 text-center relative overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]"
        >
          {/* Background image */}
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
          {/* Dot grid on top */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
            >
              <ShieldCheck size={16} className="text-white" />
              <span
                className="text-white text-[13px] tracking-wide uppercase"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Secure IRS Resolution
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[32px] md:text-[40px] lg:text-[50px] leading-[1.1] text-white max-w-[850px] mx-auto mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Stop the IRS collections.{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>
                Start your recovery.
              </span>
            </motion.h2>

            

            {/* Micro-copy icons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12"
            >
              <div className="flex items-center gap-2.5 text-white/90 text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                <Clock size={18} className="text-white/60" />
                <span>30-Min Strategy Call</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90 text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                <CheckCircle2 size={18} className="text-white/60" />
                <span>Zero Sales Pressure</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90 text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                <ShieldCheck size={18} className="text-white/60" />
                <span>100% Confidential</span>
              </div>
            </motion.div>

            {/* Main Action */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <motion.button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-5 bg-white text-[#1d1ee3] rounded-[50px] pl-5 md:pl-8 pr-1.5 md:pr-3 py-1.5 md:py-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all group self-start"
              >
                <span className="text-[14px] md:text-[17px] whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
                  Get My Resolution Strategy
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                  <ArrowUpRight size={20} className="md:w-[22px] md:h-[22px] text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowUpRight size={20} className="md:w-[22px] md:h-[22px] text-white absolute transition-transform duration-300 ease-in-out translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
