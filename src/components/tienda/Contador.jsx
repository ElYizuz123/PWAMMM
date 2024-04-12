"use client";

import { ProductContext } from "@/context/ProductContext";
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
  const maxCount = cantidad2;

  const increment = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };
  
  const { addProductos } = useContext(ProductContext);
  const handleAddToCart = () => {
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
  };

  return (
    <div class=" relative flex items-center">
      <div className="  flex items-center ">
        <button onClick={handleAddToCart}>
          <Link
            href={"/tienda/carrito"}
            className="bg-[#F70073] text-white hover:shadow-lg hover:-translate-y-0.5 font-bold object-cover py-3 px-20 rounded mt-4 flex items-center"
          >
            Agregar al carrito
          </Link>
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
