import React from "react";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Image from "next/image";
import ProductoCarrito from "@/components/tienda/ProductoCarrito";
import AcompañamientoCarrito from "@/components/tienda/AcompañamientoCarrito";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
        <div className="  w-full relative ">
          <div className=" h-full w-full z-0 opacity-60  ">
            <Image
              src="/backgroundImage.jpg"
              layout="fill"
              quality={100}
              alt="Fondo"
            />
          </div>
          <div className="relative w-full py-48 ">
            <div className="  mt-12 p-6 mx-48  bg-white border-[#1E1E1E] border-opacity-50 dark:border-gray-600 shadow">
              <div className="mb-4 text-2xl font-bold text-pink-500">
                Carrito
              </div>
              <div className="flex flex-row">
                {/* Contenedor de la lista de productos */}
                <div className="flex flex-col w-3/5 bg-gray-100 p-4">
                  <ProductoCarrito />
                  <ProductoCarrito />
                  <ProductoCarrito />
                  <ProductoCarrito />
                </div>

                {/* Contenedor del resumen de la compra */}
                <div className="w-2/5 ml-4 p-4 bg-white">
                  <div className="mb-6">
                    <h2 className="font-bold text-xl mb-2">
                      Resumen de la compra
                    </h2>
                    <div className="flex justify-between">
                      <span>2 productos</span>
                      <span className="flex">
                        <p>Subtotal: </p>
                        <p className="text-green-700 ml-2 font-bold">
                          $1,948.00{" "}
                        </p>{" "}
                      </span>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 my-4 hover:bg-green-600">
                      Proceder al pago
                    </button>
                  </div>

                  {/* Contenedor de productos recomendados o adicionales */}
                  <div>
                    <h3 className="font-bold text-lg">Acompáñalo con</h3>
                    {/* Listado de productos adicionales */}
                    <AcompañamientoCarrito />
                    <AcompañamientoCarrito />
                    <AcompañamientoCarrito />
                    {/* Repetir para más productos adicionales */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default page;
