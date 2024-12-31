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
  categories: z.array(z.string()),
  alcohol: z.number().positive(),
});

export const CheckoutFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
});

export type ProductFormData = z.infer<typeof ProductSchema>;
export type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;
