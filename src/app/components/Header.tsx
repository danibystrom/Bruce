"use client";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#ffffff",
          color: "#000000",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: "#000000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#000000",
              textAlign: "center",
              flex: 1,
              fontWeight: "bold",
            }}
          >
            BRUCE
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
            <IconButton color="inherit" sx={{ padding: 0 }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ padding: "2px" }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
