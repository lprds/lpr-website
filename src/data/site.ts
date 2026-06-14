// ============================================================
// SITE CONFIG — business constants, nav, brand, integrations.
// This + the brand tokens in global.css are the "config" you
// swap to stand up a client site from the same template.
// ============================================================

export const site = {
  name: "LPR Business Services",
  legalName: "La Piedra Roja — LPR Business Services",
  wordmark: "La Piedra Roja",
  domain: "https://lapiedraroja.com",
  email: "danielle@lapiedraroja.com",
  phone: "+1-415-350-5333",
  phoneDisplay: "(415) 350-5333",
  founder: "Danielle Stone",
  founderTitle: "Founder & Principal",
  linkedin: "https://www.linkedin.com/in/danielle-stone-a44b811b5/",

  tagline: "Fractional finance, operations & AI — run remotely.",
  heroEyebrow: "Fractional finance · operations · AI",
  heroSub:
    "From bookkeeping to fractional CFO, virtual office management to automation — one modern partner for your entire back office, wherever you are.",
  metaDescription:
    "LPR Business Services is your remote-first partner for bookkeeping, controller and fractional-CFO support, operations and admin, plus AI automation. Bilingual, nationwide.",

  // Set at build time via env; falls back to mailto if unset.
  formEndpoint: import.meta.env.PUBLIC_CONTACT_WEBHOOK ?? "",
  // Primary call-to-action. Label is centralized here; destination falls back
  // to the Contact page until/unless a (free) scheduler URL is provided.
  ctaLabel: "Let's get started",
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL ?? "/contact",
  // Cloudflare Web Analytics token (Pages → Web Analytics).
  cfAnalyticsToken: import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? "",
} as const;

export const serviceNav = [
  { label: "Finance & Accounting", href: "/services/finance-accounting" },
  { label: "Operations & Admin", href: "/services/operations-admin" },
  { label: "AI & Automation", href: "/services/ai-automation" },
];

export const industryNav = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Law & Professional Services", href: "/industries/law-professional-services" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Construction", href: "/industries/construction" },
];

export const mainNav = [
  { label: "Services", children: serviceNav },
  { label: "Industries", children: industryNav },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
