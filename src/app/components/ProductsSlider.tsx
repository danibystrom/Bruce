"use client";
import { SpaceBar } from "@mui/icons-material";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { drinks } from "../data/drinks";

export default function ProductsSlider() {
  const bestSellerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleBestSellerScroll = (scrollOffset: number) => {
    if (bestSellerRef.current) {
      bestSellerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const bestSellerDrinks = drinks.filter((drink) => drink.isBestSeller);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#000000",
          padding: "1rem",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        One Big Bruce Family
      </Typography>

      <Box
        ref={bestSellerRef}
        sx={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "0 1rem",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {bestSellerDrinks.map((drink) => (
          <Card
            key={drink.id}
            onMouseEnter={() => setHoveredCard(drink.id)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              width: 650,
              flexShrink: 0,
              height: 700,
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              overflow: "hidden",
              margin: 0,
              position: "relative",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "3rem",
                paddingBottom: "5rem",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "#FAFAFB",
              }}
            >
              <CardMedia
                component="img"
                src={drink.image}
                alt={drink.name}
                loading="lazy"
                sx={{
                  maxHeight: "80%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  backgroundColor: "#FAFAFB",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "94%",
                  padding: "1rem",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxsizing: "border-box",
                  color: "#ffffff",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#000",
                    textTransform: "uppercase",
                  }}
                >
                  {drink.name} <SpaceBar sx={{ color: "transparent" }} /> EUR{" "}
                  {drink.price}€
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#000",
                  }}
                >
                  Shop
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <IconButton
        color="primary"
        onClick={() => handleBestSellerScroll(-300)}
        disableRipple
        disableFocusRipple
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          boxShadow: "none",
          padding: 0,
          "&:hover": {
            background: "none",
          },
        }}
      >
        <NavigateBeforeSharpIcon
          sx={{ color: "#000000", background: "none" }}
        />
      </IconButton>

      <IconButton
        color="primary"
        onClick={() => handleBestSellerScroll(300)}
        disableRipple
        disableFocusRipple
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          boxShadow: "none",
          padding: 0,
          "&:hover": {
            background: "none",
          },
        }}
      >
        <NavigateNextSharpIcon sx={{ color: "#000000", background: "none" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: "3rem",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#000",
            borderRadius: 0,
            boxShadow: "none",
            width: "auto",
            paddingX: "2rem",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          MEET THE BRUCE CREW
        </Button>
      </Box>
    </Box>
  );
}
