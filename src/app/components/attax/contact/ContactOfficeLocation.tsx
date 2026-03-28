import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Building2, Globe } from "lucide-react";
import { Breadcrumbs } from "../about/Breadcrumbs";
import remoteImg from "../../../../assets/contact-remote.jpg";
import californiaImg from "../../../../assets/contact-california.jpg";

const offices = [
  {
    icon: Building2,
    title: "USA Headquarter",
    line1: "Irvine HQ",
    line2: "California, USA",
  },
  {
    icon: Globe,
    title: "Remote Support",
    line1: "Serving Clients",
    line2: "Nationwide",
  },
];

export function ContactOfficeLocation() {
  return (
    <section className="bg-[#f7f7f4] pt-[100px] md:pt-[160px] pb-[60px] md:pb-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-stretch">
          {/* Left Side: Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              {/* Breadcrumb */}
              <Breadcrumbs current="Contact Us" light />

              <h2 className="text-[32px] md:text-[52px] lg:text-[50px] leading-[1.1] text-[#03030f] mb-6 md:mb-8 font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Office <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Location</span>
              </h2>
              <p className="text-[15px] md:text-[18px] text-[#03030f]/70 leading-relaxed max-w-[500px] mb-8 md:mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Our Irvine headquarters serves clients locally and nationwide through dedicated remote representation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-auto">
                {offices.map(({ icon: Icon, title, line1, line2 }) => (
                  <div key={title} className="bg-white p-5 md:p-6 rounded-[20px] border border-black/5 flex flex-col gap-4">
                    <div className="relative w-[52px] h-[52px]">
                      <div className="absolute inset-0 bg-[#1d1ee3]/10 rounded-[14px] blur-[6px] translate-y-[3px]" />
                      <div className="relative w-full h-full bg-[#eaeeff] rounded-[14px] flex items-center justify-center text-[#1d1ee3] border border-[#1d1ee3]/10 shadow-[0_4px_12px_rgba(29,30,227,0.12)]">
                        <Icon size={22} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[17px] md:text-[19px] font-semibold text-[#03030f] mb-1.5" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{title}</h3>
                      <p className="text-[14px] text-[#03030f]/55 leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                        {line1}<br />{line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4 h-full">
            <div className="col-span-1 flex flex-col gap-3 md:gap-4 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden group flex-1 min-h-[160px]"
              >
                <ImageWithFallback src={californiaImg} alt="Irvine, CA" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">Irvine, CA</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden group flex-1 min-h-[160px]"
              >
                <ImageWithFallback src={californiaImg} alt="California" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">California</div>
              </motion.div>
            </div>
            <div className="col-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full min-h-[320px] md:min-h-[480px] rounded-[16px] md:rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback
                  src={remoteImg}
                  alt="Remote Support"
                  className="absolute inset-0 w-full h-full object-cover object-[80%_20%] lg:object-[80%_20%] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">Remote</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
