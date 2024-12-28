import { Product } from "@prisma/client";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string | null;
}

export type PageProps = Readonly<{ params: { slug: string } }>;
