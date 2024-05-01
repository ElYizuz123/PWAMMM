import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex">
            <img src="/footer/fondoLetrasBlancas.png" className="h-20" />
          </div>

          <div className="flex flex-wrap justify-center items-center mb-4 sm:mb-0">
            <Link className="text-center mx-3 hover:underline" href={"/"}>
              INICIO
            </Link>
            <Link className="text-center mx-3 hover:underline" href={"/historia"}>
              HISTORIA
            </Link>
            <Link className="text-center mx-3 hover:underline" href={"/tienda"}>
              TIENDA
            </Link>
            <Link
              className="text-center mx-3 hover:underline"
              href={"/nosotras"}
            >
              NOSOTRAS
            </Link>
            <Link
              className="text-center mx-3 hover:underline"
              href={"/galeria"}
            >
              GALERIA
            </Link>
            <Link
              className="text-center mx-3 hover:underline"
              href={"/contacto"}
            >
              CONTACTO
            </Link>
          </div>

          <div className="flex flex-wrap">
            <div className="text-gray-500 flex space-x-4">
              <img src="/footer/mexico.png" className="w-5 h-5"/>
              <div>|</div>
              <img src="/footer/estados-unidos.png" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center border-t border-gray-700 pt-4 mt-4">
          <span>
            <div className="flex space-x-4 mb-4 lg:mb-0">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </span>
        </div>

        <div className="text-center text-gray-500 text-xs border-t border-gray-700 pt-4 mt-4 font-bold">
          ARISTEO MERCADO NO. 161, LOCAL 4, COL. DEL EMPLEADO, MORELIA, MICH,
          PLAZA COMERCIAL "TAKAMBA"
          <div className="mt-2">
            © 2024 MUJERES MEZCALERAS DE MICHOACÁN A.C.
          </div>
          <div className="mt-2">DESARROLLADO POR 4JA</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




