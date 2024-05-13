"use client";
import { HiHome } from "react-icons/hi2";
import { GiAgave } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { HiInformationCircle } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { BsImages } from "react-icons/bs";
import { MdFace3 } from "react-icons/md";
import Link from "next/link";
import logo from "@/components/navbar/logo";
import IconoMenu from "@/components/navbar/iconoMenu";
import { Berkshire_Swash } from "next/font/google";
import Carrito from "../tienda/Carrito";
import Footer from "../Footer/Footer";
import { HiX, HiMenu } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MayorEdad from "../MayorEdad/MayorEdad";
import UsoCookies from "../UsoCookies/UsoCookies";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

//animacion de hover en menu
const hoverEffect = {
  scale: 1.2, // Escala el icono al 120% de su tamaño original
  rotate: 90, // Rota el icono 90 grados
  transition: {
    duration: 0.3, // Duración de 0.3 segundos para la transición
    ease: "easeInOut", // Tipo de easing
  },
};

// colorcito de la página seleccionada ${buttonMap["/"]}
const buttonMap = {
  "/": "text-black bg-[#0000000]",
  "/tienda": "text-black bg-[#0000000]",
  "/nosotras": "text-black bg-[#0000000]",
  "/galeria": "text-black bg-[#0000000]",
  "/contacto": "text-black bg-[#0000000]",
};
const LayoutPrincipal = ({ children }) => {
  //animaciones del menu
  const menuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  //para el submenu de la derecha
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //para cambiar los colorcitos
  const pathName = usePathname();
  const changeColor = () => {
    for (const key in buttonMap) {
      buttonMap[key] = "text-black bg-[#0000000]";
    }

    buttonMap[pathName] = "text-[#F70073]";
  };
  changeColor();

  //detectar el scroll
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const [styleNav, setStyleNav] = useState("size-12 top-6");
  const [styleLogo, setSyleLogo] = useState("top-6");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        setStyleNav("size-12 top-6 transition-size duration-200 ease-in-out");
        setSyleLogo("top-6 transition-size duration-200 ease-in-out");
      } else {
        setStyleNav("size-10 top-2 transition-size duration-300 ease-in-out");
        setSyleLogo(
          "top-2 -translate-x-28 transition-all duration-300 ease-in-out"
        );
      }
    });
  }, []);

  return (
    <div>
      {/* ERES MAYOR DE 18 AÑOS? */}
      <MayorEdad/>

      {/* ACEPTAR USO DE COOKIES */}
      <UsoCookies />
      <div>
        <div className="w-full z-20 top-0 fixed">
          <img className="h-8 w-full" src="\navbar\banner.jpg" />
        </div>
        <motion.div
          className="w-full z-20 top-6 fixed border-[#1E1E1E] border-opacity-50 dark:border-gray-600"
          style={{
            scaleY: scale,
            transformOrigin: "top",
          }}
        >
          <p className="bg-white w-full text-white h-36 shadow-md" id="p-1">
            p
          </p>
        </motion.div>
        <nav className={`font-bold fixed z-20 w-full h-36 ${styleNav}`}>
          <div className="flex w-full ml-8">
            <div className={styleLogo}>{logo}</div>
            <div className="text-black absolute w-full flex lg:hidden py-8 px-4 justify-center">
              <div className="w-full ml-20">
                <div className={styleLogo}>
                  <div className={berkshire.className}>
                    <p1 className="text-xl">
                      Mujeres Mezcaleras <br></br> De Michoacán
                    </p1>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="menu bg-white fixed top-0 right-0 h-full shadow-lg z-50 opacity-95"
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-xl">
                  <HiX className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180" />{" "}
                </button>
              </div>
              <ul className="flex flex-col">
                <li className="py-8 px-4 border-b border-[#F70073]">
                  <Link
                    className={`flex justify-end items-center space-x-3 hover:text-[#F70073] ${buttonMap["/"]}`}
                    href="/"
                  >
                    <span className="text-xl"> INICIO</span>
                    <HiHome className="h-6 w-6" />
                  </Link>
                </li>
                <li className="py-8 px-4 border-b border-[#F70073]">
                  <Link
                    className={`flex justify-end items-center space-x-3 hover:text-[#F70073] ${buttonMap["/historia"]}`}
                    href="/historia"
                  >
                    <span className="text-xl">HISTORIA</span>
                    <GiAgave className="h-6 w-6" />
                  </Link>
                </li>
                <li className="py-8 px-4 border-b border-[#F70073]">
                  <Link
                    className={`flex justify-end items-center space-x-3 hover:text-[#F70073] ${buttonMap["/tienda"]}`}
                    href="/tienda"
                  >
                    <span className="text-xl">TIENDA</span>
                    <HiShoppingBag className="h-6 w-6" />
                  </Link>
                </li>
                <li className="py-8 px-4 border-b border-[#F70073]">
                  <Link
                    className={`flex justify-end items-center space-x-3 hover:text-[#F70073] ${buttonMap["/nosotras"]}`}
                    href="/nosotras"
                  >
                    <span className="text-xl">NOSOTRAS</span>
                    <MdFace3  className="h-6 w-6" />
                  </Link>
                </li>
                <li className="py-8 px-4 border-b border-[#F70073]">
                  <Link
                    className={`flex justify-end items-center space-x-3 hover:text-[#F70073] ${buttonMap["/galeria"]}`}
                    href="/galeria"
                  >
                    <span className="text-xl">GALERIA</span>
                    <BsImages className="h-6 w-6" />
                  </Link>
                </li>
                <li className="py-8 px-4">
                  <Link
                    className={`flex justify-end items-center space-x-3  hover:text-[#F70073] ${buttonMap["/contacto"]}`}
                    href="/contacto"
                  >
                    <span className="text-xl">CONTACTO</span>
                    <HiEnvelope className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </motion.div>

            <div className="absolute right-0 top-8 flex items-center lg:hidden p-4">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <HiX className="h-8 w-8 hidden" />
                ) : (
                  <motion.div whileHover={hoverEffect}>
                    <HiMenu className="h-10 w-10" />
                  </motion.div>
                )}
              </button>
            </div>

            <div className="text-black lg:flex hidden flex-grow justify-between ml-5 py-8 text-center mr-24">
              <div className={berkshire.className}>
                <div className={styleLogo}>
                  <p1 className="text-2xl sm:text-2xl md:text-2xl lg:text-xs xl:text-2xl 2xl:text-2xl">
                    Mujeres Mezcaleras <br></br> De Michoacán
                  </p1>
                </div>
              </div>
              <div className="flex ">
                <Link
                  href="\"
                  className={`lg:mr-16 hover:text-[#F70073] ${buttonMap["/"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    <HiHome className="w-full h-auto" />
                  </div>
                  INICIO
                </Link>
                <Link
                  href="\historia"
                  className={`lg:mr-16 hover:text-[#F70073] ${buttonMap["/historia"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    <GiAgave className="w-full h-auto" />
                  </div>
                  HISTORIA
                </Link>
                <Link
                  href="\tienda"
                  className={`lg:mr-16 hover:text-[#F70073] ${buttonMap["/tienda"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    <HiShoppingBag className="w-full h-auto" />
                  </div>
                  TIENDA
                </Link>
                <Link
                  href="\nosotras"
                  className={`lg:mr-16 hover:text-[#F70073] ${buttonMap["/nosotras"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    
                 
                  <MdFace3 className="w-full h-auto"/>
                  </div>
                  NOSOTRAS
                </Link>
                <Link
                  href="\galeria"
                  className={`lg:mr-16 hover:text-[#F70073] ${buttonMap["/galeria"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    <BsImages className="w-full h-auto" />
                  </div>
                  GALERIA
                </Link>
                <Link
                  href="\contacto"
                  className={`hover:text-[#F70073] ${buttonMap["/contacto"]}`}
                >
                  <div className={`mx-auto ${styleNav}`}>
                    <HiEnvelope className="w-full h-auto" />
                  </div>
                  CONTACTO
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Carrito />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default LayoutPrincipal;
