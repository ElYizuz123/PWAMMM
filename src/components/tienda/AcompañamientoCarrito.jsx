import React from "react";

const AcompañamientoCarrito = () => {
  return (
    <div className="my-2 p-2 bg-gray-100 flex items-center ">
      <div className="justify-between">
        <img
          src="/tienda_productos/queso.png"
          alt="Producto"
          className="h-24 mr-4"
        />
      </div>

      <div>
        <h4>Queso cotija 500 gr</h4>
        <p className="text-green-700 font-bold ">$500.00</p>
        <button className="text-blue-600 hover:underline">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default AcompañamientoCarrito;
