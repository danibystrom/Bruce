"use client";
import { EditProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/validation/validation";
import { Button, Divider, Link } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "./Toast";

type Props = {
  product: {
    id: number;
    productId: number;
    name: string;
    slug: string;
    ingredients: string;
    description: string;
    price: number;
    image: string;
    isBestSeller: boolean;
    alcohol: number;
  };
};

export default function EditProductForm({ product }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleEditProduct = async (formData: ProductFormData) => {
    try {
      const updatedData = {
        ...formData,
        price: parseFloat(formData.price.toString()),
        alcohol: parseFloat(formData.alcohol.toString()),
      };

      await EditProduct(updatedData, product.productId.toString());

      setToastMessage("Bruce approves! Product updated.");
      setToastOpen(true);

      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);
    } catch (error) {
      console.error("Failed to update product:", error);
      setToastMessage("Something went wrong, try again.");
      setToastOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "100%",
      }}
    >
      {/* Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit(handleEditProduct)}
        sx={{
          flex: 1,
          maxWidth: "500px",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "& .MuiInputBase-input": { color: "#000", fontSize: "0.8rem" },
          "& .MuiInput-underline:before": { borderBottomColor: "#000" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#000",
          },
          "& .MuiInput-underline:after": { borderBottomColor: "#000" },
          "& .MuiFormLabel-root": { color: "#000" },
          "& .MuiFormLabel-root.Mui-focused": { color: "#000" },
          "& .MuiSelect-select": { color: "#000" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#000",
            },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="NAME"
          {...register("name")}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          id="standard-size-small"
          size="small"
          variant="standard"
          defaultValue={product?.name || ""}
        />

        <TextField
          label="INGREDIENTS"
          {...register("ingredients")}
          error={Boolean(errors.ingredients)}
          helperText={errors.ingredients?.message}
          id="standard-size-small"
          size="small"
          variant="standard"
          defaultValue={product?.ingredients || ""}
        />
        <TextField
          label="ALC. %"
          {...register("alcohol")}
          error={Boolean(errors.price)}
          helperText={errors.price?.message}
          id="standard-size-small"
          size="small"
          type="number"
          variant="standard"
          defaultValue={product?.alcohol || ""}
        />
        <TextField
          label="PRICE"
          {...register("price")}
          error={Boolean(errors.price)}
          helperText={errors.price?.message}
          id="standard-size-small"
          size="small"
          type="number"
          variant="standard"
          defaultValue={product?.price || ""}
        />
        <TextField
          label="DESCRIPTION"
          {...register("description")}
          error={Boolean(errors.description)}
          helperText={errors.description?.message}
          id="standard-multiline-static"
          multiline
          rows={4}
          variant="standard"
          defaultValue={product?.description || ""}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
            marginTop: "20px",
            gap: "1rem",
          }}
        >
          <Link href="" style={{ textDecoration: "none", width: "150px" }}>
            <Button
              disableRipple
              variant="outlined"
              size="small"
              type="submit"
              sx={{
                borderRadius: "20px",
                color: "#000",
                width: "100%",
                marginRight: "0.8rem",
                backgroundColor: "transparent",
                borderColor: "#000",
                "&:hover": { backgroundColor: "#000", color: "#fff" },
              }}
            >
              Save changes
            </Button>
          </Link>
          <Link
            href="/admin"
            style={{ textDecoration: "none", width: "150px" }}
          >
            <Button
              disableRipple
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#000",
                width: "100%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "none",
                  borderColor: "#000",
                },
              }}
            >
              Cancel
            </Button>
          </Link>
        </Box>
      </Box>

      <Toast
        open={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
      />

      {/* Image Section */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          margin: { xs: "20px 0", md: "0 20px" },
          borderColor: "#000",
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
        }}
      >
        <img
          src={product.image}
          alt="Product"
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
}
