"use client";
import React, { useContext, useEffect, useState } from "react";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import AcompañamientoCarrito from "@/components/tienda/AcompañamientoCarrito";
import MostrarAcompanamientoCarrito from "@/components/tienda/MostrarAcompanamientoCarrito";
import MostrarItemsCarrito from "@/components/tienda/MostrarItemsCarrito";
import { K2D } from "next/font/google";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Page = () => {
  const { productos } = useContext(ProductContext);

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
            <div class="container mx-auto p-6">
              <div class="flex flex-col md:flex-row justify-between gap-6 ">
                <div className="container mx-auto p-6  ">
                  {/* Title */}
                  <div className=" flex mb-4">
                    <Image
                      src="/emoticons/carrito2.png"
                      width={40}
                      height={40}
                      quality={100}
                      alt="Fondo"
                    ></Image>
                    <h1 className="ml-4 text-2xl font-bold text-gray-700">
                      BOLSA DE COMPRAS
                    </h1>
                    <hr className="my-2" />
                  </div>

                  {/* Column headers */}
                  <div className="flex text-gray-600 font-bold text-sm py-2 rounded-t-lg ">
                    <h3 className="">PRODUCTO</h3>
                    <h3 className="ml-[320px]">PRECIO</h3>
                    <h3 className="ml-[140px]">CANTIDAD</h3>
                    <h3 className="ml-[158px]">TOTAL</h3>
                  </div>

                  <div className="my-4"></div>
                  <hr />

                  {/* Product row */}
                  <MostrarItemsCarrito />
                </div>

                <div class="w-full md:w-1/3 bg-white shadow-md rounded p-4 mt-[59px]">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Acompáñalo con...
                    </h2>
                    {/* Product list */}
                    <AcompañamientoCarrito />
                  </div>
                  <div class="flex flex-col mt-4">
                    <div class="flex justify-between mt-2">
                      <p class="font-semibold text-lg ">Total</p>
                      <p class="font-semibold text-lg  border-b-2 border-red-500">
                        {productos.reduce(
                          (subTotal, producto) =>  subTotal + producto.total,
                          0
                        )}
                        PINCHE VIDA
                        
                      </p>
                    </div>
                    
                      <Link
                        href={"/tienda/finalizar_compra"}
                        className="flex justify-center mt-4 py-2 px-4 bg-green-500 font-bold text-white rounded  hover:bg-gray-800"
                      >
                        Finalizar compra
                      </Link>
                    
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
