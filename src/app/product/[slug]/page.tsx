"use client";
import SuggestedProducts from "@/app/components/SuggestedProducts";
import SuggestedRefills from "@/app/components/SuggestedRefills";
import SustainabilitySection from "@/app/components/SustainabilitySection";
import { product } from "@/app/data/products";
import { Box, Button, CardMedia, Grid, Link, Typography } from "@mui/material";

type PageProps = { params: { slug: string } };

export default function ProductPage({ params }: PageProps) {
  const { slug: urlslug } = params;
  const slug = decodeURIComponent(urlslug);

  const products =
    product.find((products) => products.slug.toString() === slug) || null;

  if (!products) {
    return (
      <div>
        <Typography variant="h2">{`The product with id ${params.slug} unfortunately does not exist...`}</Typography>
        <Typography variant="body1">
          {`We could not find the product with id "${params.slug}". Go back to `}
          <Link href="/" variant="body1">
            start page
          </Link>
          {" to continue shopping"}
        </Typography>
      </div>
    );
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
              key={products.id}
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
                src={products.image}
                alt={`Product Image ${products.name}`}
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
                  {products.name}
                </Typography>
                <Typography sx={{ fontSize: "0.6rem", fontWeight: "200" }}>
                  {products.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    fontWeight: "200",
                    fontStyle: "italic",
                  }}
                >
                  {products.ingredients}
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "200" }}>
                  EUR {products.price}€
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
        {products.category === "cocktail" ? (
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
