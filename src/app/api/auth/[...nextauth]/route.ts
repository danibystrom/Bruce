import bcrypt from "bcryptjs";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../../../prisma/db";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize called with:", credentials);

        if (!credentials) {
          console.error("No credentials provided");
          throw new Error("Credentials not provided");
        }

        const { email, password } = credentials;
        const user = await db.user.findUnique({
          where: { email },
        });
        console.log("User from database:", user);

        if (!user) {
          console.error("User not found");
          throw new Error("Invalid credentials");
        }

        const isValid = await bcrypt.compare(password, user.password);
        console.log("Password validation result:", isValid);

        if (!isValid) {
          console.error("Invalid password");
          throw new Error("Invalid credentials");
        }

        console.log("Authorization successful for user:", user);
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
