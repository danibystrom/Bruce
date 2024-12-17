"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function SustainabilitySection() {
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
          backgroundImage: 'url("/couple-drinking.jpeg")',
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
          bottom: "0",
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
            textTransform: "uppercase",
          }}
        >
          Bruce cares, because Bruce is more than just a fizzy tablet
        </Typography>
        <Typography variant="body1" sx={{}}>
          Bruce cares about the planet, about you, and about the little things
          that make a big difference. That’s why Bruce’s packaging is made from
          100% recycled plastic. No unnecessary waste, no extra guilt. Bruce
          also knows that sustainability is a journey, not a one-time choice.
          With refill packs of tablets, Bruce makes it easy to reuse your bottle
          again and again. Because being kind to the environment shouldn’t be
          hard—it should be second nature. Bruce isn’t just refreshing for you.
          Bruce refreshes the planet too.
        </Typography>
        <Link href="/refill" passHref>
          <Button
            variant="contained"
            color="primary"
            disableRipple
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
            BRUCE LOVES A REFILL
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
