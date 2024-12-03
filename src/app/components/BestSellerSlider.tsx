"use client";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { getBestSellers } from "../server-actions/products/handler";
import Toast from "./Toast";

export default function BestSellerSlider() {
  const bestSellerRef = useRef<HTMLDivElement | null>(null);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const fetchBestSellers = async () => {
    try {
      const data = await getBestSellers();
      setBestSeller(data);
    } catch (error) {
      console.error("Failed to fetch best sellers:", error);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  const handleBestSellerScroll = (scrollOffset: number) => {
    if (bestSellerRef.current) {
      bestSellerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (product: Product) => {
    addToCart(product);
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
        {bestSeller.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: "280px",
              flexShrink: 0,
              boxShadow: "none",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            <Link href={`/product/${product.slug}`} passHref>
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
            </Link>

            <CardContent sx={{ padding: "0.5rem", textAlign: "left" }}>
              <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{}}>
                CHF {product.price}
              </Typography>
              <Button
                onClick={() => handleClick(product)}
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  marginTop: "0.5rem",
                  color: "#000",
                  width: "50%",
                  borderRadius: 20,
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#000", color: "#fff" },
                }}
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
