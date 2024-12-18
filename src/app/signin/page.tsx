import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "../auth";
import { User } from "../user";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>Sign In Page</h1>
      <LoginButton />
      <LogoutButton />
      <h2>Server Call</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call</h2>
      <User />
    </>
  );
}
