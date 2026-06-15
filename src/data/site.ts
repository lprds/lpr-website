// ============================================================
// SITE CONFIG — business constants, nav, brand, integrations.
// This + the brand tokens in global.css are the "config" you
// swap to stand up a client site from the same template.
// ============================================================

export const site = {
  name: "LPR Business Services",
  legalName: "LPR Business Services",
  wordmark: "LPR Business Services",
  domain: "https://lapiedraroja.com",
  email: "danielle@lapiedraroja.com",
  phone: "+1-415-350-5333",
  phoneDisplay: "(415) 350-5333",
  founder: "Danielle Stone",
  founderTitle: "Principal Owner",
  linkedin: "https://www.linkedin.com/in/danielle-stone-a44b811b5/",

  tagline: "Fractional finance, operations & AI — run remotely.",
  heroEyebrow: "Fractional finance · operations · AI",
  heroSub:
    "From bookkeeping to fractional CFO, virtual office management to automation — one modern partner for your entire back office, wherever you are.",
  metaDescription:
    "LPR Business Services is your remote-first partner for bookkeeping, controller and fractional-CFO support, operations and admin, plus AI automation. Bilingual, nationwide.",

  // Set at build time via env; falls back to mailto if unset.
  formEndpoint:
    import.meta.env.PUBLIC_CONTACT_WEBHOOK ??
    "https://n8n-production-d34f.up.railway.app/webhook/lpr-contact",
  // Primary call-to-action. Label is centralized here; destination falls back
  // to the Contact page until/unless a (free) scheduler URL is provided.
  ctaLabel: "Let's get started",
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL ?? "/contact",
  // Cloudflare Web Analytics beacon token (public site ID — safe to commit; appears in page HTML).
  // Set directly because CF's automatic injection does NOT fire on Pages-served content;
  // this renders the manual beacon via SeoHead. Env var still overrides if set.
  cfAnalyticsToken: import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? "d74d5a42f18e4d89a985eb072b7f3379",
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
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
