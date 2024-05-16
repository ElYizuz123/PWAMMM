"use client";
import React from "react";
import Link from "next/link";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%" },
};

const Historia = () => {
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

//Animación del titulo
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }, // duración 
    },
  };
  //Lineas del texto (historia del mezcal versión simplificada)
  const lines = [
    "El pueblo purépecha Curicaueri nació en el oriente y",
    "tomaba la forma del sol, dios del fuego que recorría la",
    "bóveda celeste como un halcón. El aire, el agua,",
    "la tierra y el fuego son los cuatro elementos",
    "a los que les rendían reverencia...",
  ];

  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <Image
          src="/multimedia/fondo-historia.jpeg"
          height={300}
          width={600}
          alt="Mujeres Mezcaleras de Michoacán"
          className="h-full w-full object-cover shadow-lg border-[#f70073] border-t-4 border-r-4 border-l-4 border-b-4 "
        />
      </div>

      <div
        ref={ref}
        className=" w-full   bg-[#f1f1f1] shadow-2xl md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
      >
        <div className="flex flex-col p-8 md:px-16">
           {/*Aqui inicia la animación del título (Aparece de izquierda a derecha)*/}
          <motion.div 
            className={berkshire.className}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            <h2 className="text-4xl mx-1 md:text-6xl lg:text-6xl xl:text-7xl text-black text-delinead  ">Historia</h2>
            <h2 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-[#C1D128] text-delineado ml-28 ">
              del mezcal
            </h2>
          </motion.div>

          <div className="mx-1 mt-5 sm:ml-20 lg:ml-0 xl:ml-10  text-[13px]  sm:text-base md:text-base lg:text-xl xl:text-xl 2xl:text-xl text-justify ">
             {/*Aqui inicia la animación del texto (Va apareciendo poco a poco)*/}
            {lines.map((line, index) => (
              
              <motion.div
                key={line}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: index * 3, // Retraso de cada linea, incrementa  1 segundo por cada linea
                  duration: 3,
                  ease: "linear",
                }}
                style={{
                  //overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            {/*Botón con Link a historia*/}
            <Link
              href="\historia"
              className="mx-auto block w-full text-center text-lg font-medium text-gray-100 bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg md:w-48 py-3 px-6 rounded-full"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Historia;
