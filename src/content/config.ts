import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

// Service categories collection
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional()
  })
});

export const collections = { blog, services };

