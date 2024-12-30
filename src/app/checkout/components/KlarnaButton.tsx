import { Button } from "@mui/material";

export default function KlarnaButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "100%",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "#FEA8CD",
        color: "#000",
        marginTop: "0.5rem",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "1.1rem",

      }}
    >
      Klarna.
    </Button>
  );
}
