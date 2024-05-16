"use client";
import { ProductContext } from "@/context/ProductContext";
import { Preahvihear } from "next/font/google";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusIcon, CheckIcon, RefreshIcon } from "@heroicons/react/solid"; // o @heroicons/react/solid para un estilo lleno
import { CantidadContext } from "@/context/CantidadContext";

const MostrarAcompanamientoCarrito = ({
  id_producto,
  nombre,
  precio,
  imagen,
  ml,
  marca,
  cantidad,
}) => {
  const [buttonState, setButtonState] = useState("idle");
  const { addProductos } = useContext(ProductContext);
  const { decrementStock } = useContext(CantidadContext);

  const handleAddToCart = () => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");

      const newProduct = {
        id_producto,
        imagen,
        nombre,
        marca,
        precio,
        ml,
      };

      addProductos(newProduct);
      decrementStock(id_producto, 1);

      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    }, 1500);
  };
  return (
    <div
      className="space-y-4 mt-4
   "
    >
      {/* Product 1 */}
      <div
        className="flex justify-between items-center bg-white shadow rounded-lg p-4 
      lg:py-4 
      2xl:py-4
      "
      >
        <img
          className="h-12 w-12 rounded
          md:h-10 md:w-10"
          src={imagen}
          alt="Queso"
        />
        <div className="flex-grow px-6">
          <h3
            className="font-medium
          md:text-xs "
          >
            {nombre} {ml}gr
          </h3>
          <p className="text-sm text-gray-500">${precio}</p>
        </div>
        {cantidad > 0 ? (
          <button
            className={`p-2 rounded-full ${
              buttonState === "loading"
                ? "bg-white text-[#F70073]"
                : buttonState === "success"
                ? "bg-green-500"
                : "text-[#F70073] bg-white hover:bg-[#F70073] hover:text-white"
            }`}
            onClick={handleAddToCart}
          >
            {buttonState === "idle" && <PlusIcon className="h-6 w-6" />}
            {buttonState === "loading" && (
              <RefreshIcon className="h-5 w-5 animate-spin mx-auto" />
            )}
            {buttonState === "success" && (
              <div className="flex items-center justify-center">
                <CheckIcon className="h-6 w-6 text-white" />
                <span className="ml-2 text-white">Agregado</span>
              </div>
            )}
          </button>
        ) : (
          <p className="text-sm text-red-500">Sin existencia</p>
        )}
      </div>
    </div>
  );
};

export default MostrarAcompanamientoCarrito;
