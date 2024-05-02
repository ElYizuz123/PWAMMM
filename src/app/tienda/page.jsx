import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Categoria from "@/components/tienda/Categoria";
import { K2D } from "next/font/google";
import Image from "next/image";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <LayoutPrincipal>
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

          <Categoria/>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
