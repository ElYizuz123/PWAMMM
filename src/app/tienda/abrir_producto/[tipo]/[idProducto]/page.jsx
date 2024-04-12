import Ficha from "@/components/tienda/Ficha";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Tarjeta from "@/components/tienda/Tarjeta";
import Image from "next/image";
import MostrarProductosFicha from "@/components/tienda/MostrarProductosFicha";

const abrir_producto = ({ params }) => {
  return (
    <LayoutPrincipal>
      <div className=" relative  flex justify-center ">
        <div className="absolute w-full h-full bottom-0  top-40 z-0">
          <Image
            src="/backgroundImage - copia.jpg"
            alt="Imagen de fondo"
            width={1000}
            height={1000}
            className="w-full h-[1530px]  opacity-50"
          />
        </div>
        <div>
          <MostrarProductosFicha
            tipo={params.tipo}
            idProducto={params.idProducto}
          ></MostrarProductosFicha>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default abrir_producto;
