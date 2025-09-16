import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
    focusKeyword: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
    date: z.string().optional()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { pages, blog };
