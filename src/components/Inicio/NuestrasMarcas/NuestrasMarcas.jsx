"use client";
import React from "react";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const gridSquareVariants = {
  hidden: { opacity: 0, y: 50 }, // Comienza un poco más abajo y con opacidad 0.
  show: { opacity: 1, y: 0 }, // Anima hacia la opacidad 1 y su posición original en y.
};

const NuestrasMarcas = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // El contenedor debe estar al 10% en el viewport para iniciar la animación
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="p-6 mt-36 sm:mt-5 md:mt-96 lg:mt-48 text-center ">
      <div className={berkshire.className}> {/*Fuente Berksire para "Nuestras Marcas" */ }
        <p className="text-4xl   md:text-6xl lg:text-6xl xl:text-7xl text-black text-delinead  ">
          {" "}
          Nuestras{" "}
        </p>
        <p className="text-5xl sm:ml-56 md:text-7xl lg:text-7xl xl:text-8xl text-[#f70073] text-delineado">
          {" "}
          Marcas{" "}
        </p>
        <motion.div
          ref={ref}
          className="w-[90%] max-w-[1200px] m-auto p-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/*Este es el contenedor principal*/}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/*Este es el contenedor de las marcas*/}
            <motion.div variants={gridSquareVariants} className="card-logo">
              <Link href="https://www.facebook.com/profile.php?id=100093951884648">
                <Image
                  src={"/logos/Logo-MataVerde.png"}
                  width={100}
                  height={100}
                  alt="Logo MataVerde"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo">
              <Link href="https://www.facebook.com/mezcaldonmateo?locale=es_LA">
                <Image
                  src={"/logos/Logo-DonMateo.jpeg"}
                  width={70}
                  height={70}
                  alt="Logo Don Mateo"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo">
              <Link href="https://www.facebook.com/mezcalarmonia?locale=es_LA">
                <Image
                  src={"/logos/Logo-MezcalArmoniaBla.png"}
                  width={100}
                  height={100}
                  alt=" Logo Mezcal Armonia"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo">
              <Link href="https://www.facebook.com/rocio.vega.12979?mibextid=ZbWKwL">
                <Image
                  src={"/logos/Logo-RocioVega1.jpg"}
                  width={95}
                  height={100}
                  alt=" Logo Rocio Vega"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/profile.php?id=100093951884648">
                <Image
                  src={"/logos/Logo-MataVerde.png"}
                  width={100}
                  height={100}
                  alt="Logo Mata verde 2"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/mezcalcielonocturno">
                <Image
                  src={"/logos/Logo-CieloNocturno.jpg"}
                  width={90}
                  height={90}
                  alt="Logo Cielo nocturno"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/puritito.co.ra.zo">
                <Image
                  src={"/logos/Logo-PurititoCora.png"}
                  width={100}
                  height={100}
                  alt="Logo Puritito Corazon"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/EspinaRojaMezcal">
                <Image
                  src={"/logos/Logo-EspinaRoja.png"}
                  width={100}
                  height={100}
                  alt="Logo Espina Roja"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/mezcaltesoromichoacano">
                <Image
                  src={"/logos/Logo-TesoroMichoacano.png"}
                  width={100}
                  height={100}
                  alt="Logo Tesoro Michoacano"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/MesonQuesoCotija">
                <Image
                  src={"/logos/Logo-MesonQueso.png"}
                  width={100}
                  height={100}
                  alt="Logo Meson Queso"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/QveelaMezcal">
                <Image
                  src={"/logos/Logo-Qveela.jpeg"}
                  width={95}
                  height={95}
                  alt="Logo Qveela"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/Mezcalelviejo1983">
                <Image
                  src={"/logos/Logo-ElViejo.jpeg"}
                  width={95}
                  height={95}
                  alt="Logo El viejo Alegre"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo  ">
              <Link href="https://www.facebook.com/Mezcalelviejo1983">
                <Image
                  src={"/logos/Logo-CoronadePerlas.png"}
                  width={100}
                  height={100}
                  alt="Logo corona de perlas"
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NuestrasMarcas;
