import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, ArrowUpRight, Clock, AlertTriangle, AlertCircle, Info, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { heroFallbackForSlug } from "./blogImageFallbacks";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TABS = ["Blog", "FAQs", "IRS Notices", "Tax Glossary"] as const;
type Tab = typeof TABS[number];

const CATEGORIES = ["All", "IRS Notices", "Tax Relief", "Penalties", "Wage Garnishments", "Client Stories", "Tax Scam Awareness"];

const articles = [
  {
    slug: "what-to-do-owe-irs-money",
    featured: true,
    title: "What to Do If You Owe the IRS Money (And Haven't Filed in Years)",
    category: "Tax Relief",
    excerpt: "Missing years of filings doesn't mean you're out of options. Here's the exact path most people in this situation take — and what ATTAX does at each step.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    date: "March 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "irs-audit-survival-guide",
    featured: false,
    title: "IRS Audit Survival Guide: Everything You Need to Know",
    category: "IRS Notices",
    excerpt: "An audit doesn't have to mean financial ruin. Discover the proven strategies we use to protect our clients during IRS examinations.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    date: "March 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "offer-in-compromise-guide",
    title: "Understanding the Offer in Compromise (OIC)",
    category: "Tax Relief",
    excerpt: "Learn how you can potentially settle your IRS debt for a fraction of what you owe and start fresh.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    date: "March 12, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "wage-garnishment-bank-levy-guide",
    title: "How to Stop Wage Garnishments and Bank Levies",
    category: "Wage Garnishments",
    excerpt: "When the IRS starts taking your paycheck, you need immediate action. We outline the steps to halt collection activities fast.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200",
    date: "March 10, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "tax-debt-relief-scams",
    title: "The Truth About Tax Debt Relief Scams",
    category: "Tax Scam Awareness",
    excerpt: "Protect yourself from predatory companies. We show you how to identify legitimate, professional tax representation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    date: "March 5, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "penalty-abatement-guide",
    title: "Penalty Abatement: How to Reduce What You Owe the IRS",
    category: "Penalties",
    excerpt: "The IRS added thousands in penalties on top of your balance. Here's how penalty abatement works — and who qualifies.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    date: "February 28, 2026",
    readTime: "4 min read",
    featured: false,
  },
];

const faqGroups = [
  {
    group: "About ATTAX",
    items: [
      {
        q: "What is ATTAX Solutions?",
        a: "ATTAX Solutions is a licensed tax resolution firm based in Irvine, CA. We represent individuals and businesses before the IRS and state tax authorities — handling everything from unfiled returns to wage garnishments, liens, and Offers in Compromise.",
      },
      {
        q: "Are your Tax Specialists federally licensed?",
        a: "Yes. Our team includes Enrolled Agents — federally licensed practitioners authorized by the U.S. Treasury to represent taxpayers at all levels of the IRS, including audits, collections, and appeals.",
      },
      {
        q: "Where are you located and do you work with clients nationwide?",
        a: "Our headquarters is in Irvine, CA. We serve clients nationwide — most of our work is handled remotely through secure document sharing and direct IRS representation, so your location doesn't limit us.",
      },
    ],
  },
  {
    group: "The Process",
    items: [
      {
        q: "What happens during the free consultation?",
        a: "A licensed Tax Specialist reviews your situation — what you owe, how many years are unfiled, and what enforcement actions are active. There's no pitch, no pressure. You'll leave with a clear picture of your options.",
      },
      {
        q: "How long does tax resolution typically take?",
        a: "It depends on the resolution program. Installment Agreements can be set up in weeks. Offers in Compromise typically take 6–12 months for IRS review. Currently Non-Collectible status can be established faster. We give you a realistic timeline upfront.",
      },
      {
        q: "Do I need to talk to the IRS myself?",
        a: "No. Once we file a Power of Attorney (Form 2848), we handle all IRS communications on your behalf. You don't take calls, respond to notices, or attend hearings. We represent you completely.",
      },
      {
        q: "What documents do I need to get started?",
        a: "As little as possible to start. We pull your IRS transcripts directly, so you don't need years of records. Helpful items include any IRS notices you've received and a rough sense of your income — but nothing needs to be perfect before the first call.",
      },
    ],
  },
  {
    group: "IRS Programs",
    items: [
      {
        q: "What is an Offer in Compromise?",
        a: "An OIC allows you to settle your tax debt for less than the full amount owed if you can demonstrate that paying in full would cause financial hardship or is not collectible. The IRS accepts roughly 30–40% of applications. ATTAX prepares the full financial package to maximize approval odds.",
      },
      {
        q: "What is an Installment Agreement?",
        a: "An installment agreement is a structured monthly payment plan with the IRS. Several types exist: Guaranteed (under $10k), Streamlined (under $50k), and Partial Pay. The right type depends on your balance and financial situation.",
      },
      {
        q: "What is Currently Non-Collectible (CNC) status?",
        a: "CNC status means the IRS has temporarily paused collection actions because you genuinely cannot pay. No wage garnishments, no levies. It doesn't eliminate the debt, but it stops enforcement while you stabilize your finances.",
      },
      {
        q: "What is Penalty Abatement?",
        a: "Penalty abatement is a reduction or elimination of IRS penalties added to your balance. First-Time Abatement (FTA) is available to taxpayers with a clean compliance history. Reasonable Cause abatement applies when circumstances beyond your control caused the issue.",
      },
    ],
  },
  {
    group: "My Situation",
    items: [
      {
        q: "I haven't filed taxes in years. What do I do?",
        a: "You're not alone — this is one of the most common situations we handle. The IRS cannot put you into most resolution programs until unfiled returns are filed. We prepare all missing returns and get you into compliance first, then pursue the right resolution.",
      },
      {
        q: "The IRS is garnishing my wages. Can you stop it?",
        a: "Yes, in most cases quickly. Wage garnishments can often be released within days of engaging our representation and filing the right documentation. We act immediately on garnishments.",
      },
      {
        q: "Can I really settle for less than I owe?",
        a: "Sometimes yes. The Offer in Compromise program is specifically designed for this. Whether you qualify depends on your income, assets, expenses, and the type of liability. We evaluate this honestly — we won't promise an OIC if your numbers don't support it.",
      },
      {
        q: "I got an IRS notice and I'm scared. What should I do first?",
        a: "Don't ignore it. IRS notices are time-sensitive — most have a response deadline. Bring the notice to a free consultation and we'll explain exactly what it means, what the IRS wants, and what happens if you don't respond.",
      },
    ],
  },
];

const irsNotices = [
  {
    number: "CP14",
    title: "Balance Due — First Notice",
    what: "The IRS has calculated that you owe a balance and is asking you to pay.",
    means: "This is the first formal notice of a balance due. No enforcement yet, but interest is accruing daily.",
    urgency: "Medium" as const,
    action: "Review the balance for accuracy. If you can't pay in full, contact ATTAX to discuss installment options before the IRS escalates.",
  },
  {
    number: "CP2000",
    title: "Proposed Changes to Your Tax Return",
    what: "The IRS believes income was reported to them that doesn't match what you filed.",
    means: "A third party (employer, bank, broker) reported income that the IRS can't find on your return. This is a proposal — not a final bill.",
    urgency: "Medium" as const,
    action: "You have 60 days to agree or dispute. If the IRS is wrong, the response must include documentation. ATTAX handles these responses routinely.",
  },
  {
    number: "CP503",
    title: "Second Balance Due Reminder",
    what: "A follow-up to CP14 — the balance is still unpaid.",
    means: "The IRS is escalating. Collection action is approaching if the balance isn't addressed.",
    urgency: "High" as const,
    action: "Act now. An installment agreement or resolution program can stop escalation. Don't wait for the next notice.",
  },
  {
    number: "CP504",
    title: "Intent to Seize State Tax Refund",
    what: "The IRS intends to take your state tax refund and apply it to your federal balance.",
    means: "This is also the final notice before the IRS can file a federal tax lien against your property.",
    urgency: "High" as const,
    action: "You have 30 days. A lien on your credit and property can follow. Contact us immediately.",
  },
  {
    number: "CP90",
    title: "Final Notice — Intent to Levy",
    what: "The IRS intends to seize your wages, bank account, or other assets.",
    means: "This is the last notice before the IRS takes enforcement action. A bank levy or wage garnishment can begin 30 days after this notice.",
    urgency: "Critical" as const,
    action: "You have 30 days and the right to a Collection Due Process (CDP) hearing. Filing for a hearing pauses the levy. Call ATTAX today.",
  },
  {
    number: "LT11 / Letter 1058",
    title: "Final Notice — Right to a Hearing",
    what: "Same as CP90 — the IRS intends to levy and you have appeal rights.",
    means: "If you don't respond, enforcement begins. Your right to a CDP hearing expires with this notice.",
    urgency: "Critical" as const,
    action: "Request a CDP hearing immediately — this is a legally protected right that pauses collection. ATTAX files these on your behalf.",
  },
  {
    number: "CP523",
    title: "Intent to Terminate Installment Agreement",
    what: "You've missed a payment or violated the terms of your existing installment agreement.",
    means: "The IRS will cancel your payment plan and resume full collection activity if the issue isn't resolved.",
    urgency: "High" as const,
    action: "Contact the IRS within 30 days to cure the default — or contact ATTAX to negotiate a new arrangement.",
  },
];

const glossaryTerms = [
  { term: "Abatement", letter: "A", def: "A reduction or elimination of IRS penalties or interest. Common types include First-Time Abatement (FTA) and Reasonable Cause abatement. Does not reduce the underlying tax debt — only the penalties added on top.", link: "/services" },
  { term: "CSED (Collection Statute Expiration Date)", letter: "C", def: "The 10-year period the IRS has to collect a tax debt from the date it was assessed. Once expired, the IRS can no longer legally collect. CSED strategy is a key part of tax resolution planning.", link: "/process" },
  { term: "Currently Non-Collectible (CNC)", letter: "C", def: "A status the IRS assigns when a taxpayer genuinely cannot pay their balance. Collections pause — no garnishments, no levies — but interest continues to accrue. Reviewed periodically by the IRS.", link: "/services" },
  { term: "Enrolled Agent (EA)", letter: "E", def: "A federally licensed tax practitioner authorized by the U.S. Treasury Department. EAs hold the highest IRS credential available to non-attorneys and can represent clients at all levels of the IRS, including audits, appeals, and collections.", link: "/about" },
  { term: "Federal Tax Lien", letter: "F", def: "A legal claim the IRS files against your property (real estate, financial assets) when you neglect or fail to pay a tax debt. A lien affects your credit and ability to sell property. It's filed publicly.", link: "/services" },
  { term: "Installment Agreement", letter: "I", def: "A structured monthly payment plan with the IRS. Multiple types exist based on your balance: Guaranteed (under $10k), Streamlined (under $50k), and Partial Pay installment agreements. Stops most enforcement actions.", link: "/services" },
  { term: "Levy", letter: "L", def: "The actual seizure of property to satisfy a tax debt — bank accounts, wages (wage garnishment), social security benefits, or physical property. Different from a lien, which is a legal claim. A levy is the enforcement action.", link: "/services" },
  { term: "Offer in Compromise (OIC)", letter: "O", def: "An agreement between a taxpayer and the IRS to settle the tax debt for less than the full amount owed. Requires proving financial hardship (Doubt as to Collectibility), doubt as to liability, or effective tax administration grounds.", link: "/services" },
  { term: "Power of Attorney — Form 2848", letter: "P", def: "The IRS form that authorizes a licensed representative (like an EA) to act on your behalf. Once filed, the IRS must contact your representative instead of you directly. ATTAX files this at engagement.", link: "/process" },
  { term: "Wage Garnishment", letter: "W", def: "An IRS levy on your wages — the employer is legally required to withhold a portion of each paycheck and send it to the IRS. Can be stopped quickly with the right representation and documentation.", link: "/services" },
];

const urgencyConfig = {
  Medium: { color: "text-[#d97706]", bg: "bg-[#fef3c7]", icon: Info },
  High: { color: "text-[#dc2626]", bg: "bg-[#fee2e2]", icon: AlertCircle },
  Critical: { color: "text-white", bg: "bg-[#dc2626]", icon: AlertTriangle },
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function BlogTab() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = articles.find((a) => a.featured);
  const filtered = articles
    .filter((a) => !a.featured)
    .filter((a) => activeCategory === "All" || a.category === activeCategory);

  return (
    <div>
      {/* Featured article */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-14"
        >
          <Link to={`/resources/${featured.slug}`} className="group block relative rounded-[24px] overflow-hidden bg-[#0a1628]">
            <div className="relative h-[300px] md:h-[460px]">
              <ImageWithFallback
                src={featured.image}
                fallbackSrc={heroFallbackForSlug(featured.slug)}
                alt={featured.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
            </div>
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#1d1ee3] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Start Here
                </span>
                <span className="text-white/60 text-[13px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  {featured.category} · {featured.readTime}
                </span>
              </div>
              <h2
                className="text-[22px] md:text-[36px] lg:text-[42px] leading-[1.2] text-white font-semibold max-w-[780px] mb-4 group-hover:text-[#a5b4fc] transition-colors"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-white/60 text-[14px] md:text-[16px] leading-[1.6] max-w-[600px] hidden md:block" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
              activeCategory === cat
                ? "bg-[#1d1ee3] text-white"
                : "bg-[#f7f7f4] text-[#0a1628]/60 hover:bg-[#eaeeff] hover:text-[#1d1ee3]"
            }`}
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article grid — reference style: 2-col image cards with overlay titles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {filtered.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={`/resources/${article.slug}`}
              className="group block relative rounded-[20px] overflow-hidden bg-[#0a1628]"
            >
              <div className="relative h-[240px] md:h-[300px]">
                <ImageWithFallback
                  src={article.image}
                  fallbackSrc={heroFallbackForSlug(article.slug)}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-85 group-hover:scale-105 transition-all duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-white/90 text-[#0a1628] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              {/* Title overlay card — reference style */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-white rounded-[14px] p-4 shadow-lg">
                  <p className="text-[#0a1628]/40 text-[11px] uppercase tracking-wider font-semibold mb-1.5" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    {article.readTime} · {article.date}
                  </p>
                  <h3
                    className="text-[16px] md:text-[18px] leading-[1.3] text-[#0a1628] font-semibold group-hover:text-[#1d1ee3] transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FAQsTab() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filtered = faqGroups.map((group) => ({
    ...group,
    items: group.items.filter(
      (item) =>
        !search ||
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-10">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0a1628]/30" />
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-[480px] pl-11 pr-4 py-3.5 rounded-[12px] text-[15px] text-[#0a1628] outline-none"
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            background: "#f7f7f4",
            border: "1.5px solid transparent",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#1d1ee3")}
          onBlur={(e) => (e.target.style.borderColor = "transparent")}
        />
      </div>

      <div className="flex flex-col gap-10">
        {filtered.map((group) => (
          <div key={group.group}>
            <h3
              className="text-[13px] uppercase tracking-widest font-bold text-[#1d1ee3] mb-5"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {group.group}
            </h3>
            <div className="flex flex-col divide-y divide-[#0a1628]/08">
              {group.items.map((item) => {
                const key = `${group.group}-${item.q}`;
                const isOpen = openItem === key;
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpenItem(isOpen ? null : key)}
                      className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                    >
                      <span
                        className="text-[16px] md:text-[17px] font-medium text-[#0a1628] group-hover:text-[#1d1ee3] transition-colors leading-snug"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#0a1628]/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="pb-6 text-[15px] leading-[1.7] text-[#0a1628]/60"
                            style={{ fontFamily: "'Inter Tight', sans-serif" }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-[#0a1628]/40 text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            No results for "{search}". Try different keywords.
          </p>
        )}
      </div>
    </div>
  );
}

function NoticesTab() {
  return (
    <div>
      <div className="mb-8 p-5 bg-[#eaeeff] rounded-[16px]">
        <p className="text-[15px] text-[#0a1628]/70 leading-[1.6]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          IRS notices are numbered and coded. Here's what the most common ones mean — in plain English.{" "}
          <Link to="/clarity" className="text-[#1d1ee3] font-semibold hover:underline">
            ATTAX Clarity monitors for these automatically →
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {irsNotices.map((notice, i) => {
          const cfg = urgencyConfig[notice.urgency];
          const UrgencyIcon = cfg.icon;
          return (
            <motion.div
              key={notice.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-[20px] p-6 md:p-8"
              style={{ border: "1px solid rgba(10,22,40,0.06)", boxShadow: "0 2px 12px rgba(10,22,40,0.04)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Notice number */}
                <div className="shrink-0">
                  <div className="bg-[#0a1628] text-white rounded-[12px] px-4 py-2 inline-block">
                    <span className="text-[16px] font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {notice.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3
                      className="text-[18px] md:text-[20px] font-semibold text-[#0a1628]"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {notice.title}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold px-3 py-1 rounded-full ${cfg.bg} ${cfg.color}`} style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      <UrgencyIcon size={12} />
                      {notice.urgency}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0a1628]/35 mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What it is</p>
                      <p className="text-[14px] text-[#0a1628]/65 leading-[1.5]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{notice.what}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0a1628]/35 mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What it means</p>
                      <p className="text-[14px] text-[#0a1628]/65 leading-[1.5]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{notice.means}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0a1628]/35 mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What to do next</p>
                      <p className="text-[14px] text-[#0a1628]/65 leading-[1.5]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{notice.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function GlossaryTab() {
  const letters = [...new Set(glossaryTerms.map((t) => t.letter))].sort();

  return (
    <div>
      {/* Letter anchors */}
      <div className="flex flex-wrap gap-2 mb-8">
        {letters.map((l) => (
          <a
            key={l}
            href={`#glossary-${l}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f7f7f4] text-[#0a1628]/60 text-[13px] font-bold hover:bg-[#1d1ee3] hover:text-white transition-all"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {l}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        {letters.map((letter) => {
          const terms = glossaryTerms.filter((t) => t.letter === letter);
          return (
            <div key={letter} id={`glossary-${letter}`}>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-[40px] font-bold text-[#1d1ee3]"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {letter}
                </span>
                <div className="flex-1 h-px bg-[#eaeaff]" />
              </div>
              <div className="flex flex-col gap-6">
                {terms.map((term) => (
                  <div key={term.term} className="flex flex-col md:flex-row md:gap-8">
                    <div className="md:w-[240px] shrink-0 mb-2 md:mb-0">
                      <h3
                        className="text-[17px] font-semibold text-[#0a1628]"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {term.term}
                      </h3>
                      {term.link && (
                        <Link
                          to={term.link}
                          className="inline-flex items-center gap-1 text-[12px] text-[#1d1ee3] font-medium mt-1 hover:underline"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          Learn more <ExternalLink size={11} />
                        </Link>
                      )}
                    </div>
                    <p
                      className="flex-1 text-[15px] text-[#0a1628]/55 leading-[1.7]"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {term.def}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function ResourcesTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Blog");

  return (
    <section className="pb-[60px] md:pb-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        {/* Sticky tab bar */}
        <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#0a1628]/08 mb-10 md:mb-14">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 px-5 py-4 text-[14px] font-semibold transition-colors ${
                  activeTab === tab
                    ? "text-[#1d1ee3]"
                    : "text-[#0a1628]/45 hover:text-[#0a1628]"
                }`}
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1d1ee3]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {activeTab === "Blog" && <BlogTab />}
            {activeTab === "FAQs" && <FAQsTab />}
            {activeTab === "IRS Notices" && <NoticesTab />}
            {activeTab === "Tax Glossary" && <GlossaryTab />}
          </motion.div>
        </AnimatePresence>

        {/* Inline CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 bg-[#0a1628] rounded-[24px] px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p
              className="text-white text-[20px] md:text-[26px] font-semibold leading-snug mb-1"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Got a Tax Problem? Talk to ATTAX — Free.
            </p>
            <p className="text-white/50 text-[14px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Reading is a start. Acting is what changes things.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 group inline-flex items-center gap-5 bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 hover:bg-[#1618c7] transition-colors"
          >
            <span className="text-white text-[14px] md:text-[16px] font-medium whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Free Consultation
            </span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={18} className="text-[#1d1ee3]" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
