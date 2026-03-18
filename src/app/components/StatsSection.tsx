import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BarChart2, ThumbsUp, Globe, Clock } from "lucide-react";

const stats = [
  {
    icon: BarChart2,
    value: "150+",
    label: "Successful Projects Delivered",
    desc: "Over 300+ clients complete high-impact projects.",
  },
  {
    icon: ThumbsUp,
    value: "97%",
    label: "Client Satisfaction Rate",
    desc: "Trusted by hundreds of clients who rate our work highly.",
  },
  {
    icon: Globe,
    value: "98%",
    label: "On-Time Delivery",
    desc: "Our ability to adapt and deliver impactful solutions across.",
  },
  {
    icon: BarChart2,
    value: "50+",
    label: "Industries Served",
    desc: "Our ability to adapt and deliver impactful solutions across.",
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years of Experience",
    desc: "Building on years of experience, we provide trusted guidance.",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-[12px] p-5 flex flex-col gap-8 flex-1 min-w-[180px]"
    >
      <div className="w-[60px] h-[60px] bg-[#eaeaff] rounded-full flex items-center justify-center">
        <Icon size={26} color="#1d1ee3" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2">
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
          className="text-[64px] leading-[1] text-[#03030f] tracking-[-2px]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {stat.value}
        </motion.span>
        <p
          className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
        >
          {stat.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#eaeaff] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[750px] mx-auto mb-14"
        >
          <h2
            className="text-[52px] leading-[1.2] text-[#03030f]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            With a 98% client{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              satisfaction,
            </span>
            {" "}our strategies have led to $50M+ in revenue
          </h2>
          <p
            className="text-[18px] leading-[1.4] text-[rgba(3,3,15,0.7)] mt-5"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            Our strategic approach is designed to align with your business goals, helping you scale faster
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="flex gap-4 flex-wrap">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
