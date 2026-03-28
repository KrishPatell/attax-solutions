import { useState } from "react";
import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { AttaxCtaBanner } from "../components/attax/CtaBannerSection";
import { Link } from "react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../lib/heroH1";
import { usePageSeo } from "../lib/pageSeo";

const terms = [
  {
    letter: "A",
    entries: [
      {
        term: "Abatement",
        definition: "The reduction or elimination of a tax penalty. The IRS may grant abatement for first-time offenders with a clean compliance history (First-Time Abatement) or when a taxpayer demonstrates reasonable cause for non-compliance.",
        related: "penalty-abatement-guide"
      },
      {
        term: "Audit",
        definition: "An official examination of a taxpayer's financial records and returns by the IRS to verify accuracy. Audits can be conducted by mail (correspondence audit), at an IRS office, or at the taxpayer's home or business (field audit).",
        related: "irs-audit-survival-guide"
      }
    ]
  },
  {
    letter: "B",
    entries: [
      {
        term: "Bank Levy",
        definition: "A collection action where the IRS seizes funds from a taxpayer's bank account to satisfy unpaid taxes. The bank is required to hold the funds for 21 days before transferring them to the IRS, providing a brief window to seek release.",
        related: "wage-garnishment-bank-levy-guide"
      }
    ]
  },
  {
    letter: "C",
    entries: [
      {
        term: "CDP (Collection Due Process) Hearing",
        definition: "A formal hearing taxpayers can request within 30 days of receiving a Final Notice of Intent to Levy or a Notice of Federal Tax Lien filing. Requesting a CDP hearing immediately halts all collection activity while the appeal is pending.",
        related: null
      },
      {
        term: "CNC (Currently Not Collectible)",
        definition: "A status the IRS assigns when a taxpayer's income and expenses leave no ability to make payments toward their tax debt. The IRS suspends active collection while the account is in CNC status, though interest and penalties continue to accrue.",
        related: null
      },
      {
        term: "CP Notice",
        definition: "A standardized IRS notice code. Common examples include CP90 (Final Notice of Intent to Levy), CP2000 (underreporter inquiry), and CP14 (balance due notice). Each CP number signals a different type of action and requires a different response.",
        related: null
      }
    ]
  },
  {
    letter: "D",
    entries: [
      {
        term: "DDIA (Direct Debit Installment Agreement)",
        definition: "A type of IRS payment plan where monthly payments are automatically withdrawn from the taxpayer's bank account. DDIA plans often qualify for lien withdrawal on balances under $25,000 and may carry lower setup fees.",
        related: "installment-agreement-guide"
      },
      {
        term: "Discharge",
        definition: "The removal of a federal tax lien from a specific piece of property, typically to allow a sale or refinance to proceed. The lien remains active on the taxpayer's other assets.",
        related: "tax-lien-guide"
      }
    ]
  },
  {
    letter: "E",
    entries: [
      {
        term: "Enrolled Agent (EA)",
        definition: "A federally licensed tax professional who has passed a rigorous IRS examination covering all areas of taxation. Enrolled Agents are the only tax professionals with unlimited practice rights before the IRS — meaning they can represent any taxpayer on any type of case.",
        related: null
      }
    ]
  },
  {
    letter: "F",
    entries: [
      {
        term: "Failure-to-File Penalty",
        definition: "A penalty assessed when a tax return is not filed by the due date (including extensions). The penalty is typically 5% of the unpaid tax for each month the return is late, up to a maximum of 25%.",
        related: "penalty-abatement-guide"
      },
      {
        term: "Failure-to-Pay Penalty",
        definition: "A penalty assessed when taxes owed are not paid by the due date. Typically 0.5% of the unpaid tax per month, up to 25%. This penalty runs concurrently with the failure-to-file penalty but is reduced during an installment agreement.",
        related: "penalty-abatement-guide"
      },
      {
        term: "Federal Tax Lien",
        definition: "A legal claim the government makes against a taxpayer's property when they neglect or fail to pay a tax debt. Once filed publicly as a Notice of Federal Tax Lien, it attaches to all current and future assets and appears on credit reports.",
        related: "tax-lien-guide"
      },
      {
        term: "Fresh Start Initiative",
        definition: "An IRS program launched in 2011 to give struggling taxpayers more flexible options for resolving tax debt. Key provisions include expanded OIC eligibility, streamlined installment agreements up to $50,000, and lien withdrawal for qualifying Direct Debit agreements.",
        related: "offer-in-compromise-guide"
      },
      {
        term: "FTA (First-Time Abatement)",
        definition: "An IRS administrative waiver that removes failure-to-file, failure-to-pay, or failure-to-deposit penalties for taxpayers with a clean compliance history over the prior three years. No documentation of hardship is required — only a qualifying history.",
        related: "penalty-abatement-guide"
      }
    ]
  },
  {
    letter: "I",
    entries: [
      {
        term: "IA (Installment Agreement)",
        definition: "A formal payment plan between a taxpayer and the IRS allowing the tax debt to be paid over time in monthly installments. An approved installment agreement prevents most collection actions including levies and garnishments.",
        related: "installment-agreement-guide"
      },
      {
        term: "Innocent Spouse Relief",
        definition: "A form of IRS relief for taxpayers held responsible for tax errors on a joint return that were caused entirely by their spouse. The qualifying taxpayer can be relieved of all or part of the tax, penalties, and interest if they meet IRS criteria.",
        related: null
      },
      {
        term: "IRS Transcript",
        definition: "An official document issued by the IRS summarizing a taxpayer's account activity. Types include the Account Transcript (payments, penalties, notices), Wage and Income Transcript (third-party reported income), and Tax Return Transcript (line-by-line return summary).",
        related: null
      }
    ]
  },
  {
    letter: "L",
    entries: [
      {
        term: "Levy",
        definition: "The legal seizure of a taxpayer's property or assets — including wages, bank accounts, real estate, and vehicles — to satisfy unpaid taxes. Unlike a lien (which is a claim), a levy is an actual taking of property.",
        related: "wage-garnishment-bank-levy-guide"
      },
      {
        term: "Lien Subordination",
        definition: "An IRS agreement to allow another creditor's claim to take priority over the federal tax lien for a specific transaction. Often used when a taxpayer needs to refinance a property to pay off the tax debt.",
        related: "tax-lien-guide"
      },
      {
        term: "Lien Withdrawal",
        definition: "The complete removal of a Notice of Federal Tax Lien from the public record. Unlike a lien release, a withdrawal erases the public filing entirely, benefiting the taxpayer's credit report.",
        related: "tax-lien-guide"
      }
    ]
  },
  {
    letter: "O",
    entries: [
      {
        term: "OIC (Offer in Compromise)",
        definition: "An IRS program that allows qualifying taxpayers to settle their entire tax debt for less than the full amount owed. Acceptance is based on the taxpayer's Reasonable Collection Potential — a formula weighing assets, income, and allowable expenses. The IRS acceptance rate is approximately 30–35%.",
        related: "offer-in-compromise-guide"
      }
    ]
  },
  {
    letter: "P",
    entries: [
      {
        term: "Partial Pay Installment Agreement (PPIA)",
        definition: "A payment plan where the monthly payment does not fully pay off the tax debt before the 10-year collection statute expires. When the statute runs out, the remaining balance is legally extinguished. A PPIA is an alternative to the OIC for taxpayers who can make some payments but cannot pay the full balance.",
        related: "installment-agreement-guide"
      },
      {
        term: "Power of Attorney (Form 2848)",
        definition: "A form authorizing a licensed tax professional to represent a taxpayer before the IRS. With a valid Form 2848 on file, the IRS will communicate directly with the representative rather than the taxpayer, significantly reducing stress for the client.",
        related: null
      }
    ]
  },
  {
    letter: "R",
    entries: [
      {
        term: "Reasonable Collection Potential (RCP)",
        definition: "The IRS formula used to evaluate an Offer in Compromise. It calculates the net realizable value of the taxpayer's assets plus the present value of their future income after allowable living expenses. The offer amount must generally equal or exceed the RCP.",
        related: "offer-in-compromise-guide"
      },
      {
        term: "Resolution",
        definition: "The formal conclusion of a tax debt case — whether through full payment, an installment agreement, an OIC acceptance, CNC status, or expiration of the collection statute. Resolution ends active IRS collection activity.",
        related: null
      }
    ]
  },
  {
    letter: "S",
    entries: [
      {
        term: "Statute of Limitations (CSED)",
        definition: "The IRS Collection Statute Expiration Date — the 10-year window, starting from the date a tax is assessed, during which the IRS can legally collect. After the CSED expires, the debt is extinguished by law. Certain actions (like filing a CDP request or submitting an OIC) can toll (pause) the clock.",
        related: null
      },
      {
        term: "Streamlined Installment Agreement",
        definition: "A simplified IRS payment plan available for taxpayers owing $50,000 or less in combined tax, penalties, and interest. No full financial disclosure is required. The IRS typically grants these agreements with minimal review.",
        related: "installment-agreement-guide"
      }
    ]
  },
  {
    letter: "T",
    entries: [
      {
        term: "Tax Lien",
        definition: "See Federal Tax Lien. A tax lien is the government's legal claim against your assets when you fail to pay a tax debt. It does not mean the government is seizing your property — but it does give them first priority over other creditors.",
        related: "tax-lien-guide"
      },
      {
        term: "Trust Fund Recovery Penalty (TFRP)",
        definition: "A penalty assessed against individuals responsible for a business that failed to collect and remit payroll taxes. The TFRP equals 100% of the unpaid trust fund taxes and can be assessed personally against business owners, officers, or employees with financial authority.",
        related: null
      }
    ]
  },
  {
    letter: "W",
    entries: [
      {
        term: "Wage Garnishment",
        definition: "A form of IRS levy applied directly to a taxpayer's wages, salary, or other compensation. The employer receives a notice and is required to withhold a percentage of each paycheck until the debt is paid or the levy is released.",
        related: "wage-garnishment-bank-levy-guide"
      }
    ]
  }
];

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const activeLetters = new Set(terms.map(g => g.letter));

export default function Glossary() {
  const [query, setQuery] = useState("");

  usePageSeo({
    title: "Tax Glossary — Common IRS Terms Explained | ATTAX Solutions",
    description:
      "Plain-English definitions of common IRS and tax resolution terms — from abatement and levies to Offer in Compromise and tax liens. Know what you're dealing with.",
    path: "/glossary",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Tax Glossary", path: "/glossary" },
    ],
  });

  const filtered = query.trim()
    ? terms.map(group => ({
        ...group,
        entries: group.entries.filter(e =>
          e.term.toLowerCase().includes(query.toLowerCase()) ||
          e.definition.toLowerCase().includes(query.toLowerCase())
        )
      })).filter(g => g.entries.length > 0)
    : terms;

  return (
    <>
      <AttaxNavbar />
      <main>
        {/* Hero */}
        <section className="pt-[100px] md:pt-[160px] pb-[60px] md:pb-[80px] bg-white border-b border-[#0a1628]/08">
          <div className="max-w-[1200px] mx-auto px-5 md:px-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Tax Glossary]
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className={`${HERO_H1_CLASS_ON_LIGHT} mb-7`}
              style={HERO_H1_STYLE}
            >
              IRS Terms,{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Explained.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#0a1628]/60 leading-[1.7] max-w-[620px] mb-10"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Tax notices are full of jargon designed to confuse. This glossary translates the terms the IRS uses into plain language — so you know exactly what you're dealing with.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative max-w-[480px]"
            >
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0a1628]/30 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search terms..."
                className="w-full pl-11 pr-4 py-3.5 rounded-[12px] border border-[#0a1628]/12 bg-[#f7f7f4] text-[#0a1628] text-[15px] outline-none focus:border-[#1d1ee3] transition-colors placeholder:text-[#0a1628]/30"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Alpha Nav */}
        {!query && (
          <section className="sticky top-[60px] z-30 bg-white border-b border-[#0a1628]/08 py-3">
            <div className="max-w-[1200px] mx-auto px-5 md:px-0">
              <div className="flex flex-wrap gap-1">
                {allLetters.map(letter => (
                  activeLetters.has(letter) ? (
                    <a
                      key={letter}
                      href={`#letter-${letter}`}
                      className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[13px] font-semibold text-[#1d1ee3] hover:bg-[#eaeeff] transition-colors"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {letter}
                    </a>
                  ) : (
                    <span
                      key={letter}
                      className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[13px] text-[#0a1628]/20"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {letter}
                    </span>
                  )
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Terms */}
        <section className="py-[60px] md:py-[80px] bg-[#f7f7f4]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#0a1628]/40 text-[18px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  No terms found for "{query}"
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {filtered.map((group, gi) => (
                  <div key={group.letter} id={`letter-${group.letter}`}>
                    <div className="flex items-center gap-4 mb-8">
                      <span
                        className="text-[48px] font-bold text-[#1d1ee3] leading-none"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {group.letter}
                      </span>
                      <div className="flex-1 h-[1px] bg-[#0a1628]/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {group.entries.map((entry, ei) => (
                        <motion.div
                          key={entry.term}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ei * 0.05 }}
                          className="bg-white rounded-[20px] p-7"
                          style={{ border: "1px solid rgba(10,22,40,0.06)", boxShadow: "0 2px 12px rgba(10,22,40,0.04)" }}
                        >
                          <h3
                            className="text-[20px] text-[#0a1628] mb-3 leading-[1.2]"
                            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
                          >
                            {entry.term}
                          </h3>
                          <p
                            className="text-[14px] md:text-[15px] text-[#0a1628]/60 leading-[1.7] mb-4"
                            style={{ fontFamily: "'Inter Tight', sans-serif" }}
                          >
                            {entry.definition}
                          </p>
                          {entry.related && (
                            <Link
                              to={`/resources/${entry.related}`}
                              className="inline-flex items-center gap-1.5 text-[#1d1ee3] text-[13px] font-semibold hover:gap-2.5 transition-all"
                              style={{ fontFamily: "'Inter Tight', sans-serif" }}
                            >
                              Read the full guide
                              <ArrowUpRight size={14} />
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Internal CTA strip */}
        <section className="py-[60px] md:py-[80px] bg-white border-t border-[#0a1628]/08">
          <div className="max-w-[1200px] mx-auto px-5 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p
                className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Know Your Situation
              </p>
              <h2
                className="text-[28px] md:text-[36px] text-[#0a1628] font-semibold leading-[1.2]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Understanding the term is step one.{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Resolving it is step two.
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[50px] border border-[#1d1ee3] text-[#1d1ee3] text-[14px] font-semibold hover:bg-[#eaeeff] transition-colors"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Read Our Guides
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-5 bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 hover:bg-[#1618c7] transition-colors"
              >
                <span className="text-white text-[14px] font-medium whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Free Consultation
                </span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-[#1d1ee3]" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <AttaxCtaBanner />
      </main>
      <AttaxFooter />
    </>
  );
}
