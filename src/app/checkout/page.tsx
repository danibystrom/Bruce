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

  const subTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const estDeliveryCost = 10;
  const totalCost = subTotal + estDeliveryCost;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

            {cart.map((item) => (
              <Box
                key={item.product.id}
                sx={{
                  backgroundColor: "#fff",
                }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{
                        height: "120px",
                        objectFit: "contain",
                        marginBottom: "1rem",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
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
                          {item.product.name}
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          color="default"
                          onClick={() => handleRemoveFromCart(item.product.id)}
                        >
                          <CloseIcon
                            sx={{ fontSize: "0.8rem", color: "#000" }}
                          />
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
                              sx={{ fontSize: "0.8rem", color: "#000" }}
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
                              sx={{ fontSize: "0.8rem", color: "#000" }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider sx={{ marginBottom: "1rem", borderColor: "#000" }} />
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
