import { motion } from "motion/react";
import { Breadcrumbs } from "../about/Breadcrumbs";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../../../lib/heroH1";

export function ProcessHero() {
  return (
    <section className="relative pt-[100px] md:pt-[160px] pb-[60px] md:pb-[100px] overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="flex flex-col items-start gap-6 max-w-[780px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Breadcrumbs current="Our Process" light />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={HERO_H1_CLASS_ON_LIGHT}
            style={HERO_H1_STYLE}
          >
            A Clear Process. No Surprises. No Runaround.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15px] md:text-[18px] text-[#0a1628]/55 leading-[1.7] max-w-[620px]"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            From your first call to your final resolution, here's exactly what happens — and why we do it this way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            {[
              { label: "The 4 Steps", href: "#process-steps" },
              { label: "Fresh Start Programs", href: "#fresh-start" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full border border-[#0a1628]/12 text-[13px] font-semibold text-[#0a1628]/60 hover:border-[#1d1ee3] hover:text-[#1d1ee3] transition-all"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
