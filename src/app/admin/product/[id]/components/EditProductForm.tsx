"use client";
import { EditProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/validation/validation";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
      component="form"
      onSubmit={handleSubmit(handleEditProduct)}
      sx={{
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
      <div>
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
              "&.Mui-focused": { color: "#000" },
            }}
            id="category-label"
          >
            Category
          </InputLabel>
          <Controller
            name="categories"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select {...field} multiple variant="outlined">
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <button
          type="submit"
          style={{
            background: "#0072e4",
            border: "none",
            padding: "0.5rem",
            borderRadius: "20px",
            color: "white",
            cursor: "pointer",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          UPDATE
        </button>
      </div>
    </Box>
  );
}
