"use server";
import { revalidatePath } from "next/cache";
import { db } from "../../../../prisma/db";

interface ProductData {
  name: string;
  description: string;
  price: number;
  ingredients: string;
  image: string;
  productId: number;
  isBestSeller?: boolean;
  alcohol?: number;
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

export async function AddNewProduct(
  newProduct: ProductData & { categories: string[]; tabletQuantity: number }
) {
  try {
    const parsedPrice = parseFloat(newProduct.price.toString());
    if (isNaN(parsedPrice)) {
      throw new Error("Invalid price value.");
    }

    const maxProductId = await db.product.aggregate({
      _max: {
        productId: true,
      },
    });

    const newProductId = (maxProductId._max.productId || 0) + 1;

    const createdProduct = await db.product.create({
      data: {
        ...newProduct,
        price: parsedPrice,
        productId: newProductId,
        slug: newProduct.name.toLowerCase().replace(/ /g, "-"),
        alcohol: newProduct.alcohol ?? 0,
        tabletQuantity: newProduct.tabletQuantity,
        categories: {
          connect: newProduct.categories.map((categoryId) => ({
            id: categoryId,
          })),
        },
      },
    });

    revalidatePath("/admin");
    return createdProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}
