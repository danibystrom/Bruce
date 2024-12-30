import { Button } from "@mui/material";

export default function KlarnaButton() {
  return (
    <Button
      variant="outlined"
      disableRipple
      sx={{
        width: "100%",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "#FEA8CD",
        color: "#000",
        marginTop: "0.5rem",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "1rem",
      }}
    >
      Klarna.
    </Button>
  );
}
