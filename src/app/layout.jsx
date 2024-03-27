import "./globals.css";
import IconoInicio from "@/components/navbar/iconoInicio";
import IconoTienda from "@/components/navbar/iconoTienda";
import IconoNosotras from "@/components/navbar/iconoNosotras";
import IconoContacto from "@/components/navbar/iconoContacto";
import IconoGaleria from "@/components/navbar/iconoGaleria";
import Link from 'next/link';
import logo from "@/components/navbar/logo";
import IconoMenu from "@/components/navbar/iconoMenu";

export const metadata = {
  title: "Mujeres Mezcaleras",
  description: "Asociación de Mujeres Mezcaleras de Michoacán",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-k2d">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
        <div>
        <div>
        <nav className="bg-black fixed w-full z-20 top-0 start-0">
          <div className="container">
            <img className="h-8 w-full" src="\navbar\banner.jpg" />
          </div>
          <nav className="bg-[#F5F5F5] border-[#1E1E1E] border-opacity-50 dark:border-gray-600 font-bold shadow-md">
            <div className="container mx-auto flex">
              <div>
                {logo} 
              </div>
              <div className="text-black absolute w-full flex lg:hidden py-8 px-4 justify-center">
                <p1>
                  MUJERES MEZCALERAS DE <br></br>MICHOACÁN
                </p1>
              </div>

              <div className="absolute right-0 flex lg:hidden">
                {IconoMenu}
              </div>
              <div className="text-black lg:flex hidden flex-grow justify-between py-8">
                <div>
                  <p1>
                    MUJERES MEZCALERAS DE <br></br>MICHOACÁN
                  </p1>
                </div>
                
                <div className="flex">
                  <a href="#" className="lg:mr-16 hover:text-[#F70073]">
                    {IconoInicio}
                    INICIO
                  </a>
                  <Link
                    href="\tienda"
                    className="lg:mr-16 hover:text-[#F70073]"
                  >
                    {IconoTienda}
                    TIENDA
                  </Link>
                  <Link href="#" className="lg:mr-16 hover:text-[#F70073]">
                    {IconoNosotras}
                    NOSOTRAS
                  </Link>
                  <Link href="\galeria" className="lg:mr-16 hover:text-[#F70073]">
                    {IconoGaleria}
                    GALERIA
                  </Link>
                  <Link href="\contacto" className="lg:pr-16 hover:text-[#F70073]">
                    {IconoContacto}
                    CONTACTO
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </nav>
        </div>
        <div>
        {children}
        </div>
        </div>
      </body>
    </html>
  
  );
}

