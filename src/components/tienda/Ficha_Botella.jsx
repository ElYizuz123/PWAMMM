"use client";

import { K2D } from "next/font/google";
import Contador from "./Contador";
import Image from "next/image";

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
    <div>
      <div className="flex justify-center w-full">
        <div
          className=" bg-white rounded-lg shadow-2xl w-[80%] h-[780px] 
          sm:h-[865px] sm:w-[450px]
          md:h-auto  md:w-[80%] md:-translate-x-14
          lg:h-auto lg:w-[80%]
          2xl:h-auto  2xl:w-[80%] "
        >
          {/* imagen botellas */}
          <div className=" mt-24 flex justify-center align-middle">
            <Image
              className=" rounded-md 
              object-cover 
               sm:mt-4 sm:w-[220px] 
               md:-mt-10 md:ml-2 md:-translate-x-48 md:absolute  md:h-[300px] 
               lg:-mt-24 lg:py-12  lg:-translate-x-60  lg:h-[450px] lg:absolute
               2xl:-mt-20 2xl:translate-x-28 2xl:h-[350px] 2xl:ml-10"
              src={`/productos/${foto}`}
              width={170}
              height={320}
              quality={100}
              alt="Botellas"
            />
          </div>
          {/*información */}
          <div
            className="w-full px-12  -translate-y-5
             sm:translate-y-0 sm:-translate-x-20
             md:-translate-y-20
             lg:-translate-y-12 
             2xl:translate-y-0"
          >
            <div
              className="right-0  g-green-200 rounded-full w-auto h-20 p-4 text-center 
                   translate-x-24    -translate-y-[360px]
                   sm:translate-x-80 sm:-translate-y-[350px] sm:-mt-20 sm:flex
                   md:translate-x-1 md:-translate-y-4 md:absolute
                   lg:-translate-x-2  
                   2xl:-translate-x-10"
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

            <div
              className="w-full flex justify-end mt-12
             sm:mt-36 sm:-translate-x-4
             md:translate-x-12 md:mt-20
             lg:mt-10
             2xl:-translate-x-10 2xl:-translate-y-10"
            >
              <div className="text-black mt-0">
                <strong
                  className="text-xl 
                sm:text-2xl 
                md:text-3xl 
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
                    {cantidad}
                  </span>
                </p>
                {/*botones*/}
                <div className=" justify-center items-center mt-5">
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
                          ml={ml}
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
        <div
          className=" w-[80%] rounded-lg shadow-2xl bg-white p-4 mt-4
        sm:w-[450px] 
        md:w-[80%] md:-translate-x-14"
        >
          <h3 className="text-[#F70073] font-bold">DESCRIPCIÓN</h3>
          <h3 className=" mt-2 text-justify mx-4">{descripcion}</h3>
        </div>
      </div>
    </div>
  );
};

export default Ficha_Botella;
