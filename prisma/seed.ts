import { PrismaClient } from "@prisma/client";
import console from "console";
import { seedProducts } from "./seed/product";

const db = new PrismaClient();

async function main() {
  await seedProducts(db);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
