"use client";
import { Box, Button, Modal, Typography } from "@mui/material";

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName: string;
}

export default function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
  productName,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          margin: "auto",
          width: "400px",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          Confirm to retire <b>{productName}</b> from your lineup.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Are you sure you want to say goodbye to this Bruce-tastic product?
          Once it&apos;s gone, it&apos;s gone!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={onConfirm}
            sx={{
              backgroundColor: "#F2F961",
              color: "#000",
              boxShadow: "none",
              borderRadius: "20px",
              width: "50%",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #000",
              color: "#000",
              boxShadow: "none",
              borderRadius: "20px",
              width: "50%",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
