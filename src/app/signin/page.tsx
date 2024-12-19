"use client";

import {
  Box,
  Button,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/", 
      });
      console.log(result);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert("Account created! You can now log in.");
        setIsRegistering(false);
      } else {
        const error = await response.json();
        alert(error.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" mb={2}>
        {isRegistering ? "Register" : "Sign In"}
      </Typography>

      {isRegistering && (
        <TextField
          fullWidth
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
      )}

      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={isRegistering ? handleRegister : handleLogin}
      >
        {isRegistering ? "Register" : "Sign In"}
      </Button>

      <Typography mt={2}>
        {isRegistering ? (
          <>
            Already have an account?{" "}
            <MuiLink
              href="#"
              onClick={() => setIsRegistering(false)}
              underline="hover"
            >
              Sign In
            </MuiLink>
          </>
        ) : (
          <>
            Don&apos;t have an account?{" "}
            <MuiLink
              href="#"
              onClick={() => setIsRegistering(true)}
              underline="hover"
            >
              Register
            </MuiLink>
          </>
        )}
      </Typography>
    </Box>
  );
}
