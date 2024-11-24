"use client";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  CardContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { product } from "../data/products";

export default function CheckoutPage() {
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={0.5}
          sx={{
            padding: "1rem",
            bgcolor: "#FAFAFB",
            minHeight: "100vh",
            paddingTop: { xs: "97px", sm: "104px", md: "104px" },
          }}
        >
          {/* Products Column */}
          <Grid item xs={12} md={8}>
            {product.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: "1rem",
                  backgroundColor: "#fff",
                  border: "1px solid #f6f5f3",
                  // height: "300px",
                }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "relative",
                        marginBottom: "1rem",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <CardContent>
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
                            fontSize: "1.5rem",
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
                          fontSize: "1rem",
                          color: "#797979",
                        }}
                      >
                        Storlek: {item.ingredients}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "1rem",
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
              </Box>
            ))}
          </Grid>

          {/* Contact Form Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "100",
                    marginBottom: "1rem",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Din varukorg ({})
                </Typography>

                {/* Summary with Left and Right Aligned Text */}
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="body1">Summa:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">TOTAL €</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="body1">Frakt:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">49 kr</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="body1">Att betala:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">SHIPPING €</Typography>
                  </Grid>
                </Grid>

                <Divider />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "100",
                    marginTop: "1rem",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Leveransuppgifter
                </Typography>

                {/* <CustomerForm /> */}
              </CardContent>
              <Divider />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
