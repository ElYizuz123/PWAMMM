"use client";
import { ProductContext } from "@/context/ProductContext";
import { Preahvihear } from "next/font/google";
import React, { useContext } from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

const MostrarAcompanamientoCarrito = ({ id_producto, nombre, imagen, ml }) => {
  const { addProductos } = useContext(ProductContext);
  const [productoAñadido, setProductoAñadido] = useState(false);
  
  const handleAddToCart = () => {
    const newProduct = {
      id_producto,
      imagen,
      nombre,
      precio: "200",
      ml,
    };

    addProductos(newProduct);
    setProductoAñadido(true);
  };
  useEffect(() => {
    if (productoAñadido) {
      // Confirma que el producto fue añadido y luego navega
      window.location.href = '/tienda/carrito';
    }
  }, [productoAñadido]);
  return (
    <div className="my-2 p-2 shadow-lg flex items-center relative">
      <div className="justify-between">
        <img
          src={`/productos/${imagen}`}
          alt="Producto"
          className="h-24 mr-4"
        />
      </div>

      <div>
        <div className="flex-col ml-3 ">
          <h4>
            {nombre} {ml} gr
          </h4>
          <p className="mt-0 text-green-700 font-bold ">${"200"}</p>
        </div>
      </div>

      <div className="absolute right-2 top-2 hover:scale-110 transition transform duration-300 ease-in-out">
        <button onClick={handleAddToCart}>
          <img
            src="/emoticons/carrito3.png"
          />
        </button>
      </div>
    </div>
  );
};

export default MostrarAcompanamientoCarrito;
