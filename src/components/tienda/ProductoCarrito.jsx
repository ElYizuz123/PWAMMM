"use client";

import { useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

const ProductoCarrito = ( {id_producto, nombre, marca, precio, ml,imagen, cantidad} ) => {
  const [quantity, setQuantity] = useState(cantidad);
  const [total, setTotal] = useState(precio*cantidad);



  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(newQuantity);
    const sumaCantidadProductos = Number(precio) * newQuantity;
    setTotal(sumaCantidadProductos);
    
  };

  const { deleteProduct } = useContext(ProductContext);

  const handleDelete = (id_producto, nombre) => {
    deleteProduct(id_producto, nombre);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-lg my-2">
      <div className="flex items-center">
        <img
          src={`/productos/${imagen}`}
          alt="Producto"
          className="h-24 mr-4"
        />
        <div>
          <h2 className="font-bold">
            {nombre} {ml}ml
          </h2>
          <p> {marca}</p>
          <div className="mt-2">
            <input
              className="w-12 text-center  px-2 py-1   rounded "
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <span className="text-green-500 ml-2">x ${precio}</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold">
          SUB-TOTAL 
        </h2>
        <span className="ml-4 text-green-700 font-bold">$ {total}</span>
      </div>
      <button className="text-red-600 hover:underline" onClick={() => handleDelete(id_producto, nombre)}>Eliminar</button>
    </div>
  );
};

export default ProductoCarrito;
