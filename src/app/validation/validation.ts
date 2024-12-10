import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  productId: z.number(),
  name: z.string().min(1),
  description: z.string().min(1),
  ingredients: z.string().min(1),
  image: z.string().url().min(1),
  slug: z.string().min(1),
  price: z.number().positive(),
  isBestSeller: z.boolean(),
});

export type ProductFormData = z.infer<typeof ProductSchema>;
