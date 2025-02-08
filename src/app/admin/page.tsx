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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmDelete from "../components/ConfirmDelete";
import Loading from "../components/LoadingAnimation";
import { DeleteProduct } from "../server-actions/admin/handler";
import { getAllProducts } from "../server-actions/products/handler";

export default function AdminPage() {
  const { status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(
        `/api/auth/signin?callbackUrl=${encodeURIComponent(
          window.location.pathname
        )}`
      );
    }
  }, [status, router]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setTimeout(() => setLoading(false), 1500);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return;

    try {
      await DeleteProduct(selectedProduct.id.toString());
      setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      setModalOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box sx={{ padding: "2rem", mt: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.5rem" },
          }}
        >
          Bruce Likes to Handle Things
        </Typography>
        <Link href={`/admin/add-product`}>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #000",
              marginTop: "0.5rem",
              color: "#000",
              width: { xs: "100px", sm: "100px", md: "150px" },
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
            <Typography
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" } }}
            >
              Add +
            </Typography>
          </Button>
        </Link>
      </Box>

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
                src={product.image || "/pornstar-martini.jpg"}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "1rem",
                }}
              />
              <CardContent sx={{ padding: 0, height: "80px" }}>
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
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#F2F961",
                        color: "#000",
                        borderRadius: "20px",
                        boxShadow: "none",
                        width: "100%",
                        transition: "all 0.3s ease",

                        "&:hover": {
                          boxShadow: "5px 5px #E1EC09",
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
                      Edit
                    </Button>
                  </Link>
                </Box>
                <Button
                  disableRipple
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    color: "#000",
                    width: "48%",
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
                  onClick={() => handleDeleteClick(product)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ConfirmDelete
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        productName={selectedProduct?.name || ""}
      />
    </Box>
  );
}
