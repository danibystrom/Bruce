"use server";
import { db } from "../../../../prisma/db";

export async function GET() {
  const categories = await db.category.findMany();
  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}
