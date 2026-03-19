import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactDetails() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "info@attaxsolutions.com",
      href: "mailto:info@attaxsolutions.com",
    },
    {
      icon: Phone,
      label: "Call",
      value: "+1 (949) 287-3015",
      href: "tel:+19492873015",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "See on Google Map",
      href: "https://maps.google.com/?q=Irvine,CA",
    }
  ];

  return (
    <div className="flex flex-col gap-[32px] md:gap-[40px]">
      {contactItems.map((item, idx) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.label === "Visit Us" ? "_blank" : undefined}
          rel={item.label === "Visit Us" ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="flex items-center gap-[20px] group cursor-pointer"
        >
          <div className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#EAEEFF] flex items-center justify-center text-[#1D1EE3] shrink-0 transition-transform duration-300 group-hover:scale-110">
            <item.icon size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span 
              className="text-[15px] md:text-[16px] text-[#0A1628]/70 mb-1"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              {item.label}
            </span>
            <span
              className="text-[15px] text-[#0A1628] leading-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              {item.value}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
