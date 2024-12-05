import { Box, Typography } from "@mui/material";
import EditProductForm from "./components/EditProductForm";

type Props = { params: { id: string } };

export default function EditProductPage({ params }: Props) {
  const productId = params.id;

  return (
    <Box
      sx={{
        paddingBottom: "55px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          padding: "20px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        Edit Product with id: {productId}
      </Typography>

      <Box sx={{ padding: "1rem", maxWidth: "500px", margin: "0 auto" }}>
        <EditProductForm />
      </Box>
    </Box>
  );
}
