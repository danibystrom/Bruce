import { showAllCategories } from "@/app/server-actions/categories/handler";
import { Box, Divider, Typography } from "@mui/material";
import AddProductForm from "./components/AddProductForm";

export default async function AddNewProduct() {
  const categories = await showAllCategories();
  return (
    <Box
      sx={{
        paddingBottom: "20x",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          marginBottom: "1rem",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Edit Product with id:
      </Typography>
      <Divider
        sx={{
          width: "70%",
          borderColor: "#000",
          marginBottom: "1rem",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          width: "80%",
          maxWidth: "1000px",
        }}
      >
        <Box sx={{ flex: 1, paddingRight: { md: "20px" } }}>
          <AddProductForm categories={categories} />
        </Box>
      </Box>
    </Box>
  );
}
