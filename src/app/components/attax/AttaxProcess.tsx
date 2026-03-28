import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight, MessageCircle, Search, Shield, CheckCircle2, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AttaxTrustpilot } from "./TrustpilotBadge";
import complimentaryConsultationImg from "../../../assets/9ac5963fc0e77b27818e101e597556691793370f.webp";

const steps = [
  {
    num: "01",
    id: "consultation",
    icon: MessageCircle,
    title: "Complimentary Consultation",
    desc: "We listen first. A 30-minute call with a licensed tax professional   no charge, no obligation.",
    highlights: ["No fees, no pressure", "Expert consultation", "Nationwide representation"],
    img: complimentaryConsultationImg,
  },
  {
    num: "02",
    id: "analysis",
    icon: Search,
    title: "Detailed Analysis",
    desc: "We pull your IRS transcripts, analyze your full liability, and identify every available relief option.",
    highlights: ["IRS transcript review", "Full liability breakdown", "Relief option mapping"],
    img: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1080",
  },
  {
    num: "03",
    id: "defense",
    icon: Shield,
    title: "Strategic Defense",
    desc: "We negotiate directly with the IRS   halting collections, releasing levies, and protecting your assets.",
    highlights: ["Collections halt", "Levy & lien release", "Asset protection"],
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
  },
  {
    num: "04",
    id: "resolution",
    icon: CheckCircle2,
    title: "Resolution",
    desc: "Settlement confirmed. Whether it's a reduced balance, payment plan, or other relief   we see it through.",
    highlights: ["Offer in Compromise", "Payment plans", "Penalty abatement"],
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1080",
  },
];

export function AttaxProcess() {
  const [activeStep, setActiveStep] = useState(steps[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section id="process" className="bg-[#f7f9ff] py-[60px] md:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[#1d1ee3] text-[14px] md:text-[16px] block mb-2 md:mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [Our Process]
            </span>
            <h2
              className="leading-[1.2] md:leading-[1.15] text-[#0a1628] text-[32px] md:text-[34px] lg:text-[50px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              From First Call to{" "}
              <span className="inline" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Full Resolution
              </span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-10 shrink-0 w-auto">
            
            <Link to="/our-process" className="shrink-0 h-fit w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-5 bg-[#0a1628] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 group cursor-pointer"
              >
                <span
                  className="text-white text-[14px] md:text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  See Our Process
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                  <ArrowUpRight size={20} className="w-4 h-4 md:w-5 md:h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowUpRight size={20} className="w-4 h-4 md:w-5 md:h-5 text-white absolute transition-transform duration-300 ease-in-out translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Main Content: Image Left + Accordion Right */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side: Changing Image */}
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 min-h-[360px] lg:min-h-[520px] relative rounded-[20px] overflow-hidden group"
          >
            <ImageWithFallback
              src={currentStep.img}
              alt={currentStep.title}
              width={1024}
              height={682}
              // Make the image fill the card deterministically on mobile Safari.
              // Also apply a small mobile-only zoom so the subject isn't clipped.
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.06] transition-transform duration-700 md:scale-100 md:group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,22,40,0.02) 0%, rgba(10,22,40,0.65) 100%)",
              }}
            />
            {/* Bottom overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
              <p
                className="text-white text-[22px] md:text-[28px] leading-[1.25] mb-2 font-[Inter_Tight]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                {currentStep.num}.{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  {currentStep.title}
                </span>
              </p>
              <p
                className="text-white/80 text-[15px] leading-[1.6] max-w-[400px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Every step is handled by a dedicated tax professional   the same person, start to finish.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Accordion Tabs */}
          <div className="flex-1 border border-[rgba(0,0,0,0.07)] rounded-[12px] overflow-hidden">
            {steps.map((step, i) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`border-t border-[rgba(0,0,0,0.07)] first:border-t-0 ${isActive ? "bg-white" : "bg-white hover:bg-[#fafafa]"}`}
                >
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className="w-full flex items-center gap-3 md:gap-5 py-5 px-5 md:py-6 md:px-6 text-left"
                  >
                    <span
                      className="text-[18px] md:text-[24px] text-[#03030f] shrink-0"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="flex-1 text-[18px] md:text-[24px] text-[#03030f] not-italic font-['Inter_Tight',sans-serif]"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                    >
                      {step.title}
                    </span>
                    <Icon
                      size={20}
                      color={isActive ? "#1d1ee3" : "rgba(3,3,15,0.4)"}
                      className="shrink-0 transition-colors duration-200 md:!w-[25px] md:!h-[25px]"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-4">
                          <p
                            className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)] max-w-[500px]"
                            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                          >
                            {step.desc}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {step.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-3">
                                <CheckCircle2 size={17} color="#03030F" className="shrink-0" />
                                <span
                                  className="text-[16px] text-[#03030f]"
                                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                                >
                                  {h}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <Link to="/services" className="self-start mt-2">
                            <motion.div
                              className="flex items-center gap-5 bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 group cursor-pointer"
                            >
                              <span className="text-white text-[16px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                                Explore Service
                              </span>
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
                                <ArrowUpRight size={18} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                                <ArrowUpRight size={18} className="text-[#1d1ee3] absolute transition-transform duration-300 ease-in-out translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                              </div>
                            </motion.div>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-[#0a1628] rounded-[18px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
              <Shield size={20} className="text-[#a5b4fc]" />
            </div>
            <p
              className="text-white/80 text-[15px] md:text-[17px] leading-[1.6] max-w-[700px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Every ATTAX client receives a dedicated tax professional   not a salesperson. No handoffs. No surprises. We handle the IRS so you don't have to.
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-end shrink-0 w-full md:w-auto">
            <div className="scale-90 origin-left">
              <AttaxTrustpilot />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}