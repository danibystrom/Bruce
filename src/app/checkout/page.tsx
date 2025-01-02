"use client";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckOutModal from "./components/CheckOutModal";
import KlarnaButton from "./components/KlarnaButton";

export default function CheckoutPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId: number) => {
    const currentItem = cart.find((item) => item.product.id === productId);
    if (currentItem && currentItem.quantity > 1) {
      changeQuantity(productId, currentItem.quantity - 1);
    } else if (currentItem && currentItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  const handleIncreaseQuantity = (productId: number) => {
    const currentItem = cart.find((item) => item.product.id === productId);
    if (currentItem) {
      changeQuantity(productId, currentItem.quantity + 1);
    }
  };

  const subTotal = parseFloat(
    cart
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      .toFixed(2)
  );

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const estDeliveryCost = totalItems > 5 ? 15 : 10;
  const totalCost = parseFloat((subTotal + estDeliveryCost).toFixed(2));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          minHeight: "100vh",
          width: "100%",
        }}
      >
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
                paddingLeft: "0.5rem",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              My cart
            </Typography>
            <Divider
              sx={{
                borderColor: "#000",
                paddingLeft: "0.5rem",
              }}
            />
            {cart.map((item) => (
              <Box
                key={item.product.id}
                sx={{
                  padding: "1rem",
                  backgroundColor: "#fff",
                  borderBottom: "1px solid #000",
                }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={10}>
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
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          {item.product.name}
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleRemoveFromCart(item.product.id)}
                          color="default"
                        >
                          <CloseIcon sx={{ fontSize: "1rem", color: "#000" }} />
                        </IconButton>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "1rem",
                          color: "#000",
                          marginBottom: "1rem",
                        }}
                      >
                        EUR {item.product.price}€
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
                        <Box
                          sx={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                          }}
                        >
                          <IconButton>
                            <RemoveIcon
                              onClick={() =>
                                handleDecreaseQuantity(item.product.id)
                              }
                              sx={{ fontSize: "1rem", color: "#000" }}
                            />
                          </IconButton>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "0.8rem",
                              minWidth: "20px",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </Typography>
                          <IconButton>
                            <AddIcon
                              onClick={() =>
                                handleIncreaseQuantity(item.product.id)
                              }
                              sx={{ fontSize: "1rem", color: "#000" }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Box>
            ))}
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
                  <Typography variant="body1">{subTotal}€</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">Estimated Delivery</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{estDeliveryCost}€</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">Total</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{totalCost}€</Typography>
                </Grid>
              </Grid>

              <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />
              <Button
                variant="outlined"
                disableRipple
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  marginY: "0.3em",
                  color: "#000",
                  width: "100%",
                  borderRadius: 20,
                  boxShadow: "none",
                  fontSize: "1rem",
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
                onClick={handleOpenModal}
              >
                Checkout
              </Button>
              <KlarnaButton />
            </Box>
          </Grid>
        </Grid>
        <CheckOutModal open={openModal} onClose={handleCloseModal} />
      </Box>
    </>
  );
}
