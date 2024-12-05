import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditProductForm() {
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
        />

        <TextField
          label="Ingredients"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Alc. %"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Price"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard"
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
            defaultValue=""
            sx={{
              color: "#000",
            }}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
