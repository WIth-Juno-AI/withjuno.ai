import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const news = defineCollection({
  // Load Markdown and MDX files in the `src/content/news/` directory.
  loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    authorImage: z.string().optional(),
    authorName: z.string().optional(),
  }),
});

export const collections = { news };
