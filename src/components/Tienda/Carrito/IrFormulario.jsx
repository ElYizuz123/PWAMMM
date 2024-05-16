"use client";
import React, { useContext } from "react";
import AcompañamientoCarrito from "@/components/Tienda/AcompañamientoCarrito";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";

const IrFormulario = () => {
  const { productos, total } = useContext(ProductContext);
  const totalProductos = productos.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  return (
    <div
      className="relative flex flex-col 
    md:w-1/3 md:mt-[70px] md:translate-y-1 md:ml-2
    lg:mt-[135px] lg:flex lg:flex-col lg:w-1/3 lg:ml-14
    2xl:mt-[135px] 2xl:flex 2xl:flex-col 2xl:w-1/3 2xl:ml-10 
    "
    >
      <div
        class="bg-white shadow-md rounded-lg px-4 py-4 flex flex-col items-center justify-center
        sm:w-[90%] sm:translate-x-7     
        md:w-64 md:-translate-x-10
        lg:px-4 lg:py-4
        xl:w-80
        2xl:w-96
      "
      >
        <div
          class="flex space-x-2
        lg:flex lg:space-x-2
        2xl:flex 2xl:space-x-2"
        >
          <p class="font-semibold text-2xl">Total:</p>
          <p className="text-2xl font-bold text-[#F70073]">${total}</p>
        </div>

        <div class="flex justify-between items-center mb-2">
          <p class="text-sm font-semibold">{totalProductos} productos</p>
        </div>

        {totalProductos === 0 ? (
          <div className="flex w-72 mx-5 justify-center py-2 bg-red-500 text-white rounded font-bold">
            AGREGA PRODUCTOS
          </div>
        ) : (
          <Link
            className="flex w-72 mx-5 justify-center py-2 bg-green-500 text-white rounded hover:shadow-lg hover:-translate-y-0.5 font-bold
            md:w-52
            lg:w-52 2xl:w-72"
            href={"/tienda/finalizar_compra"}
          >
            Finalizar compra
          </Link>
        )}
      </div>
      <div
        class="w-full  bg-white shadow-md rounded p-4 mt-[15px] 
       sm:w-[90%] sm:translate-x-7
       md:w-64 md:-translate-x-10
       xl:w-80
       2xl:w-96
      "
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Acompáñalo con...
          </h2>
          {/* Product list */}
          <AcompañamientoCarrito />
        </div>
      </div>
    </div>
  );
};

export default IrFormulario;
