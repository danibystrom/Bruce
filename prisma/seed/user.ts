import { PrismaClient } from "@prisma/client/scripts/default-index.js";
import bcrypt from "bcrypt";

export async function seedUsers(db: PrismaClient) {
  const password = await bcrypt.hash("test", 12);
  const user = await db.user.upsert({
    where: { email: "bystrom@gmail.com" },
    update: {},
    create: {
      email: "bystrom@gmail.com",
      password: password,
      name: "Test User",
    },
  });
  console.log({ user });
}
