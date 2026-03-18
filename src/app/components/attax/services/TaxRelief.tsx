import { motion } from "motion/react";
import { ArrowUpRight, HelpCircle, Briefcase, FileText, BadgeAlert, UserCheck } from "lucide-react";
import { Link } from "react-router";

const programs = [
  {
    title: "Offer in Compromise (OIC)",
    description: "Settle your total tax debt for less than you owe if you meet specific IRS financial criteria.",
    icon: Briefcase
  },
  {
    title: "Installment Agreements",
    description: "Negotiated monthly payment plans that fit your current budget and prevent further collection actions.",
    icon: FileText
  },
  {
    title: "Currently Not Collectible (CNC)",
    description: "Temporarily halting all collection activities if paying would cause immediate financial hardship.",
    icon: BadgeAlert
  },
  {
    title: "Penalty Abatement",
    description: "Requesting the removal of penalties if you had 'reasonable cause' for non-compliance.",
    icon: HelpCircle
  },
  {
    title: "Innocent Spouse Relief",
    description: "Relieving you of tax liability caused by a current or former spouse's errors on joint returns.",
    icon: UserCheck
  }
];

export function TaxRelief() {
  return (
    <section id="tax-relief" className="py-[120px] bg-[#f9faff] scroll-mt-[120px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20 max-w-[900px] mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [Tax Relief]
          </motion.span>
          
          <h2 
            className="text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium mb-8"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Strategic IRS Relief <br />
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Program Navigation
            </span>
          </h2>

          <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.6)]">
            Tax relief focuses on reducing or eliminating the total amount you owe through specialized IRS programs. Our team of Tax Specialists identifies which program fits your financial profile to ensure the maximum possible relief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[24px] p-10 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgba(29,30,227,0.06)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#1d1ee3]/5 rounded-full flex items-center justify-center text-[#1d1ee3] mb-8 group-hover:bg-[#1d1ee3] group-hover:text-white transition-colors duration-300">
                <program.icon size={28} />
              </div>
              
              <h3 className="text-[24px] font-bold text-[#0a1628] mb-4 group-hover:text-[#1d1ee3] transition-colors">
                {program.title}
              </h3>
              
              <p className="text-[16px] text-[rgba(10,22,40,0.5)] leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/#process" 
            className="flex items-center justify-between gap-4 bg-white border border-[rgba(0,0,0,0.05)] rounded-full px-10 py-5 font-bold text-[18px] text-[#0a1628] hover:shadow-xl transition-all duration-300 group"
          >
            Explore IRS Fresh Start Programs
            <div className="w-8 h-8 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
