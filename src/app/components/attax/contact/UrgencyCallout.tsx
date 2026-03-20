import { motion } from "motion/react";
import { AlertCircle, Phone, ArrowUpRight } from "lucide-react";

export function UrgencyCallout() {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#0a1628] rounded-[40px] p-8 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1d1ee3]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-full mb-8 border border-[#F59E0B]/20">
              <AlertCircle size={16} />
              <span className="text-[13px] font-bold uppercase tracking-widest">Time Sensitive</span>
            </div>
            
            <h2 
              className="text-[40px] lg:text-[52px] leading-[1.1] text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
            >
              Dealing with an active levy or{" "}
              <span className="text-[#F59E0B]">wage garnishment?</span>
            </h2>
            <p 
              className="text-[18px] lg:text-[20px] text-white/70 leading-relaxed"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Call us directly   time-sensitive situations require immediate action to stop collection activities before they escalate.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            <motion.a
              href="tel:+19492873015"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center bg-white rounded-[32px] p-10 lg:p-12 text-center shadow-2xl group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#1d1ee3] flex items-center justify-center text-white mb-6 group-hover:bg-[#1618c7] transition-colors">
                <Phone size={28} />
              </div>
              <p className="text-[#0a1628]/40 text-[14px] uppercase tracking-widest mb-2 font-bold">Priority Support Line</p>
              <p 
                className="text-[32px] lg:text-[40px] text-[#0a1628] mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
              >
                +1 (949) 287-3015
              </p>
              <div className="flex items-center gap-2 text-[#1d1ee3] font-bold uppercase tracking-wider text-[13px]">
                <span>Speak with a specialist now</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
