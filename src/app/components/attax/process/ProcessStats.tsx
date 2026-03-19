import { motion } from "motion/react";
import { Users, ShieldCheck, UserCheck, Star } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-[#1d1ee3] size-6" />,
    value: "15,000+",
    label: "Over 15k clients resolved high-impact tax issues.",
  },
  {
    icon: <ShieldCheck className="text-[#1d1ee3] size-6" />,
    value: "98%",
    label: "Trusted by thousands of clients who rate our work highly.",
  },
  {
    icon: <UserCheck className="text-[#1d1ee3] size-6" />,
    value: "50+",
    label: "Our ability to deliver high-quality results across the nation.",
  },
  {
    icon: <Star className="text-[#1d1ee3] size-6" />,
    value: "15+",
    label: "Building on years of experience, we provide trusted guidance.",
  },
];

export function ProcessStats() {
  return (
    <section className="py-[60px] md:py-[100px] bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20">
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] text-[#0a1628] font-medium font-['Inter_Tight'] max-w-[800px]"
          >
            With a 98% client <span className="italic font-['Playfair_Display']">satisfaction</span>,{" "}
            our strategies have led to being{" "}
            the <span className="font-bold">fastest growing</span> in the nation.
          </motion.h2>
          <p className="text-[#0a1628]/60 text-[14px] md:text-[16px] lg:text-[18px] font-['Inter_Tight'] max-w-[600px]">
            Our strategic approach is designed to align with your financial goals, helping you resolve tax debt faster.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f8faff] p-5 md:p-8 lg:p-10 rounded-[20px] border border-[#eaeeff] flex flex-col gap-5 md:gap-6"
            >
              <div className="w-[50px] h-[50px] bg-[#eaeeff] rounded-full shadow-sm flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0a1628] font-['Inter_Tight']">
                  {stat.value}
                </span>
                <p className="text-[#0a1628]/50 text-[14px] leading-relaxed font-['Inter_Tight']">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
