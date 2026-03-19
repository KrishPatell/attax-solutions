import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ArrowUpRight, Download, FileText, Globe } from "lucide-react";

const founderImg = "https://images.unsplash.com/photo-1661854236305-b02cef4aa0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwZm91bmRlciUyMENFTyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY1MzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080";

export function OurStory() {
  return (
    <section id="our-story" className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left - Founder Image */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[24px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]"
            >
              <ImageWithFallback
                src={founderImg}
                alt="Omar Hassan"
                className="w-full h-[380px] md:h-[640px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                <p 
                  className="text-white text-[24px]" 
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  Omar Hassan
                </p>
                <p 
                  className="text-white/70 text-[16px]" 
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  Founder & CEO
                </p>
              </div>
            </motion.div>
            {/* Decorative blue card */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#1d1ee3]/5 rounded-[24px] -z-10" />
          </div>

          {/* Right - Story Content */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.15] text-[#0a1628] mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                A direct approach to a{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  difficult situation
                </span>
              </h2>

              <div className="space-y-6 text-[15px] md:text-[18px] leading-[1.8] text-[#0a1628]/70" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <p>
                  At ATTAX Solutions, we don't believe in the traditional high-pressure sales approach. Tax debt is stressful enough without having to worry about who is actually handling your case.
                </p>
                <p>
                  I founded this firm with a simple goal: to provide honest, skilled, and transparent IRS representation for people who feel overwhelmed by the system. We aren't just another tax mill — we are an established firm with real clients, real results, and a commitment to direct communication.
                </p>
                
              </div>

              {/* Downloads / Links section */}
              <div className="grid grid-cols-2 gap-4 mt-12 pt-12 border-t border-[#eaeaff]">
                <div className="col-span-2 sm:col-span-1 p-5 rounded-[16px] border border-[#eaeaff] hover:border-[#1d1ee3]/30 transition-colors group cursor-pointer bg-[#f9faff]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm">
                      <FileText size={20} />
                    </div>
                    <span 
                      className="text-[#0a1628] font-semibold"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      ATTAX Presentation
                    </span>
                  </div>
                  <p className="text-[14px] text-[#0a1628]/50 leading-[1.5]">Learn more about our methodology and firm history.</p>
                  <div className="mt-4 flex items-center gap-2 text-[#1d1ee3] text-[13px] font-bold uppercase tracking-wider">
                    <span>View PDF</span>
                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-5 rounded-[16px] border border-[#eaeaff] hover:border-[#1d1ee3]/30 transition-colors group cursor-pointer bg-[#f9faff]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm">
                      <Globe size={20} />
                    </div>
                    <span 
                      className="text-[#0a1628] font-semibold"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      Global Reach
                    </span>
                  </div>
                  <p className="text-[14px] text-[#0a1628]/50 leading-[1.5]">We represent clients in all 50 states directly with the IRS.</p>
                  <div className="mt-4 flex items-center gap-2 text-[#1d1ee3] text-[13px] font-bold uppercase tracking-wider">
                    <span>Our Locations</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}