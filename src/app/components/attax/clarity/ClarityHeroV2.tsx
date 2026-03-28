import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Breadcrumbs } from "../about/Breadcrumbs";
import clarityHeroImg from "../../../../assets/clarity-hero.webp";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../../../lib/heroH1";

const tickerItems = [
  {
    title: "IRS Transcript Sync",
    desc: "100% coverage — every notice, lien, and collection action captured in real time.",
  },
  {
    title: "Proactive Monitoring",
    desc: "24/7 account surveillance so you're never the last to know.",
  },
];

export function ClarityHeroV2() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % tickerItems.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative pt-[100px] md:pt-[160px] pb-[60px] md:pb-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Breadcrumbs current="ATTAX Clarity" light />
        </motion.div>

        {/* Top Content Layout */}
        <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between gap-12 mb-12 md:mb-16 lg:mb-6">

          {/* Left: Heading & Description */}
          <div className="max-w-[720px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`${HERO_H1_CLASS_ON_LIGHT} mb-7`}
              style={HERO_H1_STYLE}
            >
              Know Before the <br />
              IRS{" "}
              <span className="italic font-normal text-[#1d1ee3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Acts.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[14px] md:text-[16px] lg:text-[20px] leading-[1.6] text-[rgba(3,3,15,0.7)] max-w-[620px] mb-8 md:mb-12"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              ATTAX Clarity is a proactive monitoring and scoring system — built so you're never caught off guard by your tax standing again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => document.querySelector("#clarity")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start group relative bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 inline-flex items-center gap-5 hover:bg-[#1618c7] transition-all"
              >
                <span className="text-white text-[14px] md:text-[16px] font-medium whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Join Our Waitlist
                </span>
                <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-[#1d1ee3]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: Stats Card — cream; ~20% of card height over the hero image (tune lg:mb negative margin). */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block w-full lg:max-w-[340px] shrink-0 relative self-end lg:mb-[-3.5rem] xl:mb-[-4rem]"
          >
            <div
              className="bg-[#f7f7f4] rounded-[20px] overflow-hidden"
              style={{
                boxShadow: "0 28px 70px rgba(10,22,40,0.14), 0 12px 32px rgba(10,22,40,0.08)",
                border: "1px solid rgba(10,22,40,0.06)",
              }}
            >
              {/* Blue top accent */}
              <div className="h-[3px] w-full bg-[#1d1ee3]" />

              <div className="p-8">
                {/* Hero stat */}
                <div className="pb-6 border-b border-[#0a1628]/10">
                  <p
                    className="text-[72px] leading-none font-bold text-[#0a1628]"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    14
                  </p>
                  <p
                    className="text-[15px] text-[#0a1628]/55 mt-2 leading-snug"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    days on average before{" "}
                    <span className="italic" style={{ fontFamily: "'Playfair Display', serif" }}>IRS warning</span>
                  </p>
                </div>

                {/* Ticker — airport-style vertical scroll */}
                <div className="pt-6 overflow-hidden" style={{ minHeight: 80 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ y: 36, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -36, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <p
                        className="text-[17px] font-semibold text-[#0a1628] mb-1.5"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {tickerItems[activeIdx].title}
                      </p>
                      <p
                        className="text-[13px] text-[#0a1628]/50 leading-[1.55]"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {tickerItems[activeIdx].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-0 rounded-[16px] overflow-hidden h-[220px] sm:h-[360px] md:h-[480px] lg:aspect-[1140/580] lg:h-auto"
        >
          <ImageWithFallback
            src={clarityHeroImg}
            alt="ATTAX Clarity — IRS Monitoring Platform"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
