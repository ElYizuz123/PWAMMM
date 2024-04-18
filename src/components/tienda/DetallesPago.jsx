"use client"
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";


const DetallesPago = () => {
  const { productos } = useContext(ProductContext);

  return (
    <div className="mt-16 flex   justify-center bg-gray-50  mr-44 ml-44 shadow-2xl shadow-[#F70073]  ">
      <div className="ml-9">
        <p className=" mt-8 ml-5 font-bold  text-[#F70073]  text-2xl">
          PRODUCTOS
        </p>
        {productos.map((producto) => (
          <ProductosPago
            id_producto={producto.id_producto}
            imagen={producto.imagen}
            nombre={producto.nombre}
            marca={producto.marca}
            precio={producto.precio}
            ml={producto.ml}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
     
      <div className="md:w-1/2 p-4 ml-36 border-t md:border-t-0 md:border-l">
        <div className="">
          {/* {productos.map((producto) => ( */}
            <FormaPago
              // id_producto={producto.id_producto}
              // precio={producto.precio}
              // cantidad={producto.cantidad}
            />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default DetallesPago;
