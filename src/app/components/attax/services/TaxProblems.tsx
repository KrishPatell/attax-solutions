import { motion } from "motion/react";
import { AlertCircle, FileWarning, Home, Banknote, CreditCard } from "lucide-react";

const problems = [
  {
    title: "Back Taxes",
    description: "Taxes owed from prior years, with compounding penalties.",
    impact: "Every month that passes adds more stress and more money you owe.",
    icon: AlertCircle
  },
  {
    title: "Unfiled Returns",
    description: "Years of missing filings, escalating IRS risk.",
    impact: "Not knowing what you owe keeps you up at night.",
    icon: FileWarning
  },
  {
    title: "Tax Liens",
    description: "IRS claim on your property; damages credit and ability to sell.",
    impact: "Having a lien on your home makes you feel like you can't move forward.",
    icon: Home
  },
  {
    title: "Tax Levy",
    description: "IRS seizure of bank accounts, wages, or assets.",
    impact: "Seeing your bank account emptied without warning is terrifying.",
    icon: CreditCard
  },
  {
    title: "Wage Garnishments",
    description: "IRS takes a portion of every paycheck until resolved.",
    impact: "Every payday is a reminder of what you owe.",
    icon: Banknote
  }
];

export function TaxProblems() {
  return (
    <section id="tax-problems" className="py-[60px] md:py-[120px] bg-[#0a1628] text-white scroll-mt-[120px] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1d1ee3]/10 rounded-full blur-[100px] -ml-32 -mt-32" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 max-w-[900px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#a5b4fc] text-[14px] uppercase tracking-widest font-bold block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Common Problems]
          </motion.span>

          <h2
            className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-white font-medium mb-6 md:mb-8"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Facing One of These?{" "}
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              We've Handled Worse.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-8 hover:bg-white/10 transition-all duration-500 group
                ${idx === 3 ? "lg:col-span-1" : ""}
                ${idx === 4 ? "lg:col-span-2" : ""}
              `}
            >
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-[#a5b4fc] group-hover:bg-[#1d1ee3] group-hover:text-white transition-all duration-300">
                  <problem.icon size={22} />
                </div>
                <div className="text-[12px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white/60 transition-colors">
                  [Case Code: {idx + 1}]
                </div>
              </div>
              
              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 md:mb-6">
                {problem.title}
              </h3>

              <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed mb-6 md:mb-8">
                {problem.description}
              </p>

              <div className="pt-5 md:pt-6 border-t border-white/10">
                <p className="text-[14px] md:text-[15px] italic text-[#f59e0b] font-medium leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{problem.impact}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
