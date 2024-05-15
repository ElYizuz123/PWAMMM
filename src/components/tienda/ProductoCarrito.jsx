"use client";

import { useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";
import { CantidadContext } from "@/context/CantidadContext";
import Image from "next/image";

const ProductoCarrito = ({
  id_producto,
  nombre,
  marca,
  precio,
  ml,
  imagen,
  cantidad,
  subtotal,
}) => {
  const { decrementStock, incrementStock, stock } = useContext(CantidadContext);
  const [quantity, setQuantity] = useState(cantidad);
  const { updateQuantity, deleteProduct } = useContext(ProductContext);

  // FUNCIÓN PARA INCREMENTAR LA CANTIDAD DE PRODUCTOS
  const incrementQuantity = () => {
    if (quantity < (stock[id_producto] + cantidad)) {
      updateQuantityAndTotal(quantity + 1, "SUMA");
      decrementStock(id_producto, 1);
    }
  };
  // FUNCIÓN PARA DECREMENTAR LA CANTIDAD DE PRODUCTOS
  const decrementQuantity = () => {
    if (quantity - 1 != 0) {
      updateQuantityAndTotal(quantity - 1, "RESTA");
      incrementStock(id_producto, 1);
    }
  };

  //EDITA LA CANTIDAD DEL PRODUCTO A COMPRAR

  const updateQuantityAndTotal = (newQuantity, operacion) => {
    setQuantity(newQuantity);

    const newProduct = {
      id_producto,
      imagen,
      nombre,
      marca,
      precio,
      ml,
      cantidad: newQuantity,
    };

    updateQuantity(operacion, newProduct);
  };
  //FUNCIÓN PARA ELIMINAR UN PRODUCTO
  const handleDelete = (id_producto) => {
    deleteProduct(id_producto);
    incrementStock(id_producto, quantity);
  };

  return (
    <div>
      <div
        className="flex items-center bg-white shadow rounded-lg p-4 my-4
        h-60 w-80 -translate-x-5
        sm:h-52 sm:w-[80%] sm:relative sm:translate-x-[10%] 
        md:w-[420px] md:translate-x-0
        lg:p-4 lg:h-32 lg:w-[630px] lg:flex 
        xl:w-[700px]
        2xl:p-4  2xl:h-32 2xl:w-[950px] 2xl:flex 
      "
      >
        <div
          className="flex items-center space-x-4 flex-1 min-w-0 
        lg:space-x-4 
        2xl:space-x-4 "
        >
          {/* DISEÑO TARJETA PRODUCTOS EN CARRITO */}
          <Image
            className="rounded 
            translate-x-0 -translate-y-14 absolute object-cover
            sm:-mt-10 sm:ml-8 sm:w-[80px]  sm:translate-x-0 sm:translate-y-0 sm:object-cover
            lg:h-[100px] lg:w-[70px] lg:-translate-x-8 lg:translate-y-5 lg:object-cover
            xl:w-[80px] xl:object-cover
            2xl:h-[110px] 2xl:w-[90px] 2xl:-translate-x-8 2xl:translate-y-5 2xl:object-cover"
            src={`/productos/${imagen}`}
            alt="Product"
            width={80}
            height={60}
            quality={100}
          />
          <div>
            <div
              className="font-medium text-base
               translate-x-20 -translate-y-16 mt-2
               
               sm:translate-x-32 sm:-mt-2 sm:ml-4 sm:text-sm 
               lg:font-medium lg:translate-x-16 lg:-translate-y-6 lg:mt-5
               2xl:text-sm 2xl:translate-x-24"
            >
              {nombre}
              <p>{ml}ml</p>
            </div>
            <div
              className="text-xs text-gray-500
              -translate-y-16 mt-2 translate-x-20
             sm:translate-x-32 sm:ml-4 sm:mt-0 sm:absolute
             lg:translate-x-16 lg:mt-10 
             2xl:translate-x-24
             xl:translate-x-16"
            >
              {marca}
            </div>
          </div>
        </div>
        <div
          className="
            ml-24 mt-2 absolute
           sm:mt-4 sm:ml-40 sm:absolute
          
           lg:flex-grow lg:text-center lg:translate-x-36  lg:-translate-y-2 
           xl:translate-x-[180px]
           2xl:flex-grow 2xl:text-center 2xl:translate-x-56"
        >
          ${precio}
        </div>

        {/* BOTÓN DECREMENTAR PRODUCTO CARRITO */}
        <div
          className=" items-center justify-center w-[120px]
           translate-y-12 -translate-x-[10px] absolute
           sm:translate-y-16 sm:translate-x-5 sm:absolute 
           lg:translate-x-[350px] lg:translate-y-0
           xl:translate-x-[390px]
           2xl:translate-x-[550px]
           "
        >
          <button
            className="h-6 w-6 bg-[#f89586] rounded-full text-white font-semibold hover:bg-[#faa4a6] mx-3 transition-colors duration-200 ease-in-out transform active:scale-90 active:translate-y-1
            sm:h-5 sm:w-5
            lg:h-6 lg:w-6
            2xl:h-7 2xl:w-7"
            onClick={decrementQuantity}
          >
            <p className="sm:-translate-y-1 lg:-translate-y-[2px]">-</p>
          </button>
          <span>{cantidad}</span>
          {/* BOTÓN INCREMENTAR PRODUCTO CARRITO */}
          <button
            className="h-6 w-6 bg-[#F89586] rounded-full text-white font-semibold hover:bg-[#faa4a6] mx-3 transition-colors duration-200 ease-in-out transform active:scale-90 active:translate-y-1
            sm:h-5 sm:w-5
             lg:h-6 lg:w-6
            2xl:h-7 2xl:w-7"
            onClick={incrementQuantity}
          >
            <p className="sm:-translate-y-1 lg:-translate-y-[2px] ">+</p>
          </button>
        </div>

        <div
          className=" text-center font-semibold text-green-600 
        translate-y-10 -translate-x-[43px]
        sm:translate-y-[53px] sm:translate-x-52 sm:absolute
        lg:flex-grow lg:text-center lg:translate-x-[480px] lg:-translate-y-0
        xl:translate-x-[520px]
        2xl:flex-grow 2xl:text-center 2xl:translate-x-[760px] 2xl:-translate-y-0
        "
        >
          <p
            className="  sm:block md:block lg:hidden 2xl:hidden -ml-2
           text-xs text-gray-500 -translate-x-12 translate-y-5"
          >
            Subtotal:
          </p>
          ${subtotal}
        </div>
        {/* BOTÓN ELIMINAR PRODUCTO CARRITO */}
        <div
          className="translate-x-5 w-[50px] 
        sm:absolute sm:right-0 sm:translate-x-0"
        >
          <button class="bin-button" onClick={() => handleDelete(id_producto)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 39 7"
              class="bin-top"
            >
              <line
                stroke-width="4"
                stroke="white"
                y2="5"
                x2="39"
                y1="5"
              ></line>
              <line
                stroke-width="3"
                stroke="white"
                y2="1.5"
                x2="26.0357"
                y1="1.5"
                x1="12"
              ></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 33 39"
              class="bin-bottom"
            >
              <mask fill="white" id="path-1-inside-1_8_19">
                <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
              </mask>
              <path
                mask="url(#path-1-inside-1_8_19)"
                fill="white"
                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
              ></path>
              <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
              <path stroke-width="4" stroke="white" d="M21 6V29"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 89 80"
              class="garbage"
            >
              <path
                fill="white"
                d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCarrito;
