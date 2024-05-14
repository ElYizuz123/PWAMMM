"use client";

import { ProductContext } from "@/context/ProductContext";
import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import Link from "next/link";

const Contador = ({
  id_producto,
  nombre,
  marca,
  precio,
  imagen,

  ml,

  cantidad2,
}) => {
  const [count, setCount] = useState(1);
  const [buttonState, setButtonState] = useState("idle");
  const maxCount = cantidad2;

  const increment = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const { addProductos } = useContext(ProductContext);
  const handleAddToCart = () => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
      const newProduct = {
        id_producto,
        count,
        nombre,
        marca,
        precio,
        imagen,
        ml,
      };

      addProductos(newProduct);

      setTimeout(() => {
        setButtonState("idle");
      }, 3000);
    }, 2500);
  };

  return (
    <div class="w-full  flex items-center">
      <div
        className="
        sm:w-44 sm:-translate-x-0
        md:w-44 md:translate-x-0
        lg:w-64 lg:translate-x-0
        2xl:w-64 2xl:translate-x-0
        hidden sm:block md:block lg:block 2xl:block"
      >
        <button
          className={`  btnTarjeta font-semibold ${
            buttonState === "loading" && "bg-pink-300"
          }`}
          onClick={handleAddToCart}
        >
          {buttonState === "idle" && "Añadir A Carrito"}
          {buttonState === "loading" && (
            <RefreshIcon className="h-5 w-5 animate-spin mx-auto" />
          )}
          {buttonState === "success" && (
            <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
          )}
        </button>
      </div>
      <div className=" block sm:hidden md:hidden lg:hidden 2xl:hidden">
        <button onClick={handleAddToCart}>
          <img
            src="/emoticons/carrito3.png"
            alt="Imagen"
            className="w-11 translate-x-20 "
          />
        </button>
      </div>

      <div
        className=" flex -mt-0 
         px-8 -translate-x-5 -translate-y-[280px]
         sm:-translate-x-20 sm:-translate-y-[280px]
         md:translate-x-4  md:translate-y-3
         lg:-translate-x-4  lg:translate-y-3
         2xl:translate-x-5 2xl:translate-y-0"
      >
        <button
          className="h-6 w-6 text-sm bg-[#f70073] rounded-full text-white font-semibold hover:text-gray-100  mx-3
          sm:h-10 sm:w-10 sm:text-2xl
          md:h-10 md:w-10 md:text-2xl
          lg:h-10 lg:w-10 lg:text-2xl
          2xl:h-10 2xl:w-10 2xl:text-2xl"
          onClick={decrement}
        >
          -
        </button>
        <span
          className="text-sm
           sm:text-xl
           md:text-xl
           lg:text-xl
           2xl:text-xl"
        >
          {count}
        </span>
        <button
          className=" h-6 w-6 bg-[#f70073] rounded-full text-white font-semibold hover:text-gray-100  mx-3
            sm:h-10 sm:w-10 sm:text-2xl
            md:h-10 md:w-10 md:text-2xl
            lg:h-10 lg:w-10 lg:text-2xl
            2xl:h-10 2xl:w-10 2xl:text-2xl"
          onClick={increment}
        >
          <p className="-py-3 text-sm">+</p>
        </button>
      </div>
    </div>
  );
};

export default Contador;
