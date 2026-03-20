import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Scale, Handshake, BadgeDollarSign } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AttaxTrustpilot } from "./TrustpilotBadge";
import consultImg from "../../../assets/handling-cases.webp";

const services = [
  {
    icon: Scale,
    title: "Tax Resolution",
    desc: "We navigate the IRS collections process on your behalf   from Installment Agreements and Currently Not Collectible status to Offers in Compromise. Every resolution strategy is built around your real numbers.",
    points: ["Offer in Compromise", "Installment Agreements", "Penalty Abatement"],
  },
  {
    icon: BadgeDollarSign,
    title: "Tax Relief",
    desc: "If you owe more than you can pay, federal tax relief programs can significantly reduce or defer your total debt. We assess your full eligibility, prepare your case, and present it to the IRS with clarity and precision.",
    points: ["Currently Not Collectible", "IRS Fresh Start Program", "Innocent Spouse Relief"],
  },
  {
    icon: Handshake,
    title: "Tax Negotiation",
    desc: "Expert negotiation directly with the IRS and state tax agencies to protect your assets, stop levies, and secure the best possible outcome   with a dedicated tax professional in your corner at every step.",
    points: ["Lien Subordination & Withdrawal", "State Tax Negotiations", "Collections Appeals"],
  },
];

export function useImmersiveTrigger() {
  const ref = useRef<HTMLDivElement>(null!);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

export function AttaxServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { ref: ctaRef, active: immersiveActive } = useImmersiveTrigger();

  return (
    <section
      id="services"
      className="relative py-[60px] md:py-[120px] [will-change:background-color] [backface-visibility:hidden] duration-150"
      style={{
        background: immersiveActive ? "#0a1628" : "#ffffff",
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      ref={ref}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-[640px]"
          >
            <span
              className="text-[14px] md:text-[16px] font-medium block mb-2 md:mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: immersiveActive ? "#ffffff" : "#1d1ee3" }}
            >
              [What We Do]
            </span>
            <h2
              className="text-[32px] md:text-[36px] lg:text-[56px] leading-[1.2] md:leading-[1.1]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, color: immersiveActive ? "#ffffff" : "#03030f" }}
            >
              <span className="lg:whitespace-nowrap">Services That{" "}
              <span className="italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Actually Work
              </span></span>
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif", color: immersiveActive ? "rgba(255,255,255,0.6)" : "rgba(10,22,40,0.6)" }}>
              Our licensed Tax Specialists handle every aspect of your case, from initial analysis to final settlement, ensuring you never have to face the IRS alone.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-5 bg-[#1d1ee3] rounded-[50px] pl-5 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 group shrink-0 self-start"
          >
            <span className="text-white text-[14px] md:text-[16px] font-medium px-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              View All Services
            </span>
            <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0">
              <ArrowUpRight size={18} className="text-[#1d1ee3] md:w-5 md:h-5" />
            </div>
          </motion.button>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="bg-[#f7f7f4] rounded-[12px] p-[30px] flex flex-col items-start gap-[31px] group transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                   <Icon size={24} className="text-[#1d1ee3]" />
                </div>
                
                <div className="flex flex-col gap-[12px] w-full flex-1">
                  <h3 
                    className="text-[#03030f] text-[24px] md:text-[26px] leading-[1.2] md:leading-[33.6px] font-semibold"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-[rgba(3,3,15,0.7)] text-[14px] md:text-[15px] lg:text-[15.5px] leading-[1.6] md:leading-[24px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {svc.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {svc.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-[#03030f] text-[14px] md:text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                        <span className="w-[6px] h-[6px] rounded-full bg-[#1d1ee3] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex h-[40px] items-center gap-[16px] group/btn">
                  <span className="text-[#03030f] text-[13.9px] font-medium leading-[21px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    Read More
                  </span>
                  <div className="size-[39px] rounded-full border border-[rgba(0,0,0,0.07)] flex items-center justify-center group-hover/btn:bg-[#03030f] transition-colors duration-300">
                    <ArrowUpRight size={16} className="text-[#03030f] group-hover/btn:text-white transition-colors duration-300" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width image CTA */}
        <div ref={ctaRef}>
          <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-[24px] overflow-hidden h-[400px] md:h-[340px]"
        >
          <ImageWithFallback
            src={consultImg}
            alt="ATTAX Solutions   Professional Tax Consultation"
            width={1292}
            height={734}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-[#0a1628]/45 md:bg-[#0a1628]/45"
          />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 bg-[#00000000] text-center md:text-left">
            <div className="max-w-[500px]">
              <p
                className="text-white text-[24px] md:text-[32px] leading-[1.3] md:leading-[1.25]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Every case is different.{" "}
                <span className="block md:inline" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Every client deserves a custom plan.
                </span>
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
                className="mt-6 md:mt-8 flex items-center gap-3 bg-white rounded-[50px] pl-4 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 group mx-auto md:mx-0"
              >
                <span className="text-[#0a1628] text-[14px] md:text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Start Your Free Consultation
                </span>
                <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0">
                  <ArrowUpRight size={18} className="md:w-4 md:h-4" color="white" />
                </div>
              </motion.button>
            </div>
            <div className="hidden md:block">
              <AttaxTrustpilot />
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
