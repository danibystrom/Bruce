import { Slide } from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { SyntheticEvent } from "react";

interface ToastProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function Toast({ open, onClose, message }: ToastProps) {
  const handleClose = (
    event: SyntheticEvent | Event,
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

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message={message}
      key={SlideTransition.name}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "#F2F961",
          color: "black",
          fontSize: "0.8rem",
          textTransform: "uppercase",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      }}
    />
  );
}
