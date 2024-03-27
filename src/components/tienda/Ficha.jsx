import Link from "next/link";
import React from "react";
import {K2D} from "next/font/google";

const k2d = K2D({
    weight: ["400"],
    styles: ["normal"],
    subsets: ["latin"],
})

const Ficha = () => {
  return (
    <div className={k2d.className}>
      <div className="min-h-screen   flex justify-center items-center bg-slate-100">
        {/*imagen fondo*/}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-45"
            src="\backgroundImage.jpg"
            alt="Background"
          />
        </div>

        {/*contenido*/}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          {/*tarjeta*/}
          <div className=" relative bg-white w-[1000px] h-auto rounded-lg shadow-lg">
            {/*imagen botellas*/}
            <div className="px-10 py-4">
              <img
                className="object-cover bg-gray-200 rounded-md"
                src="\botella.png"
                alt="Botellas"
              />
            </div>
            {/*imagen fondo copreata*/}
            <div className="absolute top-2 left-[400px] opacity-40">
              <img className="object-cover " src="\cupreata.png" />
            </div>

            {/*información */}
            <div className="absolute top-10 left-[550px] ">
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

              <button className="bg-[#EEF220] text-black font-bold object-cover py-2 px-10 rounded-full mt-3 flex items-center">
                Comprar en
                <img className="ml-7 h-10 w-10 " src="\mercadoLibre.png" />
              </button>

              <button className="bg-[#F70073] text-white font-bold object-cover py-2 px-10 rounded-full mt-2 flex items-center">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ficha;
