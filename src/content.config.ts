import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('CGuardPro'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']).default('es'),
  }),
});

export const collections = { blog };
