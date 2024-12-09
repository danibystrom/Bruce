"use server";
import { revalidatePath } from "next/cache";
import { db } from "../../../../prisma/db";

export async function EditProduct(data: any, productId: string) {
  try {
    const selectedCategoryIds = data.categories;

    const parsedPrice = parseFloat(data.price);
    if (isNaN(parsedPrice)) {
      throw new Error("Invalid price value.");
    }

    const updateProduct = await db.product.update({
      where: { id: Number(productId) },
      data: {
        ...data,
        price: parsedPrice,
        categories: {
          set: selectedCategoryIds.map((id: string) => ({ id: Number(id) })),
        },
      },
    });

    revalidatePath("/admin");
    return updateProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
