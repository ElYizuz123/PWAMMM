"use client";

import { ProductContext } from "@/context/ProductContext";
import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import Link from "next/link";
import { CantidadContext } from "@/context/CantidadContext";

const BotonesFicha = ({
  id_producto,
  nombre,
  marca,
  precio,
  imagen,
  ml,
  cantidad2,
  mercadoLibre,
}) => {
  const { decrementStock } = useContext(CantidadContext);
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
      decrementStock(id_producto, count);
      setCount(1);

      setTimeout(() => {
        setButtonState("idle");
      }, 3000);
    }, 2500);
  };

  return (
    <div
      class="w-full  flex items-center
   sm:relative
   md:relative
   lg:relative
   xl:relative
   2xl:relative"
    >
      {/* BOTON AÑADIR AL CARRITO */}

      {cantidad2 !== 0 ? (
        <div>
          <div
            className="
        sm:w-64  sm:absolute sm:-ml-5
        md:w-72  md:absolute md:-mt-3
        lg:w-72  lg:absolute lg:translate-x-8
        xl:w-72  xl:absolute xl:translate-x-8
        2xl:w-72 2xl:absolute 2xl:translate-x-8
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
        </div>
      ) : (
        <div>
          <div
            className="      w-48  mt-2 bg-red-600 text-white font-semibold text-center absolute
                          sm:w-64  sm:absolute sm:-ml-5 sm:text-center
                          md:w-72 md:absolute md:-ml-2 md:text-center md:-mt-3
                           lg:w-72  lg:absolute lg:translate-x-8
                           xl:w-72  xl:absolute xl:translate-x-8
                           2xl:w-72 2xl:absolute 2xl:translate-x-8 "
          >
            SIN EXISTENCIA
          </div>
        </div>
      )}
      {/* BOTON MERCADO LIBRE */}
      <div className=" mt-3">
        {mercadoLibre !== "NULL" && (
          <button
            className="btnMercadoLibre 
                           sm:w-64  sm:absolute sm:-ml-5 sm:mt-6  sm:px-3
                           md:w-72  md:absolute md:mt-2 md:px-2
                           lg:w-72  lg:absolute lg:translate-x-8 lg:mt-12
                           xl:w-72  xl:absolute xl:translate-x-8  xl:mt-12
                           2xl:w-72 2xl:absolute 2xl:translate-x-8 2xl:mt-14"
          >
            <Link
              href={mercadoLibre}
              className="  hidden
                            sm:block sm:text-sm sm:mr-5 sm:text-center sm:py-1
                            md:block md:text-sm md:mr-5 md:text-center md:py-1
                            lg:block
                            xl:block
                            2xl:block"
            >
              Comprar en mercado libre
            </Link>

            <img
              className="w-10 h-9 rounded-lg
              sm:w-7 sm:h-7 "
              src="\emoticons\mercado_libre_logo.webp"
              alt="Mercado Libre"
            />
          </button>
        )}
      </div>
      {/*BOTON INCREMENTAR/DECREMENTAR  */}

      <div
        className=" flex -mt-0 
         px-8 -translate-x-5 -translate-y-[280px]
         sm:-translate-y-72 sm:translate-x-5 
         md:-translate-y-12 md:translate-x-32 

         lg:translate-x-36 lg:-translate-y-12
         xl:translate-x-36 xl:-translate-y-12
         2xl:translate-x-40 2xl:translate-y-14"
      >
        <button
          className="h-6 w-6 text-sm bg-[#f70073] rounded-full text-white font-semibold hover:text-gray-100  mx-3
          sm:h-10 sm:w-10 sm:text-2xl
          md:h-8 md:w-8 md:text-2xl
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
            md:h-8 md:w-8 md:text-2xl
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

export default BotonesFicha;
