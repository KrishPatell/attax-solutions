import { motion } from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import expertsImg from "../../../../assets/handling-cases.jpg";

export function ContactFAQCTA() {
  const bookingUrl = "https://calendly.com/attax-solutions";

  const benefits = [
    "Schedule a Free Consultation",
    "Get an Honest Case Evaluation",
    "Start Your Path to IRS Resolution"
  ];

  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f7f4ef] rounded-[28px] md:rounded-[40px] overflow-hidden grid grid-cols-12 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-[#e8e0d0]"
        >
          {/* Content side */}
          <div className="col-span-12 lg:col-span-7 p-8 md:p-10 lg:p-20 relative z-10 flex flex-col items-start">
            <span
              className="text-[#1d1ee3] text-[13px] uppercase tracking-widest font-bold block mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Free Consultation]
            </span>
            <h2 className="text-[28px] md:text-[40px] lg:text-[56px] leading-[1.1] text-[#03030f] mb-8 md:mb-10 font-medium tracking-tight w-full">
              Work with Licensed Tax Specialists to Resolve Your IRS <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Debt</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(bookingUrl, "_blank")}
              className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 font-bold text-[14px] md:text-[16px] inline-flex items-center gap-5 self-start w-fit transition-all shadow-xl mb-8 md:mb-12 whitespace-nowrap"
            >
              <span>Get Started</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                <ArrowRight size={18} className="text-[#1d1ee3]" />
              </div>
            </motion.button>

            <div className="space-y-4 w-full">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[#03030f]/70">
                  <div className="w-5 h-5 rounded-full bg-[#1d1ee3]/10 flex items-center justify-center text-[#1d1ee3] shrink-0">
                    <BadgeCheck size={14} />
                  </div>
                  <span className="text-[14px] md:text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]">
            <ImageWithFallback
              src={expertsImg}
              alt="Team working"
              width={1292}
              height={734}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f7f4ef]/30" />
          </div>

          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1d1ee3]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1d1ee3]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
