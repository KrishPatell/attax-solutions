import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function ResourcesCTA() {
  return (
    <section className="pb-[60px] md:pb-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1d1ee3] rounded-[32px] overflow-hidden flex flex-col md:flex-row relative min-h-[500px] shadow-[0_40px_100px_rgba(29,30,227,0.25)]"
        >
          {/* Blue decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a5b4fc]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Left: Content */}
          <div className="w-full md:w-[55%] p-6 md:p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <span
              className="text-white/60 text-[14px] uppercase tracking-widest font-bold mb-6 block"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [CTA]
            </span>

            <h2
              className="text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] text-white font-medium mb-6 md:mb-10"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Work with Experts to <br />
              Resolve Your Debt & <br />
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Reclaim Your Future
              </span>
            </h2>

            <div className="mb-8 md:mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
                className="self-start flex items-center gap-5 bg-white text-[#1d1ee3] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 font-bold text-[14px] md:text-[16px] group transition-all whitespace-nowrap"
              >
                <span>Get Started Today</span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                  <ArrowRight size={18} />
                </div>
              </motion.button>
            </div>

            <div className="space-y-4">
              {[
                "Licensed Tax Specialist Representation",
                "100% Confidential Case Review",
                "Proven Strategic IRS Resolution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 text-[15px] font-medium">
                  <CheckCircle2 size={18} className="text-[#a5b4fc]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[45%] relative min-h-[240px] md:min-h-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758519290111-bfbd61b32d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBwZW9wbGUlMjBvZmZpY2UlMjB0ZWFtd29yayUyMHRheCUyMHNwZWNpYWxpc3QlMjBhZHZpc29yfGVufDF8fHx8MTc3MzY1ODM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Consultation"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
