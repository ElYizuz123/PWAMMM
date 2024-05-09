"use client"
import React, { useState, useEffect } from "react";
import { Berkshire_Swash } from "next/font/google";
import Link from "next/link";

//Tipo de letra
const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});






const Promociones = () => {
  const [ventasProductos, setVentasProductos] = useState([]);

  useEffect(() => {
    const readProductos = async () => {
      const res = await fetch('/api/graficas/productos')
      const resJSON = await res.json()
      setVentasProductos(resJSON.slice(0, 3))
    };
    readProductos();
  }, []);

  return (

    <div className="h-screen flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 bg-white justify-center items-center ">
        <div className={berkshire.className}>
          <p className="text-[#f70073] text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl mt-20  text-center">{'"'}Siente el alma de México</p>
          <p className="text-black text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl  text-center ">en tu paladar{'"'}</p>
          <div className="w-3/4 my-4 flex items-center justify-end ">
            <hr className="m-0 border-t-4 border-black w-1/2" />
          </div>
        </div>
        <p className="text-black text-base sm:text-xl md:text-xl lg:text-xl 2xl:text-xl ml-10 sm:ml-52 md:ml-52 lg:ml-52 xl:ml-52 2xl:ml-52 text-justify mt-5 ">Nuestros productos son el reflejo de la </p>
        <p className="text-black text-base sm:text-xl md:text-xl lg:text-xl 2xl:text-xl ml-10 sm:ml-52 md:ml-52 lg:ml-52 xl:ml-52 2xl:ml-
        52 text-justify ">riqueza y la diversidad de nuestra </p>
        <p className="text-black text-base sm:text-xl md:text-xl lg:text-xl 2xl:text-xl ml-10 sm:ml-52 md:ml-52 lg:ml-52 xl:ml-52 2xl:ml-52 text-justify ">cultura. Descubre nuestros productos </p>
        <p className="text-black text-base sm:text-xl md:text-xl lg:text-xl 2xl:text-xl ml-10 sm:ml-52 md:ml-52 lg:ml-52 xl:ml-52 2xl:ml-52 text-justify font-bold  "> más vendidos. </p>

        <Link
          href="\tienda"
          className=" mt-10 mx-auto block w-full text-center text-lg font-bold text-gray-100 bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg md:w-48 py-3 px-6 rounded-full"
        >
          ¡Comprar!
        </Link>
        <h2 className="text-xl text-[#f70073] mt-10 text-center font-extralight">Nuestro top 3 productos más vendidos: </h2>
        <div className="flex flex-wrap justify-center mt-5">
          {ventasProductos.map((producto,index) => (
            <div key={producto.id} className="m-4 p-4 bg-white bg-opacity-75 rounded-lg">

              <Link
                href="\tienda">
                <h2 className="text-xl font-semibold">#{index +1 }. {producto.nombre}</h2>
                <p className="text-lg">Vendidos en los últimos días: {producto.cantidad}</p>
              </Link>
            </div>

          ))}
        </div>
      </div>

      <div className="lg:w-1/2 bg-transparent items-end relative z-10   ">

        <img
          src="multimedia/Promo7.png"
          alt="Promoción"
          className="max-w-full max-h-full z-50"
        />

       {/* <div className="w-[700px] h-[500px] overflow-hidden absolute bottom-0 right-0 mr-0 -z-10">
          <div className="w-[1400px] h-[1400px] rounded-full bg-[#f70073] bg-opacity-40 flex justify-center items-center absolute left-0 "></div>
        </div>*/}


      </div>

    </div>
    
  );


};

export default Promociones