"use client";

import { Product } from "@prisma/client";
import { createContext, PropsWithChildren, useContext } from "react";
import useLocalStorageCart from "../storage/CartLocalStorage";
import { CartItem } from "../types";

interface ContextValue {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor: string | null) => void;
  changeQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearLocalStorage: () => void;
}

const CartContext = createContext<ContextValue>({} as ContextValue);

export function CartProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const { cart, addToCart, changeQuantity, removeFromCart, clearLocalStorage } =
    useLocalStorageCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearLocalStorage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
