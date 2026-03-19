import { motion } from "motion/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Briefcase, GraduationCap, MapPin, ArrowUpRight } from "lucide-react";

const teamImg = "https://images.unsplash.com/photo-1661854236305-b02cef4aa0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwZm91bmRlciUyMENFTyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY1MzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080";
const officeImg = "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBsdXh1cnklMjBOZXdwb3J0JTIwQmVhY2glMjBvZmZpY2V8ZW58MXx8fHwxNzczNjUzNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start mb-[60px] md:mb-[100px]">
          {/* Founder Bio */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] text-[#0a1628] mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Meet Our{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Leadership
                </span>
              </h2>
              <div className="space-y-6 text-[18px] text-[#0a1628]/70 leading-[1.8]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <p>
                  Omar Hassan is the Founder and CEO of ATTAX Solutions. Under his leadership, the firm has grown into one of the most respected tax resolution companies in the nation, focusing on a direct, no-nonsense approach to IRS advocacy.
                </p>
                <p>
                  With years of experience in the tax relief industry, Omar's vision for ATTAX Solutions was to move away from the "sales-first" mentality that plagues the sector and move toward a professional services model where case results and client communication are the primary focus.
                </p>
              </div>

              {/* Credential Box */}
              <div className="mt-8 md:mt-12 p-5 md:p-8 rounded-[16px] md:rounded-[24px] bg-[#f0f4ff]/50 border border-[#1d1ee3]/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1d1ee3]/5 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-700" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <h3 
                    className="text-[#0a1628] text-[20px]" 
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    Licensed IRS Advocacy Credential
                  </h3>
                </div>
                <p 
                  className="text-[#0a1628]/60 text-[16px] leading-[1.7]" 
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Our representation is backed by the highest federal tax credential granted by the IRS. This status is achieved through a rigorous 3-part comprehensive examination covering individual and business tax laws, and maintained with annual ethics and professional education requirements.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Founder Photo */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-[8px] border-white"
            >
              <ImageWithFallback
                src={teamImg}
                alt="Omar Hassan"
                className="w-full h-[360px] md:h-[580px] object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Office / Culture / Careers */}
        <div className="grid grid-cols-12 gap-8 items-center pt-[60px] md:pt-[100px] border-t border-[#eaeaff]">
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] overflow-hidden h-[400px]"
            >
              <ImageWithFallback
                src={officeImg}
                alt="ATTAX Solutions Office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:pl-8"
            >
              <h3 
                className="text-[32px] text-[#0a1628] mb-6" 
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Our HQ & Environment
              </h3>
              <p 
                className="text-[17px] text-[#0a1628]/60 leading-[1.8] mb-8" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Located in Irvine, California, our office is designed for focus and collaborative strategy. We believe that a professional environment leads to professional results. 
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="/careers" 
                  className="flex items-center justify-between p-6 rounded-[20px] bg-[#f9faff] border border-[#eaeaff] hover:border-[#1d1ee3]/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="text-[#0a1628] font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Join Our Team</p>
                      <p className="text-[#0a1628]/50 text-[14px]">Explore career opportunities at ATTAX</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="text-[#1d1ee3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center gap-3 p-6 text-[15px] text-[#0a1628]/60">
                  <MapPin size={18} className="text-[#1d1ee3]" />
                  <span>Irvine HQ • Serving Clients Nationwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
