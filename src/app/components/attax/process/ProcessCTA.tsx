import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

export function ProcessCTA() {
  return (
    <section className="py-[60px] md:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1d1ee3] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative min-h-[500px]"
        >
          {/* Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-8 md:gap-10">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-white/60 text-[14px] md:text-[16px] font-medium font-['Inter_Tight']">Join</span>
              <h2 className="text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] text-white font-semibold font-['Inter_Tight']">
                Work with Experts to{" "}
                <span className="hidden md:inline"><br /></span>
                Grow Faster & Run{" "}
                <span className="hidden md:inline"><br /></span>
                <span className="italic font-['Playfair_Display']">Smarter</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 self-start flex items-center gap-5 group"
              >
                <span className="font-bold font-['Inter_Tight'] text-[14px] md:text-[16px]">Get Started</span>
                <div className="w-8 h-8 bg-[#1d1ee3] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </motion.button>

              <ul className="flex flex-col gap-4">
                {[
                  "Schedule a free consultation",
                  "Direct Tax Specialist Handling",
                  "Start Building Your Competition Advantage",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-[14px] md:text-[15px] font-['Inter_Tight']">
                    <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative min-h-[280px] md:min-h-[400px] lg:min-h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1080"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Experts collaboration"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d1ee3] via-transparent to-transparent hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
