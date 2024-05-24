"use client";
import React, { useState, useEffect, createContext } from "react";

export const CantidadContext = createContext();

export const CantidadProvider = ({ children }) => {
  const [stock, setStock] = useState({});

   // Recuperar stock de sessionStorage cuando el componente se monta
   useEffect(() => {
    const savedStock = sessionStorage.getItem("stock");
    if (savedStock) {
      setStock(JSON.parse(savedStock));
    }
  }, []);

  const saveStockToSession = (newStock) => {
    sessionStorage.setItem("stock", JSON.stringify(newStock));
  };

  const decrementStock = (id_producto, cantidad) => {
    setStock((prev) => {
      const updatedStock = {
        ...prev,
        [id_producto]: (prev[id_producto] || 0) - cantidad,
      };
      saveStockToSession(updatedStock);
      return updatedStock;
    });
  };

  const incrementStock = (id_producto, cantidad) => {
    setStock((prev) => {
      const updatedStock = {
        ...prev,
        [id_producto]: (prev[id_producto] || 0) + cantidad,
      };
      saveStockToSession(updatedStock);
      return updatedStock;
    });
  };

  const initializeStock = (initialStock) => {
    setStock(initialStock);
    saveStockToSession(initialStock);
  };

  return (
    <CantidadContext.Provider
      value={{
        decrementStock,
        incrementStock,
        setStock,
        stock,
        initializeStock,
      }}
    >
      <>{children}</>
    </CantidadContext.Provider>
  );
};
