"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { XIcon, TrashIcon } from "@heroicons/react/solid";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { CantidadContext } from "@/context/CantidadContext";


const Carrito = () => {
  const { productos, total, cartCountAnimation, deleteProduct } = useContext(ProductContext);
  const { incrementStock } = useContext(CantidadContext);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleDelete = (id_producto, cantidad) => {
    deleteProduct(id_producto);
    incrementStock(id_producto, cantidad)
  };

  return (
    <div className="relative">
      <button onClick={() => setIsCartVisible(!isCartVisible)}>
        <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-40 hover:scale-110 transition transform duration-300 ease-in-out">
          <div className="relative flex justify-center items-center">
            
            <FaShoppingCart className="h-6 w-6 text-white z-10"/>
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
              className="overflow-y-auto p-4 custom-scrollbar "
              style={{ height: "calc(100% - 160px)" }}
            >
              {productos.length === 0 ? (
                <div className="flex justify-center mt-48">
                  <MdRemoveShoppingCart className="w-20 h-20 text-gray-500" />
                  <EmojiSadIcon className="w-6 h-6 text-gray-500" />
                </div>
              ) : (
                <div>
                  {productos.map((producto) => (
                    <div
                      key={producto.id}
                      className="flex items-start justify-between mb-6 bg-white p-4 rounded-lg shadow-md"
                    >
                      <div className="flex">
                        <img
                          src={producto.imagen}
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
                            <p className="text-sm">
                              Cantidad: {producto.cantidad}
                            </p>
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
                          onClick={() => handleDelete(producto.id_producto, producto.cantidad)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Total */}
            <div className="flex justify-between items-center font-bold border-t  pt-2">
              <p>Total:</p>
              <p className="border-b-2 border-red-500">${total}</p>
            </div>

            {/* Botón de ir al carrito y pagar */}

            <Link href="/tienda/carrito">
              <button className="bg-[#F70073] font-bold text-white w-full py-2 mt-2 rounded transition duration-300 ease-in-out hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1">
                VER CARRITO →
              </button>
            </Link>
            {productos.length === 0 ? (
              <button className="bg-green-500 opacity-30 font-bold text-white w-full py-2 mt-2 rounded transition duration-300 ease-in-out hover:bg-green-500 hover:shadow-lg hover:-translate-y-1">
                AGREGA PRODUCTOS
              </button>
            ) : (
              <Link href="/tienda/finalizar_compra">
                <button className="bg-green-500 font-bold text-white w-full py-2 mt-2 rounded transition duration-300 ease-in-out hover:bg-green-500 hover:shadow-lg hover:-translate-y-1">
                  FINALIZAR COMPRA
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
