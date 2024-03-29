import IconoInicio from "@/components/navbar/iconoInicio";
import IconoTienda from "@/components/navbar/iconoTienda";
import IconoNosotras from "@/components/navbar/iconoNosotras";
import IconoContacto from "@/components/navbar/iconoContacto";
import IconoGaleria from "@/components/navbar/iconoGaleria";
import Link from "next/link";
import logo from "@/components/navbar/logo";
import IconoMenu from "@/components/navbar/iconoMenu";
import { Berkshire_Swash } from "next/font/google";

const berkshire = Berkshire_Swash({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const LayoutPrincipal = ({ children }) => {
  return (
    <body className="bg-[#F5F5F5FD] ">
      <div>
        <div>
          <nav className="bg-black w-full z-20 top-0 start-0 fixed">
            <div className="container">
              <img className="h-8 w-full" src="\navbar\banner.jpg" />
            </div>
            <nav className="bg-[#F5F5F5] border-[#1E1E1E] border-opacity-50 dark:border-gray-600 font-bold shadow-md">
              <div className="container mx-auto flex">
                <div>{logo}</div>
                <div className="text-black absolute w-full flex lg:hidden py-8 px-4 justify-center">
                  <p1 className={berkshire.className}>
                    Mujeres Mezcaleras <br></br> De Michoacán
                  </p1>
                </div>

                <div className="absolute right-0 flex lg:hidden">
                  {IconoMenu}
                </div>
                <div className="text-black lg:flex hidden flex-grow justify-between py-8 text-center">
                  <div className={berkshire.className}>
                    <p1>
                      Mujeres Mezcaleras <br></br> De Michoacán
                    </p1>
                  </div>
                  <div className="flex">
                    <a href="\" className="lg:mr-16 hover:text-[#F70073]">
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
                    <Link
                      href="\nosotras"
                      className="lg:mr-16 hover:text-[#F70073]"
                    >
                      {IconoNosotras}
                      NOSOTRAS
                    </Link>
                    <Link
                      href="\galeria"
                      className="lg:mr-16 hover:text-[#F70073]"
                    >
                      {IconoGaleria}
                      GALERIA
                    </Link>
                    <Link
                      href="\contacto"
                      className="lg:pr-16 hover:text-[#F70073]"
                    >
                      {IconoContacto}
                      CONTACTO
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </body>
  );
};

export default LayoutPrincipal;
