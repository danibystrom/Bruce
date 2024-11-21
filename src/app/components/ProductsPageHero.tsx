"use client";
import { Box, Typography } from "@mui/material";

export default function HowItWorks() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "98%",
        height: "70vh",
        margin: "auto",
        borderRadius: 0,
        overflow: "hidden",
        display: "flex", // Använd Flexbox för centrering
        justifyContent: "center", // Horisontellt centrerad
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/products-hero.jpeg")',
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
          color: "#000",
          textAlign: "center",
          maxWidth: "80%", // Ger texten mer breddutrymme
          wordBreak: "break-word",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#fff",
            textTransform: "uppercase",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "6rem",
            },
            lineHeight: 1.2,
            opacity: 0.7,
          }}
        >
          Bruce says: Take a pill
        </Typography>
      </Box>
    </Box>
  );
}
