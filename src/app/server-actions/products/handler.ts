"use server";

import { db } from "../../../../prisma/db";

export async function getBestSellers() {
  const bestSellers = await db.product.findMany({
    where: {
      isBestSeller: true,
    },
    include: {
      categories: true,
    },
    orderBy: { productId: "asc" },
  });
  return bestSellers;
}

export async function getProductBySlug(slug: string) {
  const product = await db.product.findUnique({
    where: { slug },
  });
  return product;
}
