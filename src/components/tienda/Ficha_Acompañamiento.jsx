"use client";

import React from "react";
import Contador from "./Contador";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});
const Ficha_Acompañamiento = ({
  id_producto,
  nombre,
  marca,
  precio,
  gr,
  foto,
  mercadoLibre,
  descripcion,
  cantidad,
}) => {
  return (
    <div className=" relative  bg-white w-[1250px] h-auto rounded-lg shadow-2xl  top-11">
      {/*imagen botellas*/}
      <div className="px-32 py-4">
        <img
          className="w-[400px] h-[400px] rounded-md"
          src={`/productos/${foto}`}
          alt="Botellas"
        />
      </div>
      {/*imagen fondo copreata*/}
      <div className="absolute top-10 left-[700px] opacity-40">
        <img className=" object-cover " src="\cupreata.png" />
      </div>

      {/*información */}
      <div className="absolute top-10 left-[680px] ">
        <div className="text-black mt-4">
          <strong className="text-3xl ">
            {nombre}
            <span className=" ml-3  text-2xl">{gr} gr</span>
          </strong>

          <p className="  font-bold text-3xl mt-2 text-green-700">${precio}</p>
          <p className="  font-thin text-xs"> IVA INCLUIDO</p>

          <p className=" text-xl  text-black font-light mt-7 ">
            Marca:
            <span className=" ml-3 text-xl text-[#F70073] font-light">
              {marca}
            </span>
          </p>

          <p className=" text-xl  text-black font-light mt-2">
            Existencia:
            <span className=" ml-3 text-xl text-[#F70073] font-light">
              {cantidad}
            </span>
          </p>
        </div>
        {/*botones*/}
        <div className=" justify-center items-center mt-5">
          {cantidad !== 0 ? (
            <div className=" relative flex items-center ">
              <div>
                <Contador
                  cantidad2={cantidad}
                  id_producto={id_producto}
                ></Contador>
              </div>
            </div>
          ) : (
            <div className="w-[500px] mt-2 bg-red-600 text-white font-semibold flex justify-center items-center">
              SIN EXISTENCIA
            </div>
          )}

          <div className="relative mt-3">
            {mercadoLibre !== "NULL" && (
              <button className="bg-[#ffe500] hover:shadow-lg hover:-translate-y-0.5 text-black font-bold py-2 px-40 rounded   flex items-center ">
                <a
                  href={mercadoLibre}
                  target="_blank"
                  className="font-semibold"
                >
                  Comprar en mercado libre
                </a>
                <img
                  className="w-8 h-8"
                  src="\emoticons\mercado_libre_logo.webp"
                  alt="Mercado Libre"
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" absolute w-[1250px]  rounded-lg shadow-2xl bg-white p-4 ">
          <h3 className="text-black  font-bold">DESCRIPCIÓN</h3>
          <h3 className=" mt-2 text-justify mx-4">{descripcion}</h3>
        </div>
      </div>
    </div>
  );
};
//PERDON SON MUCHSO DIV

export default Ficha_Acompañamiento;
