import { motion } from "motion/react";
import { ArrowRight, Clock, Video, Phone, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Link } from "react-router";

export function FreeConsultation() {
  return (
    <section className="py-[120px] bg-white scroll-mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
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
                src="https://images.unsplash.com/photo-1762341113148-41a938d2e957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXglMjBzcGVjaWFsaXN0JTIwY29uc3VsdGFudCUyMG1lZXRpbmclMjB3b21hbiUyMGNvbnN1bHRhdGlvbiUyMG9mZmljZSUyMGRlc2slMjBkZXNrJTIwcGFwZXJ3b3JrJTIwZmluYW5jZSUyMGV4cGVydCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzM2NjExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Free Consultation Meeting"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
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
              className="text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Start With a <br />
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Free Consultation
              </span>
            </h2>

            <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.6)] mb-10">
              Your journey to tax resolution begins with a 30-minute introductory meeting. We review your current tax situation, explain your available options, and provide a clear roadmap for moving forward.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#f9faff] p-8 rounded-[24px] border border-[rgba(0,0,0,0.03)] flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-bold text-[18px]">30 Minutes</h4>
                  <p className="text-[14px] text-[rgba(10,22,40,0.5)]">Duration of consultation</p>
                </div>
              </div>
              
              <div className="bg-[#f9faff] p-8 rounded-[24px] border border-[rgba(0,0,0,0.03)] flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white">
                  <Video size={20} />
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-bold text-[18px]">Phone or Video</h4>
                  <p className="text-[14px] text-[rgba(10,22,40,0.5)]">Choose your preferred format</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
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

            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1d1ee3] text-white rounded-full px-10 py-5 font-bold text-[18px] flex items-center gap-3 group"
              >
                Schedule Your Meeting
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
