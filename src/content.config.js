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

const links = defineCollection({
    loader: glob({ 
        pattern: "**/*.md", // TODO: Describe what this line does in a comment 
        base: "./src/content/links" // The Path to your Content Collection folder
    }), 
    schema: z.object({
        // List of Content Collection Fields
        url: z.string().url(), // Validates String is an URL
        title: z.string().optional(),
        status: z.enum([
            "inbox",
            "published",
            "archived",
        ]).default("inbox"),
    })
})

export const collections = {
    essays,
    links
}