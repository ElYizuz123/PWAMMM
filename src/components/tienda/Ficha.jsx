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
  contenido,
  imagen,
  mercadoLibre,
  descripcion,
  cantidad,
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
            <div className=" relative  bg-white w-[1250px] h-auto rounded-lg shadow-lg  top-11">
              {/*imagen botellas*/}
              <div className="px-32 py-4">
                <img
                  className="w-[350px] h-[500px] bg-gray-200 rounded-md"
                  src={`/tienda_productos/${imagen}`}
                  alt="Botellas"
                />
              </div>
              {/*imagen fondo copreata*/}
              <div className="absolute top-2 left-[600px] opacity-40">
                <img className="object-cover " src="\cupreata.png" />
              </div>

              {/*información */}
              <div className="absolute top-10 left-[680px] ">
                <div className="flex justify-end mr-8 -mt-5 ">
                  <div className=" bg-green-200 rounded-full w-auto h-20 p-4 text-center">
                    <p className="  font-bold text-3xl">${precio}</p>
                    <p className=" font-thin text-xs">IVA INCLUIDO</p>
                  </div>
                </div>

                <div className="text-black -mt-10">
                  <strong className="text-3xl ">
                    {nombre}
                    <span className=" ml-3  text-2xl">{contenido} ml</span>
                  </strong>

                  <p className=" text-xl  text-black font-light ">
                    Marca:
                    <span className=" ml-3 text-xl text-[#F70073] font-light">
                      {marca}
                    </span>
                  </p>
                  <p className=" text-xl  text-black font-light ">
                    Alcohol:
                    <span className=" ml-3 text-xl text-[#F70073] font-light">
                      45°
                    </span>
                  </p>
                </div>

                {/*descripcion*/}
                <p className="text-black mt-6 font-bold">DESCRIPCIÓN:</p>
                <div className="text-justify mr-9 mt-3">
                  <h3>{descripcion}</h3>
                </div>

                {/*botones*/}
                <div className=" justify-center items-center">
                  <div className=" relative flex items-center ">
                    <Link
                      href={"/tienda/carrito"}
                      className="bg-[#F70073] text-white hover:shadow-lg hover:-translate-y-0.5 font-bold object-cover py-3 px-20 rounded-full mt-4 flex items-center"
                    >
                      Agregar al carrito
                    </Link>
                    <div>
                      <Contador cantidad2={cantidad}></Contador>
                    </div>
                  </div>
                  <div className="relative mt-3">
                    {mercadoLibre !== "NULL" && (
                      <button className="bg-[#ffe500] hover:shadow-lg hover:-translate-y-0.5 text-black font-bold py-2 px-40 rounded-full  flex items-center ">
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
