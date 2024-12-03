import { IconButton, Slide } from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import * as React from "react";

interface ToastProps {
  open: boolean;
  onClose: () => void;
}

export default function Toast({ open, onClose }: ToastProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  const SlideTransition = (props: any) => {
    return <Slide {...props} direction="up" />;
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    ></IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message="Nice, you added a bruce to the cart!"
      action={action}
      key={SlideTransition.name}
    />
  );
}
