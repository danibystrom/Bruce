import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { CartItem } from "../types";

export default function useLocalStorageCart(initialValue: CartItem[]) {
  const [cart, setCart] = useState<CartItem[]>(initialValue);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      console.log("Stored cart:", JSON.parse(storedCart));
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const changeQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const addToCart = (product: Product) => {
    const existingCartItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      changeQuantity(product.id, existingCartItem.quantity + 1);
    } else {
      const newCartItem: CartItem = { product, quantity: 1 };
      const updatedCart = [...cart, newCartItem];
      console.log("Adding product:", product);
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  return { cart, addToCart, changeQuantity, removeFromCart, clearLocalStorage };
}
