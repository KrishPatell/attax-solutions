import { motion } from "motion/react";
import { ArrowRight, Clock, Video, Phone, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Link } from "react-router";
import consultationImg from "../../../../assets/7ee3725ecc3a7dffc4d3371f2e502a8127203d34.png";

export function FreeConsultation() {
  return (
    <section className="py-[60px] md:py-[120px] bg-white scroll-mt-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          {/* Left: Image */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.05)]"
            >
              <ImageWithFallback
                src={consultationImg}
                alt="Free Consultation Meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%]">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [The First Step]
            </motion.span>
            
            <h2
              className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium mb-6 md:mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Start With a{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Free Consultation
              </span>
            </h2>

            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[rgba(10,22,40,0.6)] mb-8 md:mb-10">
              Your journey to tax resolution begins with a 30-minute introductory meeting. We review your current tax situation, explain your available options, and provide a clear roadmap for moving forward.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-[#f9faff] p-5 md:p-8 rounded-[24px] border border-[rgba(0,0,0,0.03)] flex flex-col gap-4">
                <div className="w-[50px] h-[50px] bg-[#eaeeff] rounded-full flex items-center justify-center text-[#1d1ee3]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-bold text-[16px] md:text-[18px]">30 Minutes</h4>
                  <p className="text-[14px] text-[rgba(10,22,40,0.5)]">Duration of consultation</p>
                </div>
              </div>

              <div className="bg-[#f9faff] p-5 md:p-8 rounded-[24px] border border-[rgba(0,0,0,0.03)] flex flex-col gap-4">
                <div className="w-[50px] h-[50px] bg-[#eaeeff] rounded-full flex items-center justify-center text-[#1d1ee3]">
                  <Video size={20} />
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-bold text-[16px] md:text-[18px]">Phone or Video</h4>
                  <p className="text-[14px] text-[rgba(10,22,40,0.5)]">Choose your preferred format</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 md:mb-12">
              {[
                "Comprehensive Review of Tax History",
                "Explanation of IRS Resolution Options",
                "No Pitch, No Pressure Environment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[rgba(10,22,40,0.6)] font-medium">
                  <CheckCircle2 size={18} className="text-[#1d1ee3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
              className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 font-medium text-[14px] md:text-[16px] flex items-center gap-5 group w-fit self-start"
            >
              <span className="whitespace-nowrap">Schedule Your Meeting</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                <ArrowRight size={18} className="text-[#1d1ee3]" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
