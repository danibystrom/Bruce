"use client";
import SuggestedProducts from "@/app/components/SuggestedProducts";
import SuggestedRefills from "@/app/components/SuggestedRefills";
import SustainabilitySection from "@/app/components/SustainabilitySection";
import { getProductBySlug } from "@/app/server-actions/products/handler";
import { Box, Button, CardMedia, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type PageProps = { params: { slug: string } };

export default function ProductPage({ params }: PageProps) {
  const { slug } = params;
  // const slug = decodeURIComponent(urlslug);
  const [product, setProduct] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductBySlug(slug);
        if (!fetchedProduct) {
          setError(`The product with id "${slug}" does not exist.`);
          return;
        }
        setProduct(fetchedProduct);
      } catch (err) {
        setError("An error occurred while fetching the product.");
        console.error(err);
      }
    };

    fetchProduct();
  }, [slug]);

  // const products =
  //   product.find((products) => products.slug.toString() === slug) || null;

  if (error) {
    return (
      <div>
        <Typography variant="h2">{`The product does unfortunately not exist...`}</Typography>
        <Typography variant="body1">
          {`Go back to `}
          <Link href="/" variant="body1">
            start page
          </Link>
          {" to continue shopping"}
        </Typography>
      </div>
    );
  }

  if (!product) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  return (
    <>
      <Box sx={{ width: "98%", position: "relative", margin: "auto" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%",
            }}
          >
            <Box
              key={product.id}
              sx={{
                height: {
                  xs: "calc(40dvh)",
                  sm: "calc(50dvh)",
                  md: "calc(90dvh)",
                },
              }}
            >
              <CardMedia
                component="img"
                src={product.image}
                alt={`Product Image ${product.name}`}
                sx={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  backgroundColor: "#FAFAFB",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              position: "relative",
              background: "white",
              alignItems: "flex-start",
              height: "auto",
              zIndex: 1,
              padding: "20px",
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginY: { xs: "2rem", sm: "4rem", md: "5rem" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <Typography sx={{ fontSize: "1.25rem", fontWeight: "700" }}>
                  {product.name}
                </Typography>
                <Typography sx={{ fontSize: "0.6rem", fontWeight: "200" }}>
                  {product.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    fontWeight: "200",
                    fontStyle: "italic",
                  }}
                >
                  {product.ingredients}
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "200" }}>
                  EUR {product.price}€
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              ></Box>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: 0,
                    boxShadow: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  ADD TO BAG
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Suggested products section */}
      <Box sx={{ backgroundColor: "#fff", marginY: "4rem" }}>
        {product.category === "cocktail" ? (
          <SuggestedRefills />
        ) : (
          <SuggestedProducts />
        )}
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <SustainabilitySection />
      </Box>
    </>
  );
}
