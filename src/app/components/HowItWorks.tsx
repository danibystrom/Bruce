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
          backgroundImage: 'url("/sectionimage2.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "70%",
          top: "0",
          left: "0",
          padding: "1rem",
          marginTop: "1rem",
          color: "#fff",
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
          Just like vitamins, but way more fun. Bruce turns fizzy into the life
          of the party. Say goodbye to boring bottles and hello to a new way of
          kicking off a great evening. Pop, fizz, and let the good times
          roll—Bruce has got your back.
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
          GO TO PRODUCTS
        </Button>
      </Box>
    </Box>
  );
}
