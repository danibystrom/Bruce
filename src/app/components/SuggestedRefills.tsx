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
import { useRef } from "react";
import { refills } from "../data/refills";

export default function SuggestedRefills() {
  const refillRef = useRef<HTMLDivElement | null>(null);

  const handleRefillScroll = (scrollOffset: number) => {
    if (refillRef.current) {
      refillRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

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
        Suggested for you
      </Typography>

      <Box
        ref={refillRef}
        sx={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "0 1rem",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {refills.map((refill) => (
          <Card
            key={refill.id}
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
                src={refill.image}
                alt={refill.name}
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
                  {refill.name} <SpaceBar sx={{ color: "transparent" }} /> EUR{" "}
                  {refill.price}€
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
        onClick={() => handleRefillScroll(-300)}
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
        onClick={() => handleRefillScroll(300)}
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
          marginTop: "3rem",
          marginBottom: "6rem",
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
          Bruce&apos;s Refill Station
        </Button>
      </Box>
    </Box>
  );
}
