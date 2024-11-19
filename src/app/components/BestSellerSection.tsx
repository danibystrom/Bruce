"use client";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { drinks } from "../data/drinks";

export default function BestSellerSection() {
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
        }}
      >
        SHOP BEST SELLERS
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
              width: 370,
              flexShrink: 0,
              height: "auto",
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
            <CardActionArea // Förstår inte varför jag inte får bort hover-effekten på CardActionArea
              disableRipple
              sx={{
                "&:hover": {
                  background: "none !important",
                },
                "&:active": {
                  background: "none !important",
                },
                cursor: "default",
                backgroundColor: "#FAFAFB",
              }}
            >
              <CardMedia
                component="img"
                src={drink.image}
                alt={drink.name}
                loading="lazy"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  backgroundColor: "#FAFAFB",

                  ...(hoveredCard === drink.id && {
                    transform: "scale(0.85)",
                  }),
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#FAFAFB",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  padding: "1rem",
                  ...(hoveredCard === drink.id && {
                    transform: "translateY(-50px)",
                  }),
                }}
              >
                <Typography variant="h6">{drink.name}</Typography>
                <Typography variant="body1">EUR {drink.price}€</Typography>
              </CardContent>
            </CardActionArea>

            {/* Overlay for buttons */}
            <Box
              className="hover-overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#FAFAFB",
                color: "#fff",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "1rem",
                transform: "translateY(100%)",
                transition: "transform 0.3s ease",
                ...(hoveredCard === drink.id && {
                  transform: "translateY(0)",
                }),
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 0,
                  boxShadow: "none",
                  width: "45%",
                }}
              >
                ADD TO BAG
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 0,
                  boxShadow: "none",
                  width: "45%",
                }}
              >
                VIEW MORE
              </Button>
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
    </Box>
  );
}