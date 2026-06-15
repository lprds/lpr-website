import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Resources / blog hub. Drop a Markdown file in src/content/resources/ and it
// publishes automatically (set draft: true to stage without publishing).
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Danielle Stone"),
    eyebrow: z.string().default("Resources"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
