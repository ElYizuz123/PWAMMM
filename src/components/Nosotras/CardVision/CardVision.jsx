"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";


//Tipo de letra
const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});



const titleVariantsMision = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const textVariantsMision = {
  hidden: { x: -100, opacity: 0 }, // Igualmente, mover desde más a la derecha
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5, // Mantener el retardo para dar tiempo al título a aparecer primero
      duration: 1, // Aumentar la duración para una transición más notable
    },
  },
};

const titleVariantsVision = {
  hidden: { x: 100, opacity: 0 }, // Mover desde más a la derecha
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const textVariantsVision = {
  hidden: { x: 100, opacity: 0 }, // Igualmente, mover desde más a la derecha
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,  // Mantener el retardo para dar tiempo al título a aparecer primero
      duration: 1, // Aumentar la duración para una transición más notable
    },
  },
};

const images = ["/multimedia/15.jpeg", "/multimedia/agave 2.jpeg"]; //Imagenes de la parte de Misiòn 
const imagesVision = [                                              //Imagenes de Visión
  "/multimedia/7.jpeg",
  "/multimedia/imgVision.jpeg",
  "/multimedia/imgVision2.jpeg",


];

const CardVision = () => {
  //Para controlar el estado de las imágenes en la sección visión y misión
  const [cambiarImagen, setCambiarImagen] = useState(0);
  const [cambiarFoto, setCambiarFoto] = useState(0);

  //Para cambiar las imágenes cada 6s de Misión
  useEffect(() => {
    const interval = setInterval(() => {
      setCambiarImagen((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  //Para cambiar las imágenes cada 9s de Visión
  //La idea es que no cambien de forma paralela con
  //las imágenes de Misión para lograr un mejor efecto
  //visual.
  useEffect(() => {
    const interval = setInterval(() => {
      setCambiarFoto((prevIndex) => (prevIndex + 1) % imagesVision.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // Animación para la sección de Misión al hacer scroll
  // y que aparezcan de izquierda a derecha
  const controlsMision = useAnimation();
  const [refMision, inViewMision] = useInView({
    triggerOnce: true,
    threshold: 0.5, // El componente debe estar al 50% visible para activar la animación
  });

  useEffect(() => {
    if (inViewMision) {
      controlsMision.start("visible");
    }
  }, [controlsMision, inViewMision]);
  // Animación para la sección de Visión al hacer scroll
  //y que aparezcan de derecha a izquierda 
  const controlsVision = useAnimation();
  const [refVision, inViewVision] = useInView({
    triggerOnce: true,
    threshold: 0.5, // El componente debe estar al 50% visible para activar la animación
  });

  useEffect(() => {
    if (inViewVision) {
      controlsVision.start("visible");
    }
  }, [controlsVision, inViewVision]);
  return (
    <div className=" w-full h-auto    ">
      <div className="w-11/12 m-auto ">
        <div className="text-center ">
          <motion.div
            ref={refMision} // Asocia la referencia para la detección del viewport
            initial="hidden" //Estado inicial: Oculto
            animate={controlsMision} //Animación de Misión
            variants={titleVariantsMision}
            className="flex flex-wrap items-center mt-28 text-center p-6 bg-white rounded-lg shadow-lg "
          >
            <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 px-4">
              <div className="relative w-full sm:w-full  h-32 sm:h-32  md:h-64 lg:h-64 xl:h-80 2xl:h-80 m-auto">
                <Image src={images[cambiarImagen]} // Arreglo de imagenes, se encuentra en la sección superior
                  alt="Mujeres Mezcaleras de Michoacán"
                  layout="fill"
                  objectFit="cover"
                  className="rounded shadow-lg border border-merino-400"
                />
              </div>
            </div>

            <motion.div
              ref={refMision} // Utiliza la misma referencia para el texto
              initial="hidden" //Estado inicial: Oculto
              animate={controlsMision} // Animación - Misión
              variants={textVariantsMision}
              className="w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 px-4 text-center  "
            >
              <div
                className={berkshire.className}
              >
                <p className="text-5xl sm:text-5xl md:text-5xl mt-8  text-center  lg:text-7xl xl:text-7xl 2xl:text-7xl text-black font-bold    "> {/*Tamaño de letra responsivo*/}
                  Misión
                </p>
              </div>

              <hr className=" border-b-4  border-[#F70073] my-4 -mx-1 sm:mx-5 md:mx-5 lg:mx-8 xl:mx-8 2xl:mx-8" />

              <p className="text-sm sm:text-sm md:text-sm lg:text-xl xl:text-xl 2xl:text-xl text-justify -mx-1 sm:mx-5 md:mx-5 lg:mx-8 xl:mx-8 2xl:mx-8"> {/* MISIÓN*/}
                {'"'}Proteger, regular y promover la Denominación de Origen Mezcal
                dentro de los municipios comprendidos en el estado de
                Michoacán de Ocampo. Asimismo, vigilar y observar las
                especificaciones contenidas en la Norma Oficial Mexicana
                NOM-070 y sus actualizaciones, evaluando y promoviendo la
                incorporación de sistemas para asegurar la sustentabilidad y
                la calidad en todos los procesos productivos del mezcal.
                También fomentaremos las formas tradicionales de producción,
                resguardando su identidad regional, con el objetivo de
                conservar y consolidar al Mezcal Michoacano como parte de
                nuestra cultura líquida de México.{'"'}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={refVision} // Asocia la referencia para la detección del viewport
            initial="hidden" //Estado inicial:Oculto
            animate={controlsVision}
            variants={titleVariantsVision}
            className="flex flex-wrap items-center mt-28 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 px-4 ">
              <div className="relative w-full sm:w-full  h-32 sm:h-32  md:h-64 lg:h-64 xl:h-80 2xl:h-80 m-auto">
                <Image
                  // La clave aquí es la URL de la imagen, lo que asegura que el componente se recrea en cada cambio
                  src={imagesVision[cambiarFoto]}
                  alt="Mujeres Mezcaleras de Michoacán Vision"
                  layout="fill"
                  objectFit="cover"
                  className="rounded shadow-lg border border-merino-400" // Características de la imagen
                />

              </div>
            </div>
            <motion.div
              ref={refVision} // Utiliza la misma referencia para el texto
              initial="hidden"
              animate={controlsVision}
              variants={textVariantsVision}
              className="w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 px-4 text-center xl:order-first"
            >
              <div className={berkshire.className}>
                <p className="text-5xl sm:text-5xl md:text-5xl mt-8  text-center  lg:text-7xl xl:text-7xl 2xl:text-7xl text-black font-bold ">
                  Visión
                </p>
              </div>
              <hr className=" border-b-4  border-[#F70073] my-4 -mx-1 sm:mx-5 md:mx-5 lg:mx-8 xl:mx-8 2xl:mx-8" />

              <p className="text-sm sm:text-sm md:text-sm lg:text-xl xl:text-xl 2xl:text-xl text-justify -mx-1 sm:mx-5 md:mx-5 lg:mx-8 xl:mx-8 2xl:mx-8">
                {'"'}Brindar a las asociadas servicios, herramientas, orientación,
                apoyo técnico y científico que les facilite su desempeño;
                buscando con ello lograr un mayor desarrollo profesional y
                empresarial. Asimismo, vigilar, cuidar, organizar, capacitar y
                promover entre sus asociadas el cumplimiento de las
                especificaciones sobre materias primas, el proceso de
                producción, reposo, maduración, envasado y comercialización
                del mezcal para asegurar la sustentabilidad y la calidad en
                todos los procesos productivos del mezcal, generando empleos
                directos y economía en sus regiones.{'"'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CardVision