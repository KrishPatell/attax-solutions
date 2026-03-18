import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { MapPin } from "lucide-react";

const dublinImg = "https://images.unsplash.com/photo-1549918838-0678d9f10903?auto=format&fit=crop&q=80&w=800";
const laImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800";
const remoteImg = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800";

export function ContactOfficeLocation() {
  return (
    <section className="bg-[#f7f7f4] pt-[180px] pb-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto p-[0px] mx-[77px] my-[0px]">
        <div className="grid grid-cols-12 gap-16 items-start">
          {/* Left Side: Content */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1d1ee3] text-[14px] font-medium block mb-4 uppercase tracking-wider">[Visit Us]</span>
              <h1 className="text-[72px] leading-[1.1] text-[#03030f] mb-8 font-semibold">
                Office <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Location</span>
              </h1>
              <p className="text-[18px] text-[#03030f]/70 leading-relaxed max-w-[500px] mb-12">
                Our office is conveniently located in the heart of theses cities, providing easy access for clients and partners.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-black/5">
                  <div className="w-11 h-11 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d1ee3] mb-6">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#03030f] mb-3">USA Headquarter</h3>
                  <p className="text-[#03030f]/60 leading-relaxed">
                    Irvine HQ<br />
                    California, USA
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-black/5">
                  <div className="w-11 h-11 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d1ee3] mb-6">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#03030f] mb-3">Remote Support</h3>
                  <p className="text-[#03030f]/60 leading-relaxed">
                    Serving Clients<br />
                    Nationwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-1 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={dublinImg} alt="Office" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-medium text-[#03030f]">Dublin</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={laImg} alt="Office" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-medium text-[#03030f]">Los Angeles</div>
              </motion.div>
            </div>
            <div className="col-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full min-h-[416px] rounded-[20px] overflow-hidden group"
              >
                <ImageWithFallback src={remoteImg} alt="Remote Working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-medium text-[#03030f]">Remote</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
