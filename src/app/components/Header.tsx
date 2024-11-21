"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Products", href: "/products" },
    { label: "Refill", href: "/refill" },
  ];

  const subItems = [
    { label: "Contact", href: "/contact" },
    { label: "Sign In", href: "/signin" },
    { label: "Admin", href: "/admin" },
  ];

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
              disableRipple
              size="large"
              edge="start"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Link href="/" sx={{ textDecoration: "none", underline: "none" }}>
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
          </Link>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
            <IconButton
              disableRipple
              color="inherit"
              sx={{
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              disableRipple
              color="inherit"
              sx={{
                padding: "2px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          width: { xs: "100%", sm: "50%", md: "40%" },
          "& .MuiDrawer-paper": {
            width: { xs: "100vw", sm: "50vw", md: "28vw" },
          },
        }}
      >
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <IconButton
            disableRipple
            onClick={handleDrawerClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <List
            sx={{
              paddingTop: 0,
              gap: "2px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={{ padding: "2px 0" }}>
                <Link
                  href={item.href}
                  sx={{ textDecoration: "none", width: "100%" }}
                >
                  <ListItemButton
                    onClick={handleDrawerClose}
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.2rem", color: "black" }}>
                      {item.label}
                    </Typography>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          <Box sx={{ marginTop: "auto" }}>
            <List
              sx={{
                paddingTop: 0,
                gap: "2px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {subItems.map((item, index) => (
                <ListItem key={index} sx={{ padding: "2px 0" }}>
                  <Link
                    href={item.href}
                    sx={{ textDecoration: "none", width: "100%" }}
                  >
                    <ListItemButton onClick={handleDrawerClose}>
                      <Typography sx={{ fontSize: "1.2rem", color: "black" }}>
                        {item.label}
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
