"use client";

import { useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export function useLocalStorageProducts(initialProductValue: Product[]) {
  const [products, setProducts] = useState<Product[]>(initialProductValue);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const editProduct = (editedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return {
    products,
    editProduct,
  };
}
