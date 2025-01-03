"use client";
import Loading from "@/app/components/LoadingAnimation";
import SuggestedProducts from "@/app/components/SuggestedProducts";
import SuggestedRefills from "@/app/components/SuggestedRefills";
import SustainabilitySection from "@/app/components/SustainabilitySection";
import Toast from "@/app/components/Toast";
import { useCart } from "@/app/context/CartContext";
import { getProductBySlug } from "@/app/server-actions/products/handler";
import { Box, Button, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Category, Product } from "@prisma/client";
import { useEffect, useState } from "react";

type PageProps = { params: { slug: string } };

export default function ProductPage({ params }: PageProps) {
  type ProductWithCategories = Product & { categories: Category[] };
  const [product, setProduct] = useState<ProductWithCategories | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { slug } = params;
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductBySlug(slug);
        if (!fetchedProduct) {
          setError(`The product with id "${slug}" does not exist.`);
          return;
        }
        setTimeout(() => {
          setProduct(fetchedProduct);
          setSelectedImage(fetchedProduct.image);
        }, 1000);
      } catch (err) {
        setError("An error occurred while fetching the product.");
        console.error(err);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleClick = (product: Product & { categories: Category[] }) => {
    const isRefill = product.categories.some(
      (category) => category.name.toLowerCase() === "refills"
    );

    if (!isRefill && !selectedColor) {
      alert("Please select a case color.");
      return;
    }
    addToCart(product, selectedColor || null);
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const getBackgroundImage = (color: string, subColor: string) => {
    return `conic-gradient(from 315deg, ${color} 0deg, ${color} 180deg, ${subColor} 180deg, ${subColor} 360deg)`;
  };

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
    return <Loading />;
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
                src={selectedImage || ""}
                alt={`Product Image ${product.name}`}
                sx={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                  backgroundColor: "#FAFAFB",
                }}
              />
            </Box>

            {/* Smaller Images */}
            <Box
              sx={{
                display: "flex",
                overflowX: "hidden",
                width: "100%",
                paddingBottom: "1rem",
              }}
            >
              <CardMedia
                component="img"
                src={product.image}
                alt={`Primary Image ${product.name}`}
                onClick={() => handleImageClick(product.image)}
                sx={{
                  width: "calc(20%)",

                  height: "auto",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              {product.caseImages.map((caseImage, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  src={caseImage}
                  alt={`Case Image ${index}`}
                  onClick={() => handleImageClick(caseImage)}
                  sx={{
                    width: "calc(20%)",
                    height: "auto",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              ))}
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
              padding: { sm: "0px", md: "40px" },
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
                <Typography variant="h2">{product.name}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    mb: "1rem",
                  }}
                >
                  {product.tabletQuantity} pills, {product.alcohol}% ABV
                  (alcohol by volume)
                </Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                  }}
                >
                  Ingredients: {product.ingredients}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              ></Box>
              <Box sx={{ marginY: "1rem" }}>
                {product.caseColors &&
                  product.caseColors.length > 0 &&
                  !product.categories.some(
                    (category) => category.name.toLowerCase() === "refills"
                  ) && (
                    <>
                      <Typography variant="body2">
                        Choose your case color:
                      </Typography>
                      <Box
                        sx={{ display: "flex", gap: "10px", marginTop: "10px" }}
                      >
                        {product.caseColors.map((color, index) => {
                          const subColor = product.subColors[index] || color;
                          return (
                            <Box
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              sx={{
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                position: "relative",
                                backgroundImage: getBackgroundImage(
                                  color,
                                  subColor
                                ),
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                border:
                                  selectedColor === color
                                    ? "1px solid black"
                                    : "1px solid gray",
                              }}
                            />
                          );
                        })}
                      </Box>
                    </>
                  )}
              </Box>

              <Box>
                <Button
                  disableRipple
                  variant="contained"
                  sx={{
                    backgroundColor: "#F2F961",
                    color: "#000",
                    borderRadius: "20px",
                    boxShadow: "none",
                    width: "100%",
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
                  onClick={() => handleClick(product)}
                >
                  ADD TO BAG - EUR {product.price}€
                </Button>
                <Toast
                  open={open}
                  onClose={handleClose}
                  product={selectedProduct}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Suggested products section */}
      <Box sx={{ backgroundColor: "#fff", marginY: "4rem" }}>
        {product.categories.some(
          (category: { name: string }) =>
            category.name.toLowerCase() === "cocktails"
        ) ? (
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
