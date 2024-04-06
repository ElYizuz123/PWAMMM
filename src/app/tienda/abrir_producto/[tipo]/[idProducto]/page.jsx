import Ficha from "@/components/tienda/Ficha";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Tarjeta from "@/components/tienda/Tarjeta";
import Image from "next/image";
import MostrarProductosFicha from "@/components/tienda/MostrarProductosFicha";

const abrir_producto = ({ params }) => {
  return (
    <LayoutPrincipal>
      <div className=" relative  flex justify-center ">
        <div className="absolute bottom-0 w-full">
          <Image
            src="/backgroundImage.jpg"
            alt="Imagen de fondo"
            width={1000}
            height={1000}
            objectFit="cover"
            className="w-full opacity-60"
          />
        </div>
        <div>
          <MostrarProductosFicha
            tipo={params.tipo}
            idProducto={params.idProducto}
            //marca={params.marca}
          ></MostrarProductosFicha>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default abrir_producto;
