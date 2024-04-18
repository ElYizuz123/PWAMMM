"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartCountAnimation, setCartCountAnimation] = useState('');
  const [productos, setProductos] = useState(() => {
    const productosEnAlmacenamiento = localStorage.getItem("productos");
    return productosEnAlmacenamiento
      ? JSON.parse(productosEnAlmacenamiento)
      : [];
  });

  const triggerCartCountAnimation = () => {
    setCartCountAnimation('animate-bounce bg-green-600');
    setTimeout(() => setCartCountAnimation(''), 3000);
  };

  const triggerCartCountAnimationDelete = () => {
    setCartCountAnimation('animate-bounce bg-red-500');
    setTimeout(() => setCartCountAnimation(''), 3000);
  };

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
    triggerCartCountAnimation();
  };

  const deleteProduct = (idProducto, name) => {
    const updatedProductos = productos.filter(
      (producto) => producto.nombre !== name
    );

    setProductos(updatedProductos);
    localStorage.setItem("productos", JSON.stringify(updatedProductos));
    triggerCartCountAnimationDelete();
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
    triggerCartCountAnimation();
  };

  const total = productos.reduce(
    (sub, producto) => sub + producto.precio * producto.cantidad,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        productos,
        cartCountAnimation,
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
