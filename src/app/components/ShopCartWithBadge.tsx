"use client";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, IconButton } from "@mui/material";
import Link from "next/link";

import { useCart } from "../context/CartContext";

export default function ShopCartWithBadge() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/checkout">
      <IconButton
        disableRipple
        color={"secondary"}
        sx={{
          padding: "2px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Badge
          badgeContent={totalItems}
          color={"secondary"}
          sx={{
            marginBottom: "1px",
            "& .MuiBadge-badge": {
              backgroundColor: "#F2F961",
              minWidth: "20px",
              height: "20px",
              fontSize: "11px",
              color: "#000",
            },
            "& .MuiSvgIcon-root": {
              color: "#000",
            },
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ color: "#000" }} />
        </Badge>
      </IconButton>
    </Link>
  );
}
