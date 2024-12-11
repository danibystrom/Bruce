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

export async function DeleteProduct(productId: string) {
  try {
    const deletedProduct = await db.product.delete({
      where: { id: Number(productId) },
    });

    revalidatePath("/admin");
    return deletedProduct;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
