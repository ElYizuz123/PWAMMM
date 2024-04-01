import React from "react";
import Image from "next/image";
import { K2D } from "next/font/google";
import { Berkshire_Swash } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const berkshire_swash = Berkshire_Swash({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

function Formulario() {
  return (
    <div className={k2d.className}>
      <div className="relative">
        <div className={berkshire_swash.className}>
          <div className=" w-full py-48 absolute  ">
            <div className="   border-b-8 border-[#F70073] ">
              <p className="ml-20 text-5xl font-bold mb-2"> Finalizar Compra</p>
            </div>
          </div>
        </div>
        {/* Formulario */}
        <form>
          <div className="ml-10 py-72">
            <p className="font-bold text-3xl">DATOS PERSONALES</p>
          </div>

          <div className="">
            <div className="flex">
              <p className=" text-2xl ml-7">Nombre</p>
              <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              <div className=" px-96 ml-96 flex">
                <p className=" text-2xl  ">Apellido</p>
                <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              </div>
            </div>

            <div className="gap-40 flex flex-wrap  mt-2 text-xl ">
              <input
                type="text"
                name="nombre"
                className=" w-[700px] h-10 ml-7 border-2 border-black bg-gray-100 rounded-lg pl-1"
                placeholder="Juan"
              />
              <input
                type="text"
                name="apellido"
                className="  w-[700px] h-10  border-2 border-black bg-gray-100 rounded-lg pl-1"
                placeholder="Perez Torres"
              />
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">Nombre de la empresa</p>
              <p className=" text-2xl ml-9 text-[#F70073]  "> (Opcional)</p>
            </div>
            <div className=" mt-2 text-xl ">
              <input
                type="text"
                name="nombre"
                className=" w-[1555px] h-10 ml-7 border-2 border-black bg-gray-100 rounded-lg pl-1"
                placeholder="Empresa"
              />
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">Teléfono</p>
              <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              <div className=" px-96 ml-96 flex">
                <p className=" text-2xl">Correo</p>
                <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              </div>
            </div>

            <div className="gap-40 flex flex-wrap  mt-2 text-xl ">
              <input
                type="number"
                name="nombre"
                className=" w-[700px] h-10 ml-7 border-2 border-black bg-gray-100 rounded-lg pl-1"
                placeholder="44-32-72-52-90"
              />
              <input
                type="text"
                name="apellido"
                className="  w-[700px] h-10  border-2 border-black bg-gray-100 rounded-lg pl-1"
                placeholder="Perez Torres"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button className=" bg-[#F70073] text-white font-bold rounded "></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
