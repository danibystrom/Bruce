"use client";
import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EditProductForm from "./components/EditProductForm";

type Props = { params: { id: string } };

export default function EditProductPage(props: Props) {
  const [product, setProduct] = useState(null);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productRes = await fetch(`/api/products/${props.params.id}`);
      if (productRes.ok) {
        const productData = await productRes.json();
        setProduct(productData);
      }

      // const categoriesRes = await fetch("/api/categories");
      // if (categoriesRes.ok) {
      //   const categoriesData = await categoriesRes.json();
      //   setCategories(categoriesData);
      // }
    };
    fetchData();
  }, [props.params.id]);

  if (!product) {
    return <Typography variant="body1">Loading...</Typography>;
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
        Edit Product with id: {props.params.id}
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
          <EditProductForm product={product} />
        </Box>
      </Box>
    </Box>
  );
}
