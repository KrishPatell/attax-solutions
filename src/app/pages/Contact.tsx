import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ContactOfficeLocation } from "../components/attax/contact/ContactOfficeLocation";
import { AttaxContactForm } from "../components/attax/AttaxContactForm";
import { ProcessSection } from "../components/attax/contact/ProcessSection";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { ContactFAQCTA } from "../components/attax/contact/ContactFAQCTA";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Contact() {
  // Scroll to top on mount
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 01. Office Location Header */}
          <ContactOfficeLocation />

          {/* 02. Drop Us a Message Form Section */}
          <AttaxContactForm />

          {/* 03. What Happens After You Submit (Process Roadmap) */}
          <ProcessSection />

          {/* 04. Friendly Asked Questions */}
          <AttaxFAQ />

          {/* 05. Work with Experts CTA Banner */}
          <ContactFAQCTA />
        </motion.div>
      </main>

      <AttaxFooter />
    </div>
  );
}
