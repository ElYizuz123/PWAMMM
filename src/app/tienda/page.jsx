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
    <LayoutPrincipal>
      <div className=" my-44">
        <div className="relative  min-h-screen  ">
          <div className="absolute w-full z-0">
            <Image
              src="/backgroundImage.jpg"
              alt="Imagen de fondo"
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-full opacity-60 z-0"
            />
          </div>

          <div className="fixed bottom-1/2 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-50 hover:scale-110 transition transform duration-300 ease-in-out">
            <button className="relative flex justify-center items-center">
              <img src="\emoticons\carrito.png" className="z-10 object-cover" />
              <span className="absolute -top-5 -right-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 rounded-full z-20">
                1
              </span>
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center md:mx-8 lg:mr-24 lg:ml-[306px] ">
              <div className="relative top-4  text-black font-semibold text-sm rounded-full z-10 text-center ">
                Mostrando los 9 resultados...
              </div>

              <form className="relative top-4 z-10">
                <input
                  className="block bg-white pl-4 pr-12 py-2 text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 transition duration-300 ease-in-out"
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
              </form>
            </div>
          </div>

          <div className="flex my-8">
            <div className="w-auto text-black z-10 mx-8 fixed">
              <Categoria />
            </div>

            <div className="flex flex-wrap gap-8 mx-8 justify-end mr-24">
              <Tarjeta />
              <Tarjeta />
              <Tarjeta />
              <Tarjeta />
              <Tarjeta />
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
                    producto.producto_informacion?.contenido ||
                    "no especificado"
                  }
                  agave={
                    producto.producto_informacion?.tipo_agave ||
                    "no especificado"
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

          {/* SECCION */}
          <div className="relative z-10">
            <div className="flex items-center justify-end space-x-1 mr-24">
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Anterior
              </button>
              <button className="px-4 py-1 text-white rounded-md bg-[#F70073] hover:bg-[#F70073]">
                1
              </button>
              <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                3
              </button>
              <span className="px-4 py-1">...</span>
              <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                7
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default page;
