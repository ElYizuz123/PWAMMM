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
      if (newProduct.count > 0) {
        newProducts[existe] = {
          ...newProducts[existe],
          cantidad: (newProducts[existe].cantidad || 1) + newProduct.count,
        };
      } else {
        newProducts[existe] = {
          ...newProducts[existe],
          cantidad: (newProducts[existe].cantidad || 1) + 1,
        };
      }

      setProductos(newProducts);
      localStorage.setItem("productos", JSON.stringify(newProducts));
    } else {
      if (newProduct.count > 0) {
        const updatedProductos = [
          ...productos,
          { ...newProduct, cantidad: newProduct.count },
        ];
        setProductos(updatedProductos);
        localStorage.setItem("productos", JSON.stringify(updatedProductos));
      } else {
        const updatedProductos = [...productos, { ...newProduct, cantidad: 1 }];
        setProductos(updatedProductos);
        localStorage.setItem("productos", JSON.stringify(updatedProductos));
      }
    }
  };

  const deleteProduct = (idProducto, name) => {
    const updatedProductos = productos.filter(
      (producto) => producto.nombre !== name
    );

    setProductos(updatedProductos);
    localStorage.setItem("productos", JSON.stringify(updatedProductos));
  };

  const updateQuantity = (tipo, newProduct) => {
    const newProducts = [...productos];
    const existe = productos.findIndex(
      (producto) =>
        producto.id_producto === newProduct.id_producto &&
        producto.nombre === newProduct.nombre
    );
    if (tipo == 1) {
      newProducts[existe] = {
        ...newProducts[existe],
        cantidad: (newProducts[existe].cantidad || 0) + 1,
      };
    } else {
      const newQuantity = (newProducts[existe].cantidad || 1) - 1;
      newProducts[existe] = {
        ...newProducts[existe],
        cantidad: newQuantity >= 1 ? newQuantity : 1,
      };
    }
    setProductos(newProducts);
    localStorage.setItem("productos", JSON.stringify(newProducts));
  };

  const total = productos.reduce(
    (sub, producto) => sub + producto.precio * producto.cantidad,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        productos,
        addProductos,
        deleteProduct,
        updateQuantity,
        total,
      }}
    >
      <div>{children}</div>
    </ProductContext.Provider>
  );
};
