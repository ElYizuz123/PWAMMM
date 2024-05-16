import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import MostrarProductosFicha from "@/components/Tienda/FichaProducto/MostrarProductosFicha";

const abrir_producto = ({ params }) => {
  return (
    <LayoutPrincipal>
      <div className="relative h-full">
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
        <div className=" z-20">
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
