"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProductsByCategory } from "../server-actions/products/handler";

export default function ProductGrid() {
  const [drinks, setDrinks] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

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
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "0.3rem",
          overflowY: "auto",
          paddingBottom: "1rem",
        }}
      >
        {drinks.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: "400x",
              flexShrink: 0,
              height: "auto",
              boxShadow: "none",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                height: "300px",
                objectFit: "scale-down",
                backgroundColor: "#f5f5f5",
              }}
            />

            <CardContent sx={{ padding: "0.5rem", textAlign: "left" }}>
              <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{}}>
                CHF {product.price}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  marginTop: "0.5rem",
                  color: "#000",
                  width: { xs: "70%", sm: "50%" },
                  borderRadius: 20,
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#000", color: "#fff" },
                }}
                onClick={() => addToCart(product)}
              >
                <Typography variant="body2" sx={{}}>
                  ADD TO CART
                </Typography>
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
