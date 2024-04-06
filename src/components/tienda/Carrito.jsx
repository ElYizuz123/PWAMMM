"use client"
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";


const Carrito = () => {

  const { productos } = useContext(ProductContext);
  return (
    <div>
      <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-50 hover:scale-110 transition transform duration-300 ease-in-out">
        <Link
          href={"/tienda/carrito"}
          className="relative flex justify-center items-center"
        >
          <img src="\emoticons\carrito.png" className="z-10 object-cover" />

          <span className="absolute -top-5 -right-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 rounded-full z-20">
            {productos.reduce((total, producto) => total + producto.cantidad, 0)}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Carrito;
