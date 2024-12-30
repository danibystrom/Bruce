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
import { useState } from "react";

interface CheckOutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CheckOutModal({ open, onClose }: CheckOutModalProps) {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = () => {
    // Kontrollera att alla fält är ifyllda
    const { name, address, postalCode, city } = formData;
    if (name && address && postalCode && city) {
      setIsOrderConfirmed(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Box>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
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
            >
              <TextField
                required
                label="Name"
                name="name"
                fullWidth
                variant="standard"
                value={formData.name}
                onChange={handleInputChange}
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                required
                label="Address"
                name="address"
                fullWidth
                variant="standard"
                value={formData.address}
                onChange={handleInputChange}
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                required
                label="Postal Code"
                name="postalCode"
                fullWidth
                variant="standard"
                value={formData.postalCode}
                onChange={handleInputChange}
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                required
                label="City"
                name="city"
                fullWidth
                variant="standard"
                value={formData.city}
                onChange={handleInputChange}
                sx={{ marginBottom: "1rem" }}
              />
            </Box>
          ) : (
            <Typography>
              Your order has been confirmed! Thank you for shopping with us.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          {!isOrderConfirmed ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
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
                  width: "35%",
                  transition: "all 0.3s ease",
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
                Cancel
              </Button>
              <Button
                onClick={handleConfirmOrder}
                color="primary"
                sx={{
                  backgroundColor: "#F2F961",
                  color: "#000",
                  borderRadius: "20px",
                  boxShadow: "none",
                  width: "35%",
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
              >
                Complete Purchase
              </Button>
            </Box>
          ) : (
            <Button onClick={onClose} color="primary">
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
