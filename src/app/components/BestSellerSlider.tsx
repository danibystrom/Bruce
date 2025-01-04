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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#000000",
            padding: "1rem",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          SHOP BEST SELLERS
        </Typography>

        <Box sx={{ padding: "1rem" }}>
          <IconButton
            color="primary"
            onClick={() => handleBestSellerScroll(-300)}
            disableRipple
            disableFocusRipple
            sx={{
              background: "none",
              border: "none",
              boxShadow: "none",
              padding: 0,
              "&:hover": { background: "none" },
            }}
            aria-label="scroll left"
          >
            <NavigateBeforeSharpIcon
              sx={{ color: "#000000", fontSize: { xs: "1.5rem", sm: "2rem" } }}
            />
          </IconButton>

          <IconButton
            color="primary"
            onClick={() => handleBestSellerScroll(300)}
            disableRipple
            disableFocusRipple
            sx={{
              background: "none",
              border: "none",
              boxShadow: "none",
              padding: 0,
              "&:hover": { background: "none" },
            }}
            aria-label="scroll right"
          >
            <NavigateNextSharpIcon
              sx={{ color: "#000000", fontSize: { xs: "1.5rem", sm: "2rem" } }}
            />
          </IconButton>
        </Box>
      </Box>

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
                EUR {product.price}
              </Typography>
              <Button
                disableRipple
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
