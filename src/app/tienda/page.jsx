import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Categoria from "@/components/tienda/Categoria";
import { CantidadProvider } from "@/context/CantidadContext";
import Image from "next/image";

const Page = () => {
  return (
    <CantidadProvider>
      <LayoutPrincipal>
        <div className=" mt-40">
          <div className="relative  min-h-screen  ">
            <div className="absolute bottom-0 w-full ">
              <Image
                src="/mezcal_background.png"
                alt="Imagen de fondo"
                width={1000}
                height={1000}
                className="w-full opacity-60 object-cover"
              />
            </div>

            <Categoria />
          </div>
        </div>
      </LayoutPrincipal>
    </CantidadProvider>
  );
};

export default Page;
