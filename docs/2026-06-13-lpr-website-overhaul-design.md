# LPR Website Overhaul + Client-Website Capability — Design Spec

**Date:** 2026-06-13
**Owner:** Danielle Stone / LPR Business Services
**Status:** Approved direction → ready for implementation plan
**Live site:** https://lapiedraroja.com (Cloudflare Pages)

---

## 1. Overview & Goals

This is **two layers built together**:

- **Layer A — The pilot:** A full overhaul of lapiedraroja.com — new design, rebuilt as a multi-page, SEO/AEO-ready site that accurately represents LPR's full offering.
- **Layer B — The capability:** As we build A, extract reusable pieces (a website-build skill, an SEO/AEO audit-and-fix agent, a local/GBP setup helper, the monitoring pipeline) so future **client** websites are mostly assembly from a brand-config, not from scratch.

**Why now:** The April SEO plumbing fixes shipped (the crawler 403 is resolved; robots.txt, sitemap.xml, schema, OG tags are live), but the site is still a single thin page with generic positioning and no analytics. It under-represents the business and gives search/AI engines almost nothing to rank or cite. Danielle is also beginning to build sites for clients, so the LPR rebuild doubles as the template.

---

## 2. Positioning (the strategy everything hangs on)

Four pillars, in plain terms:

- **Multi-vertical** — One page per industry LPR wants more of, instead of being chained to a single niche. Several doors into the site; each speaks one industry's language; new industries are added as pages, never a rebrand.
- **Remote-first** — "We work with you from anywhere, cloud-based, no office visit required" framed as the *selling point*. Targets people actively searching "virtual bookkeeper," "remote CFO." Turns LPR's no-office reality (and no in-person staff, ever) into an asset.
- **AEO-forward** (Answer Engine Optimization) — Pages structured so AI answer engines (ChatGPT, Google AI Overviews, Perplexity, Claude) *cite* LPR. Clear Q&A formatting, FAQ schema, visible credentials, fresh content. This is the largest under-contested lane in 2026 (~69% zero-click searches; AI Overviews on ~55% of searches; 83% of AI citations come from pages updated in the last 12 months). Competitors aren't optimizing for it yet.
- **Bilingual-capable** — Real English + Spanish versions of key pages. Large, underserved, low-competition audience LPR can largely own.

**Decided constraints:**
- **No pricing anywhere on the public site.** Rates ($65–$225 tier ladder — assumed hourly, to confirm) stay in proposals. Advisory positioning + retainer model; public hourly rates undercut both.
- **No geo/local-pack anchor.** Schema is a **service-area business** (national / multi-state `areaServed`), de-emphasizing the Reno local pack so LPR doesn't attract local-presence-expecting leads it can't serve.

---

## 3. Brand & Design Direction

**Brand system (current, set 2026-06-12 — supersedes the old Playfair-based brand):**
- Fonts: **Fraunces** (wordmark / serif soul), **Space Grotesk** (headings, tech-forward), **Inter** (body). Google Fonts.
- Palette: deep red `#5b0e0e` · red `#7a1a1a` · dark `#3d0808` · bright red `#b31b24` · gold `#d4a843` · cream `#fdf6f0` · ink `#2c2c2c` · border `#e0d6cf`.
- Logo: single-tone red emblem (`lpr-emblem-master.png` / `lpr-logo-red.png`) on white; white emblem on red. Two solid states only — never a muted in-between.

**Locked homepage direction** (from the visual-companion session — "B's boldness, C's clean"):
- Clean **light canvas** (white → faint cream), not a red field.
- **Bold Space Grotesk headline**, with a **gold underline accent** on one keyword.
- **Red dialed back to accents only**: the emblem, the primary CTA button, one highlighted word, a thin deep-red utility strip.
- **Real LPR emblem** + Fraunces wordmark, upper-left.
- A **three-pillar band** (Finance / Operations / AI) directly under the hero.
- **Open-ended industries** — "Industry-fluent… & more," never a hard count (Danielle's call: a fixed number reads as self-limiting).
- Working hero copy (to finalize): eyebrow "Fractional finance · operations · AI"; H1 "Finance, operations & AI — run *remotely*, built for how you work."

This direction is captured as a mockup in `.superpowers/brainstorm/.../directions-v3.html`.

---

## 4. Service Architecture — Three Pillars

The site organizes LPR's offering into three pillars (truer than "just bookkeeping," and a wider SEO net):

### Pillar 1 — Finance & Accounting
The documented tier ladder (rates internal-only, not shown on site):
- **Financial Operations Support** — transaction coding, reconciliations, 1099 prep/filing, payroll backup, recurring entries, clean-up/backlog.
- **Staff Accountant** — reconciliation review, discrepancy investigation, corrections/reclassifications, catch-up.
- **Controller & Compliance Oversight** — monthly close, WIP & margin review, job costing, insurance-audit support, payroll verification, internal controls.
- **Strategic Finance & Growth Advisory** — cash-flow forecasting, margin diagnostics, pre-qualification packages, capital planning, scenario modeling.
- **Ownership & Enterprise Advisory** — succession, exit-readiness, valuation support, 401(k) strategy, restructuring.

### Pillar 2 — Operations & Admin *(new — was undocumented; copy drafted, Danielle to refine)*
- **Remote Administrative Support** — inbox/calendar management, document organization, data entry, scheduling, vendor/client correspondence, recurring admin workflows.
- **Virtual Office Manager** — owns the operational rhythm remotely: vendor/contractor coordination, tools & subscriptions, process standardization, onboarding/offboarding, light HR coordination.
- **Business Operations Advising** — process mapping & improvement, tool selection/implementation, SOPs & documentation, tightening the systems revenue runs through (on-ramp to Pillar 3).

### Pillar 3 — AI & Automation
- **AI Systems Build & Automation** — AI workflow builds, automation architecture, prompt-engineering frameworks, AI-integrated reporting, AI SOP development.
- **AI Governance & Risk Strategy** — AI policy design, regulatory exposure mapping, data governance, AI risk assessment, executive adoption strategy.

---

## 5. Industries (lead pages)

Open-ended set; lead industries Danielle wants more of:
- **Real Estate** — "bookkeeping for real estate," investors/agencies/property management.
- **Law Firms / Professional Services** — "bookkeeping for law firms," trust-accounting awareness, agencies/consultancies.
- **E-commerce** — "ecommerce bookkeeping," multi-channel/sales-tax complexity.
- **Construction** — listed specialty (deep existing expertise: WIP, job costing, insurance audits). Present as a strength, not the identity.

Each industry page: industry-specific pain → how LPR's pillars solve it → proof → FAQ (AEO) → CTA.

---

## 6. Information Architecture / Sitemap

| Page | SEO/AEO job |
|---|---|
| **Home** | Remote-first hook, three pillars, industries, proof, CTA |
| **Services → Finance & Accounting** | "outsourced/virtual bookkeeping," "fractional CFO," "outsourced controller" |
| **Services → Operations & Admin** | "virtual office manager," "remote administrative support," "business operations consultant" |
| **Services → AI & Automation** | "AI automation consultant," "business process automation" |
| **Industries → Real Estate** | "bookkeeping for real estate" |
| **Industries → Law / Professional Services** | "bookkeeping for law firms" |
| **Industries → E-commerce** | "ecommerce bookkeeping" |
| **Industries → Construction** | "construction bookkeeping / job costing" |
| **About** | E-E-A-T: bio, credentials, the remote story — trust + AI-citation signals |
| **Contact** | Form (→ n8n), email, phone, "how we work remotely," service area |
| **Resources** *(Phase 2)* | Article hub — feeds SEO + AEO + the monitoring pipeline |
| **/es/** versions *(Phase 2)* | Spanish versions of key pages, `hreflang` paired |

Every service/industry page carries its own unique title, meta description, `Service` + `FAQPage` JSON-LD, and a short FAQ block.

---

## 7. SEO & AEO Plan

**On every page:** unique title (<60 chars) & meta description (150–160), single H1, clean heading hierarchy, descriptive alt text, canonical, OG/Twitter, fast load (Astro ships ~no JS).

**Structured data:** `AccountingService`/`ProfessionalService` (service-area, national `areaServed`, no street address) on home; `Service` schema per service page; `FAQPage` on pages with FAQs; `BreadcrumbList` site-wide; `Person` (Danielle, credentials) for E-E-A-T.

**AEO specifics:** question-shaped H2s, concise extractable answers, FAQ blocks, visible author/credentials, "last updated" dates, content kept fresh.

**Crawl/index:** expand `sitemap.xml` to every page with `lastmod`; keep `robots.txt`; submit to Google Search Console (owner action).

**Analytics:** **Cloudflare Web Analytics** (free, privacy-friendly, no cookie banner) in `<head>`. (Decided.)

**Local-without-local:** Google Business Profile as a **service-area business** (no public address), categories aligned to services, NAP consistent. De-emphasized vs. national/vertical/AEO.

**Bilingual:** `hreflang` pairs for `/es/` pages (Phase 2).

---

## 8. Tech Approach

- **Framework: Astro.** Ships almost no JS (fast = ranking + AEO), component-based (each service/industry page is a reusable template), built-in **i18n** (EN/ES), **content collections** for the Resources hub (Markdown). This component+config model is the Layer-B reuse engine: a new client site = swap a **brand config** (colors, fonts, logo, copy) + content.
- **Host: Cloudflare Pages** (where the site already lives; domain + crawler fix already in place), deployed from a **GitHub repo** (`lprds` account). *(Repo/deploy wiring to confirm — see Open Items.)*
- **Contact/intake form:** POST to an **n8n webhook** on the Railway instance (reuses the existing intake workflow pattern; consistent with the n8n-first stack). No third-party form vendor.
- **"Book a fit call":** scheduler embed/link — tool TBD (see Open Items).
- **Build workspace:** local repo at `~/lpr-website-build` (the Drive mount is a poor dev environment; deploy flows through GitHub, not Drive).

---

## 9. Phasing

- **Phase 1 — Launch:** New design system + Home, 3 Service pillar pages, 4 Industry pages, About, Contact. Full SEO/AEO schema, Cloudflare Web Analytics, expanded sitemap, GBP service-area setup. English. **This is the shippable site.**
- **Phase 2 — Fast-follow:** Spanish (`/es/`) versions of key pages with `hreflang`; Resources hub seeded with 3–5 cornerstone articles.
- **Phase 3 — Ongoing:** Turn on the automated SEO monitoring pipeline already specced in `SEO Plan LPR` (crawl/index, ranking, technical health, content-gap, local) on n8n.

---

## 10. Layer B — Reusable Capability (extract while building Phase 1)

- **`building-client-websites` skill** — the brand-config-driven Astro template + the IA/positioning playbook (multi-vertical, remote-first, AEO, bilingual) as a repeatable method.
- **`seo-aeo-audit` agent** — runs the audit-and-fix pass (the `seo-audit-prompt.md` logic, upgraded with AEO checks) against any site/codebase.
- **Local/GBP setup helper** — service-area GBP + NAP + schema checklist.
- **SEO monitoring pipeline** (Phase 3) — generalized to any client domain.

The LPR site is client #0; each reusable piece is validated by shipping it once here first.

---

## 11. Open Items (resolve in the implementation plan)

1. **Repo + Cloudflare wiring** — Is there an existing `lprds` GitHub repo behind the current Cloudflare Pages project? Migrate it to Astro, or new repo + repoint Pages? (Verify live, don't assume.)
2. **"Book a fit call" tool** — Cal.com / Google Calendar appointment scheduling / other? Needs Danielle's pick.
3. **Contact form backend** — confirm the n8n webhook + notification path (and which email/domain sends; LPR domain verification in Resend TBD).
4. **Spanish source** — Claude-drafted translations with Danielle review (assumed).
5. **Final hero + page copy** — working copy in mockup to be finalized per page.
6. **GBP** — confirm service-area categories + NAP details (no street address).
7. **Rate basis** — confirm $65–$225 is hourly (doesn't affect the site; affects internal/proposal docs).

---

## 12. Out of Scope

- Public pricing of any kind.
- Client portal / login / document upload.
- Online payments / e-commerce checkout.
- Blog/Resources content beyond the Phase-2 seed set.
- In-person/local-pack SEO strategy.

---

## 13. Success Criteria

- All pages return 200 to crawlers (incl. Googlebot) and are indexable; sitemap lists every page.
- Each page passes a structured-data validation and carries unique title/meta/H1.
- Core Web Vitals in "good" range (Astro + optimized images).
- Site accurately presents all three pillars + open-ended industries; no pricing exposed.
- Analytics live; GSC connected; GBP service-area live.
- Reusable Astro template proven by standing up the LPR site from a brand config.
- (Ongoing) Impressions/clicks/positions trend up in GSC; LPR begins appearing in AI-answer citations for target queries.
