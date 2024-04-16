"use client"
import IconoInicio from "@/components/navbar/iconoInicio";
import IconoTienda from "@/components/navbar/iconoTienda";
import IconoNosotras from "@/components/navbar/iconoNosotras";
import IconoContacto from "@/components/navbar/iconoContacto";
import IconoGaleria from "@/components/navbar/iconoGaleria";
import Link from "next/link";
import logo from "@/components/navbar/logo";
import IconoMenu from "@/components/navbar/iconoMenu";
import { Berkshire_Swash } from "next/font/google";
import Carrito from "../tienda/Carrito";
import Footer from "../Footer/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const LayoutPrincipal = ({ children }) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const [styleNav, setStyleNav] = useState("size-12 top-6")

  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      setStyleNav("size-12 top-6 transition-size duration-200 ease-in-out")
    }
    else{
      setStyleNav("size-10 top-2 transition-size duration-300 ease-in-out")
    }
    
})

  return (
    <div>
      <div>
        <div className="w-full z-20 top-0 fixed">
          <img className="h-8 w-full" src="\navbar\banner.jpg" />
        </div>
        <motion.div className="w-full z-20 top-6 fixed border-[#1E1E1E] border-opacity-50 dark:border-gray-600"
          style={{
            scaleY: scale,
            transformOrigin: "top",
          }}>
            <p className="bg-white w-full text-white h-36 shadow-md" id="p-1">p</p>
        </motion.div>
        <nav className={`font-bold fixed z-20 w-full h-36 ${styleNav}`}>
            <div className="container mx-auto flex">
              <div>{logo}</div>
              <div className="text-black absolute w-full flex lg:hidden py-8 px-4 justify-center">
                <div className={berkshire.className}>
                  <p1 className="text-xl">Mujeres Mezcaleras <br></br> De Michoacán</p1>
                </div>
              </div>

              <div className="absolute right-0 flex lg:hidden">
                {IconoMenu}
              </div>
              <div className="text-black lg:flex hidden flex-grow justify-between py-8 text-center">
                <div className={berkshire.className}>
                  <p1 className="text-2xl">
                    Mujeres Mezcaleras <br></br> De Michoacán
                  </p1>
                </div>
                <div className="flex">
                  <Link
                    href="\"
                    className="lg:mr-16 hover:text-[#F70073]">
                    <div className={`mx-auto ${styleNav}`}>
                      {IconoInicio}
                    </div>
                    INICIO
                  </Link>
                  <Link
                    href="\tienda"
                    className="lg:mr-16 hover:text-[#F70073]">
                    <div className={`mx-auto ${styleNav}`}>
                      {IconoTienda}
                    </div>
                    TIENDA
                  </Link>
                  <Link
                    href="\nosotras"
                    className="lg:mr-16 hover:text-[#F70073]">
                    <div className={`mx-auto ${styleNav}`}>
                      {IconoNosotras}
                    </div>
                    NOSOTRAS
                  </Link>
                  <Link
                    href="\galeria"
                    className="lg:mr-16 hover:text-[#F70073]">
                    <div className={`mx-auto ${styleNav}`}>
                      {IconoGaleria}
                    </div>
                    GALERIA
                  </Link>
                  <Link
                    href="\contacto"
                    className="hover:text-[#F70073]">
                    <div className={`mx-auto ${styleNav}`}>
                      {IconoContacto}
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
