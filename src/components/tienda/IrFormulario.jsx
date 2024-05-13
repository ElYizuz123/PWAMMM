"use client";
import React, { useContext } from "react";
import AcompañamientoCarrito from "@/components/tienda/AcompañamientoCarrito";
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
    md:w-1/3 md:mt-[70px]
    lg:translate-y-[135px]"
    >
      <div
        class="bg-white shadow-md rounded-lg px-4 py-4 flex flex-col items-center justify-center
      md:w-72 md:-translate-x-10
      
      "
      >
        <div class="flex space-x-2">
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
            md:w-52"
            href={"/tienda/finalizar_compra"}
          >
            Finalizar compra
          </Link>
        )}
      </div>
      <div
        class="w-full  bg-white shadow-md rounded p-4 mt-[15px] 
      md:w-72 md:-translate-x-10
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
