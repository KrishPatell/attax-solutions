import { motion } from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const expertsImg = "https://images.unsplash.com/photo-1600880212340-85d70b2841ff?auto=format&fit=crop&q=80&w=1200";

export function ContactFAQCTA() {
  const bookingUrl = "https://calendly.com/attax-solutions";

  const benefits = [
    "Schedule a Free Consultation",
    "Discover Custom Solutions",
    "Start Building Your Competitive Advantage"
  ];

  return (
    <section className="bg-white py-[80px] lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1d1ee3] rounded-[40px] overflow-hidden grid grid-cols-12 relative shadow-[0_40px_100px_-20px_rgba(29,30,227,0.4)]"
        >
          {/* Content side */}
          <div className="col-span-12 lg:col-span-7 p-10 lg:p-20 relative z-10">
            <span className="text-white/60 text-[14px] font-medium uppercase tracking-widest block mb-6">[CTA]</span>
            <h2 className="text-[48px] lg:text-[56px] leading-[1.1] text-white mb-10 font-medium tracking-tight">
              Work with Experts to Grow Faster & Run <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Smarter</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#f0f4ff", color: "#1d1ee3" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(bookingUrl, "_blank")}
              className="bg-white text-[#1d1ee3] rounded-[50px] px-10 py-5 font-bold text-[18px] flex items-center justify-center gap-3 transition-all shadow-xl mb-12"
            >
              Get Started
              <ArrowRight size={22} />
            </motion.button>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#f7f9ff] shrink-0">
                    <BadgeCheck size={14} />
                  </div>
                  <span className="text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{benefit}</span>
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
