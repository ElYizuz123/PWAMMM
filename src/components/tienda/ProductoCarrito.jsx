"use client";

import { useState } from "react";

const ProductoCarrito = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(newQuantity);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white my-2">
      <div className="flex items-center">
        {/* Información del producto */}
        <img
          src="/tienda_productos/armonia_2.png"
          alt="Producto"
          className="h-24 mr-4"
        />
        <div>
          <h2 className="font-bold">Mezcal Lucifer 400ml</h2>
          <p>Marca: Aumadito</p>
          <div className="mt-2">
            <input
              className="w-12 text-center  px-2 py-1 focus:outline-none border-2 rounded "
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
        </div>
      </div>
      <div>
        <span className="text-green-700 font-bold">$350.00</span>
      </div>
      <button className="text-red-600 hover:underline">Eliminar</button>
    </div>
  );
};

export default ProductoCarrito;
