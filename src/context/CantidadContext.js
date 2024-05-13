"use client";
import React, { useState, createContext } from "react";

export const CantidadContext = createContext();

export const CantidadProvider = ({ children }) => {
  const [stock, setStock] = useState({});

  return (
    <CantidadContext.Provider
      value={{
        setStock,
        stock,
      }}
    >
      <>{children}</>
    </CantidadContext.Provider>
  );
};
