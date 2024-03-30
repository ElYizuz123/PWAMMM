import Link from "next/link";
import React from "react";
import { K2D } from "next/font/google";
import Tarjeta from "./Tarjeta";
import Contador from "./Contador";
import Image from "next/image";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Ficha = ({
  nombre,
  marca,
  precio,
  agave,
  cosecha,
  elaboracion,
  horno,
  molienda,
  fermentacion,
  destilador,
  alcohol,
  contenido,
  botella,
  mercadoLibre,
}) => {
  return (
    <div className={k2d.className}>
      <div className="relative">
        {/* imagen fondo */}
        <div className=" h-full w-full z-0 opacity-60 ">
          <Image
            src="/backgroundImage.jpg"
            layout="fill"
            quality={100}
            alt="Fondo"
          />
        </div>

        <div className=" pt-5 items-center relative h-screen">
          <div className=" flex justify-center items-center">
            <div className=" relative text-black py-44  z-10 flex items-start  w-[1250px]">
              <Link href="/">
                <img src="/flecha.png" className="ml-2" />
              </Link>
              <Link className="ml-3 hover:text-[#F70073]" href="/tienda">
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
                  className="w-[350px] h-[500px] bg-gray-200 rounded-md"
                  src={botella}
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
                  <strong className="text-3xl">
                    {nombre} {contenido}ml
                  </strong>
                  <strong className="mt-2 block text-2xl">${precio}</strong>
                  IVA INCLUIDO
                </p>
                {/*lista de caracteristicas*/}
                <p className="text-black mt-4">Datos del producto</p>
                <div className="col-span-1  ml-5">
                  <ul className="text-black list-disc ">
                    <li>Marca: {marca}</li>
                    <li>Agave: {agave}</li>
                    <li>Cosecha: {cosecha}</li>
                    <li>Elaboración: {elaboracion}</li>
                    <li>Horno: {horno}</li>
                    <li>Molienda: {molienda}</li>
                    <li>Fermentación: {fermentacion}</li>
                    <li>Destilador: {destilador}</li>
                    <li>Riqueza alcoholica: {alcohol}</li>
                    <li>Origen: México</li>
                  </ul>
                </div>
                <div className=" justify-center items-center">
                  {/*Botón mercado libre, solo aparece si existe link en las caracteristicas de la botella*/}
                  <div className="relative">
                    <button className="bg-[#ffe500] text-black font-bold object-cover py-2 px-28 rounded-full mt-2 flex items-center">
                      Comprar en Mercado Libre
                      <img
                        className="ml-4 h-10 w-10 "
                        src="\emoticons\mercado_libre_logo.webp"
                      />
                    </button>
                  </div>
                  <div className=" relative flex items-center ">
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
        </div>
        <div>
          {/*productos relacionados*/}
          <div className="   w-full flex justify-center items-center ">
            <p className="text-[#dd6c5a] text-3xl font-bold z-50 bg-white px-9 rounded-lg ">
              PRODUCTOS RELACIONADOS
            </p>
          </div>
          <div className="   z-0  w-full flex flex-wrap gap-10 justify-center items-center top-11 pt-11">
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ficha;
