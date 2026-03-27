import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight } from "lucide-react";

const STORAGE_KEY = "attax-cookie-consent-v2";

interface Prefs {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

const DEFAULT_PREFS: Prefs = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

function CookieIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
      <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/>
    </svg>
  );
}

const CATEGORIES = [
  { key: "necessary" as const, label: "Necessary", desc: "Essential for the website to function. These cookies cannot be disabled.", always: true },
  { key: "functional" as const, label: "Functional", desc: "Enable enhanced functionality such as remembering your preferences and settings.", always: false },
  { key: "analytics" as const, label: "Analytics", desc: "Help us understand how visitors interact with the site so we can improve it.", always: false },
  { key: "performance" as const, label: "Performance", desc: "Used to measure and optimise the performance of our website.", always: false },
  { key: "advertisement" as const, label: "Advertisement", desc: "Used to serve relevant ads and measure advertising campaign effectiveness.", always: false },
];

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPrefs(JSON.parse(saved));
        setShowButton(true);
      } else {
        setTimeout(() => setShowBanner(true), 800);
        setShowButton(true);
      }
    } catch {
      setTimeout(() => setShowBanner(true), 800);
      setShowButton(true);
    }
  }, []);

  const save = (p: Prefs) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
    setPrefs(p);
    setShowBanner(false);
    setShowModal(false);
    setShowButton(true);
  };

  const acceptAll = () => save({ necessary: true, functional: true, analytics: true, performance: true, advertisement: true });
  const rejectAll = () => save(DEFAULT_PREFS);
  const savePrefs = () => save(prefs);

  const toggle = (key: keyof Omit<Prefs, "necessary">) =>
    setPrefs(p => ({ ...p, [key]: !p[key] }));

  return (
    <>
      {/* ── Persistent bottom-LEFT cookie icon — always visible ── */}
      <AnimatePresence>
        {showButton && !showBanner && !showModal && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowModal(true)}
            aria-label="Cookie preferences"
            title="Manage cookie preferences"
            className="fixed z-[9995] transition-colors"
            style={{ bottom: 24, left: 24, color: "white", mixBlendMode: "difference" }}
          >
            <CookieIcon />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Initial cookie banner — large centered modal with backdrop ── */}
      <AnimatePresence>
        {showBanner && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9996]"
              style={{ background: "rgba(10,22,40,0.60)" }}
              aria-hidden="true"
            />
            {/* Centering wrapper — flex handles position, motion handles animation */}
            <div
              className="fixed inset-0 z-[9997] flex items-center justify-center px-4"
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label="Cookie consent"
                style={{
                  width: "min(480px, calc(100vw - 32px))",
                  background: "#ffffff",
                  borderRadius: 20,
                  border: "1px solid rgba(10,22,40,0.07)",
                  boxShadow: "0 32px 80px rgba(10,22,40,0.22)",
                  overflow: "hidden",
                  pointerEvents: "auto",
                }}
              >
                {/* Blue top accent */}
                <div style={{ height: 4, background: "#1d1ee3" }} />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2
                      className="text-[22px] font-bold text-[#0a1628] leading-snug"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      We use cookies
                    </h2>
                    <button
                      onClick={() => setShowBanner(false)}
                      aria-label="Close"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a1628]/35 hover:text-[#0a1628]/70 hover:bg-[#f7f7f4] transition-colors shrink-0 mt-[-2px]"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Body */}
                  <p
                    className="text-[15px] text-[#0a1628]/60 leading-[1.7] mb-8"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    We use cookies to improve your experience and analyse site traffic. See our{" "}
                    <a
                      href="/privacy"
                      className="text-[#1d1ee3] underline underline-offset-2 hover:text-[#1618c7] transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={acceptAll}
                      className="flex-1 py-4 rounded-[50px] text-[15px] font-semibold text-white transition-colors"
                      style={{ fontFamily: "'Inter Tight', sans-serif", background: "#1d1ee3" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#1618c7")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#1d1ee3")}
                    >
                      Accept All
                    </button>
                    <button
                      onClick={() => { setShowBanner(false); setShowModal(true); }}
                      className="flex-1 py-4 rounded-[50px] text-[15px] font-semibold transition-colors"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        color: "rgba(10,22,40,0.60)",
                        border: "1.5px solid rgba(10,22,40,0.15)",
                        background: "transparent",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#f7f7f4")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── Full preferences modal ── */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-[9997]"
              style={{ background: "rgba(10,22,40,0.60)" }}
              aria-hidden="true"
            />
            {/* Centering wrapper */}
            <div
              className="fixed inset-0 z-[9998] flex items-center justify-center px-4"
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                role="dialog" aria-modal="true" aria-label="Cookie Preferences"
                style={{
                  width: "min(560px, calc(100vw - 32px))",
                  maxHeight: "90vh",
                  background: "#fff",
                  borderRadius: 20,
                  border: "1px solid rgba(10,22,40,0.07)",
                  boxShadow: "0 32px 80px rgba(10,22,40,0.22)",
                  overflowY: "auto",
                  pointerEvents: "auto",
                }}
              >
                <div style={{ height: 4, background: "#1d1ee3" }} />
                <div className="flex items-start justify-between p-6 pb-3">
                  <div>
                    <h2 className="text-[20px] font-bold text-[#0a1628]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      Customise Consent Preferences
                    </h2>
                    <p className="text-[13px] text-[#0a1628]/45 mt-0.5" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      Manage your cookie preferences below
                    </p>
                  </div>
                  <button onClick={() => setShowModal(false)} aria-label="Close" className="w-9 h-9 rounded-full flex items-center justify-center text-[#0a1628]/35 hover:bg-[#f7f7f4] transition-colors shrink-0">
                    <X size={18} />
                  </button>
                </div>

                <div className="px-6 pb-4 space-y-3">
                  <p className="text-[14px] text-[#0a1628]/65 leading-[1.7]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                  </p>
                  <p className="text-[14px] text-[#0a1628]/65 leading-[1.7]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    Cookies categorised as <strong className="text-[#0a1628] font-bold">"Necessary"</strong> are stored on your browser as they are essential for enabling basic site functionality.
                  </p>
                </div>

                <div className="px-6">
                  {CATEGORIES.map(cat => (
                    <div key={cat.key} style={{ borderTop: "1px solid rgba(10,22,40,0.07)" }}>
                      <button
                        onClick={() => setExpanded(expanded === cat.key ? null : cat.key)}
                        className="w-full flex items-center justify-between py-4 text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            size={16}
                            className="text-[#0a1628]/35 transition-transform duration-200 shrink-0"
                            style={{ transform: expanded === cat.key ? "rotate(90deg)" : "rotate(0deg)" }}
                          />
                          <span className="text-[15px] font-bold text-[#0a1628]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                            {cat.label}
                          </span>
                        </div>
                        {cat.always ? (
                          <span className="text-[13px] font-semibold text-[#1d1ee3] shrink-0" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                            Always Active
                          </span>
                        ) : (
                          <button
                            role="switch"
                            aria-checked={prefs[cat.key as keyof Omit<Prefs, "necessary">]}
                            onClick={e => { e.stopPropagation(); toggle(cat.key as keyof Omit<Prefs, "necessary">); }}
                            className="relative w-12 h-6 rounded-full transition-colors duration-200 shrink-0"
                            style={{ background: prefs[cat.key as keyof Omit<Prefs, "necessary">] ? "#1d1ee3" : "rgba(10,22,40,0.14)" }}
                          >
                            <span
                              className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full shadow transition-transform duration-200"
                              style={{ transform: prefs[cat.key as keyof Omit<Prefs, "necessary">] ? "translateX(24px)" : "translateX(0)" }}
                            />
                          </button>
                        )}
                      </button>
                      <AnimatePresence>
                        {expanded === cat.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[13px] text-[#0a1628]/50 leading-[1.65] pb-4 pl-7" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                              {cat.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-4 flex flex-col sm:flex-row gap-2.5" style={{ borderTop: "1px solid rgba(10,22,40,0.07)" }}>
                  <button
                    onClick={rejectAll}
                    className="flex-1 py-3.5 rounded-[50px] text-[14px] font-semibold transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0a1628", border: "1.5px solid rgba(10,22,40,0.18)", background: "transparent" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#f7f7f4")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >Reject All</button>
                  <button
                    onClick={savePrefs}
                    className="flex-1 py-3.5 rounded-[50px] text-[14px] font-semibold transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0a1628", border: "1.5px solid rgba(10,22,40,0.18)", background: "transparent" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#f7f7f4")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >Save My Preferences</button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 py-3.5 rounded-[50px] text-[14px] font-semibold text-white transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif", background: "#0a1628" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#1d1ee3")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#0a1628")}
                  >Accept All</button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
