"use client";
import { useCart } from "@/app/context/CartContext";
import { CheckoutFormData } from "@/app/validation/validation";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface CheckOutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CheckOutModal({ open, onClose }: CheckOutModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({});
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const { clearLocalStorage, cart } = useCart(); 
  const [formData, setFormData] = useState<CheckoutFormData | null>(null);
  const router = useRouter();

  const onSubmit = (data: CheckoutFormData) => {
    setFormData(data);
    setIsOrderConfirmed(true);
  };

  const handleClose = () => {
    clearLocalStorage(); 
    router.push("/");
    onClose(); 
  };

  return (
    <Box>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ textAlign: "center", fontSize: "2rem" }}>
          {isOrderConfirmed ? "Order Confirmation" : "Enter Delivery Address"}
        </DialogTitle>
        <DialogContent>
          {!isOrderConfirmed ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "500px",
                margin: "0 auto",
                padding: "1rem",
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                required
                label="Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="standard"
              />
              <TextField
                required
                label="Address"
                {...register("address")}
                error={!!errors.address}
                helperText={errors.address?.message}
                variant="standard"
              />
              <TextField
                required
                label="Postal Code"
                {...register("postalCode")}
                error={!!errors.postalCode}
                helperText={errors.postalCode?.message}
                variant="standard"
              />
              <TextField
                required
                label="City"
                {...register("city")}
                error={!!errors.city}
                helperText={errors.city?.message}
                variant="standard"
              />
              <DialogActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                    width: "100%",
                    padding: "1rem",
                  }}
                >
                  <Button
                    onClick={onClose}
                    color="secondary"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #000",
                      color: "#000",
                      borderRadius: "20px",
                      boxShadow: "none",
                      width: "200px",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "8px 8px #F2F961",
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
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    sx={{
                      backgroundColor: "#F2F961",
                      color: "#000",
                      borderRadius: "20px",
                      boxShadow: "none",
                      width: "200px",
                      whiteSpace: "nowrap",
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
                    onClick={handleSubmit(onSubmit)}
                  >
                    Complete Purchase
                  </Button>
                </Box>
              </DialogActions>
            </Box>
          ) : (
            <Box>
              <Typography>
                Your order has been confirmed! Thank you for shopping with us.
              </Typography>
              <Box sx={{ marginTop: "1rem" }}>
                <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                  Your order will be delivered to:
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                  {`Name: ${formData?.name}, Address: ${formData?.address}, Postal Code: ${formData?.postalCode}, City: ${formData?.city}`}
                </Typography>
                <Typography variant="h6">Order Summary:</Typography>
                {cart.map((item) => (
                  <Typography variant="body1" key={item.product.id}>
                    {item.product.name} - {item.quantity} x {item.product.price}
                    €
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </DialogContent>
        {isOrderConfirmed && (
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #000",
                color: "#000",
                borderRadius: "20px",
                margin: "1rem",
                boxShadow: "none",
                width: "200px",
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "8px 8px #F2F961",
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
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Box>
  );
}
