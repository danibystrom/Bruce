import { showAllCategories } from "@/app/server-actions/categories/handler";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

type EditProductFormProps = {
  product: (Product & { categories: { id: string; name: string }[] }) | null;
};

export default function EditProductForm({ product }: EditProductFormProps) {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await showAllCategories();
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Box
      component="form"
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
          label="Name"
          id="standard-size-small"
          size="small"
          variant="standard"
          defaultValue={product?.name || ""}
        />

        <TextField
          label="Ingredients"
          id="standard-size-small"
          size="small"
          variant="standard"
          defaultValue={product?.ingredients || ""}
        />
        <TextField
          label="Alc. %"
          id="standard-size-small"
          size="small"
          variant="standard"
          // defaultValue={product?.alcohol || ""}
        />
        <TextField
          label="Price"
          id="standard-size-small"
          size="small"
          variant="standard"
          defaultValue={product?.price || ""}
        />
        <TextField
          id="standard-multiline-static"
          label="Description"
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
          <Select
            label="Category"
            labelId="category-label"
            id="category"
            defaultValue={product?.categories[0]?.id || ""}
            sx={{
              color: "#000",
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
