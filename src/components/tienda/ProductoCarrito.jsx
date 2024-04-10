"use client";

import { useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

const ProductoCarrito = ({
  id_producto,
  nombre,
  marca,
  precio,
  ml,
  imagen,
  cantidad,
}) => {
  const [quantity, setQuantity] = useState(cantidad);
  const [total, setTotal] = useState(precio * cantidad);
  const { productos } = useContext(ProductContext);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    updateQuantityAndTotal(newQuantity, 1);
  };
  
  const decrementQuantity = () => {
    const newQuantity = Math.max(1, quantity - 1); 
    updateQuantityAndTotal(newQuantity, 2);
  };
  
  const { updateQuantity } = useContext(ProductContext);
  
  const updateQuantityAndTotal = (newQuantity, tipo) => {
    setQuantity(newQuantity);
    const sumaCantidadProductos = Number(precio) * newQuantity;
    setTotal(sumaCantidadProductos);
    
    const newProduct = {
      id_producto,
      imagen,
      nombre,
      marca,
      precio,
      ml,
      cantidad: newQuantity,
      total,
    };
    
    updateQuantity(tipo, newProduct); 
    
  };
  
  const { deleteProduct } = useContext(ProductContext);

  const handleDelete = (id_producto, nombre) => {
    deleteProduct(id_producto, nombre);
  };
  
  return (
    <div>
      <div className="flex items-center bg-white shadow rounded-lg p-4 my-4">
        {/* Product details with fixed width */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          {" "}
          {/* Ajusta el ancho mínimo según tus necesidades */}
          <img
            className="h-12 w-12 rounded"
            src={`/productos/${imagen}`}
            alt="Product"
          />
          <div>
            <div className="font-medium">
              {nombre} {ml}ml
            </div>
            <div className="text-sm text-gray-500">{marca}</div>
          </div>
        </div>

        <div className="flex-grow text-center ">${precio}</div>

        <div className="flex items-center justify-center w-[120px]">
          <button className="h-7 w-7 bg-[#f89586] rounded-full text-white font-semibold hover:text-gray-100  mx-3" onClick={decrementQuantity}>
            -
          </button> 
          <span >{cantidad}</span>
          <button className=" h-7 w-7 bg-[#F89586] rounded-full text-white font-semibold hover:text-gray-100  mx-3" onClick={incrementQuantity}>
            +
          </button>
        </div>

        <div className="flex-grow text-center font-semibold text-green-600">
          ${total}
        </div>

        <div className="w-[50px]">
          {/* Ajusta el ancho según tus necesidades */}
          <button
            className="text-red-500 hover:text-gray-500 focus:outline-none text-xl"
            onClick={() => handleDelete(id_producto, nombre)}
          >
            <span className="sr-only ">Remove item</span>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCarrito;
