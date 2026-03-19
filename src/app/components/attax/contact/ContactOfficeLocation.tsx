import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { MapPin } from "lucide-react";

const dublinImg = "https://images.unsplash.com/photo-1549918838-0678d9f10903?auto=format&fit=crop&q=80&w=800";
const laImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800";
const remoteImg = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800";

export function ContactOfficeLocation() {
  return (
    <section className="bg-[#f7f7f4] pt-[120px] md:pt-[180px] pb-[60px] md:pb-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Side: Content */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1d1ee3] text-[14px] font-medium block mb-4 uppercase tracking-wider">[Visit Us]</span>
              <h2 className="text-[32px] md:text-[52px] lg:text-[72px] leading-[1.1] text-[#03030f] mb-6 md:mb-8 font-semibold">
                Office <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Location</span>
              </h2>
              <p className="text-[15px] md:text-[18px] text-[#03030f]/70 leading-relaxed max-w-[500px] mb-8 md:mb-12">
                Our office is conveniently located in the heart of these cities, providing easy access for clients and partners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-sm border border-black/5">
                  <div className="w-[50px] h-[50px] bg-[#EAEEFF] rounded-full flex items-center justify-center text-[#1d1ee3] mb-4 md:mb-6">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-[18px] md:text-[22px] font-medium text-[#03030f] mb-2 md:mb-3">USA Headquarter</h3>
                  <p className="text-[14px] md:text-[15px] text-[#03030f]/60 leading-relaxed">
                    Irvine HQ<br />
                    California, USA
                  </p>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-sm border border-black/5">
                  <div className="w-[50px] h-[50px] bg-[#EAEEFF] rounded-full flex items-center justify-center text-[#1d1ee3] mb-4 md:mb-6">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-[18px] md:text-[22px] font-medium text-[#03030f] mb-2 md:mb-3">Remote Support</h3>
                  <p className="text-[14px] md:text-[15px] text-[#03030f]/60 leading-relaxed">
                    Serving Clients<br />
                    Nationwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4">
            <div className="col-span-1 space-y-3 md:space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={dublinImg} alt="Office" className="w-full h-[140px] md:h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">Irvine, CA</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={laImg} alt="Office" className="w-full h-[140px] md:h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">California</div>
              </motion.div>
            </div>
            <div className="col-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full min-h-[287px] md:min-h-[416px] rounded-[16px] md:rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={remoteImg} alt="Remote Working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-medium text-[#03030f]">Remote</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
