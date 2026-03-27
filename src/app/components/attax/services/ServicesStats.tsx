import { motion } from "motion/react";

const stats = [
  { value: "2,400+", label: "Clients Helped" },
  { value: "98%",    label: "Satisfaction Rate" },
  { value: "$50M+",  label: "Tax Debt Resolved" },
  { value: "50",     label: "States We Serve" },
];

export function ServicesStats() {
  return (
    <section className="border-b border-[rgba(10,22,40,0.06)] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`py-8 md:py-10 px-6 md:px-8 flex flex-col gap-1 ${
                i < stats.length - 1 ? "border-r border-[rgba(10,22,40,0.06)]" : ""
              }`}
            >
              <span
                className="text-[36px] md:text-[48px] font-bold text-[#0a1628] leading-none"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {s.value}
              </span>
              <span
                className="text-[13px] md:text-[14px] text-[#0a1628]/45 font-medium"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
