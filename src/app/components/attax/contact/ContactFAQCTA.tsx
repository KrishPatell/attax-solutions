import { motion } from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import expertsImg from "../../../../assets/handling-cases.jpg";

export function ContactFAQCTA() {
  const bookingUrl = "https://calendly.com/attax-solutions";

  const benefits = [
    "Schedule a Free Consultation",
    "Discover Custom Solutions",
    "Start Building Your Competitive Advantage"
  ];

  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1d1ee3] rounded-[28px] md:rounded-[40px] overflow-hidden grid grid-cols-12 relative shadow-[0_40px_100px_-20px_rgba(29,30,227,0.4)]"
        >
          {/* Content side */}
          <div className="col-span-12 lg:col-span-7 p-8 md:p-10 lg:p-20 relative z-10 flex flex-col items-start">
            <span className="text-white/60 text-[13px] md:text-[14px] font-medium uppercase tracking-widest block mb-4 md:mb-6 w-full">[CTA]</span>
            <h2 className="text-[28px] md:text-[40px] lg:text-[56px] leading-[1.1] text-white mb-8 md:mb-10 font-medium tracking-tight w-full">
              Work with Experts to Grow Faster & Run <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Smarter</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(bookingUrl, "_blank")}
              className="bg-white text-[#1d1ee3] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 font-bold text-[14px] md:text-[16px] inline-flex items-center gap-4 self-start w-fit transition-all shadow-xl mb-8 md:mb-12 whitespace-nowrap"
            >
              <span>Get Started</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0">
                <ArrowRight size={18} className="text-white" />
              </div>
            </motion.button>

            <div className="space-y-4 w-full">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#f7f9ff] shrink-0">
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
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d1ee3]/20 to-transparent" />
          </div>

          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
