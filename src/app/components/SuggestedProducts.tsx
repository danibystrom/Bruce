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

export default function SuggestedProducts() {
  const [drinks, setDrinks] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);
  const { addToCart } = useCart();

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

  const handleClick = (product: Product) => {
    addToCart(product);
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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

        <Box sx={{ padding: "1rem" }}>
          <IconButton
            onClick={() => handleProductScroll(-300)}
            disableRipple
            disableFocusRipple
            sx={{
              color: "#000000",
            }}
          >
            <NavigateBeforeSharpIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
          <IconButton
            onClick={() => handleProductScroll(300)}
            disableRipple
            disableFocusRipple
            sx={{
              color: "#000000",
            }}
          >
            <NavigateNextSharpIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Box>
      </Box>

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
                  onClick={() => handleClick(drink)}
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
        <Link href={`/products`} passHref>
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
            Head to Products
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
