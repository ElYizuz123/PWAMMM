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
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // Se activará cuando el título esté cerca del viewport
  });
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const lines = [
    "El pueblo purépecha Curicaueri nació en el oriente y",
    "tomaba la forma del sol, dios del fuego que recorría la",
    "bóveda celeste como un halcón. El aire, el agua, la tierra",
    "y el fuego son los cuatro elementos a los que les rendían",
    "reverencia...",
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
        className="max-w-lg bg-[#f1f1f1] shadow-2xl md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
      >
        <div className="flex flex-col p-12 md:px-16">
          <motion.div
            className={berkshire.className}
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            <h2 className="text-7xl text-black text-delinead">Historia</h2>
            <h2 className="text-8xl text-[#C1D128] text-delineado ml-28">
              del mezcal
            </h2>
          </motion.div>

          <div className="mt-4 text-xl">
            {lines.map((line, index) => (
              <motion.div
                key={line}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: index * 3, // Delay each line, increase by 1 second for each line
                  duration: 3,
                  ease: "linear",
                }}
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="\historia-mezcal"
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
