"use client";
import { getProductById } from "@/app/server-actions/products/handler";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditProductForm from "./components/EditProductForm";

type Props = { params: { id: string } };

export default function EditProductPage({ params }: Props) {
  const [fetchedProduct, setFetchedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(Number(productId));
        setFetchedProduct(fetchedProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        paddingBottom: "20x",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          marginBottom: "1rem",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Edit Product with id: {productId}
      </Typography>
      <Divider
        sx={{
          width: "70%",
          borderColor: "#000",
          marginBottom: "1rem",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          width: "80%",
          maxWidth: "1000px",
        }}
      >
        <Box sx={{ flex: 1, paddingRight: { md: "20px" } }}>
          <EditProductForm product={fetchedProduct} />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            margin: { xs: "20px 0", md: "0 20px" },
            borderColor: "#000",
          }}
        />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={fetchedProduct?.image || ""}
            alt="Product"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "80%",
          maxWidth: "1000px",
          marginTop: "20px",
          gap: "1rem",
        }}
      >
        <Link href="" style={{ textDecoration: "none", width: "150px" }}>
          <Button
            disableRipple
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "20px",
              color: "#000",
              width: "100%",
              marginRight: "0.8rem",
              backgroundColor: "transparent",
              borderColor: "#000",
              "&:hover": { backgroundColor: "#000", color: "#fff" },
            }}
          >
            Save changes
          </Button>
        </Link>
        <Link href="/admin" style={{ textDecoration: "none", width: "150px" }}>
          <Button
            disableRipple
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#000",
              width: "100%",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "none",
                borderColor: "#000",
              },
            }}
          >
            Cancel
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
