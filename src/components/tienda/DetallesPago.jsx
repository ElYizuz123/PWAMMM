import React from "react";
import ProductosPago from "./ProductosPago";
import FormaPago from "./FormaPago";


function DetallesPago() {
  return (
    <div className="mt-16 flex   justify-center bg-gray-50  mr-44 ml-44 shadow-2xl shadow-[#F70073]  ">
      <div className="ml-9">
        <p className=" mt-8 ml-5 font-bold  text-[#F70073]  text-2xl">
          PRODUCTOS
        </p>
        <ProductosPago></ProductosPago>
        <ProductosPago></ProductosPago>
        <ProductosPago></ProductosPago>
      </div>

      <div className="md:w-1/2 p-4 ml-36 border-t md:border-t-0 md:border-l">
        <div className="">
          <FormaPago></FormaPago>
        </div>
      </div>
    </div>
  );
}

export default DetallesPago;
