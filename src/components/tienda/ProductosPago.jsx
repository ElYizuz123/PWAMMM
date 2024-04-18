import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function ProductosPago({
  id_producto,
  imagen,
  nombre,
  marca,
  precio,
  ml,
  cantidad
}) {
 
  return (
    <div className={k2d.className}>
      <div className="relative flex mt-5 ">
        <div className="border-b-2 border-opacity-20 w-[600px] h-[100px] border-[#F70073]  ">
          <div>
            <img
              src={`/productos/${imagen}`}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
          </div>

          {/*información */}
          <div className="absolute top-3 left-[160px] ml-10">
            <p className="text-black text-xl font-bold">
              {nombre} {ml}ml
            </p>
            <p className="mt-2 text-black text-xl">Marca: {marca}</p>
          </div>
          <div className="absolute mt-2 left-[180px] flex ml-10">
            <p className="text-[#F70073] text-xl font-semibold ">
              {/*cantidad de productos*/} x{cantidad}
            </p>
            <p className=" text-green-700 font-bold text-xl ml-48">
              {/*precio productos*/} ${precio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosPago;