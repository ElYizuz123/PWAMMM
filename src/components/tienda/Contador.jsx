"use client";

import { ProductContext } from "@/context/ProductContext";
import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import Link from "next/link";

const Contador = ({
  id_producto,
  imagen,
  nombre,
  marca,
  precio,
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
      imagen,
      nombre,
      marca,
      precio,
      ml,
      count,
    };
    console.log({ id_producto });
    addProductos(newProduct);

     setTimeout(() => {
        setButtonState("idle");
      }, 3000);
    }, 2500);
  };

  return (
    <div class=" relative flex items-center">
      <div className="w-72">
        <button
          className={`  btn  font-semibold ${
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




      <div className="flex items-center justify-center w-[120px] ml-[95px] mt-4">
        <button
          className="h-10 w-32 bg-[#f70073] rounded-full text-white font-semibold hover:text-gray-100  mx-3 "
          onClick={decrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className=" h-10 w-32 bg-[#f70073] rounded-full text-white font-semibold hover:text-gray-100  mx-3"
          onClick={increment}
        >
          <p className="-py-3">+</p>
        </button>
      </div>
    </div>
  );
};

export default Contador;
