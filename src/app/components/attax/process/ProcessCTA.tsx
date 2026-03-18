import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

export function ProcessCTA() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1d1ee3] rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative min-h-[500px]"
        >
          {/* Content */}
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-white/60 text-[16px] font-medium font-['Inter_Tight']">[Join]</span>
              <h2 className="text-[48px] lg:text-[56px] leading-[1.1] text-white font-semibold font-['Inter_Tight']">
                Work with Experts to <br />
                Grow Faster & Run <br />
                <span className="italic font-['Playfair_Display']">Smarter</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1d1ee3] rounded-full px-10 py-5 w-fit flex items-center gap-4 group"
              >
                <span className="font-bold font-['Inter_Tight']">Get Started</span>
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
                  <li key={i} className="flex items-center gap-3 text-white/90 font-['Inter_Tight']">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1696861270495-7f35c35c3273"
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
