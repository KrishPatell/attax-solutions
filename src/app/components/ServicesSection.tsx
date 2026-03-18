import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight, CheckCircle2, Package, DollarSign, Building2, Shield, Users } from "lucide-react";
import imgServiceImg from "figma:asset/f17945b8cada815f04d1086725820444c67f97b4.png";
import imgServiceImg2 from "figma:asset/9ac5963fc0e77b27818e101e597556691793370f.png";

const tabs = [
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    number: "[01]",
    title: "Smart Inventory",
    description:
      "Optimize your inventory management with data-driven insights and automated tracking systems that reduce waste and maximize efficiency.",
    features: ["Real-time stock tracking", "Demand forecasting & automation", "Supply chain optimization"],
    img: imgServiceImg,
  },
  {
    id: "finance",
    label: "Finance",
    icon: DollarSign,
    number: "[02]",
    title: "Wealth Finance",
    description:
      "Guiding individuals and businesses with smart financial planning, investment advice, and long-term wealth strategies.",
    features: ["Strategic financial planning", "Investment portfolio advisory", "Long-term wealth management"],
    img: imgServiceImg2,
  },
  {
    id: "asset",
    label: "Asset",
    icon: Building2,
    number: "[03]",
    title: "Asset Management",
    description:
      "Maximize the value of your assets through strategic lifecycle management and performance optimization.",
    features: ["Asset lifecycle tracking", "Performance optimization", "Portfolio management"],
    img: imgServiceImg,
  },
  {
    id: "risk",
    label: "Risk Management",
    icon: Shield,
    number: "[04]",
    title: "Risk Assessment",
    description:
      "Helping organizations identify vulnerabilities and safeguard assets with proactive, data-driven risk strategies.",
    features: ["Comprehensive Risk Audits", "Compliance & Regulatory Alignment", "Crisis Management & Prevention"],
    img: imgServiceImg2,
  },
  {
    id: "team",
    label: "Team Growth",
    icon: Users,
    number: "[05]",
    title: "Team Strategy",
    description:
      "Build high-performing teams with strategic talent development and organizational culture transformation.",
    features: ["Leadership development programs", "Team performance coaching", "Organizational restructuring"],
    img: imgServiceImg,
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("risk");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="services" className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
        >
          <div className="max-w-[660px]">
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Driving Growth Through{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Strategic
              </span>{" "}
              <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>Excellence</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group shrink-0"
          >
            <span className="text-white text-[16px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
              See All Service
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight size={20} color="#1d1ee3" />
            </div>
          </motion.button>
        </motion.div>

        {/* Content */}
        <div className="flex gap-5">
          {/* Left: Service Accordion */}
          <div className="flex-1 border border-[rgba(0,0,0,0.07)] rounded-[12px] overflow-hidden">
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeTab;
              const Icon = tab.icon;
              return (
                <div key={tab.id} className={`border-t border-[rgba(0,0,0,0.07)] first:border-t-0 ${isActive ? "bg-white" : "bg-white hover:bg-[#fafafa]"}`}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="w-full flex items-center gap-5 py-6 px-6 text-left"
                  >
                    <span
                      className="text-[28px] text-[#03030f] shrink-0"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                    >
                      {tab.number}
                    </span>
                    <span
                      className="flex-1 text-[28px] text-[#03030f]"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                    >
                      {tab.label}
                    </span>
                    <Icon
                      size={20}
                      color={isActive ? "#1d1ee3" : "rgba(3,3,15,0.4)"}
                      className="shrink-0 transition-colors duration-200"
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
                        <div className="px-6 pb-6 flex flex-col gap-4">
                          <p
                            className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)] max-w-[500px]"
                            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                          >
                            {tab.description}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {tab.features.map((feat) => (
                              <li key={feat} className="flex items-center gap-3">
                                <CheckCircle2 size={17} color="#03030F" className="shrink-0" />
                                <span
                                  className="text-[16px] text-[#03030f]"
                                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                                >
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 w-fit mt-2 group"
                          >
                            <span className="text-white text-[16px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                              Explore Service
                            </span>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                              <ArrowUpRight size={18} color="#1d1ee3" />
                            </div>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-[502px] shrink-0 rounded-[12px] overflow-hidden self-stretch"
          >
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
