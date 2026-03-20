import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import svgPaths from "../../../imports/svg-ps3a1hmcku";
import imgBuildingA from "../../../assets/75c625e12e429e69fa04d226df2a67ef68773f5d.png";

export function AttaxStrategicPlatformV2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: (
        <svg className="size-[21px]" fill="none" viewBox="0 0 22 22">
          <path d={svgPaths.p343030b0} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p66c1b00} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p2844740} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.pee34b80} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </svg>
      ),
      title: "Back Taxes",
      desc: "Years of unpaid taxes accumulating with penalties and interest can feel crushing   but there are real pathways to resolution.",
    },
    {
      icon: (
        <svg className="size-[21px]" fill="none" viewBox="0 0 22 22">
          <path d={svgPaths.p1c5bd300} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d="M10.5469 7.91032V11.4259" stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d="M10.5469 14.9414H10.5557" stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </svg>
      ),
      title: "Unfiled Returns",
      desc: "Missing tax filings trigger IRS compliance actions. We help you get current, protect you from the worst outcomes, and move forward.",
    },
    {
      icon: (
        <svg className="size-[21px]" fill="none" viewBox="0 0 22 22">
          <path d={svgPaths.p8700} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p2b4af800} stroke="#1D1EE3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </svg>
      ),
      title: "IRS Notices",
      desc: "Letters, levies, liens and wage garnishments are serious   but they can be stopped. You need a licensed professional in your corner.",
    },
  ];

  return (
    <section className="bg-[#f7f9ff] py-[60px] md:py-[120px] overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-stretch relative">
          
          {/* Left: Image Card with Overlays */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] h-[380px] md:h-[420px] lg:h-auto relative shrink-0 lg:self-stretch"
          >
            <div className="absolute inset-0 border border-white/10 rounded-[24px] overflow-hidden group">
              <ImageWithFallback
                src={imgBuildingA}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: "linear-gradient(0deg, #0A1628 0%, rgba(6, 16, 31, 0.86) 7%, rgba(4, 10, 21, 0.71) 14%, rgba(2, 5, 13, 0.57) 21%, rgba(1, 2, 6, 0.43) 28%, rgba(0, 1, 2, 0.29) 36%, rgba(0, 0, 0, 0.14) 43%, rgba(0, 0, 0, 0) 50%)" 
                }} 
              />

              {/* Glassmorphic Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 backdrop-blur-[20px] bg-white/10 border border-white/20 p-6 lg:p-8 rounded-[20px]"
              >
                <div className="flex items-center gap-4 mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                    <svg className="size-5 lg:size-6 text-white" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.pc216af0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3e31fef0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 2V4M15 20V22M2 15H4M2 9H4M20 15H22M20 9H22M9 2V4M9 20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Inter_Tight'] text-[18px]">The ATTAX Advantage</h4>
                    <p className="text-white/60 text-[12px] lg:text-[14px] font-['Inter_Tight']">Proactive Resolution Architecture</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed font-['Inter_Tight'] text-[14px]">
                  Our platform combines decades of tax law expertise with a streamlined process that removes the middleman and puts you directly in touch with professionals.
                </p>
              </motion.div>
            </div>

            {/* Accent Glow */}
            <div className="absolute -top-10 -left-10 w-[160px] h-[160px] bg-[#1d1ee3] blur-[100px] opacity-20 pointer-events-none" />
          </motion.div>

          {/* Right: Text and Cards */}
          <div className="flex-1 lg:w-[55%] flex flex-col gap-8 lg:gap-[48px]">
            {/* Header Area */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-3"
            >
              <span className="text-[#1d1ee3] text-[14px] md:text-[16px] font-medium font-['Inter_Tight']">[The Problem]</span>
              <h2 className="leading-[1.2] text-[#0a1628] font-medium font-['Inter_Tight'] text-[32px] lg:text-[40px]">
                You shouldn't have to face this <span className="italic font-['Playfair_Display']">alone</span>.
              </h2>
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-[#0a1628]/70 max-w-[500px] font-['Inter_Tight'] mt-2">
                Facing the IRS can be overwhelming. Our approach blends direct experience from inside the system with strategic advocacy to solve your most complex tax challenges and deliver lasting peace of mind.
              </p>
              
              {/* CTA Button */}
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 self-start flex items-center gap-5 bg-[#1d1ee3] rounded-full pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 group"
              >
                <span className="text-white text-[14px] md:text-[16px] font-medium font-['Inter_Tight'] leading-tight px-1 whitespace-nowrap">Book Strategic Session</span>
                <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0">
                  <svg className="size-4.5 text-[#1D1EE3]" fill="none" viewBox="0 0 18 18">
                    <path d="M5.25 5.25H12.75V12.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M5.25 12.75L12.75 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>

            {/* Problem Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {problems.map((p, i) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white p-5 pt-6 pb-5 border border-[#eaeeff] rounded-[10px] flex flex-col gap-4 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all"
                >
                  <div className="w-12 h-12 bg-[#eaeaff] rounded-full flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-[#0a1628] font-['Inter_Tight'] text-[18px]">{p.title}</h3>
                    <p className="leading-[1.6] text-[#0a1628]/70 font-['Inter_Tight'] text-[15px]">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}