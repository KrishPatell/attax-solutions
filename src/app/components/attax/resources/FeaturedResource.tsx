import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import handlingCasesImg from "../../../../assets/handling-cases.jpg";

export function FeaturedResource() {
  return (
    <section className="pb-[60px] md:pb-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[24px] border border-[rgba(0,0,0,0.05)] shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row min-h-[480px]"
        >
          {/* Left: Professional Image */}
          <div className="w-full md:w-[45%] relative min-h-[260px] md:min-h-auto">
            <ImageWithFallback
              src={handlingCasesImg}
              alt="Tax Specialist Consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-[55%] p-5 md:p-10 lg:p-14 flex flex-col justify-center">
            <blockquote
              className="text-[#0a1628] text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] mb-8 md:mb-10 font-normal"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              "Navigating the IRS doesn't have to be a solo journey. Our mission is to provide clear, actionable insights that help you reclaim your financial peace of mind. Every success story starts with a single step of strategy."
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[rgba(0,0,0,0.05)] pt-6 md:pt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white font-bold text-[18px]">
                  OS
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-semibold text-[16px]">Omar S.</h4>
                  <p className="text-[rgba(10,22,40,0.6)] text-[14px]">Founder & Principal Tax Specialist</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="self-start group flex items-center gap-5 bg-[#1d1ee3] text-white rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 transition-all"
              >
                <span className="text-[14px] md:text-[16px] font-medium whitespace-nowrap">Read Case Study</span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#1d1ee3] group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
