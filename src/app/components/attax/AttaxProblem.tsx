import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck, HeartHandshake, Zap, Scale, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";

const commitmentItems = [
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
    desc: "Every case is handled directly by a licensed tax professional   never a salesperson.",
    accent: "#F59E0B"
  },
  {
    icon: HeartHandshake,
    title: "Honest Assessments",
    desc: "We tell you exactly where you stand. If you don't qualify for a program, we'll be the first to say it.",
    accent: "#1D1EE3"
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "IRS notices don't wait, and neither do we. We aim to halt collection actions within 72 hours.",
    accent: "#1D1EE3"
  },
  {
    icon: Scale,
    title: "Strategic Advocacy",
    desc: "We don't just fill out forms. We build a case that protects your assets and your future.",
    accent: "#1D1EE3"
  }
];

export function BeliefsSection() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="beliefs" className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span 
                className="text-[#1d1ee3] text-[16px] block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                [Our Commitment]
              </span>
              <h2 
                className="text-[32px] md:text-[52px] leading-[1.15] text-[#0a1628] mb-6"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                The ATTAX{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Standard</span>.
              </h2>
              <p 
                className="text-[18px] leading-[1.7] text-[rgba(10,22,40,0.65)] mb-10 max-w-[540px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                We believe tax resolution should be about people, not percentages. Our firm was built on the principle that every taxpayer deserves high-level representation and total transparency.
              </p>
            </motion.div>

            {/* Grid of items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {commitmentItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div 
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.accent}10`, border: `1px solid ${item.accent}20` }}
                    >
                      <Icon size={22} style={{ color: item.accent }} />
                    </div>
                    <div>
                      <h3 
                        className="text-[19px] text-[#0a1628] mb-2"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-[15px] leading-[1.6] text-[rgba(10,22,40,0.55)]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Element / CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[420px] shrink-0"
          >
            <div className="bg-[#0a1628] rounded-[24px] p-10 relative overflow-hidden group">
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ 
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }} 
              />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path 
                        d="M10 1L12.45 6.35L18.33 7.21L14.08 11.36L15.09 17.21L10 14.54L4.91 17.21L5.92 11.36L1.67 7.21L7.55 6.35L10 1Z" 
                        fill="#F59E0B" 
                        stroke="#F59E0B" 
                        strokeWidth="1.5" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
                
                <h3 
                  className="text-white text-[32px] leading-tight mb-6"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  Ready to put your tax debt <span className="italic font-['Playfair_Display'] text-[#a5b4fc]">behind you?</span>
                </h3>
                
                <p 
                  className="text-white/60 text-[16px] leading-relaxed mb-8"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  Join hundreds of clients who have found clarity and resolution with ATTAX Solutions.
                </p>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/contact")}
                  className="w-full flex items-center justify-between bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group hover:bg-[#1618c7] transition-colors"
                >
                  <span 
                    className="text-white text-[16px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    Book Strategic Session
                  </span>
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                    <ArrowUpRight size={20} color="#1d1ee3" />
                  </div>
                </motion.button>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#1d1ee3] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
