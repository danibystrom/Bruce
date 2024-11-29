import { Product } from "@prisma/client";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PageProps = Readonly<{ params: { slug: string } }>;
