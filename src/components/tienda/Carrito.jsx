"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { XIcon, TrashIcon } from "@heroicons/react/solid";

const Carrito = () => {
  const { productos, total, cartCountAnimation, deleteProduct} = useContext(ProductContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const handleDelete = (id_producto, nombre) => {
    deleteProduct(id_producto, nombre);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsCartVisible(!isCartVisible)}>
        <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-50 hover:scale-110 transition transform duration-300 ease-in-out">
          <div className="relative flex justify-center items-center">
            <img src="\emoticons\carrito.png" className="z-10 object-cover" />

            <span
              className={`absolute -top-5 -right-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 rounded-full z-20 ${cartCountAnimation}`}
            >
              {productos.reduce(
                (total, producto) => total + producto.cantidad,
                0
              )}
            </span>
          </div>
        </div>
      </button>

      {isCartVisible && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl z-40 p-4">
          <div className="flex justify-between items-center border-b">
            <h2 className="text-lg font-bold">TU CARTA</h2>
            <XIcon
              className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180"
              onClick={() => setIsCartVisible(false)}
            />
          </div>
          
          {/* Contenido del carrito */}
          <div className="flex flex-col h-full">
            <div
              className="overflow-y-auto p-4 custom-scrollbar"
              style={{ height: "calc(100% - 160px)" }}
            >
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  className="flex items-start justify-between mb-6 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex">
                    <img
                      src={`/productos/${producto.imagen}`}
                      alt={producto.nombre}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-base">
                          {producto.nombre}
                        </h3>
                        <p className="text-xs">{producto.marca}</p>
                        <p className="text-xs">{producto.ml}ml</p>
                      </div>
                      <div>
                        <p className="text-sm">Cantidad: {producto.cantidad}</p>
                        <p className="text-md font-bold">
                          Subtotal: ${producto.cantidad * producto.precio}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <p className="text-md font-bold text-black">
                      ${producto.precio}
                    </p>
                    <TrashIcon
                      className="h-5 w-5 text-red-500 cursor-pointer transition duration-300 ease-in-out hover:text-red-700 hover:scale-110"
                      onClick={() =>
                        handleDelete(producto.nombre)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Total */}
            <div className="flex justify-between items-center font-bold border-t mt-4 pt-4">
              <p>Total:</p>
              <p className="border-b-2 border-red-500">${total}</p>
            </div>

            {/* Botón de ir al carrito y pagar */}
            <Link href="/tienda/carrito">
              <button className="bg-[#F70073] font-bold text-white w-full py-2 mt-4 rounded transition duration-300 ease-in-out hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1">
                VER CARTA & PAGAR →
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* <div className=" flex justify-center items-center ">
        <div className=" w-[1250px]  mt-64">
          <Link href="/tienda">
            <button class="enter-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 27"
                class="arrow"
              >
                <line
                  stroke-width="2"
                  stroke="white"
                  y2="14"
                  x2="40"
                  y1="14"
                  x1="1"
                ></line>
                <line
                  stroke-width="2"
                  stroke="white"
                  y2="1.41537"
                  x2="10.4324"
                  y1="14.2433"
                  x1="1.18869"
                ></line>
                <line
                  stroke-width="2"
                  stroke="white"
                  y2="13.6007"
                  x2="1.20055"
                  y1="26.2411"
                  x1="10.699"
                ></line>
                <line
                  stroke="white"
                  y2="14.3133"
                  x2="1.07325"
                  y1="13.6334"
                  x1="0.33996"
                ></line>
                <line
                  stroke-width="2"
                  stroke="white"
                  y2="13"
                  x2="39"
                  y1="8"
                  x1="39"
                ></line>
              </svg>
              <p className="font-semibold ">REGRESAR</p>
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Carrito;
