"use client";

import { K2D } from "next/font/google";
import Contador from "./BotonesFicha";
import Image from "next/image";
import BotonesFicha from "./BotonesFicha";

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
  cantidadOficial,
  alcohol,
}) => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div
          className=" bg-white rounded-lg shadow-2xl w-[80%] h-[780px] 
          sm:h-[865px] sm:w-[450px]
          md:h-[400px]  md:w-[650px] 
          lg:h-[500px]  lg:w-[800px]  
          xl:h-[550px]  xl:w-[850px]   
          2xl:h-[550px]   2xl:w-[850px] "
        >
          {/* PRECIO */}
          <div
            className="right-0  g-green-200 rounded-full w-auto h-20 p-4 text-center 
                   translate-x-24    -translate-y-[360px]
                   sm:translate-x-80  sm:translate-y-0 sm:flex
                   md:translate-x-[500px]   md:translate-y-2   md:flex

                   lg:translate-x-[650px]   lg:translate-y-6  lg:flex
                   xl:translate-x-[690px]   xl:translate-y-2  xl:flex
                   2xl:translate-x-[690px]  2xl:translate-y-6 2xl:flex"
          >
            <div
              className=" bg-transparent rounded-full w-auto h-14 p-1 text-center
               sm:bg-green-200 sm:p-4 sm:h-20 sm:w-auto
               md:bg-green-200  
               lg:bg-green-200"
            >
              <p
                className="  font-bold text-lg text-green-700
                  sm:text-xl   sm:text-black
                  md:text-2xl   md:text-black
                  lg:text-2xl    lg:text-black   
                  2xl:text-3xl   2xl:text-black"
              >
                ${precio}
              </p>
              <p className=" font-thin text-xs">IVA INCLUIDO</p>
            </div>
          </div>
          {/* imagen botellas */}
          <div className=" mt-24 flex justify-center align-middle">
            <Image
              className=" rounded-md 
              object-cover 
               sm:-mt-16 sm:w-[220px]  sm:translate-x-5            sm:h-[300px] sm:object-fill
               md:w-[200px]  md:-translate-x-40 md:-translate-y-10 md:h-[300px] md:object-fill
               lg:w-[300px]  lg:-translate-x-60                    lg:h-[400px] lg:object-fill
                xl:w-[350px]  xl:-translate-x-60                   xl:h-[450px] xl:object-fill
               2xl:w-[400px]  2xl:-translate-x-28                  2xl:h-[350px] 2xl:object-fill "
              src={foto}
              width={170}
              height={320}
              quality={100}
              alt="Botellas"
            />
          </div>
          {/*información */}

          <div
            className="w-full flex justify-end mt-28
             sm:translate-x-0 sm:justify-center sm:mt-28
             md:translate-x-28 md:justify-center md:-translate-y-[400px]

             lg:translate-x-40 lg:justify-center lg:-translate-y-[490px]
             xl:translate-x-44 xl:justify-center xl:-translate-y-[500px]
             2xl:translate-x-44 2xl:justify-center 2xl:-translate-y-[510px]"
          >
            <div className="text-black mt-0">
              <strong
                className="text-xl 
                sm:text-2xl 
                md:text-2xl 
                lg:text-4xl
                xl:text-4xl
                2xl:text-4xl"
              >
                {nombre}
                <span
                  className=" ml-3  text-sm 
                  sm:text-xl 
                  md:text-xl 
                  lg:text-2xl
                  xl:text-3xl
                  2xl:text-3xl"
                >
                  {ml} ml
                </span>
              </strong>

              <p className=" text-xl  text-black font-light mt-5 ">
                Marca:
                <span className=" ml-3 text-sm text-[#F70073] font-light">
                  {marca}
                </span>
              </p>

              <p className=" text-xl  text-black font-light mt-2 ">
                Agave:
                <span className=" ml-3 text-sm text-[#F70073] font-light">
                  {agave}
                </span>
              </p>
              <p className=" text-xl  text-black font-light mt-2 ">
                Alcohol:
                <span className=" ml-3 text-sm text-[#F70073] font-light">
                  {alcohol}°
                </span>
              </p>
              <p className=" text-xl  text-black font-light mt-2">
                Existencia:
                <span className=" ml-3 text-sm text-[#F70073] font-light">
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
                    ml={ml}
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
          2xl:h-auto   2xl:w-[900px]"
        >
          <h3 className="text-[#F70073] font-bold">DESCRIPCIÓN</h3>
          <h3 className=" mt-2 text-justify mx-4">{descripcion}</h3>
        </div>
      </div>
    </div>
  );
};

export default Ficha_Botella;
