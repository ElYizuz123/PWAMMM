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
      <div className="relative flex mt-2 ">
        {/*tarjeta*/}
        <div className=" w-[500px] h-auto mt-4 ">
          <div className="border-b-2 border-opacity-20 w-[600px] border-[#F70073]  ">
            <img
              className="  w-[150px] h-[200px] ml-5 rounded-md"
              src={`/productos/${imagen}`}
              alt="Botellas"
            />

            {/*información */}
            <div className="absolute top-8 left-[160px] ml-10">
              <p className="text-black text-2xl font-bold">
                {nombre} {ml}ml
               
              </p>
              <p className="mt-2 text-black text-xl">Marca: {marca}</p>
            </div>
            <div className="absolute top-44 left-[180px] flex ml-10">
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
    </div>
  );
}

export default ProductosPago;