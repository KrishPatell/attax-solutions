import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ShieldCheck, UserCheck, MessageCircle, FileBarChart, Plus, Minus, AlertCircle, FileWarning, Home, Banknote, CreditCard } from "lucide-react";
import { Link } from "react-router";
import { AttaxTestimonialCard } from "../AttaxTestimonialCard";
import dedicatedImg from "../../../../assets/tab-dedicated-representation.jpg";
import transparencyImg from "../../../../assets/tab-total-transparency.jpg";

const firmFeatures = [
  {
    icon: UserCheck,
    title: "Dedicated Representation",
    description: "One licensed representative is assigned to your case. No handoffs, no anonymous call centers, and no impersonal management of your financial future.",
    image: dedicatedImg,
  },
  {
    icon: ShieldCheck,
    title: "Direct IRS Advocacy",
    description: "We represent you directly before the IRS. You won't need to speak with agents or worry about letters. We handle all formal communication on your behalf.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: MessageCircle,
    title: "Total Transparency",
    description: "You'll never be in the dark. We provide regular updates on your case's progress and ensure you understand every step of our strategy before we execute it.",
    image: transparencyImg,
  },
  {
    icon: FileBarChart,
    title: "Strategic Resolution",
    description: "We don't just fill out forms. We analyze your unique situation to develop a custom legal strategy aimed at the most favorable outcome allowed by law.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  },
] as const;

/** Five common IRS issues (previously the standalone Services TaxProblems section). */
const commonProblemTabs = [
  {
    icon: AlertCircle,
    title: "Back Taxes",
    description: "Taxes owed from prior years, with compounding penalties.",
    impact: "Every month that passes adds more stress and more money you owe.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: FileWarning,
    title: "Unfiled Returns",
    description: "Years of missing filings, escalating IRS risk.",
    impact: "Not knowing what you owe keeps you up at night.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Home,
    title: "Tax Liens",
    description: "IRS claim on your property; damages credit and ability to sell.",
    impact: "Having a lien on your home makes you feel like you can't move forward.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: CreditCard,
    title: "Tax Levy",
    description: "IRS seizure of bank accounts, wages, or assets.",
    impact: "Seeing your bank account emptied without warning is terrifying.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Banknote,
    title: "Wage Garnishments",
    description: "IRS takes a portion of every paycheck until resolved.",
    impact: "Every payday is a reminder of what you owe.",
    image: dedicatedImg,
  },
] as const;

const testimonialPhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&q=80&w=200";

export type HandlingCasesVariant = "firm" | "commonProblems";

type HandlingCasesProps = {
  /** `firm` = About-style advantages. `commonProblems` = Services: five IRS problems in this layout (replaces standalone TaxProblems). */
  variant?: HandlingCasesVariant;
};

export function HandlingCases({ variant = "firm" }: HandlingCasesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const isProblems = variant === "commonProblems";
  const tabs = isProblems ? commonProblemTabs : firmFeatures;
  const active = tabs[activeTab];

  const sectionId = isProblems ? "tax-problems" : "how-we-handle";
  const sectionClass =
    "bg-white py-[60px] md:py-[120px] scroll-mt-[120px] relative overflow-hidden text-[#03030f]";

  return (
    <section id={sectionId} className={sectionClass}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-[900px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {isProblems ? "Common Problems" : "[How We Handle Cases]"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={
                isProblems
                  ? "text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#03030f] font-medium"
                  : "text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] md:leading-[1.1] lg:leading-none text-[#03030f] font-medium lg:whitespace-nowrap"
              }
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {isProblems ? (
                <>Facing One of These?</>
              ) : (
                <>
                  The Advantage of Choosing{" "}
                  <span className="italic text-[#03030f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Firm
                  </span>
                </>
              )}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="group relative bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 inline-flex items-center gap-5 hover:bg-[#1618c7] transition-all self-start"
            >
              <span
                className="text-[16px] font-medium text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                See Our Services
              </span>
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative bg-white">
                <ArrowUpRight
                  size={20}
                  className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />
                <ArrowUpRight
                  size={20}
                  className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Image + accordion */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 min-h-[340px] md:min-h-[500px] relative rounded-[12px] overflow-hidden group"
          >
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 transition-colors duration-500 bg-black/10 group-hover:bg-black/20" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-[30px] flex flex-col md:flex-row items-start md:items-end gap-4 justify-start h-full pointer-events-none">
              <div className="max-w-[361px] pointer-events-auto">
                <AttaxTestimonialCard
                  quote="ATTAX helped me navigate my complex IRS situation with direct advocacy and a clear strategy"
                  name="Robert M."
                  title="Orange County Business Owner"
                  photo={testimonialPhoto}
                  darkProfile={!isProblems}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[420px] bg-[#eaeaff] rounded-[12px] p-5 md:p-8 flex flex-col border border-[rgba(10,22,40,0.06)] shadow-[0_12px_40px_rgba(10,22,40,0.06)]"
          >
            <div className="flex flex-col h-full">
              {tabs.map((item, idx) => {
                const isOpen = activeTab === idx;
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className="flex items-center justify-between py-5 text-left group gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          size={18}
                          className={`text-[#1d1ee3] shrink-0 opacity-90 ${isProblems ? "block" : "hidden sm:block"}`}
                          aria-hidden
                        />
                        <span
                          className={`text-[17px] md:text-[18px] font-medium transition-colors ${
                            isOpen ? "text-[#03030f]" : "text-[rgba(3,3,15,0.7)] group-hover:text-[#1d1ee3]"
                          }`}
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isOpen ? "bg-[#1d1ee3] text-white rotate-180" : "bg-[#eaeaff] text-[#1d1ee3]"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {isProblems && (
                            <p
                              className="text-[11px] uppercase tracking-widest font-bold text-[#1d1ee3] mb-3"
                              style={{ fontFamily: "'Inter Tight', sans-serif" }}
                            >
                              Case code: {idx + 1}
                            </p>
                          )}
                          <p
                            className={`text-[16px] leading-[1.6] text-[rgba(3,3,15,0.75)] ${isProblems ? "pb-4" : "pb-6"}`}
                            style={{ fontFamily: "'Inter Tight', sans-serif" }}
                          >
                            {item.description}
                          </p>
                          {isProblems && "impact" in item && (
                            <div className="pt-4 border-t border-[rgba(10,22,40,0.1)] pb-6">
                              <p
                                className="text-[15px] md:text-[16px] italic text-[#b45309] leading-relaxed"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                &ldquo;{item.impact}&rdquo;
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {idx < tabs.length - 1 && <div className="h-px bg-[rgba(0,0,0,0.07)] w-full" />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
