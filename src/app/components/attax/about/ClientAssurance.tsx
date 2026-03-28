import { motion } from "motion/react";
import { ShieldCheck, HeartHandshake, Scale } from "lucide-react";

const commitments = [
  {
    icon: Scale,
    title: "Honest Case Evaluation",
    description: "We tell you exactly where you stand. If we can't help you, we'll say so — we never take a case unless there's a viable path forward."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Fees",
    description: "No hidden costs, no surprise hourly billing. We provide clear, flat-fee pricing for our services so you know exactly what your investment is from day one."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Representation",
    description: "Your case is handled by a licensed professional who knows your story. You aren't just a number in a database; you're a person who deserves real advocacy."
  }
];

export function ClientAssurance() {
  return (
    <section id="client-assurance" className="bg-[#0a1628] py-[60px] md:py-[120px] overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1d1ee3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-0 relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#a5b4fc] text-[14px] uppercase tracking-widest font-bold block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Client Assurance]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[32px] md:text-[48px] lg:text-[50px] leading-[1.2] md:leading-[1.1] text-white max-w-[700px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
          >
            Our Client{" "}
            <span className="italic font-normal text-[#a5b4fc]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Assurance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-[18px] text-white/55 leading-[1.7] mt-6 max-w-[600px] md:max-w-[min(56rem,100%)] lg:max-w-[min(64rem,100%)] text-pretty"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            We do not use the word "guarantee" when it comes to legal outcomes. The IRS is a complex government agency and no firm can ethically promise a specific result.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[20px] p-7 hover:bg-white/[0.08] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[#a5b4fc] mb-6">
                <item.icon size={20} />
              </div>
              <h3
                className="text-white text-[20px] mb-3"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/50 text-[15px] leading-[1.65]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
