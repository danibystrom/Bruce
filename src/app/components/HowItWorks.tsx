"use client";
import { Box, Button, Typography } from "@mui/material";

export default function HowItWorks() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "98%",
        height: "70vh",
        margin: "auto",
        marginY: "2rem",
        borderRadius: 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/mojito.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "60%",
          top: "0",
          left: "0",
          padding: "1rem",
          marginTop: "1rem",
          color: "#000",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          JUST LIKE VITAMINS, BUT BETTER
        </Typography>
        <Typography variant="body1" sx={{}}>
          Just like vitamins, but better. Our drinks are packed with vitamins
          and minerals to help you feel your best.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#F2F961",
            color: "#000",
            borderRadius: "20px",
            boxShadow: "none",
            marginTop: "1rem",
            width: "210px",
            transition: "all 0.3s ease",

            "&:hover": {
              boxShadow: "none",
              transition: "all 0.3s ease",
              backgroundColor: "#EBF613",
            },
          }}
        >
          ADD TO BAG
        </Button>
      </Box>
    </Box>
  );
}
