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
import { useState } from "react";
import { refills } from "../data/refills";

export default function RefillGrid() {
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
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.3rem",
          overflowY: "auto",
          paddingBottom: "1rem",
        }}
      >
        {refills.map((refill) => (
          <Card
            key={refill.id}
            onMouseEnter={() => setHoveredCard(refill.id)}
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
              <CardMedia
                component="img"
                src={refill.image}
                alt={refill.name}
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
                  ...(hoveredCard === refill.id && {
                    transform: "scale(0.80)",
                  }),
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  padding: "0.5rem",
                  ...(hoveredCard === refill.id && {
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
                  {refill.name}
                </Typography>
                <Typography variant="body2">EUR {refill.price}€</Typography>
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
                padding: "0.2rem",
                transform: "translateY(100%)",
                transition: "transform 0.3s ease",
                ...(hoveredCard === refill.id && {
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
                  width: "48%",
                }}
              >
                VIEW MORE
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
