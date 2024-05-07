"use client";

import React, { useEffect, useState } from "react";
import { K2D } from "next/font/google";
import Contador from "./Contador";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Ficha_Botella = ({
  id_producto,
  nombre,
  marca,
  precio,
  foto,
  mercadoLibre,
  descripcion,
  ml,
  agave,
  cantidad,
  alcohol,
}) => {

  return (
    <div className={k2d.className}>
      <div className="relative">
          {/*contenido*/}
          <div className="absolute inset-0 flex justify-center items-center top-24">
           
              <div>
                {/*tarjeta*/}
                <div className=" relative  bg-white w-[1250px] h-auto rounded-lg shadow-2xl  top-11">
                  {/*imagen botellas*/}
                  <div className="ml-20 py-4">
                    <img
                      className="w-[400px] h-[500px] rounded-md  "
                      src={`/productos/${foto}`}
                      alt="Botellas"
                    />
                  </div>
                  {/*imagen fondo copreata*/}
                  <div className="absolute top-10 left-[580px] opacity-40 ">
                    <img className="object-cover " src="\cupreata.png" />
                  </div>

                  {/*información */}
                  <div className="absolute top-10 left-[600px] ">
                    <div className="flex justify-end mr-0 -mt-1 ">
                      <div className=" bg-green-200 rounded-full w-auto h-20 p-4 text-center">
                        <p className="  font-bold text-3xl">${precio}</p>
                        <p className=" font-thin text-xs">IVA INCLUIDO</p>
                      </div>
                    </div>

                    <div className="text-black mt-4">
                      <strong className="text-3xl ">
                        {nombre}
                        <span className=" ml-3  text-2xl">{ml} ml</span>
                      </strong>

                      <p className=" text-xl  text-black font-light mt-5 ">
                        Marca:
                        <span className=" ml-3 text-xl text-[#F70073] font-light">
                          {marca}
                        </span>
                      </p>

                      <p className=" text-xl  text-black font-light mt-2 ">
                        Agave:
                        <span className=" ml-3 text-xl text-[#F70073] font-light">
                          {agave}
                        </span>
                      </p>
                      <p className=" text-xl  text-black font-light mt-2 ">
                        Alcohol:
                        <span className=" ml-3 text-xl text-[#F70073] font-light">
                          {alcohol}°
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
                        {cantidad !== 0 ? ( <div className=" relative flex items-center ">
                        <div>
                          <Contador
                            cantidad2={cantidad}
                            id_producto={id_producto}
                          ></Contador>
                        </div>
                      </div> ) : ( <div className="w-[500px] mt-2 bg-red-600 text-white font-semibold flex justify-center items-center">SIN EXISTENCIA</div> )}
                      
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
                </div>
              </div>
         
          </div>
        </div>
        {/*descripcion*/}
        <div className=" flex justify-center items-center ">
          <div className=" absolute w-[1250px]  rounded-lg shadow-2xl bg-white p-4 ">
            <h3 className="text-black  font-bold">DESCRIPCIÓN</h3>
            <h3 className=" mt-2 text-justify mx-4">
              {descripcion}
             
            </h3>
          </div>
        </div>
        <div>
         
        </div>
      </div>
    // </div>
  );
};

export default Ficha_Botella;