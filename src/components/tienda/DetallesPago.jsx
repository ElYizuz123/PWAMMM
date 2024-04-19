"use client"
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";


const DetallesPago = () => {
  const { productos } = useContext(ProductContext);

  return (
    <div className="mt-16 flex   justify-center bg-white w-[1390px] mr-44 ml-44 shadow-2xl shadow-[#F70073]  ">
      <div className="ml-9">
        <p className=" mt-12  font-bold  text-[#F70073]  text-2xl">PRODUCTOS</p>
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

      <div className=" mt-10 ml-36 border-t md:border-t-0 md:border-l">
        <div className="ml-20">
          <FormaPago />
        </div>
      </div>
    </div>
  );
};

export default DetallesPago;
