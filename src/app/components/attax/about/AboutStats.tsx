import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Bookmark, FolderOpen, Sparkles, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const teamImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900";

const stats = [
  {
    icon: FolderOpen,
    value: "500+",
    label: "IRS Cases Resolved",
    desc: "Over 500 clients have successfully resolved their IRS debt with ATTAX.",
  },
  {
    icon: Sparkles,
    value: "98%",
    label: "Client Satisfaction",
    desc: "Trusted by hundreds of clients who rate our work and communication highly.",
  },
  {
    icon: Users,
    value: "50",
    label: "States Served",
    desc: "Our ability to represent clients remotely means we serve all 50 states.",
  },
  {
    icon: Lightbulb,
    value: "5+",
    label: "Years of Experience",
    desc: "Building on years of IRS advocacy, we deliver trusted, proven guidance.",
  },
];

const services = [
  "Tax Resolution",
  "Tax Relief",
  "Tax Negotiation",
  "IRS Representation",
];

export function AboutStats() {
  return (
    <section className="bg-[#eaecff] py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Top: Headline + 3-col layout ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] md:text-[52px] lg:text-[64px] text-[#03030f] leading-[1.15] mb-12 md:mb-16 max-w-[900px]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
        >
          Since 2020, we're a team of{" "}
          <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
            dedicated
          </span>{" "}
          Tax Specialists, built to resolve your IRS problem.
        </motion.h2>

        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Col 1 — Left: body text + stat */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-between gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] text-[#03030f]/60 leading-[1.8]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              At ATTAX Solutions, we navigate the IRS on behalf of our clients — from negotiation to final resolution. We combine precision with direct advocacy to get real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-[3px] border-[#1d1ee3] pl-5"
            >
              <p className="text-[48px] md:text-[56px] font-bold text-[#03030f] leading-none mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>500+</p>
              <p className="text-[14px] text-[#03030f]/55" style={{ fontFamily: "'Inter Tight', sans-serif" }}>IRS Cases Successfully Resolved</p>
            </motion.div>
          </div>

          {/* Col 2 — Center: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 md:col-span-5 rounded-[20px] md:rounded-[28px] overflow-hidden h-[320px] md:h-[420px]"
          >
            <ImageWithFallback
              src={teamImg}
              alt="ATTAX Solutions Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Col 3 — Right: services card + CTA */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white rounded-[20px] p-6 shadow-sm"
            >
              <div className="w-9 h-9 rounded-[10px] bg-[#eaecff] flex items-center justify-center mb-5">
                <Bookmark size={17} className="text-[#1d1ee3]" />
              </div>
              <div className="flex flex-col">
                {services.map((svc, i) => (
                  <div
                    key={svc}
                    className={`py-3 text-[15px] text-[#03030f]/80 ${i < services.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {svc}
                  </div>
                ))}
              </div>
            </motion.div>

            <Link
              to="/contact"
              className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 font-bold text-[15px] inline-flex items-center gap-5 self-start w-fit"
            >
              <span>Book a Free Call</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <ArrowUpRight size={18} className="text-[#1d1ee3]" />
              </div>
            </Link>
          </div>
        </div>

        {/* ── Bottom: Stats bar ── */}
        <div className="mt-[80px] md:mt-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2
              className="text-[32px] md:text-[48px] lg:text-[60px] text-[#03030f] leading-[1.2] mb-5"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
            >
              With a 98% client{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                satisfaction,
              </span>{" "}
              our Tax Specialists have resolved millions in IRS debt
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#03030f]/55 max-w-[560px] mx-auto leading-[1.7]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Our resolution-first approach is built to align with your financial situation and deliver results that last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map(({ icon: Icon, value, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#eaecff] flex items-center justify-center">
                  <Icon size={18} className="text-[#1d1ee3]" />
                </div>
                <p className="text-[44px] md:text-[52px] font-bold text-[#03030f] leading-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{value}</p>
                <div>
                  <p className="text-[14px] font-semibold text-[#03030f] mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{label}</p>
                  <p className="text-[13px] text-[#03030f]/50 leading-[1.6]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
