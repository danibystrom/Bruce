"use server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
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
  tabletQuantity?: number;
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
  newProduct: ProductData & { categories: string[] }
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

    console.log("Creating product with data:", newProduct);

    const newProductId = (maxProductId._max.productId || 0) + 1;

    const createdProduct = await db.product.create({
      data: {
        ...newProduct,
        price: parsedPrice,
        productId: newProductId,
        slug: newProduct.name.toLowerCase().replace(/ /g, "-"),
        alcohol: newProduct.alcohol ?? 0,
        tabletQuantity: newProduct.tabletQuantity ?? 0,
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

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || "",
  },
});

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file || file.size === 0) {
      throw new Error("Ingen fil hittades, eller fel på fil");
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileExtension = file.name.split(".").pop();

    const fileName = `${randomUUID()}.${fileExtension}`;

    console.log("Starting upload...");
    console.log("File:", file);
    console.log("Bucket:", process.env.AWS_S3_BUCKET_NAME);

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `uploads/${fileName}`,
      Body: buffer,
      ContentType: file.type,
    });
    console.log("Command:", command);

    await s3Client.send(command);
    console.log("Upload successful!");

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_BUCKET_REGION}.amazonaws.com/uploads/${fileName}`;

    return { success: true, url: fileUrl };
  } catch (error) {
    console.error("Fel vid uppladdning:", error);
    return { success: false, error: "Kunde inte ladda upp filen" };
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const result = await uploadImage(formData);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error while uploading file:", error);
    return NextResponse.json({ error: "Error while uploading file" });
  }
}
