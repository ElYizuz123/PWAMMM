"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState(() => {
    const productosEnAlmacenamiento = localStorage.getItem("productos");
    return productosEnAlmacenamiento
      ? JSON.parse(productosEnAlmacenamiento)
      : [];
  });

  const addProductos = (newProduct) => {
    const existe = productos.findIndex(
      (producto) =>
        producto.id_producto === newProduct.id_producto &&
        producto.nombre === newProduct.nombre
    );

    if (existe !== -1) {
      const newProducts = [...productos];
      newProducts[existe] = {
        ...newProducts[existe],
        cantidad: (newProducts[existe].cantidad || 1) + 1,
      };
      setProductos(newProducts);
      localStorage.setItem("productos", JSON.stringify(newProducts));
    } else {
      const updatedProductos = [...productos, { ...newProduct, cantidad: 1 }];
      setProductos(updatedProductos);
      localStorage.setItem("productos", JSON.stringify(updatedProductos));
    }
  };

  const deleteProduct = (idProducto, name) => {
    const updatedProductos = productos.filter(
      (producto) => producto.nombre !== name
    );

    setProductos(updatedProductos);
    localStorage.setItem("productos", JSON.stringify(updatedProductos));
  };

  return (
    <ProductContext.Provider value={{ productos, addProductos, deleteProduct }}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
};
