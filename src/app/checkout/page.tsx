"use client";

import { Box, Button, Divider, Grid, Typography } from "@mui/material";

export default function CheckoutPage() {
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{
            padding: "1rem",
            bgcolor: "#fff",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          {/* Products Column */}
          <Grid item xs={12} md={9}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "100",
                marginBottom: "1rem",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              My cart
            </Typography>
            <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />

            {/* {product.map((item) => (
              <Box
                key={item.id}
                sx={{
                  backgroundColor: "#fff",
                }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        marginBottom: "1rem",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <CardContent sx={{ padding: "0.5rem" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <IconButton aria-label="delete" color="default">
                          <CloseIcon sx={{ fontSize: "1rem" }} />
                        </IconButton>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "0.9rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        EUR{item.price}€
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          "& .MuiIconButton-root": {
                            padding: "6px",
                          },
                        }}
                      >
                        <Select
                          size="small"
                          style={{
                            fontSize: "0.8rem",
                            width: "40%",
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 300,
                                width: "20ch",
                              },
                            },
                          }}
                        >
                          {Array.from(Array(100).keys()).map((number) => (
                            <MenuItem value={number + 1} key={number}>
                              {number + 1}
                            </MenuItem>
                          ))}
                        </Select>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                          <IconButton>
                            <RemoveIcon sx={{ fontSize: "1rem" }} />
                          </IconButton>
                          <IconButton>
                            <AddIcon sx={{ fontSize: "1rem" }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />
              </Box>
            ))} */}
          </Grid>

          {/* Summary Column */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "100",
                marginBottom: "1rem",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Order summary
            </Typography>
            <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />

            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">Subtotal</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">TOTAL €</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">Estimated Delivery</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">EUR 105€</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">Total</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">SHIPPING €</Typography>
                </Grid>
              </Grid>

              <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  borderColor: "#000",
                  color: "#000",
                }}
              >
                Checkout
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#FFC33A",
                  color: "#049CDE",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                PayPal
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
