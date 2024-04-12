import React from "react";
import Link from "next/link";
import autoprefixer from "autoprefixer";

const Footer = () => {
  return (
    // <footer className="bg-black text-white py-8 px-4">
    //   <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
    //     <img src="mezcaleras_logo.png" className="h-16" />

    //     <div className="flex flex-wrap justify-center items-center mb-4 sm:mb-0">
    //       <div className="text-center mx-3">
    //         <p className="uppercase font-bold">Inicio</p>
    //       </div>
    //       <div className="text-center mx-3">
    //         <p className="uppercase font-bold">Tienda</p>
    //       </div>
    //       <div className="text-center mx-3">
    //         <p className="uppercase font-bold">Nosotras</p>
    //       </div>
    //       <div className="text-center mx-3">
    //         <p className="uppercase font-bold">Galería</p>
    //       </div>
    //       <div className="text-center mx-3">
    //         <p className="uppercase font-bold">Contacto</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-wrap justify-center items-center border-t border-gray-700 pt-4 mt-4">
    //       <div className="flex space-x-4 mb-4 lg:mb-0">
    //         <img src="/multimedia/gmail icon.png" width={18} height={18} />
    //         <img src="/multimedia/facebook icon.png" width={18} height={18} />
    //         <img src="/multimedia/whatsapp icon.png" width={18} height={18} />
    //         <img src="/footer/instagram.png" width={24} height={24} />
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <img src="/footer/mexico.png" width={18} height={18} />
    //       <img src="/footer/estados-unidos.png" width={18} height={18} />
    //     </div>
    //   </div>
    //   <div className="text-center mt-8">
    //     <p className="text-sm">
    //       ARISTEO MERCADO NO. 161, LOCAL 4, COL. DEL EMPLEADO, MORELIA, MICH,
    //       PLAZA COMERCIAL "TAKAMBA"
    //     </p>
    //     <p className="text-sm">© 2024 4JA DESIGNERS</p>
    //   </div>
    // </footer>
    <footer className="bg-black text-white w-screen">
      <div className="bg-black z-50 top-0 left-0 w-screen">
        <img className="h-8 w-full" src="\navbar\banner.jpg" alt="Banner" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <img src="public/fondoLetrasBlancas.png" className="h-16" />
          </div>

          <div className="ml-12 flex flex-wrap justify-center items-center mb-4 sm:mb-0">
            <Link className="text-center mx-3 hover:underline" href={"/"}>INICIO</Link>
            <Link className="text-center mx-3 hover:underline" href={"/tienda"}>TIENDA</Link>
            <Link className="text-center mx-3 hover:underline" href={"/nosotras"}>NOSOTRAS</Link>
            <Link className="text-center mx-3 hover:underline" href={"/galeria"}>GALERIA</Link>
            <Link className="text-center mx-3 hover:underline" href={"/contacto"}>CONTACTO</Link>
          </div>

          <div className="flex flex-wrap">
            <div className="text-gray-500 flex space-x-4">
              <img src="/footer/mexico.png" width={18} height={18} />
              <div>|</div>
              <img src="/footer/estados-unidos.png" width={18} height={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center border-t border-gray-700 pt-4 mt-4">
          <span>
            <div className="flex space-x-4 mb-4 lg:mb-0">
              <img src="/footer/gmail.png" width={24} height={24} />
              <img src="/footer/facebook.png" width={24} height={24} />
              <img src="/footer/whatsapp.png" width={24} height={24} />
              <img src="/footer/instagram.png" width={24} height={24} />
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
