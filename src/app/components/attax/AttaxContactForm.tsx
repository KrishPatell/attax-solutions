import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  ShieldCheck,
  Clock,
  Globe,
  CheckCircle2,
} from "lucide-react";
import AttaxTrustpilot from "../../../imports/AttaxTrustpilot";

const issueOptions = [
  "IRS Audit / Examination",
  "Tax Debt / Balance Due",
  "Unfiled Tax Returns",
  "Threatening IRS Notice",
  "Wage Garnishment",
  "Bank Levy",
  "Offer in Compromise",
  "Installment Agreement",
  "Other",
];

const contactCards = [
  {
    icon: Phone,
    label: "Call or Text Anytime",
    value: "+1 (855) 829-2829",
    href: "tel:+18558292829",
  },
  {
    icon: Mail,
    label: "General Inquiries",
    value: "info@attaxsolutions.com",
    href: "mailto:info@attaxsolutions.com",
  },
  {
    icon: Mail,
    label: "Client Support",
    value: "support@attaxsolutions.com",
    href: "mailto:support@attaxsolutions.com",
  },
  {
    icon: MapPin,
    label: "Newport Beach, CA",
    value: "Serving clients nationwide",
    href: "https://maps.google.com/?q=Newport+Beach,CA",
    external: true,
  },
];

const trustBadges = [
  { icon: Clock, text: "We respond within 1 business day." },
  { icon: ShieldCheck, text: "All information is strictly confidential." },
];

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  issue: string;
  message: string;
}

export function AttaxContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    issue: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 text-[15px]";
  const inputFocused = "border-[#1d1ee3] bg-white shadow-[0_0_0_4px_rgba(29,30,227,0.08)]";

  return (
    <section
      id="contact"
      className="relative bg-white py-[60px] md:py-[120px] px-5 md:px-8 overflow-x-hidden"
      ref={ref}
    >
      {/* Subtle background grid - now dark on light */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1d1ee3 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft blue glow for the light theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#1d1ee3]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 rounded-full bg-[#1d1ee3]" />
            <span
              className="text-[#1d1ee3] text-[13px] uppercase tracking-[0.12em]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
            >
              Contact Us
            </span>
          </div>

          <h2
            className="text-[32px] lg:text-[52px] leading-[1.08] text-[#060e1e] mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
          >
            Let's Solve This{" "}
            <span
              className="italic text-[#1d1ee3]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Together
            </span>
          </h2>
          <p
            className="text-slate-600 text-[15px] lg:text-[17px] max-w-[560px] leading-relaxed"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            Whether you're facing an IRS audit, a threatening notice, or years of unfiled returns  
            our team is ready to help. Reach out and we'll respond within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 flex flex-col gap-[12px] md:gap-[14px]"
          >
            {/* Contact items */}
            {contactCards.map((card, i) => (
              <motion.a
                key={card.value}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.07 }}
                className="flex items-center gap-4 lg:gap-5 p-4 lg:p-5 bg-white border border-slate-100 rounded-[14px] group cursor-pointer hover:border-[#1d1ee3]/25 hover:shadow-[0_4px_20px_rgba(29,30,227,0.06)] transition-all duration-200"
              >
                <div className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-[10px] lg:rounded-[12px] bg-[#EAEEFF] flex items-center justify-center shrink-0">
                  <card.icon size={20} className="lg:w-[24px] lg:h-[24px] text-[#1D1EE3]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[10px] lg:text-[11px] text-[#1d1ee3] uppercase tracking-[0.1em] mb-1"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="text-[14px] lg:text-[17px] text-[#0A1628] leading-tight group-hover:text-[#1d1ee3] transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {card.value}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Trust Badges */}
            <div className="relative w-full max-w-[240px] h-[100px]">
              <AttaxTrustpilot />
            </div>
          </motion.div>

          {/* ── Right: Form (Swapped from Left) ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="bg-white border border-slate-200 rounded-[24px] p-5 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <div className="mb-6 md:mb-8">
                <h3
                  className="text-[#060e1e] text-[22px] md:text-[24px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  Start Your Free Consultation
                </h3>
                <p
                  className="text-slate-500 text-[14px] md:text-[15px] mt-1"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  No obligation. 100% confidential.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-[#1d1ee3]/10 border border-[#1d1ee3]/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={36} className="text-[#1d1ee3]" />
                    </motion.div>
                    <h4
                      className="text-[#060e1e] text-[26px] mb-3"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                    >
                      Message Sent!
                    </h4>
                    <p
                      className="text-slate-500 text-[15px] max-w-[320px] leading-relaxed"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      We've received your message and will respond within one business day.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ fullName: "", phone: "", email: "", issue: "", message: "" });
                      }}
                      className="mt-8 text-[#1d1ee3] text-[14px] font-semibold underline underline-offset-4"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Row 1: Full Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          className="text-slate-600 text-[12px] uppercase tracking-wider ml-1"
                          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.fullName}
                          onFocus={() => setFocused("fullName")}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          className={`${inputBase} ${focused === "fullName" ? inputFocused : ""}`}
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="text-slate-600 text-[12px] uppercase tracking-wider ml-1"
                          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={`${inputBase} ${focused === "phone" ? inputFocused : ""}`}
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-slate-600 text-[12px] uppercase tracking-wider ml-1"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`${inputBase} ${focused === "email" ? inputFocused : ""}`}
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      />
                    </div>

                    {/* Issue Dropdown */}
                    <div className="flex flex-col gap-2 relative">
                      <label
                        className="text-slate-600 text-[12px] uppercase tracking-wider ml-1"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                      >
                        What's the main issue?
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        className={`${inputBase} flex items-center justify-between text-left ${
                          dropdownOpen ? inputFocused : ""
                        } ${!form.issue ? "text-slate-400" : "text-slate-900"}`}
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        <span>{form.issue || "Select your situation"}</span>
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-slate-400" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -4, scaleY: 0.97 }}
                            transition={{ duration: 0.18 }}
                            style={{ transformOrigin: "top" }}
                            className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 bg-white border border-slate-200 rounded-[14px] overflow-hidden shadow-2xl py-1"
                          >
                            {issueOptions.map((opt) => (
                              <li key={opt}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleChange("issue", opt);
                                    setDropdownOpen(false);
                                  }}
                                  className="w-full text-left px-4 py-3 text-[14px] text-slate-600 hover:text-[#1d1ee3] hover:bg-slate-50 transition-colors duration-150"
                                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                                >
                                  {opt}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-slate-600 text-[12px] uppercase tracking-wider ml-1"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                      >
                        Tell us more{" "}
                        <span className="normal-case tracking-normal text-slate-400 font-medium">(optional)</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Approximate amount owed, years affected, any recent IRS contact..."
                        value={form.message}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={`${inputBase} resize-none ${
                          focused === "message" ? inputFocused : ""
                        }`}
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(29,30,227,0.25)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 bg-[#1d1ee3] rounded-[50px] py-4 md:py-4.5 px-6 md:px-8 mt-2 group w-full max-w-[280px] mx-auto md:mx-0 transition-shadow duration-300"
                    >
                      <span
                        className="text-white text-[16px]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                      >
                        Send Message
                      </span>
                      <motion.div
                        className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center"
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Send size={15} color="white" />
                      </motion.div>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}