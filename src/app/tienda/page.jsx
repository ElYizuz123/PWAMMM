import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Tarjeta from "@/components/tienda/Tarjeta";
import Categoria from "@/components/tienda/Categoria";
import { K2D } from "next/font/google";
import Image from "next/image";
import MostrarProductos from "@/components/tienda/MostrarProductos";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});


const Page = () => {

  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
        <div className=" mt-40">
          <div className="relative  min-h-screen  ">
            <div className="absolute bottom-0 w-full ">
              <Image
                src="/mezcal_background.png"
                alt="Imagen de fondo"
                width={1000}
                height={1000}
                objectFit="cover"
                className="w-full opacity-60"
              />
            </div>

            <Categoria selec={0} />

            {/* SECCION */}
            <div className="relative z-10 pb-3 pr-28">
              <div className="flex items-center justify-end space-x-1 mr-24">
                <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                  Anterior
                </button>
                <button className="px-4 py-1 text-white rounded-md bg-[#F70073] hover:bg-[#F70073]">
                  1
                </button>
                <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                  2
                </button>
                <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                  3
                </button>
                <span className="px-4 py-1">...</span>
                <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                  7
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
