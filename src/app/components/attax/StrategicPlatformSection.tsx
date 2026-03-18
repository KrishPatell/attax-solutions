import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ShieldCheck, Zap, Globe, Lock, Cpu, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const platformImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Expert Representation",
    desc: "Unlike other firms, you only work with dedicated tax practitioners authorized to represent you directly before the IRS in all 50 states.",
  },
  {
    icon: Zap,
    title: "Rapid Response System",
    desc: "Our proprietary case management ensures immediate action on wage levies, bank garnishments, and critical IRS deadlines.",
  },
  {
    icon: BarChart3,
    title: "Financial Precision",
    desc: "Every Offer in Compromise and installment agreement is mathematically modeled to maximize your savings while meeting IRS strict guidelines.",
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    desc: "Your tax issues are sensitive. We maintain the highest levels of data security and professional privilege for every client case.",
  },
];

export function AttaxStrategicPlatform() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const bookingUrl = "https://calendly.com/attax-solutions";

  return (
    <section id="platform" className="bg-[#0a1628] py-[120px] overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-6 relative"
          >
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 group">
              <ImageWithFallback
                src={platformImg}
                alt="ATTAX Strategic Platform"
                className="w-full h-[640px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
              
              {/* Floating Stat Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[20px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
                      The ATTAX Advantage
                    </h4>
                    <p className="text-white/60 text-[14px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      Proactive Resolution Architecture
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-[15px] leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Our platform combines decades of tax law expertise with a streamlined process that removes the middleman and puts you directly in touch with professionals.
                </p>
              </motion.div>
            </div>

            {/* Accent Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1d1ee3] blur-[100px] opacity-20 pointer-events-none" />
          </motion.div>

          {/* Right Column - Content */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#a5b4fc] text-[16px] block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                [Strategic Infrastructure]
              </span>
              <h2
                className="text-[52px] leading-[1.1] text-white mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Our Strategic{" "}
                <span className="italic text-[#a5b4fc]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                  Platform
                </span>
              </h2>
              <p
                className="text-[17px] text-white/65 leading-relaxed mb-12 max-w-[500px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                We built ATTAX to solve the industry's biggest problem: lack of direct professional access. Our strategic platform ensures your case is handled with precision and speed.
              </p>
            </motion.div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center mb-4 border border-white/10">
                      <Icon size={20} className="text-[#a5b4fc]" />
                    </div>
                    <h3
                      className="text-[18px] text-white mb-2"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-[14px] leading-relaxed text-white/50"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-14"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(29,30,227,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open(bookingUrl, "_blank")}
                className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group"
              >
                <span
                  className="text-white text-[16px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Book Your Strategic Session
                </span>
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <ArrowUpRight size={18} color="#1d1ee3" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
