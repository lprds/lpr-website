import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site, serviceNav, industryNav } from "../data/site";

// Dynamic /llms.txt — an AEO convention that gives AI answer engines a clean,
// curated map of the site. Auto-includes published resources, so it stays
// current as the content cadence adds posts.
export const GET: APIRoute = async () => {
  const posts = (await getCollection("resources", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const services = serviceNav.map((s) => `- [${s.label}](${site.domain}${s.href})`).join("\n");
  const industries = industryNav.map((i) => `- [${i.label}](${site.domain}${i.href})`).join("\n");
  const resources = posts
    .map((p) => `- [${p.data.title}](${site.domain}/resources/${p.id}): ${p.data.description}`)
    .join("\n");

  const body = `# ${site.name}

> Remote-first bookkeeping, controller, fractional-CFO, operations, and AI & automation support for small and growing businesses. Bilingual (English/Spanish), serving clients nationwide.

${site.name} (legal entity La Piedra Roja) is led by ${site.founder}, ${site.founderTitle} — 15+ years in construction accounting and CFO-level advisory. Engagements scale from bookkeeping through fractional CFO, plus operations/admin and human-in-the-loop AI & automation, delivered remotely. No public pricing; engagements are scoped per client.

## Services
${services}

## Industries Served
${industries}

## Resources
- [Resources hub](${site.domain}/resources): Articles on small-business finance, operations, and automation.
${resources}

## About & Contact
- [About](${site.domain}/about): Founder, approach, and expertise.
- [Contact](${site.domain}/contact): Get in touch — ${site.email}.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
