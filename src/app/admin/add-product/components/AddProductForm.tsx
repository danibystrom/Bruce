"use client";
import { AddNewProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/validation/validation";
import {
  Button,
  Divider,
  FormControl,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Toast from "./Toast";

interface Category {
  id: string;
  name: string;
}

interface Props {
  product?: ProductFormData;
  categories: Category[];
}

export default function EditProductForm({ product, categories }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCreateProduct = async (formData: ProductFormData) => {
    try {
      const newProduct = {
        ...formData,
        price: parseFloat(formData.price.toString()),
        alcohol: parseFloat(formData.alcohol.toString()),
        image: product?.image || "",
        isBestSeller: product?.isBestSeller || false,
        categories: formData.categories || [],
        tabletQuantity: formData.tabletQuantity || 0,
      };

      await AddNewProduct(newProduct);

      setToastMessage("Welcome to the gang Bruce! You've been added.");
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
        onSubmit={handleSubmit(handleCreateProduct)}
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
          "& .MuiFormLabel-root": { color: "#000", fontSize: "0.8rem" },
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
        />

        <TextField
          label="INGREDIENTS"
          {...register("ingredients")}
          error={Boolean(errors.ingredients)}
          helperText={errors.ingredients?.message}
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Alc. %"
          {...register("alcohol")}
          error={Boolean(errors.ingredients)}
          helperText={errors.ingredients?.message}
          id="standard-size-small"
          size="small"
          variant="standard"
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
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <Typography sx={{ fontSize: "0.8rem", textTransform: "uppercase" }}>
            Choose categories
          </Typography>
          <Controller
            name="categories"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select {...field} multiple variant="standard">
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <TextField
          label="IMAGE"
          {...register("image")}
          error={Boolean(errors.image)}
          helperText={errors.image?.message}
          id="standard-size-small"
          size="small"
          variant="standard"
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
              variant="contained"
              size="small"
              type="submit"
              sx={{
                backgroundColor: "#F2F961",
                color: "#000",
                borderRadius: "20px",
                boxShadow: "none",
                width: "100%",
                transition: "all 0.3s ease",
                marginRight: "0.8rem",
                "&:hover": {
                  boxShadow: "5px 5px #E1EC09",
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
                backgroundColor: "#fff",
                border: "1px solid #000",
                color: "#000",
                width: "100%",
                borderRadius: 20,
                boxShadow: "none",
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
          // src={product.image}
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
