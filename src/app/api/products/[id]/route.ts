"use server";
import { db } from "../../../../../prisma/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = await db.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
