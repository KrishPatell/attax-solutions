import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck } from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export function ContactFormSectionV2() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#1d1ee3] text-[14px] font-medium block mb-4 uppercase tracking-wider">[Contact]</span>
              <h2 className="text-[52px] leading-[1.2] text-[#03030f] mb-6 font-semibold tracking-tight">
                Drop Us a <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Message</span>
              </h2>
              <p className="text-[18px] text-[#03030f]/60 leading-relaxed mb-12">
                We're always happy to hear from you and will get back to you as soon as possible.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d1ee3] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[#03030f]/50 text-[14px] font-medium uppercase mb-1">Email</p>
                    <a href="mailto:info@attaxsolutions.com" className="text-[20px] font-semibold text-[#03030f] hover:text-[#1d1ee3] transition-colors">
                      info@attaxsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d1ee3] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[#03030f]/50 text-[14px] font-medium uppercase mb-1">Call</p>
                    <a href="tel:+19492873015" className="text-[20px] font-semibold text-[#03030f] hover:text-[#1d1ee3] transition-colors">
                      +1 (949) 287-3015
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#f0f4ff] rounded-full flex items-center justify-center text-[#1d1ee3] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[#03030f]/50 text-[14px] font-medium uppercase mb-1">Visit Us</p>
                    <p className="text-[20px] font-semibold text-[#03030f]">
                      Irvine, California
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f7f7f4] rounded-[32px] p-8 lg:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-black/5"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <label className="text-[15px] font-semibold text-[#03030f] ml-1">Full Name</label>
                      <input
                        {...register("fullName", { required: "Name is required" })}
                        placeholder="Enter your name"
                        className="w-full bg-white border border-black/5 rounded-[12px] px-6 py-4 text-[16px] outline-none focus:ring-2 focus:ring-[#1d1ee3]/10 focus:border-[#1d1ee3] transition-all"
                      />
                      {errors.fullName && <p className="text-red-500 text-[12px] ml-1">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[15px] font-semibold text-[#03030f] ml-1">Email Address</label>
                      <input
                        {...register("email", { 
                          required: "Email is required", 
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
                        })}
                        placeholder="Enter email address"
                        className="w-full bg-white border border-black/5 rounded-[12px] px-6 py-4 text-[16px] outline-none focus:ring-2 focus:ring-[#1d1ee3]/10 focus:border-[#1d1ee3] transition-all"
                      />
                      {errors.email && <p className="text-red-500 text-[12px] ml-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[15px] font-semibold text-[#03030f] ml-1">Write Your Message</label>
                      <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="I want to collaborate"
                        rows={4}
                        className="w-full bg-white border border-black/5 rounded-[12px] px-6 py-4 text-[16px] outline-none focus:ring-2 focus:ring-[#1d1ee3]/10 focus:border-[#1d1ee3] transition-all resize-none"
                      />
                      {errors.message && <p className="text-red-500 text-[12px] ml-1">{errors.message.message}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#1618c7" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#1d1ee3] text-white rounded-[12px] py-5 font-bold text-[18px] flex items-center justify-center gap-3 shadow-[0_12px_24px_-8px_rgba(29,30,227,0.3)]"
                    >
                      Send Message
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <ArrowRight size={18} />
                      </div>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                      <ShieldCheck size={40} />
                    </div>
                    <h3 className="text-[32px] font-bold text-[#03030f] mb-4 tracking-tight">Message Sent!</h3>
                    <p className="text-[#03030f]/60 text-[18px] max-w-[400px] mx-auto leading-relaxed">
                      Thank you for reaching out. A tax specialist will contact you within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[#1d1ee3] font-bold uppercase tracking-widest text-[14px] hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
