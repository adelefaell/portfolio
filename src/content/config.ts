import { z, defineCollection } from 'astro:content';
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: 'tags must be unique',
    })
    .optional(),
});

const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

const personalSchema = z.object({
  full_N: z.string().optional(),
  first_N: z.string().optional(),
  last_N: z.string().optional(),
  job: z.string().optional(),
  codepen: z.string().optional(),
  github: z.string().optional(),
  gitlab: z.string().optional(),
  linkedin: z.string().optional(),
  buymeacoffee: z.string().optional(),
  messenger: z.string().optional(),
  whatsapp: z.string().optional(),
  gmail: z.string().optional(),
  cv: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PersonalSchema = z.infer<typeof personalSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const personalCollection = defineCollection({ schema: personalSchema });

export const collections = {
  blog: blogCollection,
  store: storeCollection,
  personal: personalCollection,
};
