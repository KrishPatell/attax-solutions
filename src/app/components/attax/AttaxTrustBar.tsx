import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Shield, MapPin, Phone, Monitor } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Expert Representation",
    desc: "Dedicated Tax Resolution Specialists",
  },
  {
    icon: MapPin,
    title: "Irvine, CA",
    desc: "Serving Clients Nationwide",
  },
  {
    icon: Phone,
    title: "Free Consultation",
    desc: "No Pressure, No Commitment",
  },
  {
    icon: Monitor,
    title: "Client Portal Available",
    desc: "Secure 24/7 access to your case",
  },
];

export function AttaxTrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-white border-b border-[#eaeeff] py-4 sm:py-5 md:py-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Mobile + tablet: 2×2 grid. lg+: single row of 4 with vertical dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 divide-[#eaeeff]">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            const isLeftCol = i % 2 === 0;
            const isTopRow = i < 2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={[
                  "flex items-center gap-2 sm:gap-3 md:gap-4 py-5 sm:py-6 md:py-7 min-w-0",
                  isLeftCol ? "max-lg:border-r max-lg:border-[#eaeeff] max-lg:pr-3 sm:max-lg:pr-4" : "",
                  !isLeftCol ? "max-lg:pl-3 sm:max-lg:pl-4" : "",
                  isTopRow ? "max-lg:border-b max-lg:border-[#eaeeff]" : "",
                  "lg:gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-0",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#eaeaff] rounded-[10px] flex items-center justify-center shrink-0">
                  <Icon className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-[#1d1ee3]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[#0a1628] text-[12px] sm:text-[13px] lg:text-[14px] leading-snug"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[rgba(10,22,40,0.7)] text-[11px] sm:text-[12px] lg:text-[13px] mt-0.5 leading-snug max-lg:line-clamp-2 lg:whitespace-nowrap"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
