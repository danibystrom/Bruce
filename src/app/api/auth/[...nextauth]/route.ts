import NextAuth from "next-auth";
import { authOptions } from "../../../../../auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import { PrismaAdapter } from "@auth/prisma-adapter";
// import bcrypt from "bcrypt";
// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { db } from "../../../../../prisma/db";

// // AuthOptions-konfiguration
// const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(db), // Kopplar NextAuth till Prisma-databasen via PrismaAdapter
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "you@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error("Credentials not provided");
//         }

//         const { email, password } = credentials;

//         // Hämta användaren från databasen
//         const user = await db.user.findUnique({
//           where: { email },
//         });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         // Verifiera lösenordet
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//           throw new Error("Invalid credentials");
//         }

//         // Returnera användarens data
//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//         };
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt", // Använder JWT för sessionhantering
//   },
//   secret: process.env.NEXTAUTH_SECRET, // Använd en säker hemlighet från .env-filen
//   callbacks: {
//     // Callback för att inkludera ytterligare data i JWT och session
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         // token.isAdmin = user.isAdmin;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id as string;
//         // session.user.isAdmin = token.isAdmin;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin", // Ange anpassad inloggningssida (om du har en sådan)
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
