import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import meImg from "../../../../assets/me.jpg";

export function CoreVisionSection() {
  return (
    <section className="py-[60px] md:py-[120px] bg-[#f7f9ff] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-[60px]">
          
          {/* Left: Content */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#1d1ee3] text-[16px] font-medium block mb-3" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Our Vision
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[32px] md:text-[40px] lg:text-[52px] leading-[1.1] text-[#03030f] font-medium mb-6"
                style={{ fontFamily: "’Inter Tight’, sans-serif" }}
              >
                Today’s Vision into <br className="hidden md:block" /> Tomorrow’s Business <span className="italic text-[#03030f]" style={{ fontFamily: "’Playfair Display’, serif" }}>Success</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] text-[rgba(3,3,15,0.7)] max-w-[500px]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                At ATTAX Solutions, we work hand-in-hand with clients to anticipate tax landscape shifts, unlock growth opportunities, and build resilient, debt-free operations.
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                "Future-Ready Tax Strategies",
                "Innovation-Driven Solutions",
                "Long-Term Value Creation"
              ].map((bullet, i) => (
                <motion.div 
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-[#1d1ee3]" />
                  <span className="text-[15px] md:text-[17px] lg:text-[20px] font-medium text-[#03030f]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => document.querySelector("#clarity")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start group relative bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 inline-flex items-center gap-5 hover:bg-[#1618c7] transition-all"
              >
                <span className="text-white text-[14px] md:text-[16px] font-medium whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Get Started
                </span>
                <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-[#1d1ee3]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: Visionary Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:max-w-[540px] h-[300px] md:h-[480px] lg:h-[620px] rounded-[12px] overflow-hidden"
          >
            <ImageWithFallback
              src={meImg}
              alt="ATTAX Visionary Portrait"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
