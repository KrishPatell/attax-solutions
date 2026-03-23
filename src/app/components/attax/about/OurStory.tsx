import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ArrowUpRight, Download, FileText, Globe } from "lucide-react";
import attaxPdf from "../../../../assets/ATTAX Solutions-2.pdf";
import omarImg from "../../../../assets/me.jpg";

export function OurStory() {
  return (
    <section id="our-story" className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* Story Content */}
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-stretch">

          {/* Left: Label + Heading + Quote + Photo */}
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col flex-1"
            >
              <span
                className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                [Our Story]
              </span>
              <h2
                className="text-[32px] md:text-[42px] lg:text-[50px] leading-[1.15] text-[#0a1628] mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                From Our{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Founder
                </span>
              </h2>

              {/* Pull quote */}
              <div className="border-l-[3px] border-[#1d1ee3] pl-6 mb-8">
                <p
                  className="text-[16px] md:text-[18px] text-[#0a1628] leading-[1.7] italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "When someone goes through hardship, be the person who reminds them that integrity still exists. The world has enough spectators — be the one who steps forward."
                </p>
                <p
                  className="text-[#0a1628]/50 text-[13px] mt-4"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  — Omar Hassan, Founder &amp; CEO
                </p>
              </div>

              {/* Photo below quote — stretches to fill remaining height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative rounded-[20px] overflow-hidden flex-1 min-h-[350px]"
              >
                <ImageWithFallback
                  src={omarImg}
                  alt="Omar Hassan — Founder & CEO, ATTAX Solutions"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-[17px] leading-tight mb-0.5" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}>Omar Hassan</p>
                  <p className="text-white/60 text-[13px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Founder &amp; CEO, ATTAX Solutions</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Story paragraphs + cards */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-[15px] md:text-[17px] leading-[1.8] text-[#0a1628]/65 mb-12"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              <p>
                I built this company on my beliefs on being a true, honest, and resilient entrepreneur. My family, heavily involved in entrepreneurship, taught me the core values on how to become resilient and disciplined.
              </p>
              <p>
                One day, I was sitting with a friend of mine, and they were in financial distress because a large tax relief firm had essentially burned him. I was truly angered. When people are facing tax problems, financial distress takes a real toll on someone's life.
              </p>
              <p>
                ATTAX Solutions was born at the age of seventeen, while in my second year of college. I decided to change this industry — often known as disreputable and unreliable — and create something built on honesty, clarity, reliability, and strategic representation.
              </p>
              <p>
                When someone reaches out to us, they are often going through one of the most stressful moments of their financial life. I will never forget that. This company exists so that people in those moments can speak to someone who genuinely cares about helping them move forward.
              </p>
            </motion.div>

            {/* Downloads / Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-10 border-t border-[#eaeaff]"
            >
              <a
                href={attaxPdf}
                download="ATTAX Solutions Presentation.pdf"
                className="col-span-2 sm:col-span-1 p-[22px] rounded-[16px] border border-[#eaeaff] hover:border-[#1d1ee3]/30 transition-colors group cursor-pointer bg-[#f9faff] flex flex-col gap-4 no-underline"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm shrink-0">
                      <FileText size={23} />
                    </div>
                    <span
                      className="text-[#0a1628] font-semibold text-[16px] lg:text-[17px]"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      ATTAX Presentation
                    </span>
                  </div>
                  <Download size={20} className="text-[#1d1ee3] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
                <p className="text-[14px] text-[#0a1628]/50 leading-[1.5]">
                  Learn more about our methodology and firm history.
                </p>
                <span className="text-[#1d1ee3] text-[13px] font-bold uppercase tracking-wider">Download PDF</span>
              </a>

              <div className="col-span-2 sm:col-span-1 p-[22px] rounded-[16px] border border-[#eaeaff] hover:border-[#1d1ee3]/30 transition-colors group cursor-pointer bg-[#f9faff] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm shrink-0">
                    <Globe size={23} />
                  </div>
                  <span
                    className="text-[#0a1628] font-semibold text-[16px] lg:text-[17px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Global Reach
                  </span>
                </div>
                <p className="text-[14px] text-[#0a1628]/50 leading-[1.5]">
                  We represent clients in all 50 states directly with the IRS.
                </p>
                <div className="flex items-center gap-2 text-[#1d1ee3] text-[13px] font-bold uppercase tracking-wider">
                  <span>Our Locations</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
