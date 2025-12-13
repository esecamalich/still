import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const essays = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/essays"}),
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        thumbnail: z.string().optional(),
        thumbnailCaption: z.string().optional(),
        publishedDate: z.date(),
        draft: z.boolean().default(false),
        highlight: z.boolean().default(false),
        slug: z.string().optional(),
        categories: z.array(z.string()).default([]),
        introduction: z.string().optional(),
    })
})

export const collections = {
    essays,
}