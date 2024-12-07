"use client";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { getAllProducts } from "../server-actions/products/handler";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
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
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "2rem",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Bruce Likes to Handle Things
      </Typography>

      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #000",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "1rem",
                }}
              />
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    fontWeight: "200",
                    fontStyle: "italic",
                    marginBottom: "0.3rem",
                  }}
                >
                  WITH: {product.ingredients}
                </Typography>
                <Typography sx={{ fontSize: "0.7rem", fontWeight: "200" }}>
                  EUR {product.price}€
                </Typography>
              </CardContent>

              <Box sx={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                <Box sx={{ width: "48%" }}>
                  <Link href={`/admin/product/${product.id}`}>
                    <Button
                      disableRipple
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: "20px",
                        width: "100%",
                        color: "#000",
                        backgroundColor: "transparent",
                        borderColor: "#000",
                        "&:hover": { backgroundColor: "#000", color: "#fff" },
                      }}
                    >
                      Edit
                    </Button>
                  </Link>
                </Box>
                <Button
                  disableRipple
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    width: "48%",
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#000",
                      boxShadow: "none",
                      borderColor: "#000",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
