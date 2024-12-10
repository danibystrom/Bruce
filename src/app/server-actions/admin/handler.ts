"use server";
import { revalidatePath } from "next/cache";
import { db } from "../../../../prisma/db";

interface ProductData {
  name: string;
  description: string;
  price: number;
  ingredients: string;
  image: string;
}

export async function EditProduct(data: ProductData, productId: string) {
  try {
    const parsedPrice = parseFloat(data.price.toString());
    if (isNaN(parsedPrice)) {
      throw new Error("Invalid price value.");
    }

    const updateProduct = await db.product.update({
      where: { id: Number(productId) },
      data: {
        ...data,
        price: parsedPrice,
      },
    });

    revalidatePath("/admin");
    return updateProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
