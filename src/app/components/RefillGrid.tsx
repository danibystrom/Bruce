"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProductsByCategory } from "../server-actions/products/handler";
import Toast from "./Toast";

export default function RefillGrid() {
  const [refills, setRefills] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByCategory("Refills");
        setRefills(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (product: Product) => {
    addToCart(product, null);
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
            md: "repeat(4, 1fr)",
          },
          gap: "0.3rem",
          overflowY: "auto",
          paddingBottom: "1rem",
        }}
      >
        {refills.map((product) => (
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
            <Link href={`/product/${product.slug}`}>
              <CardMedia
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  height: "350px",
                  objectFit: "cover",
                  backgroundColor: "#f5f5f5",
                }}
              />
            </Link>

            <CardContent sx={{ padding: "0.5rem", textAlign: "left" }}>
              <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{}}>
                EUR {product.price}€
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  marginTop: "0.5rem",
                  color: "#000",
                  width: "50%",
                  borderRadius: 20,
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "5px 5px #F2F961",
                    transition: "all 0.3s ease",
                    backgroundColor: "#fff",
                  },
                  "&:active": {
                    backgroundColor: "#F2F961",
                    boxShadow: "none",
                    outline: "none",
                  },
                }}
                onClick={() => handleClick(product)}
              >
                <Typography variant="body2" sx={{}}>
                  ADD TO CART
                </Typography>
              </Button>
            </CardContent>
          </Card>
        ))}
        <Toast open={open} onClose={handleClose} product={selectedProduct} />
      </Box>
    </Box>
  );
}
