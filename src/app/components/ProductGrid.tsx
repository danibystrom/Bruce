"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { drinks } from "../data/drinks";

export default function ProductGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "1rem",
        position: "relative",
        padding: "0 1rem",
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
        SHOP ALL
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "0.3rem",
          overflowY: "auto",
          paddingBottom: "1rem",
        }}
      >
        {drinks.map((drink) => (
          <Card
            key={drink.id}
            onMouseEnter={() => setHoveredCard(drink.id)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              position: "relative",
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              overflow: "hidden",
              height: "100%",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <CardActionArea
              disableRipple
              sx={{
                cursor: "default",
                backgroundColor: "#FAFAFB",
              }}
            >
              <Link
                key={drink.id}
                href={`/product/${drink.slug}`}
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                <CardMedia
                  component="img"
                  src={drink.image}
                  alt={drink.name}
                  loading="lazy"
                  sx={{
                    height: "auto",
                    maxHeight: "250px",
                    width: "auto",
                    maxWidth: "80%",
                    margin: "0 auto",
                    objectFit: "contain",
                    marginY: "1rem",
                    display: "block",
                    transition: "transform 0.3s ease",
                    backgroundColor: "#FAFAFB",
                    ...(hoveredCard === drink.id && {
                      transform: "scale(0.80)",
                    }),
                  }}
                />
              </Link>
              <CardContent
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  padding: "0.5rem",
                  ...(hoveredCard === drink.id && {
                    transform: "translateY(-50px)",
                  }),
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "uppercase",
                    marginTop: "0.5rem",
                    marginBottom: 0,
                  }}
                >
                  {drink.name}
                </Typography>
                <Typography variant="body2">EUR {drink.price}€</Typography>
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
                display: {
                  xs: "flex",
                  md: "none",
                },
                "@media (min-width: 900px) and (max-width: 1024px)": {
                  display: "flex", // Lägg till i tema
                },
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0.2rem",
                zIndex: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 0,
                  boxShadow: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                ADD TO BAG
              </Button>
            </Box>

            <Box
              className="hover-overlay-desktop"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#FAFAFB",
                color: "#fff",
                display: {
                  xs: "none", 
                  md: "flex", 
                },
                "@media (min-width: 900px) and (max-width: 1024px)": {
                  display: "none", // Lägg till i tema
                },
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0.2rem",
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
                  width: "48%",
                  boxSizing: "border-box",
                }}
              >
                ADD TO BAG
              </Button>
              <Link
                key={drink.id}
                href={`/product/${drink.slug}`}
                passHref
                style={{
                  textDecoration: "none",
                  width: "48%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: 0,
                    boxShadow: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  VIEW MORE
                </Button>
              </Link>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
