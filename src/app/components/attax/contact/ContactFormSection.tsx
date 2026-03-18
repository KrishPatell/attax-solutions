import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Shield, ArrowRight } from "lucide-react";
import { ContactDetails } from "./ContactDetails";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
}

export function ContactFormSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
    // Handle submission logic
  };

  if (submitted) {
    return (
      <section className="py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#f0f4ff] rounded-[32px] p-12 lg:p-20 border border-[#1d1ee3]/10"
          >
            <div className="w-20 h-20 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <Shield size={40} />
            </div>
            <h2 
              className="text-[40px] text-[#0a1628] mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
            >
              Thank You!
            </h2>
            <p className="text-[20px] text-[#0a1628]/60 mb-10 max-w-[600px] mx-auto">
              Your inquiry has been received. One of our specialists will reach out to you within one business day.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#1d1ee3] font-bold uppercase tracking-widest text-[14px] hover:underline"
            >
              Back to Form
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-12 xl:gap-20">
          
          {/* Left Column - Contact Details */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 px-5 lg:px-0">
            <div className="sticky top-[120px]">
              <div className="mb-8 md:mb-12">
                <h2 
                  className="text-[32px] text-[#0a1628] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  Direct Contact
                </h2>
                <p 
                  className="text-[16px] md:text-[17px] text-[#0a1628]/60 max-w-[400px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Prefer to skip the form? Reach out to us directly through any of the channels below.
                </p>
              </div>
              
              <ContactDetails />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] border border-[#eaeaff] relative overflow-hidden"
            >
              {/* Form Header */}
              <div className="mb-8 md:mb-10 relative z-10">
                <h2 
                  className="text-[32px] md:text-[40px] leading-[1.1] text-[#0a1628] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  How Can We Help?
                </h2>
                <div className="flex items-center gap-2 text-[#1d1ee3]">
                  <Shield size={16} />
                  <p 
                    className="text-[14px] md:text-[15px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    Your information is kept strictly confidential.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-[#0a1628]/70 px-1">First Name</label>
                    <input
                      {...register("firstName", { required: true })}
                      placeholder="Jane"
                      className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[16px] px-5 py-4 text-[16px] outline-none focus:border-[#1d1ee3] focus:ring-4 focus:ring-[#1d1ee3]/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-[#0a1628]/70 px-1">Last Name</label>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Doe"
                      className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[16px] px-5 py-4 text-[16px] outline-none focus:border-[#1d1ee3] focus:ring-4 focus:ring-[#1d1ee3]/5 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-[#0a1628]/70 px-1">Email Address</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="jane@example.com"
                      className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[16px] px-5 py-4 text-[16px] outline-none focus:border-[#1d1ee3] focus:ring-4 focus:ring-[#1d1ee3]/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-[#0a1628]/70 px-1">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      placeholder="(949) 000-0000"
                      className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[16px] px-5 py-4 text-[16px] outline-none focus:border-[#1d1ee3] focus:ring-4 focus:ring-[#1d1ee3]/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold text-[#0a1628]/70 px-1">Additional Comments</label>
                  <textarea
                    {...register("comments")}
                    rows={4}
                    placeholder="Tell us a bit about your situation..."
                    className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[16px] px-5 py-4 text-[16px] outline-none focus:border-[#1d1ee3] focus:ring-4 focus:ring-[#1d1ee3]/5 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full max-w-[280px] md:max-w-none mx-auto bg-[#1d1ee3] text-white rounded-[16px] py-5 text-[16px] md:text-[18px] font-bold flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(29,30,227,0.3)] hover:bg-[#1618c7] transition-all group"
                >
                  Start Your Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1d1ee3]/5 rounded-bl-[100px] -z-0" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
