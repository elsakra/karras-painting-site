import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    title: z.string().optional(), // e.g., "Partner", "Managing Director"
    image: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    linkedin: z.string().optional(),
    bio: z.string().optional(),
    specializations: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(), // Icon name for display
    category: z.enum(['advisory', 'tax', 'audit', 'digital']).optional(),
    features: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
    industries: z.array(z.string()).optional(), // Related industries
    order: z.number().default(0),
  }),
});

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    services: z.array(z.string()).optional(), // Related service slugs
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
    authorRole: z.string().optional(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    category: z.enum(['tax-policy', 'sustainability', 'ai', 'innovation', 'industry', 'thought-leadership']).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    readTime: z.string().optional(), // e.g., "5 min read"
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    state: z.string().optional(),
    country: z.string().default('USA'),
    address: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    isHeadquarters: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    industry: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  team,
  services,
  industries,
  insights,
  locations,
  testimonials,
  faq,
};
