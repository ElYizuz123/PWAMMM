"use client";

import React from "react";
import Contador from "./Contador";
import Image from "next/image";


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
  cantidadOficial
}) => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div
          className="flex justify-between relative bg-white w-[80%] h-[550px]  rounded-lg shadow-2xl  
         sm:h-[750px] sm:w-[80%]
          md:h-auto  md:w-[80%]
          lg:h-auto lg:w-[80%]
          2xl:h-auto  2xl:w-[80%]"
        >
          {/*imagen acompañamientos*/}
          <div className="mt-10">
            <Image
              className=" rounded-md translate-x-[40%]  absolute
               sm:mt-4 sm:translate-x-32 sm:w-[250px] sm:absolute
               md:mt-20 md:ml-2 md:translate-x-0 md:w-[200px]  md:h-[200px] 
               lg:-mt-24 lg:py-12  lg:translate-x-10  lg:h-[350px] 
               2xl:-mt-20 2xl:translate-x-28 2xl:h-[350px] 2xl:ml-10"
              src={`/productos/${foto}`}
              width={170}
              height={320}
              quality={100}
              alt="Acompañamientos"
            />
          </div>

          {/*información */}
          <div
            className="w-full px-12  translate-y-[50%] 
             sm:translate-y-[50%] 
             md:translate-y-0  
             lg:translate-y-0 
             2xl:translate-y-0"
          >
            <div
              className="w-full flex justify-end -mt-10
             sm:mt-10 sm:-translate-x-4
             md:translate-x-12 md:mt-20
             lg:mt-10
             2xl:-translate-x-10 2xl:-translate-y-10"
            >
              <div className="text-black mt-4">
                <strong
                  className="text-xl 
                sm:text-xl 
                md:text-2xl 
                lg:text-3xl
                2xl:text-4xl"
                >
                  {nombre}
                  <span
                    className=" ml-3  text-xl 
                  sm:text-xl 
                  md:text-2xl 
                  lg:text-2xl"
                  >
                    {gr} gr
                  </span>
                </strong>

                <p className="  font-bold text-3xl mt-2 text-green-700">
                  ${precio}
                </p>
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
                    {cantidadOficial}
                  </span>
                </p>

                {/*botones*/}
                <div className=" justify-center items-center mt-2">
                  {cantidad !== 0 ? (
                    <div className=" relative flex items-center ">
                      <div>
                        <Contador
                          cantidad2={cantidad}
                          id_producto={id_producto}
                          nombre={nombre}
                          marca={marca}
                          precio={precio}
                          imagen={foto}
                          mercadoLibre={mercadoLibre}
                          ml={gr}
                        ></Contador>
                      </div>
                    </div>
                  ) : (
                    <p
                      className=" relative w-48  mt-2 bg-red-600 text-white font-semibold text-center
                           sm:w-72 sm:text-center  
                           md:w-80 md:text-center
                           lg:w-56 lg:text-center 
                           2xl:w-72 "
                    >
                      SIN EXISTENCIA
                    </p>
                  )}

                  <div className="relative mt-3">
                    {mercadoLibre !== "NULL" && (
                      <button
                        className="bg-[#ffe500] hover:shadow-lg hover:-translate-y-0.5 text-black font-bold  
                           translate-x-20 -translate-y-0 rounded  flex items-center 
                           sm:py-2.5 sm:px-2 sm:translate-x-48 sm:-translate-y-[68px]
                           md:py-0 md:px-14 md:-translate-y-1  md:translate-x-0
                           lg:py-0 lg:px-20 lg:-translate-y-1 lg:translate-x-0
                           2xl:py-0 2xl:px-48 2xl:-translate-y-1  2xl:translate-x-0"
                      >
                        <a
                          href={mercadoLibre}
                          target="_blank"
                          className="font-semibold  hidden
                            sm:block sm:text-sm
                            md:block 
                            lg:block
                            2xl:block"
                        >
                          Comprar en mercado libre
                        </a>
                        <img
                          className="w-10 h-9 rounded-lg"
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
      <div className="flex justify-center w-full">
        <div className=" w-[80%] rounded-lg shadow-2xl bg-white p-4 mt-4">
          <h3 className="text-[#F70073] font-bold">DESCRIPCIÓN</h3>
          <h3 className=" mt-2 text-justify mx-4">{descripcion}</h3>
        </div>
      </div>
    </div>
  );
};


export default Ficha_Acompañamiento;
