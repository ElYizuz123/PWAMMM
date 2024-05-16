"use client";
import React, { useState, useEffect, createContext } from "react";

export const CantidadContext = createContext();

export const CantidadProvider = ({ children }) => {
  const [stock, setStock] = useState({});

  // const [stock, setStock] = useState(() => {
  //   const savedStock = sessionStorage.getItem("stock");
  //   return savedStock ? JSON.parse(savedStock) : {};
  // });

  useEffect(() => {
    // Verifica si el código se está ejecutando en un entorno de navegador
    if (typeof window !== "undefined") {
      const savedStock = sessionStorage.getItem("stock");
      if (savedStock) {
        setStock(JSON.parse(savedStock));
      }
    }
  }, []);

  useEffect(() => {
    // Guardar el stock en sessionStorage cada vez que cambie
    sessionStorage.setItem("stock", JSON.stringify(stock));
  }, [stock]);

  const decrementStock = (id_producto, cantidad) => {
    setStock((prev) => {
      return {
        ...prev,
        [id_producto]: prev[id_producto] - cantidad,
      };
    });
  };

  const incrementStock = (id_producto, cantidad) => {
    setStock((prev) => {
      return {
        ...prev,
        [id_producto]: prev[id_producto] + cantidad,
      };
    });
  };

  return (
    <CantidadContext.Provider
      value={{
        decrementStock,
        incrementStock,
        setStock,
        stock,
      }}
    >
      <>{children}</>
    </CantidadContext.Provider>
  );
};
