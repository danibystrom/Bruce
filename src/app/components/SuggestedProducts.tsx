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
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getProductsByCategory } from "../server-actions/products/handler";

export default function SuggestedProducts() {
  const [drinks, setDrinks] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const productRef = useRef<HTMLDivElement | null>(null);

  const handleProductScroll = (scrollOffset: number) => {
    if (productRef.current) {
      productRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByCategory("Cocktails");
        setDrinks(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

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
        ref={productRef}
        sx={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "0 1rem",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {drinks.map((drink) => (
          <Card
            key={drink.id}
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
                    maxHeight: "80%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    backgroundColor: "#FAFAFB",
                  }}
                />
              </Link>
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

                <Link
                  key={drink.id}
                  href={`/product/${drink.slug}`}
                  passHref
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    Shop
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <IconButton
        color="primary"
        onClick={() => handleProductScroll(-300)}
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
        onClick={() => handleProductScroll(300)}
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
        <Link href={`/products`} passHref>
          <Button
            variant="contained"
            color="primary"
            disableRipple
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
            Head to Products
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
