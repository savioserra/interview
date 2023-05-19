import React, { createContext, useContext, useMemo, useState } from "react";

const Cart = createContext();

export default function CartContext({ children }) {
  // Our cart state is just a simple Product array
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {};

  const removeProduct = (product) => {};

  return (
    <Cart.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </Cart.Provider>
  );
}

export function useCart() {
  return useContext(Cart);
}
