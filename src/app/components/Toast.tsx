import { Slide, SlideProps } from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { SyntheticEvent } from "react";

interface ToastProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

interface Product {
  name: string;
}

export default function Toast({ open, onClose, product }: ToastProps) {
  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  const SlideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up" />;
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message={
        product ? `Nice, you added fizzy ${product.name} to the cart!` : ""
      }
      key={SlideTransition.name}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "#F2F961",
          color: "black",
          fontSize: "0.8rem",
          textTransform: "uppercase",
          borderRadius: 20,
        },
      }}
    />
  );
}
