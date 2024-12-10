"use server";
import { revalidatePath } from "next/cache";
import { db } from "../../../../prisma/db";

export async function EditProduct(data: any, productId: string) {
  try {
    const parsedPrice = parseFloat(data.price);
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
