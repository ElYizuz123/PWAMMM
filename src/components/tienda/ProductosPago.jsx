import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function ProductosPago({
  imagen,
  nombre,
  marca,
  precio,
  ml,
  cantidad,
}) {
  return (
    <div className={k2d.className}>
      <div className="bg-white p-4 flex items-center space-x-4 shadow rounded-lg my-4">
        <img
          src={`/productos/${imagen}`}
          className="h-20 w-20 object-cover rounded-full"
        />
        {/* DISEÑO TARJETAS PRODUCTOS A COMPRAR */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {nombre} {ml}ml
          </h3>
          <p className="text-gray-600">Marca: {marca}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-red-500">x{cantidad}</span>
            <div className="text-right">
              <span className="text-lg font-bold text-black">
                ${cantidad * precio}
              </span>
              <div className="w-full bg-pink-100 h-1 rounded-full mt-1">
                <div
                  className="bg-pink-500 h-1 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosPago;
