import Link from "next/link";
import React from "react";
import { Berkshire_Swash, K2D } from "next/font/google";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div cl>
      <nav className="w-full border-b-2 border-gray-300">
        <div>
          <img className="h-8 w-full" src="\navbar\banner.jpg" />
        </div>
        <nav className="bg-[#F5F5F5]">
          <div className="flex ">
            <div>
              <img className="h-28 w-28" src="\navbar\logo.png" />
            </div>
            <div className="text-black absolute w-full flex lg:hidden py-8 px-4 justify-center">
              <p1 className={berkshire.className}>
                Mujeres Mezcaleras <br></br> De Michoacán
              </p1>
            </div>
            <div className="absolute right-0 flex lg:hidden py-8 px-4">
              <img className="h-12 w-12" src="\navbar\menu.png" />
            </div>
            <div className="text-black lg:flex hidden flex-grow justify-between py-8">
              <div className={berkshire.className}>
                <p1>
                  Mujeres Mezcaleras <br></br> De Michoacán
                </p1>
              </div>
              <div className={k2d.className}>
                <div className="flex">
                  <Link href="\" className="lg:mr-16 hover:text-[#F70073]">
                    <img src="\navbar\inicio.png" className="pl-2" />
                    INICIO
                  </Link>
                  <Link
                    href="\tienda"
                    className="lg:mr-16 hover:text-[#F70073]"
                  >
                    <img src="\navbar\tienda.png" className="pl-3" />
                    TIENDA
                  </Link>
                  <Link href="#" className="lg:mr-16 hover:text-[#F70073]">
                    <img src="\navbar\nosotras.png" className="pl-7" />
                    NOSOTRAS
                  </Link>
                  <Link href="#" className="lg:mr-16 hover:text-[#F70073]">
                    <img src="\navbar\galeria.png" className="pl-5" />
                    GALERIA
                  </Link>
                  <Link href="#" className="lg:pr-16 hover:text-[#F70073]">
                    <img src="\navbar\contacto.png" className="pl-7" />
                    CONTACTO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
