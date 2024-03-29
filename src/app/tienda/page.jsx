"use client";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Tarjeta from "@/components/tienda/Tarjeta";
import Categoria from "@/components/tienda/Categoria";
import { K2D } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const page = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/api/read_producto");
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);
  return (
    <div className="bg-[#F5F5F5FD]">
      <LayoutPrincipal></LayoutPrincipal>
      <div className="relative bg-[#F5F5F5FD] min-h-screen my-4">
        {/* <div className=" fixed z-0 inset-0">
          <Image
            src="/backgroundImage.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Fondo"
          />
        </div> */}

        <div className="bg-inherit">
          <form className="max-w-md mx-auto z-10">
            <div className="relative">
              <input
                className="block bg-white w-full pl-4 pr-12 py-2 text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 transition duration-300 ease-in-out"
                placeholder="Buscar productos..."
                type="search"
                name="search"
                id="search"
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F70073] hover:bg-pink-600 transition duration-300 ease-in-out p-2 rounded-r-full"
                type="submit"
              >
                <img
                  className="h-5 w-5"
                  src="\emoticons\lupa.png"
                  alt="Buscar"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="flex">
          <div className="w-auto text-black z-10 my-8 mx-8">
            <Categoria />
          </div>

          <div className="flex flex-wrap gap-8 mx-8 my-8 justify-center">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />

            {productos.map((producto) => (
              <Tarjeta
                key={producto.idProducto}
                nombre={producto.nombre}
                marca={producto.marca.Nombre}
                precio={producto.precio}
                ml={
                  producto.producto_informacion?.contenido || "no especificado"
                }
                agave={
                  producto.producto_informacion?.tipo_agave || "no especificado"
                }
                alcohol={
                  producto.producto_informacion?.riquezaAlcoholica ||
                  "no especificado"
                }
                imagen={producto.foto}
                mercadoLibre={producto?.mercadoLibre || "NULL"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
