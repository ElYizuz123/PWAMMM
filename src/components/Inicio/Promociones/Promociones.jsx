"use client"
import React, { useState, useEffect } from "react";
import { Berkshire_Swash } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Tipo de letra
const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});






const Promociones = () => {

  const [ventasProductos, setVentasProductos] = useState([]);
  const controls = useAnimation();// Para el manejo de las animaciones 
  const { ref, inView } = useInView({
    triggerOnce: true,          // Se activará solo una vez cuando el elemento entre en el viewport
    rootMargin: "-100px 0px", // Se activará cuando el título esté cerca del viewport
  });
  //Iniciar la animación cuando el elemento es visible
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Para cargar los productos más vendidos al montar el componente
  useEffect(() => {
    const readProductos = async () => {
      const res = await fetch('/api/administrador/graficas/productos')
      const resJSON = await res.json()                                
      setVentasProductos(resJSON.slice(0, 3))
    };
    readProductos();
  }, []);
//Para la animación del titulo)desplazamiento de izq a derecha
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }, // duración 
    },
  };

  return (

    <div className="h-screen sm:h-screen md:h-screen flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:bg-transparent bg-white justify-center items-center -z-0  " ref={ref}>
        <motion.div
          className={berkshire.className}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <p className="text-[#f70073] text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl mt-20  text-center mx-2 sm:mx-2 md:mx-2 lg:mx-5 xl:mx-5 2xl:mx-5 ">{'"'}Siente el alma de México</p>
          <p className="text-black text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl  text-center mx-2 sm:mx-2 md:mx-2 lg:mx-5 xl:mx-5 2xl:mx-5 ">en tu paladar{'"'}</p>
          <div className="w-full my-4 flex items-center justify-center ">
            <hr className="m-0 border-t-4 border-black w-1/2 mx-2 sm:mx-2 md:mx-2 lg:mx-5 xl:mx-5 2xl:mx-5" />
          </div>
        </motion.div>
     
        <p className="text-black text-base sm:text-xl md:text-xl lg:text-xl 2xl:text-xl mx-16 sm:mx-10 md:mx-10 lg:mx-40 xl: xl:mx-40 2xl:mx-40 text-justify mt-5 animate-fade-up animate-once ">Nuestros productos son el reflejo de la riqueza y la diversidad de nuestra cultura. Descubre nuestros productos 

        <span className="font-bold"> más vendidos.</span>
        </p>
        <Link
          href="\tienda"
          className=" mt-10 mx-auto block w-full text-center text-lg font-bold text-gray-100 bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg md:w-48 py-3 px-6 rounded-full"
        >
          ¡Comprar!
        </Link>
        <h2 className="text-xl text-[#f70073] mt-10 lg:ml-0 text-center font-extralight">Nuestro top 3 productos más vendidos: </h2>
        <div className="flex flex-wrap justify-center mt-5">
           
          {ventasProductos.map((producto, index) => {
            //Segun el index(índice) le corresponde un tamaño para lograr el efecto de más grande a mas pequeño
            let tamaño;
            if (index === 0) {
              tamaño = 'text-4xl';
            } else if (index === 1) {
              tamaño = 'text-2xl';
            } else if (index === 2) {
              tamaño = 'text-xl';
            } else {
              tamaño = 'text-lg';
            }
            return (
              <div key={producto.id} className="m-4 p-4 bg-white bg-opacity-75 rounded-lg ">
                <Link href="\tienda">
                  <h2 className={`font-semibold ${tamaño} animate-jump-in animate-once text-center`}>#{index + 1}. {producto.nombre}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:w-1/2 bg-transparent items-end relative z-10 sm:w-2/3  ">

        <Image
          src="/multimedia/Promo8.png"
          alt="Promoción"
          width={1000}
          height={1000}
          className="max-w-full max-h-full z-50 md:w-[700px] -translate-y-14 md:translate-x-14"
        />




      </div>

    </div>

  );


};

export default Promociones