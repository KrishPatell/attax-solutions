import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router";

export function ServiceCTA() {
  return (
    <section className="pb-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1d1ee3] rounded-[48px] overflow-hidden relative min-h-[500px] flex flex-col items-center justify-center text-center p-12 lg:p-24 shadow-[0_40px_100px_rgba(29,30,227,0.3)]"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a5b4fc]/20 rounded-full blur-[100px] -ml-32 -mb-32" />

          {/* Golden star accents */}
          <div className="absolute top-12 left-12 opacity-50">
            <Star size={48} className="text-[#F59E0B] fill-[#F59E0B]" />
          </div>
          <div className="absolute bottom-12 right-12 opacity-50 scale-75">
            <Star size={48} className="text-[#F59E0B] fill-[#F59E0B]" />
          </div>

          <div className="relative z-10 max-w-[800px] mx-auto">
            <span 
              className="text-white/60 text-[14px] uppercase tracking-widest font-bold mb-8 block"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Ready to Start?]
            </span>
            
            <h2 
              className="text-[48px] lg:text-[72px] leading-[1.05] text-white font-medium mb-12"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Start Your Complimentary <br />
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Consultation
              </span>
            </h2>

            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1d1ee3" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#1d1ee3] rounded-full px-12 py-6 font-bold text-[20px] flex items-center gap-4 mx-auto group shadow-2xl transition-all duration-300"
              >
                <span>Get Started Now</span>
                <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white group-hover:bg-[#1d1ee3] group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={22} />
                </div>
              </motion.button>
            </Link>

            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-white/70 text-[16px] font-medium">
                No fees for the consultation. No obligation to proceed.
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
                <span className="text-white/50 text-[14px] ml-2">Trusted by 5,000+ Clients Nationwide</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
