import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    datasetUrl: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { publications };