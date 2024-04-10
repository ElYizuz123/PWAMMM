"use client";
import { ProductContext } from "@/context/ProductContext";
import { Preahvihear } from "next/font/google";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const MostrarAcompanamientoCarrito = ({
  id_producto,
  nombre,
  precio,
  imagen,
  ml,
  marca,
}) => {
  const { addProductos } = useContext(ProductContext);

  const handleAddToCart = () => {
    const newProduct = {
      id_producto,
      imagen,
      nombre,
      marca,
      precio,
      ml,
    };

    addProductos(newProduct);
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
          <h3 className="font-medium">{nombre} {ml}gr</h3>
          <p className="text-sm text-gray-500">${precio}</p>
        </div>
        <button className="text-pink-500 hover:text-pink-600" onClick={handleAddToCart}>
          <img
            className="h-6 w-6 rounded"
            src="/emoticons/carrito3.png"
            alt="Queso"
          />
          <span className="sr-only ">Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default MostrarAcompanamientoCarrito;
