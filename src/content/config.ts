import { defineCollection, z } from 'astro:content';

// Marketing pages written in Markdown
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional(),
    heroImage: z.string().optional()
  })
});

export const collections = { pages };
