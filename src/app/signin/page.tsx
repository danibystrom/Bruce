"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      alert("Inloggning misslyckades! Fel: " + result.error);
    } else if (result?.ok) {
      console.log("Login successful:", result);
      window.location.href = result.url || "/";
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h1>Sign In</h1>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
