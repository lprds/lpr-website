// Lead industry pages (open-ended set — never presented as a hard cap).
import type { Faq } from "./services";

export type Industry = {
  slug: string;
  nav: string;
  title: string;
  eyebrow: string;
  intro: string;
  pains: string[];
  howWeHelp: string[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    nav: "Real Estate",
    title: "Bookkeeping & CFO Support for Real Estate",
    eyebrow: "Industry",
    intro:
      "Investors, agencies, and property managers run on transaction volume and entity complexity. We keep the books clean across properties and entities and give you the cash-flow picture to move on the next deal.",
    pains: [
      "Income and expenses spread across multiple properties and LLCs",
      "Commission, draw, and owner-distribution tracking that never quite ties out",
      "No clear, current view of cash flow when an opportunity appears",
    ],
    howWeHelp: [
      "Per-property and per-entity books that reconcile cleanly every month",
      "Owner and investor reporting packages that are actually readable",
      "Cash-flow forecasting and capital planning for acquisitions and refinances",
    ],
    faq: [
      { q: "Can you handle multiple entities and properties?", a: "Yes — multi-entity, multi-property structures are routine. We keep each set of books clean and roll them up into one clear picture." },
      { q: "Do you do owner and investor reporting?", a: "Yes. We produce per-property and consolidated reporting packages tailored to what your owners and investors need to see." },
    ],
    seoTitle: "Bookkeeping for Real Estate Investors & Agencies",
    seoDescription:
      "Remote bookkeeping and fractional-CFO support for real estate — multi-entity, multi-property books, owner reporting, and cash-flow planning for your next deal.",
  },
  {
    slug: "law-professional-services",
    nav: "Law & Professional Services",
    title: "Bookkeeping & CFO Support for Law & Professional Services",
    eyebrow: "Industry",
    intro:
      "Firms and agencies live and die by utilization, billing accuracy, and clean retainer tracking. We bring precision to the books so you can bill confidently and lead the practice — with client funds and operating funds kept properly separate.",
    pains: [
      "Revenue tied to billable time, retainers, and work-in-progress",
      "Client funds and operating funds that have to be kept properly separate",
      "Partner and owner draws that complicate an already busy close",
    ],
    howWeHelp: [
      "Clean billing, retainer, and work-in-progress tracking that reconciles to revenue",
      "Client and operating funds kept in separate accounts and reconciled on schedule",
      "Partner-distribution and profitability reporting you can act on",
    ],
    faq: [
      { q: "Can you keep client funds and operating funds properly separated?", a: "Yes. We keep client and operating funds in separate accounts, reconciled on schedule, with clear documentation of every movement." },
      { q: "Can you track profitability by service line or partner?", a: "Yes. We structure the books so you can see margin by service line, engagement, or partner — not just one firm-wide number." },
    ],
    seoTitle: "Bookkeeping for Law Firms & Professional Services",
    seoDescription:
      "Remote bookkeeping and fractional-CFO support for law firms and professional-services firms — billing and WIP accuracy, separated client funds, and profitability reporting.",
  },
  {
    slug: "ecommerce",
    nav: "E-commerce",
    title: "Bookkeeping & CFO Support for E-commerce",
    eyebrow: "Industry",
    intro:
      "Multi-channel sales, inventory, processor fees, and sales-tax across jurisdictions make e-commerce books deceptively hard. We untangle the data so your margins and cash position are finally clear.",
    pains: [
      "Sales, fees, and refunds scattered across Shopify, Amazon, and processors",
      "Inventory and cost of goods that distort true margin",
      "Multi-state (and multi-country) sales-tax exposure",
    ],
    howWeHelp: [
      "Channel and processor data reconciled into clean, trustworthy books",
      "Inventory and COGS handled so gross margin reflects reality",
      "Sales-tax nexus tracking and filing support across jurisdictions",
    ],
    faq: [
      { q: "Do you work with Shopify, Amazon, and our payment processors?", a: "Yes. We work from the data your channels and processors produce — reconciling payouts, fees, and refunds so your books match what actually hit the bank." },
      { q: "Can you help with multi-state sales tax?", a: "Yes — we track nexus, calculate what's owed by jurisdiction, and support filing so you stay compliant as you grow." },
    ],
    seoTitle: "E-commerce Bookkeeping & Accounting Services",
    seoDescription:
      "Remote bookkeeping and fractional-CFO support for e-commerce — multi-channel reconciliation, inventory and COGS, and multi-state sales-tax support.",
  },
  {
    slug: "construction",
    nav: "Construction",
    title: "Bookkeeping & CFO Support for Construction",
    eyebrow: "Specialty",
    intro:
      "A specialty we know deeply. Project-based work demands job costing, work-in-progress tracking, and insurance-audit readiness — the discipline that protects your margins on every job.",
    pains: [
      "Job costs and change orders that blur project-level profitability",
      "Work-in-progress and over/under-billing that's hard to see in real time",
      "Insurance audits and compliance exposure that arrive without warning",
    ],
    howWeHelp: [
      "Job-cost structure and per-project margin you can trust",
      "Work-in-progress tracking and over/under-billing visibility",
      "Insurance-audit preparation, payroll burden review, and internal controls",
    ],
    faq: [
      { q: "Do you understand job costing and WIP?", a: "Yes — they're core to our construction work, alongside change-order tracking and over/under-billing analysis." },
      { q: "Can you help prepare for insurance audits?", a: "Yes. We keep payroll, burden, and supporting records organized year-round so audits are a non-event rather than a scramble." },
    ],
    seoTitle: "Construction Bookkeeping, Job Costing & WIP Tracking",
    seoDescription:
      "Remote construction bookkeeping and controller support — job costing, work-in-progress tracking, insurance-audit prep, and margin protection on every project.",
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
