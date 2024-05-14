"use client";

import { useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";
import { CantidadContext } from "@/context/CantidadContext";

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
  const { decrementStock, stock } = useContext(CantidadContext);
  const [quantity, setQuantity] = useState(cantidad);
  const { updateQuantity, deleteProduct } = useContext(ProductContext);

  let maxStock = stock[id_producto];

  // FUNCIÓN PARA INCREMENTAR LA CANTIDAD DE PRODUCTOS
  const incrementQuantity = () => {
    if (quantity < (maxStock+cantidad)) {
      const newQuantity = quantity + 1;
      updateQuantityAndTotal(newQuantity, "SUMA");
      decrementStock(id_producto, 1);
      maxStock = stock[id_producto];
    }
  };
  // FUNCIÓN PARA DECREMENTAR LA CANTIDAD DE PRODUCTOS
  const decrementQuantity = () => {
    const newQuantity = Math.max(1, quantity - 1);
    updateQuantityAndTotal(newQuantity, "RESTA");
    //incrementStock(id_producto, 1);
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
  };

  return (
    <div>
      <div className="flex items-center bg-white shadow rounded-lg p-4 my-4">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          {/* DISEÑO TARJETA PRODUCTOS EN CARRITO */}
          <img
            className="h-[100px] w-[100px] rounded"
            src={`/productos/${imagen}`}
            alt="Product"
          />
          <div>
            <div className="font-medium text-base">
              {nombre} {ml}ml
            </div>
            <div className="text-xs text-gray-500">{marca}</div>
          </div>
        </div>
        <div className="flex-grow text-center ">${precio}</div>
        <div className="flex items-center justify-center w-[120px]">
          {/* BOTÓN DECREMENTAR PRODUCTO CARRITO */}
          <button
            className="h-7 w-7 bg-[#f89586] rounded-full text-white font-semibold hover:bg-[#faa4a6] mx-3 transition-colors duration-200 ease-in-out transform active:scale-90 active:translate-y-1"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span>{cantidad}</span>
          {/* BOTÓN INCREMENTAR PRODUCTO CARRITO */}
          <button
            className="h-7 w-7 bg-[#F89586] rounded-full text-white font-semibold hover:bg-[#faa4a6] mx-3 transition-colors duration-200 ease-in-out transform active:scale-90 active:translate-y-1"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <div className="flex-grow text-center font-semibold text-green-600">
          ${subtotal}
        </div>
        {/* BOTÓN ELIMINAR PRODUCTO CARRITO */}
        <div className="w-[50px]">
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
