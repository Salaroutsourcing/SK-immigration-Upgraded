import { defineCollection, z } from 'astro:content';

/**
 * SK Immigration Services — Content Collections
 *
 * HOW TO ADD CONTENT:
 * ─────────────────────────────────────────────
 * Guides → src/content/guides/your-guide-name.md
 * Blog   → src/content/blog/your-post-name.md
 *
 * Each file must include the frontmatter fields defined below.
 * See existing sample files for reference.
 */

// ── Country / Service Guides Collection ─────────────────────────────────────
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    /** Page <title> and <h1> */
    title: z.string(),
    /** Meta description (150–160 chars for SEO) */
    description: z.string().max(200),
    /** Primary destination country, e.g. "Germany" */
    country: z.string(),
    /** Visa / service type, e.g. "Study Visa", "Ausbildung", "Work Permit" */
    visaType: z.string(),
    /** ISO 8601 publish date */
    publishDate: z.coerce.date(),
    /** ISO 8601 last updated date — important for SEO freshness signals */
    updatedDate: z.coerce.date().optional(),
    /** Author key matching src/content/authors/*.json */
    author: z.string().default('sk-team'),
    /** Hero image path (place images in public/assets/) */
    heroImage: z.string().optional(),
    /** Show on homepage "Featured Guides" section */
    featured: z.boolean().default(false),
    /**
     * FAQ pairs for JSON-LD FAQPage schema + in-page accordion.
     * Add as many as needed — 8–15 FAQs is ideal for AI Overview coverage.
     */
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    /** Open Graph image (defaults to heroImage if not set) */
    ogImage: z.string().optional(),
    /** Internal tag/category for filtering */
    tags: z.array(z.string()).default([]),
  }),
});

// ── Blog / Insights Collection ───────────────────────────────────────────────
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('sk-team'),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** FAQs for FAQ schema injection on blog posts too */
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

// ── Authors Collection ───────────────────────────────────────────────────────
const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = { guides, blog, authors };
