import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions);
// export const GET = handler;
// export const POST = handler;
export { handler as GET, handler as POST };
