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
    <section className="bg-white border-b border-[#eaeeff] py-0" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-[#eaeeff]">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 py-4 md:py-6 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <div className="w-10 h-10 bg-[#eaeaff] rounded-[10px] flex items-center justify-center shrink-0">
                  <Icon size={18} color="#1d1ee3" />
                </div>
                <div>
                  <p
                    className="text-[#0a1628] text-[14px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[rgba(10,22,40,0.55)] text-[12px] lg:text-[13px] mt-0.5"
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
