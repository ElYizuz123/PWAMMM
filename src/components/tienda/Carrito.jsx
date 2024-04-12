"use client";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

const Carrito = () => {
  const { productos } = useContext(ProductContext);
  return (
    <div className="relative">
      <Link href={"/tienda/carrito"}>
        <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-50 hover:scale-110 transition transform duration-300 ease-in-out">
          <div className="relative flex justify-center items-center">
            <img src="\emoticons\carrito.png" className="z-10 object-cover" />

            <span className="absolute -top-5 -right-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 rounded-full z-20">
              {productos.reduce(
                (total, producto) => total + producto.cantidad,
                0
              )}
            </span>
          </div>
        </div>
      </Link>
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
