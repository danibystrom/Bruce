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
import { useCart } from "../context/CartContext";
import { getProductsByCategory } from "../server-actions/products/handler";
import Toast from "./Toast";

export default function SuggestedRefills() {
  const [refills, setRefills] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const refillRef = useRef<HTMLDivElement | null>(null);
  const { addToCart } = useCart();

  const handleRefillScroll = (direction: "left" | "right") => {
    if (refillRef.current) {
      const cardWidth =
        refillRef.current.firstElementChild?.getBoundingClientRect().width ||
        550;
      const scrollOffset = direction === "left" ? -cardWidth : cardWidth;
      refillRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

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
            textTransform: "uppercase",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Suggested for you
        </Typography>

        <Box sx={{ padding: "1rem" }}>
          <IconButton
            onClick={() => handleRefillScroll("left")}
            disableRipple
            disableFocusRipple
            sx={{
              padding: 0,
              color: "#000000",
            }}
            aria-label="Scroll left"
          >
            <NavigateBeforeSharpIcon
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
            />
          </IconButton>
          <IconButton
            onClick={() => handleRefillScroll("right")}
            disableRipple
            disableFocusRipple
            sx={{
              padding: 0,
              color: "#000000",
            }}
            aria-label="Scroll right"
          >
            <NavigateNextSharpIcon
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
            />
          </IconButton>
        </Box>
      </Box>

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
              width: 550,
              flexShrink: 0,
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
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <Link
                key={refill.id}
                href={`/product/${refill.slug}`}
                passHref
                style={{
                  textDecoration: "none",
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
                    objectFit: "cover",
                    backgroundColor: "transparent",
                  }}
                />
              </Link>
              <Box
                sx={{
                  bottom: "0",
                  left: "0",
                  width: "94%",
                  padding: "0.5rem",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxsizing: "border-box",
                  color: "#000",
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

                <Button
                  disableRipple
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#000",
                    boxShadow: "none",
                    border: "none",
                    "&:hover": { fontWeight: 700 },
                  }}
                  onClick={() => handleClick(refill)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "uppercase",
                      "&:hover": { fontWeight: "bold" },
                    }}
                  >
                    Shop
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
        <Toast open={open} onClose={handleClose} product={selectedProduct} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "6rem",
        }}
      >
        <Link href="/refill" passHref>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#F2F961",
              color: "#000",
              borderRadius: "20px",
              boxShadow: "none",
              width: "auto",
              paddingX: "2rem",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "8px 8px #E1EC09",
                transition: "all 0.3s ease",
                backgroundColor: "#F2F961",
              },
              "&:active": {
                backgroundColor: "transparent",
                boxShadow: "none",
                outline: "none",
              },
            }}
          >
            Bruce&apos;s Refill Station
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
