"use client";
import { Box, Typography } from "@mui/material";

export default function HeaderImage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "98%",
        height: "90vh",
        margin: "auto",
        borderRadius: 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/hero-img.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "8rem",
              sm: "20rem",
              md: "23rem",
              lg: "30rem",
              xl: "35rem",
            },
            fontWeight: 700,
            opacity: 0.7,
          }}
        >
          BRUCE
        </Typography>
      </Box>
    </Box>
  );
}
