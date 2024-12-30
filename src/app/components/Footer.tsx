"use client";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#000000",
            }}
          >
            JUST
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#000000",
            }}
          >
            ADD
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#000000",
            }}
          >
            WATER
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Link href="/" sx={{ textDecoration: "none", underline: "none" }}>
            <Typography variant="h6" sx={{ color: "#000000" }}>
              Home
            </Typography>
          </Link>
          <Link
            href="/about"
            sx={{ textDecoration: "none", underline: "none" }}
          >
            <Typography variant="h6" sx={{ color: "#000000" }}>
              About Us
            </Typography>
          </Link>
          <Link
            href="/sustainability"
            sx={{ textDecoration: "none", underline: "none" }}
          >
            <Typography variant="h6" sx={{ color: "#000000" }}>
              Sustainability
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/products"
            sx={{ textDecoration: "none", underline: "none" }}
          >
            <Typography variant="h6" sx={{ color: "#000000" }}>
              Products
            </Typography>
          </Link>
          <Link
            href="/refill"
            sx={{ textDecoration: "none", underline: "none" }}
          >
            <Typography variant="h6" sx={{ color: "#000000" }}>
              Refills
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
