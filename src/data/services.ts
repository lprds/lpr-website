// Three service pillars. No rates anywhere (decided: pricing stays in proposals).
// Each pillar drives /services/<slug> and the homepage pillar band.

export type Offering = { name: string; desc: string };
export type Faq = { q: string; a: string };

export type Pillar = {
  slug: string;
  nav: string;
  title: string;
  eyebrow: string;
  intro: string;
  forWho: string;
  offerings: Offering[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const pillars: Pillar[] = [
  {
    slug: "finance-accounting",
    nav: "Finance & Accounting",
    title: "Finance & Accounting",
    eyebrow: "Pillar 01",
    intro:
      "Accurate books through forward-looking strategy — one team that scales with you from day-to-day bookkeeping to CFO-level guidance, entirely remote.",
    forWho:
      "For owners who want their financials handled end to end — clean records, real oversight, and a partner who can think a few quarters ahead.",
    offerings: [
      { name: "Financial Operations Support", desc: "Transaction coding, account reconciliations, 1099 preparation and filing, payroll backup, recurring journal entries, and bookkeeping clean-up." },
      { name: "Staff Accountant", desc: "Reconciliation review, discrepancy investigation, corrections and reclassifications, and backlog catch-up — an analytical eye on your books." },
      { name: "Controller & Compliance Oversight", desc: "Monthly close, work-in-progress and margin review, job-cost evaluation, insurance-audit support, payroll verification, and internal controls." },
      { name: "Strategic Finance & Growth Advisory", desc: "Cash-flow forecasting, margin diagnostics, pre-qualification packages, capital planning, and scenario modeling for proactive decisions." },
      { name: "Ownership & Enterprise Advisory", desc: "Succession strategy, exit-readiness planning, valuation support, retirement and 401(k) integration, and enterprise restructuring." },
    ],
    faq: [
      { q: "Do you work with our existing accountant or CPA?", a: "Yes. We handle the books and management reporting and coordinate directly with your CPA at tax time, so nothing falls between the two." },
      { q: "Which accounting software do you support?", a: "We work in QuickBooks Online, QuickBooks Desktop, and Xero, and can advise on the right platform if you're still deciding." },
      { q: "Can you clean up books that are behind?", a: "Yes — catch-up and clean-up are core services. We bring records current, document what changed, and put a monthly rhythm in place so it stays that way." },
    ],
    seoTitle: "Outsourced Bookkeeping, Controller & Fractional CFO Services",
    seoDescription:
      "Remote bookkeeping, controller oversight, and fractional-CFO advisory for growing businesses. Clean books to forward-looking strategy — bilingual, nationwide.",
  },
  {
    slug: "operations-admin",
    nav: "Operations & Admin",
    title: "Operations & Admin",
    eyebrow: "Pillar 02",
    intro:
      "The operational backbone of your business, run remotely — so the day-to-day keeps moving without pulling you off the work that grows the company.",
    forWho:
      "For owners buried in admin and coordination who need reliable support without the cost and overhead of in-house hires.",
    offerings: [
      { name: "Remote Administrative Support", desc: "Inbox and calendar management, document organization, data entry, scheduling, vendor and client correspondence, and recurring administrative workflows." },
      { name: "Virtual Office Manager", desc: "Ownership of your operational rhythm: vendor and contractor coordination, tools and subscriptions, process standardization, onboarding/offboarding, and light HR coordination." },
      { name: "Business Operations Advising", desc: "Process mapping and improvement, tool selection and implementation, SOPs and documentation, and tightening the systems your revenue runs through." },
    ],
    faq: [
      { q: "How is this different from hiring an office manager?", a: "You get the same coverage without recruiting, payroll, benefits, or onboarding — scaled to what you actually need, and ready to grow or contract as you do." },
      { q: "Will you use our existing tools?", a: "Yes. We work inside the systems you already have, and recommend changes only where they clearly save you time or money." },
      { q: "Does this connect to the AI and automation work?", a: "It's a natural on-ramp. Once your operations are mapped, we can automate the repetitive parts — see AI & Automation." },
    ],
    seoTitle: "Virtual Office Manager & Remote Administrative Support",
    seoDescription:
      "Remote administrative support, virtual office management, and business-operations advising. Keep the back office running without an in-house hire.",
  },
  {
    slug: "ai-automation",
    nav: "AI & Automation",
    title: "AI & Automation",
    eyebrow: "Pillar 03",
    intro:
      "Operational leverage built on a foundation that already works — practical AI and automation that remove repetitive work and tighten your reporting.",
    forWho:
      "For businesses ready to turn well-run operations into real efficiency, with the right guardrails in place.",
    offerings: [
      { name: "AI Systems Build & Automation", desc: "AI workflow builds, automation architecture, prompt-engineering frameworks, AI-integrated reporting, and AI SOP development." },
      { name: "AI Governance & Risk Strategy", desc: "AI policy design, regulatory exposure mapping, data-governance advisory, AI risk assessment, and executive adoption strategy." },
    ],
    faq: [
      { q: "We're not a tech company — is this relevant to us?", a: "Especially so. The biggest gains come from automating ordinary back-office work: data entry, reporting, follow-ups, and reconciliations." },
      { q: "Is our data safe?", a: "Governance comes first. We map where data lives, set clear policies, and put guardrails in place before anything is automated." },
    ],
    seoTitle: "AI Automation & Governance for Small Business Operations",
    seoDescription:
      "Practical AI workflow builds, business-process automation, and AI governance for growing businesses — operational leverage with the right guardrails.",
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
