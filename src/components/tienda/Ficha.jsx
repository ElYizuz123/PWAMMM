import Link from "next/link";
import React from "react";
import {K2D} from "next/font/google";
import Tarjeta from "./Tarjeta";
import Contador from "./Contador";
import Image from "next/image";

const k2d = K2D({
    weight: ["400"],
    styles: ["normal"],
    subsets: ["latin"],
})

const Ficha = () => {
  return (
    <div className={k2d.className}>
      <div className="min-h-screen py-5 items-center relative">
        {/*imagen fondo*/}
        <div className="fixed z-0 inset-0 opacity-20">
          <Image
            src="/backgroundImage.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Fondo"
          />
        </div>

        <div className=" flex justify-center items-center">
          <div className=" relative text-black py-44  z-50 flex items-start  w-[1250px]">
            <Link href="/">
              <img src="/flecha.png" className="ml-2" />
            </Link>
            <Link className="ml-3 hover:text-[#F70073]" href="/">
              Volver a tienda
            </Link>
          </div>
        </div>

        {/*contenido*/}
        <div className="absolute inset-0 flex justify-center items-center top-24">
          {/*tarjeta*/}
          <div className=" relative  bg-white w-[1250px] h-auto rounded-lg shadow-lg top-11">
            {/*imagen botellas*/}
            <div className="px-32 py-4">
              <img
                className="object-cover bg-gray-200 rounded-md"
                src="\botella.png"
                alt="Botellas"
              />
            </div>
            {/*imagen fondo copreata*/}
            <div className="absolute top-2 left-[600px] opacity-40">
              <img className="object-cover " src="\cupreata.png" />
            </div>

            {/*información */}
            <div className="absolute top-10 left-[750px] ">
              <p className="text-black">
                <strong className="text-3xl">Mezcal Lucifer 400ml</strong>
                <strong className="mt-2 block text-2xl">$350.00</strong>
                IVA INCLUIDO
              </p>
              {/*lista de caracteristicas*/}
              <p className="text-black mt-4">Datos del producto</p>
              <div className="col-span-1  ml-5">
                <ul className="text-black list-disc ">
                  <li>400 ml</li>
                  <li>Marca: Mezcal Armonía</li>
                  <li>Agave Cupreata</li>
                  <li>42% alcohol</li>
                  <li>Origen México</li>
                </ul>
              </div>
              {/*Botón mercado libre, solo aparece si existe link en las caracteristicas de la botella*/}
              <button className="bg-[#EEF220] text-black font-bold object-cover py-2 px-28 rounded-full mt-3 flex items-center">
                Comprar en
                <img className="ml-7 h-10 w-10 " src="\mercadoLibre.png" />
              </button>
              <div className="flex items-center ml-3">
                <button className="bg-[#F70073] text-white font-bold object-cover py-2 px-20 rounded-full mt-2 flex items-center">
                  Agregar al carrito
                </button>
                <div>
                  <Contador></Contador>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {/*productos relacionados*/}
        <div className="absolute w-full flex justify-center items-center z-10 ">
          <p className="text-black text-3xl font-bold ">
            PRODUCTOS RELACIONADOS
          </p>
        </div>
        <div className="relative z-0  w-full flex flex-wrap gap-10 justify-center items-center top-11">
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
        </div>
      </div>
      
    </div>
  );
};

export default Ficha;
