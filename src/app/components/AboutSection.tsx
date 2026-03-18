import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import imgTeamMembers from "figma:asset/53391ac87d05907d479ad77b481ccbbaba8654ab.png";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookCall = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-[#eaeaff] py-[120px] overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="max-w-[819px]">
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >Since 2016, we're a team of all in all  <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>experienced </span>consultations, combine for strategic instan</h2>
          </div>
        </motion.div>

        {/* Content Row */}
        <div className="flex gap-16 items-stretch">
          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex flex-col justify-between"
          >
            <p
              className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)] max-w-[380px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              At Optimo, We help businesses navigate complexity unlock to growth achieve lasting transformation with a team of experienced consultations, We can combine for strategic instant.
            </p>

            {/* Statistics bar */}
            <div className="border-l-2 border-[#1d1ee3] pl-5 mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span
                  className="text-[72px] leading-[1] text-[#03030f] tracking-[-2px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  150+
                </span>
              </motion.div>
              <p
                className="text-[16px] leading-[1.4] text-[#03030f] mt-2"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Successful Projects Delivered
              </p>
            </div>
          </motion.div>

          {/* Center: Team Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[12px] overflow-hidden shrink-0 w-[436px] h-[414px]"
          >
            <img
              src={imgTeamMembers}
              alt="Team members"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Book a call card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-between flex-1"
          >
            {/* Feature card */}
            <div className="bg-white rounded-[12px] p-5 max-w-[220px]">
              <div className="w-6 h-6 bg-[#1d1ee3] rounded-full flex items-center justify-center mb-4">
                <MapPin size={14} color="white" />
              </div>
              <div className="flex flex-col gap-2 text-[16px] text-[#03030f]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}>
                <p>Strategic Planning</p>
                <p>Operational Excellence</p>
                <p>Market Expansion</p>
                <p>Risk Management</p>
              </div>
            </div>

            {/* Book a call button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBookCall}
              className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 w-fit group"
            >
              <span
                className="text-white text-[16px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Book A Free Call
              </span>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight size={20} color="#1d1ee3" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
