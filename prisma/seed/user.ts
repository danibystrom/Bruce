import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function seedUsers(db: PrismaClient) {
  const hashedPassword = await bcrypt.hash("bruce", 10);

  const user1 = await db.user.create({
    data: {
      email: "danielapatriciabystrom@gmail.com",
      password: hashedPassword,
    },
  });

  console.log({ user1 });
}
