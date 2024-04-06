"use client";
import React, { useEffect, useState } from "react";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import AcompañamientoCarrito from "@/components/tienda/AcompañamientoCarrito";
import MostrarAcompanamientoCarrito from "@/components/tienda/MostrarAcompanamientoCarrito";
import MostrarItemsCarrito from "@/components/tienda/MostrarItemsCarrito";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});


const Page = (
  id_producto,
  nombre,
  marca,
  precio,
  ml,
  imagen
) => {
   

  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
        <div className="  w-full relative ">
          <div className=" h-full w-full z-0 opacity-60  ">
            <Image
              src="/backgroundImage.jpg"
              layout="fill"
              quality={100}
              alt="Fondo"
            />
          </div>
          <div className="relative w-full py-48 ">
            <div className="  mt-12 p-6 mx-48  bg-white border-[#1E1E1E] border-opacity-50 dark:border-gray-600 shadow-lg">
              <div className=" flex mb-4  mt-4 text-3xl font-bold text-[#F70073]">
               
                  <img
              
                    src="/emoticons/carrito2.png"
                  />
                
                <p className="ml-5">CARRITO </p>
              </div>

              <div className="flex flex-row">
                {/* Contenedor de la lista de productos */}
                <MostrarItemsCarrito />

                {/* Contenedor del resumen de la compra */}
                <div className="w-2/5 ml-4 p-4 bg-white">
                  <div className="mb-6">
                    <h2 className="font-bold text-xl mb-2">
                      Resumen de la compra
                    </h2>

                    <div className="flex justify-between">
                      <span>2 productos</span>
                      <span className="flex">
                        <p>Subtotal: </p>
                        <p className="text-green-700 ml-2 font-bold">
                          $1,948.00{" "}
                        </p>{" "}
                      </span>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 my-4 hover:bg-green-600">
                      Proceder al pago
                    </button>
                  </div>

                  {/* Contenedor de productos recomendados o adicionales */}
                  <div>
                    <h3 className="font-bold text-lg">Acompáñalo con</h3>
                    {/* Listado de productos adicionales */}

                    <AcompañamientoCarrito />

                    {/* Repetir para más productos adicionales */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
