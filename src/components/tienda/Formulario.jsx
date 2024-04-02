import Image from "next/image";
import { K2D } from "next/font/google";
import { Berkshire_Swash } from "next/font/google";

import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";
import DetallesPago from "./DetallesPago";

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

const estados = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

function Formulario() {

  return (
    <div className={k2d.className}>
      <div className="relative ">
        <div className={berkshire_swash.className}>
          <div className=" w-full py-48 absolute  ">
            <div className="   border-b-8 border-[#F70073] ">
              <p className="ml-20 text-5xl font-bold mb-2"> Finalizar Compra</p>
            </div>
          </div>
        </div>
        {/* Formulario */}
        {/* DATOS PERSONALES*/}
        <form>
          <div>
            <div className="ml-7 py-72">
              <p className="font-bold text-3xl">DATOS PERSONALES</p>
            </div>
            <div className="flex -mt-60 ">
              <p className=" text-2xl ml-7">Nombre</p>
              <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              <div className=" px-96  flex">
                <p className=" text-2xl ml-96">Apellido</p>
                <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              </div>
            </div>

            <div className="gap-40 flex flex-wrap  mt-2 text-xl relative ">
              <input
                type="text"
                name="nombre"
                className=" w-[700px] h-10 ml-7   
                bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="Juan"
              />

              <input
                type="text"
                name="apellido"
                className="  w-[700px] h-10  bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none  focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block "
                placeholder="Perez Torres"
              />
            </div>
            <div className="flex mt-4 ">
              <p className=" text-2xl ml-7">Nombre de la empresa</p>
              <p className=" text-2xl ml-9 text-[#F70073]  "> (Opcional)</p>
            </div>
            <div className=" mt-2 text-xl  ">
              <input
                type="text"
                name="nombreEmpresa"
                className=" w-[1560px] h-10 ml-7  bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="Empresa"
              />
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">Teléfono</p>
              <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              <div className=" px-96  -ml-3 flex ">
                <p className=" text-2xl ml-96">Correo</p>
                <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              </div>
            </div>

            <div className="gap-40 flex flex-wrap  mt-2 text-xl ">
              <input
                type="tel"
                name="telefono"
                className=" w-[700px] h-10 ml-7 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="44-32-72-52-90"
              />
              <input
                type="email"
                name="email"
                className="w-[700px] h-10  bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="correo@gmail.com"
              />
            </div>
            <div className="flex justify-end mt-4 mr-16  ">
              <button className="bg-[#F70073] -mr-5 text-white font-bold rounded-xl py-2  w-32 h-10">
                Continuar
              </button>
            </div>
          </div>
        </form>
        <form>
          {/* DIRECCIÓN*/}
          <div>
            <div className="ml-7">
              <p className="font-bold text-3xl">DIRECCIÓN</p>
            </div>
            <div className="flex mt-10 ">
              <p className=" text-2xl ml-7">Código postal</p>
              <p className=" text-2xl px-0 text-[#F70073]">*</p>
              <div className="ml-44 flex">
                <p className=" text-2xl ">Calle</p>
                <p className=" text-2xl px-0 text-[#F70073]">*</p>
              </div>
              <div className="ml-96 px-4 flex">
                <p className=" text-2xl ml-14">Num.Exterior</p>
                <p className=" text-2xl px-0 text-[#F70073]">*</p>
              </div>
              <div className="ml-52 flex">
                <p className=" text-2xl ">Num.Interior</p>
                <p className=" text-2xl px-0 text-[#F70073] ml-3"> (Opcional)</p>
              </div>
            </div>
            <div className="gap-40 flex flex-wrap  mt-2 text-xl ">
              <input
                type="text"
                name="cp"
                className=" w-[200px] h-10 ml-7 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="55000"
              />
              <input
                type="text"
                name="calle"
                className="w-[362px] h-10 -ml-6 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="Novena"
              />
              <input
                type="text"
                name="numExterior"
                className="w-[312px] h-10 ml-0 px-0 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="  #"
              />
              <input
                type="text"
                name="numInterior"
                className="w-[320px] h-10 -ml-24  bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="#"
              />
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">
                Colonia
                <span className=" text-2xl   text-[#F70073]">*</span>
              </p>
            </div>
            <div className=" mt-2 text-xl ">
              <input
                type="text"
                name="colonia"
                className=" w-[1555px] h-10 ml-7 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="Silvestre"
              />
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">Ciudad</p>
              <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              <div className=" px-96  flex ml-2">
                <p className=" text-2xl ml-96">Región/Provincia</p>
                <p className=" text-2xl px-0 text-[#F70073]  ">*</p>
              </div>
            </div>
            <div className="gap-36 flex flex-wrap  mt-2 text-xl ">
              <input
                type="text"
                name="ciudad"
                className=" w-[710px] h-10 ml-7 bg-gray-100  text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300  focus:ring-0 transition duration-300 ease-in-out block"
                placeholder="Morelia"
              />
              <select
                name="provincia"
                className="  w-[695px] h-10 ml-2 bg-gray-100 selection:bg-[#F70073] text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block"
                defaultValue="Michoacán"
              >
                {estados.map((estado, index) => (
                  <option key={index} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex mt-4">
              <p className=" text-2xl ml-7">
                País
                <span className=" text-2xl   text-[#F70073]">*</span>
              </p>
            </div>
            <div className=" w-[1555px] h-10 ml-7 bg-[#E3E3E3] text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 focus:ring-0 transition duration-300 ease-in-out block ">
              <p className="   text-black ml-2  font-bold text-sm  mt-2 ">
                México
              </p>
            </div>
            <div className="flex justify-end mt-4 mr-16  ">
              <button className="bg-[#F70073] -mr-5 text-white font-bold rounded-xl py-2  w-32 h-10">
                Continuar
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="flex justify-center items-center  mt-5">
            <p className="font-bold text-3xl">DETALLES DE PAGO</p>
          </div>
          <div>
            <DetallesPago></DetallesPago>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
