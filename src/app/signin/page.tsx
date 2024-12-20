"use client";

import {
  Box,
  Button,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "../components/LoadingAnimation";
import Toast from "../signin/components/Toast";
export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession();

  useEffect(() => {
    if (session !== undefined) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [session]);

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
        setToastMessage("You Did It. Bruce is Proud!");
        setToastOpen(true);
        setIsRegistering(false);
      } else {
        const error = await response.json();
        setToastMessage(error.message || "Something went wrong");
        setToastOpen(true);
      }
    } catch (error) {
      console.error("Registration failed", error);
      setToastMessage("Something went wrong, try again.");
      setToastOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      setToastMessage("You have been logged out. Come back soon!");
      setToastOpen(true);
    } catch (error) {
      console.error("Logout failed", error);
      setToastMessage("Something went wrong, try again.");
      setToastOpen(true);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (session) {
    return (
      <Box
        sx={{
          maxWidth: "400px",
          margin: "auto",
          marginY: "5rem",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={2} sx={{ textTransform: "uppercase" }}>
          You’re already Bruce’d!
        </Typography>
        <Typography variant="body1" mb={2}>
          "Bruce knows you’re in, but if you need to take a break, just hit the
          button below!"
        </Typography>

        <Button
          disableRipple
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #000",
            marginTop: "0.5rem",
            color: "#000",
            borderRadius: 20,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "5px 5px #F2F961",
              transition: "all 0.3s ease",
              backgroundColor: "#fff",
            },
          }}
          onClick={handleLogout}
        >
          Log Out
        </Button>

        <Toast
          open={toastOpen}
          message={toastMessage}
          onClose={() => setToastOpen(false)}
          key={toastMessage}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        marginY: "5rem",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" mb={2} sx={{ textTransform: "uppercase" }}>
        {isRegistering
          ? "Bruce Says: Time to Join the Fun!"
          : "Get in, Get Bruce’d!"}
      </Typography>
      <Typography variant="body1" mb={2}>
        {isRegistering
          ? "No Bruce? No problem. Sign up now and let’s make your world a whole lot more refreshing. Bruce believes in you"
          : "Bruce knows you’re ready. Log in to unlock the full Bruce experience, where the drinks are always better and the fun never stops."}
      </Typography>

      {isRegistering && (
        <TextField
          fullWidth
          label="Name"
          type="text"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
      )}

      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />

      <Button
        disableRipple
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #000",
          marginTop: "0.5rem",
          color: "#000",
          borderRadius: 20,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "5px 5px #F2F961",
            transition: "all 0.3s ease",
            backgroundColor: "#fff",
          },
          "&:active": {
            backgroundColor: "#fff",
            boxShadow: "none",
            outline: "none",
          },
        }}
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
      <Toast
        open={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
        key={toastMessage}
      />
    </Box>
  );
}
