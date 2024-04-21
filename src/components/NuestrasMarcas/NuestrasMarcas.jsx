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
    <div className="p-6 mt-36">
      <div className={berkshire.className}>
        <p className="text-black text-7xl ml-48 mt-36 text-delinead  ">
          {" "}
          Nuestras{" "}
        </p>
        <p className="text-[#f70073]  text-8xl ml-96 text-delineado">
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
                  alt=""
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
                  alt=""
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
                  alt=""
                  className="imagen-componente"
                />
              </Link>
            </motion.div>
            <motion.div variants={gridSquareVariants} className="card-logo">
              <Link href="https://www.facebook.com/rocio.vega.12979?mibextid=ZbWKwL">
                <Image
                  src={"/logos/Logo-RocioVega.jpg"}
                  width={90}
                  height={90}
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
