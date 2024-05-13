import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import MostrarItemsCarrito from "@/components/tienda/MostrarItemsCarrito";
import { K2D } from "next/font/google";
import Link from "next/link";
import IrFormulario from "@/components/tienda/IrFormulario";

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
              src="/mezcal_background.png"
              alt="Imagen de fondo"
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-full opacity-60 h-full"
            />
          </div>

          <div className=" container reltive w-full py-48 ">
            <div class="container mx-auto p-6">
              <div
                class="flex flex-col md:flex-row justify-between gap-6 
               "
               >
                <div className="container mx-auto p-6  ">
                  {/* Title */}
                  <div
                    className=" flex mb-4
                  sm:h-8 sm:w-10 sm:ml-16"
                  >
                    <Image
                      src="/emoticons/carrito2.png"
                      width={40}
                      height={40}
                      quality={100}
                      alt="Fondo"
                    ></Image>
                    <h1
                      className="ml-4 text-3xl font-bold text-gray-700
                    sm:text-xl sm:absolute sm:ml-12"
                    >
                      BOLSA DE COMPRAS
                    </h1>
                    <hr className="my-2 hidden sm:hidden lg:block" />
                  </div>

                  <div
                    className="hidden text-gray-600 font-bold text-sm py-2 rounded-t-lg 
                  sm:hidden lg:block"
                  >
                    <h3 className="">PRODUCTO</h3>
                    <h3 className="ml-[320px]">PRECIO</h3>
                    <h3 className="ml-[140px]">CANTIDAD</h3>
                    <h3 className="ml-[158px]">TOTAL</h3>
                  </div>

                  <div className="my-4 "></div>
                  <hr className="sm:hidden lg:block" />

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
