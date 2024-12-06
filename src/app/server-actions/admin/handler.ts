"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

    return updateProduct;
    console.log("Product updated:", updateProduct);
    revalidatePath("/admin");
    redirect("/admin");
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
