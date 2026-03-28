import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import {
  FAB_CORNER_INSET_PX,
  FAB_TRIGGER_SIZE_PX,
  fabPanelBottomPx,
} from "../../../constants/floatingActions";

const STORAGE_KEY = "attax-a11y-prefs";

interface A11yState {
  fontScale: number;
  highContrast: boolean;
  grayscale: boolean;
  largeCursor: boolean;
  reducedMotion: boolean;
}

const DEFAULT: A11yState = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  largeCursor: false,
  reducedMotion: false,
};

const FONT_STEPS = [1, 1.1, 1.2, 1.3];

function AccessibilityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <path d="M9 10.5h6" />
      <path d="M12 10.5V15" />
      <path d="M9.5 18.5 12 15l2.5 3.5" />
    </svg>
  );
}

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className="relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1ee3]"
      style={{ backgroundColor: on ? "#1d1ee3" : "rgba(10,22,40,0.12)" }}
    >
      <span
        className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: on ? "translateX(20px)" : "translateX(0)" }}
      />
    </button>
  );
}

function applyA11y(state: A11yState) {
  const html = document.documentElement;
  // Font size
  html.style.setProperty("--font-size", `${16 * state.fontScale}px`);
  // Classes
  html.classList.toggle("a11y-high-contrast", state.highContrast);
  html.classList.toggle("a11y-grayscale", state.grayscale);
  html.classList.toggle("a11y-large-cursor", state.largeCursor);
  html.classList.toggle("a11y-reduced-motion", state.reducedMotion);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT, ...JSON.parse(saved) } : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  useEffect(() => {
    applyA11y(state);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state]);

  const update = useCallback((patch: Partial<A11yState>) => {
    setState(prev => ({ ...prev, ...patch }));
  }, []);

  const reset = useCallback(() => setState(DEFAULT), []);

  const fontIdx = FONT_STEPS.indexOf(state.fontScale);
  const fontPct = Math.round(state.fontScale * 100);

  const controls = [
    {
      label: "High Contrast",
      desc: "Increase color contrast",
      on: state.highContrast,
      toggle: () => update({ highContrast: !state.highContrast }),
    },
    {
      label: "Grayscale",
      desc: "Remove all color",
      on: state.grayscale,
      toggle: () => update({ grayscale: !state.grayscale }),
    },
    {
      label: "Large Cursor",
      desc: "Enlarge mouse pointer",
      on: state.largeCursor,
      toggle: () => update({ largeCursor: !state.largeCursor }),
    },
    {
      label: "Reduce Motion",
      desc: "Minimize animations",
      on: state.reducedMotion,
      toggle: () => update({ reducedMotion: !state.reducedMotion }),
    },
  ];

  return (
    <>
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[9998]"
              aria-hidden="true"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Accessibility Settings"
              className="fixed z-[9999] w-[300px]"
              style={{
                bottom: `calc(${fabPanelBottomPx}px + env(safe-area-inset-bottom, 0px))`,
                right: `calc(${FAB_CORNER_INSET_PX}px + env(safe-area-inset-right, 0px))`,
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(10,22,40,0.07)",
                boxShadow: "0 24px 60px rgba(10,22,40,0.14)",
              }}
            >
              {/* Blue top accent */}
              <div className="h-[3px] w-full rounded-t-[20px]" style={{ background: "#1d1ee3" }} />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-widest font-bold text-[#1d1ee3]"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      [Accessibility]
                    </p>
                    <p
                      className="text-[16px] font-semibold text-[#0a1628] mt-0.5"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      Display Settings
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close accessibility panel"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a1628]/40 hover:text-[#0a1628] hover:bg-[#f7f7f4] transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Font Size */}
                <div
                  className="flex items-center justify-between mb-4 pb-4"
                  style={{ borderBottom: "1px solid rgba(10,22,40,0.07)" }}
                >
                  <div>
                    <p className="text-[14px] font-semibold text-[#0a1628]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      Font Size
                    </p>
                    <p className="text-[12px] text-[#0a1628]/45" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {fontPct}% of default
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => update({ fontScale: FONT_STEPS[Math.max(0, fontIdx - 1)] })}
                      aria-label="Decrease font size"
                      disabled={fontIdx === 0}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a1628]/60 hover:text-[#0a1628] hover:bg-[#eaeeff] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ZoomOut size={15} />
                    </button>
                    <button
                      onClick={() => update({ fontScale: FONT_STEPS[Math.min(FONT_STEPS.length - 1, fontIdx + 1)] })}
                      aria-label="Increase font size"
                      disabled={fontIdx === FONT_STEPS.length - 1}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a1628]/60 hover:text-[#0a1628] hover:bg-[#eaeeff] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ZoomIn size={15} />
                    </button>
                  </div>
                </div>

                {/* Toggle Controls */}
                <div className="space-y-3.5">
                  {controls.map((ctrl) => (
                    <div key={ctrl.label} className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[14px] font-semibold text-[#0a1628]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                          {ctrl.label}
                        </p>
                        <p className="text-[11px] text-[#0a1628]/45" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                          {ctrl.desc}
                        </p>
                      </div>
                      <Toggle on={ctrl.on} onToggle={ctrl.toggle} label={ctrl.label} />
                    </div>
                  ))}
                </div>

                {/* Reset */}
                <button
                  onClick={reset}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-[50px] text-[13px] font-semibold transition-colors"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    color: "#0a1628",
                    border: "1px solid rgba(10,22,40,0.12)",
                    background: "transparent",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f7f7f4")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <RotateCcw size={13} />
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(v => !v)}
        aria-label="Open accessibility settings"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="fixed z-[9999] flex items-center justify-center text-white transition-colors box-border"
        style={{
          bottom: `calc(${FAB_CORNER_INSET_PX}px + env(safe-area-inset-bottom, 0px))`,
          right: `calc(${FAB_CORNER_INSET_PX}px + env(safe-area-inset-right, 0px))`,
          width: FAB_TRIGGER_SIZE_PX,
          height: FAB_TRIGGER_SIZE_PX,
          borderRadius: "50%",
          background: open ? "#1618c7" : "#1d1ee3",
          boxShadow: "0 8px 24px rgba(29,30,227,0.35)",
        }}
      >
        <AccessibilityIcon />
      </motion.button>
    </>
  );
}
