import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import MostrarProductosFicha from "@/components/tienda/MostrarProductosFicha";

const abrir_producto = ({ params }) => {
  return (
    
    <LayoutPrincipal >
      {/* <div
        className="bg-cover bg-center w-full h-full p-10 relative bottom-0"
        style={{ backgroundImage: "url('/backgroundImage.jpg')" }}
      > */}
        <div className="absolute  bottom-0 w-full z-0 ">
          <Image
          src="/mezcal_background.png"
            alt="Imagen de fondo"
            width={1000}
           height={1000}
           objectFit="cover"
           className="w-full opacity-60"
         />
        </div>
        <div className="">
          <MostrarProductosFicha
            tipo={params.tipo}
            idProducto={params.idProducto}
          ></MostrarProductosFicha>
        </div>
      {/* </div> */}
    </LayoutPrincipal>
    
  );
};

export default abrir_producto;
