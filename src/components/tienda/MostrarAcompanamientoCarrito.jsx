"use client";
import { ProductContext } from "@/context/ProductContext";
import { Preahvihear } from "next/font/google";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusIcon, CheckIcon } from "@heroicons/react/solid"; // o @heroicons/react/solid para un estilo lleno
import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/solid";

const MostrarAcompanamientoCarrito = ({
  id_producto,
  nombre,
  precio,
  imagen,
  ml,
  marca,
}) => {
  const [buttonState, setButtonState] = useState("idle");
  const { addProductos } = useContext(ProductContext);

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

      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    }, 1500);
    
  };
  return (
    <div className="space-y-4 mt-4">
      {/* Product 1 */}
      <div className="flex justify-between items-center bg-white shadow rounded-lg p-4 ">
        <img
          className="h-12 w-12 rounded"
          src={`/productos/${imagen}`}
          alt="Queso"
        />
        <div className="flex-grow px-6">
          <h3 className="font-medium">
            {nombre} {ml}gr
          </h3>
          <p className="text-sm text-gray-500">${precio}</p>
        </div>

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
      </div>
    </div>
  );
};

export default MostrarAcompanamientoCarrito;
