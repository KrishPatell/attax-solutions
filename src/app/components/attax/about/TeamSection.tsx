import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TrendingUp, Building2 } from "lucide-react";

const officeImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080";

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* ── Our HQ & Environment ── */}
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Left: Label, heading, body, bullets, CTA */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <span className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                [Our HQ]
              </span>
              <h2 className="text-[32px] md:text-[48px] lg:text-[50px] leading-[1.15] text-[#03030f] mb-6 whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                Newport Beach,{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>California</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#03030f]/60 leading-[1.8] mb-8" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Our headquarters in Newport Beach is designed for focus, strategy, and collaborative problem-solving. We believe a professional environment produces professional results — for our team and for every client we represent.
              </p>

              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Newport Beach, CA — our permanent home base",
                  "Collaborative, focused strategy environment",
                  "Serving clients across all 50 states",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-[35px] h-[35px] rounded-full bg-[#eaeeff] flex items-center justify-center shrink-0">
                      <TrendingUp size={18} className="text-[#1d1ee3]" />
                    </div>
                    <span className="text-[15px] text-[#03030f]/70" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 font-bold text-[15px] inline-flex items-center gap-5 self-start w-fit transition-all"
              >
                <span>Visit Us</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-[#1d1ee3]" />
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Office image */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-0"
            >
              <div className="relative rounded-[28px] overflow-hidden h-[420px] md:h-[540px]">
                <ImageWithFallback
                  src={officeImg}
                  alt="ATTAX Solutions Newport Beach HQ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white/90 backdrop-blur-[20px] rounded-[20px] px-6 py-4 flex items-center gap-4 shadow-lg border border-white/20"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#eaeeff] flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-[#1d1ee3]" />
                </div>
                <div>
                  <p
                    className="text-[#03030f] font-semibold text-[16px] lg:text-[18px] leading-tight whitespace-nowrap"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Newport Beach HQ
                  </p>
                  <p
                    className="text-[#03030f]/50 text-[12px] lg:text-[14px] leading-tight whitespace-nowrap"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    California, USA
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
