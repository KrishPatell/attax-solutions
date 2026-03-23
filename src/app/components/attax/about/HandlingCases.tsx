import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ShieldCheck, UserCheck, MessageCircle, FileBarChart, Plus, Minus } from "lucide-react";
import { AttaxTestimonialCard } from "../AttaxTestimonialCard";
import dedicatedImg from "../../../../assets/tab-dedicated-representation.jpg";
import transparencyImg from "../../../../assets/tab-total-transparency.jpg";

const features = [
  {
    icon: UserCheck,
    title: "Dedicated Representation",
    description: "One licensed representative is assigned to your case. No handoffs, no anonymous call centers, and no impersonal management of your financial future.",
    image: dedicatedImg
  },
  {
    icon: ShieldCheck,
    title: "Direct IRS Advocacy",
    description: "We represent you directly before the IRS. You won't need to speak with agents or worry about letters. We handle all formal communication on your behalf.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: MessageCircle,
    title: "Total Transparency",
    description: "You'll never be in the dark. We provide regular updates on your case's progress and ensure you understand every step of our strategy before we execute it.",
    image: transparencyImg
  },
  {
    icon: FileBarChart,
    title: "Strategic Resolution",
    description: "We don't just fill out forms. We analyze your unique situation to develop a custom legal strategy aimed at the most favorable outcome allowed by law.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  }
];

const testimonialPhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&q=80&w=200";

export function HandlingCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="how-we-handle" className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-[900px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [How We Handle Cases]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] md:leading-[1.1] lg:leading-none text-[#03030f] font-medium lg:whitespace-nowrap"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              The Advantage of Choosing <span className="italic text-[#03030f]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Firm</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 inline-flex items-center gap-5 hover:bg-[#1618c7] transition-all self-start"
            >
              <span className="text-white text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Get Started
              </span>
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                <ArrowUpRight size={20} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                <ArrowUpRight size={20} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Content Section: Image + Interactive Tabs */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left: Interactive Image + Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 min-h-[340px] md:min-h-[500px] relative rounded-[12px] overflow-hidden group"
          >
            {/* Background Image — switches with active tab */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Testimonial Cards */}
            <div className="absolute inset-x-0 bottom-0 p-[30px] flex flex-col md:flex-row items-start md:items-end gap-4 justify-end h-full pointer-events-none">
              <div className="max-w-[361px] pointer-events-auto">
                <AttaxTestimonialCard
                  quote="ATTAX helped me navigate my complex IRS situation with direct advocacy and a clear strategy"
                  name="Robert M."
                  title="Orange County Business Owner"
                  photo={testimonialPhoto}
                  darkProfile
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Accordion/Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[420px] bg-[#eaeaff] rounded-[12px] p-5 md:p-8 flex flex-col"
          >
            <div className="flex flex-col h-full">
              {features.map((feature, idx) => {
                const isOpen = activeTab === idx;
                return (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => setActiveTab(idx)}
                      className="flex items-center justify-between py-5 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        {isOpen && <div className="w-2.5 h-2.5 bg-[#1d1ee3] rounded-full" />}
                        <span className={`text-[18px] font-medium transition-colors ${isOpen ? 'text-[#03030f]' : 'text-[rgba(3,3,15,0.7)] group-hover:text-[#1d1ee3]'}`} style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                          {feature.title}
                        </span>
                      </div>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#1d1ee3] text-white rotate-180' : 'bg-[#eaeaff] text-[#1d1ee3]'}`}>
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
                          <p className="pb-6 text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {idx < features.length - 1 && (
                      <div className="h-px bg-[rgba(0,0,0,0.07)] w-full" />
                    )}
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
