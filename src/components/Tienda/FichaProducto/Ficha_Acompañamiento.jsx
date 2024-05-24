"use client";

import React from "react";

import Image from "next/image";
import BotonesFicha from "./BotonesFicha";
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
  cantidadOficial,
}) => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div
          className=" bg-white rounded-lg shadow-2xl 
             w-[300px] h-[780px] 
          sm:h-[865px] sm:w-[450px]
          md:h-[400px]  md:w-[650px] 
          lg:h-[500px]  lg:w-[800px]  
          xl:h-[550px]  xl:w-[850px]   
          2xl:h-[550px]   2xl:w-[1000px] "
        >
          {/*imagen acompañamientos*/}
          <div className=" flex justify-center align-middle">
            <Image
              className=" rounded-md object-fill
               sm:mt-10 sm:w-[220px]  sm:translate-x-5            sm:h-[300px] sm:object-fill
               md:w-[200px]  md:-translate-x-52 md:-translate-y-5 md:h-[300px] md:object-fill
               lg:w-[300px]  lg:-translate-x-60                    lg:h-[400px] lg:object-fill
                xl:w-[350px]  xl:-translate-x-60                   xl:h-[450px] xl:object-fill
               2xl:w-[320px]  2xl:-translate-x-72     2xl:mt-20             2xl:h-[400px] 2xl:object-fill "
              src={foto}
              width={130}
              height={200}
              quality={100}
              alt="Botellas"
            />
          </div>
          {/*información */}
          <div
            className="w-full flex  mt-28
               translate-x-2 justify-center
             sm:translate-x-0 sm:justify-center sm:mt-32
             md:translate-x-28 md:justify-center md:-translate-y-[450px]

             lg:translate-x-40 lg:justify-center lg:-translate-y-[490px]
             xl:translate-x-44 xl:justify-center xl:-translate-y-[500px]
             2xl:translate-x-36 2xl:justify-center 2xl:-translate-y-[490px]"
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
                  className=" ml-3  text-sm 
                  sm:text-xl 
                  md:text-2xl 
                  lg:text-2xl"
                >
                  {gr} gr
                </span>
              </strong>

              <p className="  font-bold text-2xl mt-2 text-green-700">
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
              <div
                className="flex justify-center items-center mt-5
                sm:justify-center
                md:justify-center
                lg:justify-center
                xl:justify-center
                2xl:justify-center"
              >
                <div>
                  <BotonesFicha
                    cantidad2={cantidad}
                    id_producto={id_producto}
                    nombre={nombre}
                    marca={marca}
                    precio={precio}
                    imagen={foto}
                    ml={gr}
                    mercadoLibre={mercadoLibre}
                  ></BotonesFicha>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*descripcion*/}
      <div className="flex justify-center w-full">
        <div
          className=" w-[80%] rounded-lg shadow-2xl bg-white p-4 mt-4
          sm:h-auto sm:w-[450px]
          md:h-auto  md:w-[650px] 
          lg:h-auto  lg:w-[800px]  
          xl:h-auto xl:w-[850px] 
          2xl:h-auto   2xl:w-[1000px]"
        >
          <h3 className="text-[#F70073] font-bold">DESCRIPCIÓN</h3>
          <h3 className=" mt-2 text-justify mx-4">{descripcion}</h3>
        </div>
      </div>
    </div>
  );
};

export default Ficha_Acompañamiento;
