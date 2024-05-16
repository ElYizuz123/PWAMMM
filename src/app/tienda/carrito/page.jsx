import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import MostrarItemsCarrito from "@/components/Tienda/Carrito/MostrarItemsCarrito";
import { K2D } from "next/font/google";
import Link from "next/link";
import IrFormulario from "@/components/Tienda/Carrito/IrFormulario";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
        <div className="  w-full relative ">
          <div className="absolute bottom-0 w-full ">
            <Image
              src="/fondos/mezcal_background.png"
              alt="Imagen de fondo"
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-full opacity-60 h-full"
            />
          </div>

          <div className="  reltive w-full py-48 ">
            <div class="container mx-auto p-6
            lg:w-[720px] lg:-translate-x-44
            xl:w-[1200px] xl:translate-x-10
            2xl:w-[1400px] 2xl:translate-x-5">
              <div
                class="flex flex-col md:flex-row justify-between gap-6 
                lg:flex-row 2xl:flex-row
               "
               >
                <div className="container mx-auto p-6  ">
                  {/* Title */}
                  <div
                    className=" flex h-8 w-10
                  md:ml-2
                  sm:h-8 sm:w-10 sm:ml-16
                  lg:mb-4 2xl:mb-4"
                  >
                    <Image
                      src="/emoticons/carrito2.png"
                      width={40}
                      height={40}
                      quality={100}
                      alt="Fondo"
                    ></Image>
                    <h1
                      className="ml-12 text-xl font-bold text-gray-700 absolute 
                    sm:text-xl sm:absolute sm:ml-12
                    md:ml-12 md:text-2xl
                    lg:text-3xl 2xl:text-3xl"
                    >
                      BOLSA DE COMPRAS
                    </h1>
                    <hr className="my-2 hidden sm:hidden  lg:block" />
                  </div>

                  <div
                    className="hidden text-gray-600 font-bold text-sm py-2 rounded-t-lg 
                  sm:hidden  lg:flex 2xl:flex "
                  >
                    <h3 className="">PRODUCTO</h3>
                    <h3 className="lg:ml-[240px] xl:ml-[280px] 2xl:ml-[320px]">PRECIO</h3>
                    <h3 className="lg:ml-[30px] 2xl:ml-[150px]">CANTIDAD</h3>
                    <h3 className="lg:ml-[35px] 2xl:ml-[120px]">TOTAL</h3>
                  </div>

                  <div className="my-4 "></div>
                  <hr className="sm:hidden  lg:block" />

                  {/* Product row */}
                  <MostrarItemsCarrito />
                </div>
                <IrFormulario  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
