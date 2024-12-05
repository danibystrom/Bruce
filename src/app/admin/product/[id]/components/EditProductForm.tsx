import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditProductForm() {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "50%" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
      </div>
    </Box>
  );
}
