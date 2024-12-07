"use client";
import { EditProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/validation/validation";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";

interface Category {
  id: string;
  name: string;
}

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
    categoryId: string[];
  };
  categories: Category[];
};

export default function EditProductForm({ product, categories }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const handleEditProduct = async (formData: ProductFormData) => {
    try {
      const updatedData = {
        ...formData,
        price: parseFloat(formData.price.toString()),
      };

      await EditProduct(updatedData, product.productId.toString());

      alert("Product updated successfully!");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("An error occurred while updating the product.");
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
        {/* <TextField
          label="Alc. %"
          id="standard-size-small"
          size="small"
          variant="standard"
          // defaultValue={product?.alcohol || ""}
        /> */}
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
        <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
          <InputLabel
            sx={{
              color: "#000",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              "&.Mui-focused": { color: "#000" },
            }}
            id="category-label"
          >
            Change category
          </InputLabel>
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
