import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import Tarjeta from "@/components/tienda/Tarjeta";
import Categoria from "@/components/tienda/Categoria";
import { K2D } from "next/font/google";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Page = async ({ params }) => {
  // const [productos, setProductos] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // Cuando estoy en contexto de servidor de react hooks
  const response = await fetch("/api/read_producto");
  const data = await response.json();



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // useEffect(() => {
  //   const fetchProductos = async () => {
  //     const response = await fetch("/api/read_producto");
  //     const data = await response.json();
  //     setProductos(data);
  //     setFilteredProducts(data);
  //   };

  //   fetchProductos();
  // }, []);

  // useEffect(() => {
  //   const filtered = productos.filter((producto) =>
  //     producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchTerm, productos]);

  // useEffect(() => {
  //   if (Number(params.idMarca) === 0) {
  //     setFilteredProducts(productos);
  //   } else {
  //     const categoria = productos.filter(
  //       (producto) => producto.marca.id_marca === Number(params.idMarca)
  //     );
  //     setFilteredProducts(categoria);
  //   }
  // }, [params.idMarca, productos]);

  return (
    <LayoutPrincipal>
      <div className={k2d.className}>
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

            <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#F70073] rounded-full z-50 hover:scale-110 transition transform duration-300 ease-in-out">
              <Link
                href={"/tienda/carrito"}
                className="relative flex justify-center items-center"
              >
                <img
                  src="\emoticons\carrito.png"
                  className="z-10 object-cover"
                />
                <span className="absolute -top-5 -right-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 rounded-full z-20">
                  1
                </span>
              </Link>
            </div>

            <div>
              <div className="flex justify-between items-center md:mx-8 lg:mr-24 lg:ml-[306px] ">
                <div className="relative top-4  text-black font-semibold text-sm rounded-full z-10 text-center ">
                  Mostrando {filteredProducts.length} resultados...
                </div>

                <form className="relative top-4 z-10">
                  <input
                    className="block bg-white pl-4 pr-12 py-2 text-sm border border-gray-300 text-black rounded-full focus:outline-none focus:border-pink-300 transition duration-300 ease-in-out"
                    placeholder="Buscar productos..."
                    type="search"
                    name="search"
                    id="search"
                    onChange={handleSearchChange}
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
              <div className="w-auto text-black z-10 mx-8 ">
                <Categoria selec={params.idMarca} />
              </div>
              <Suspense fallback={<div className="bg-red-300"></div>}>
                <ComponenteNuevo data={data} />
              </Suspense>
              {/* Componente que maneje su estado propio */}
              {/* <div className="flex flex-wrap gap-8 mx-8 justify-center mr-24">
                {filteredProducts.map(
                  (
                    producto // Cambia productos a filteredProducts
                  ) => (
                    <Tarjeta
                      key={producto.id_producto}
                      nombre={producto.nombre}
                      marca={producto.marca.nombre}
                      precio={producto.precio}
                      ml={producto.ml}
                      imagen={producto.foto}
                      mercadoLibre={producto?.mercadoLibre || "NULL"}
                      tipo={producto.marca.tipo}
                    />
                  )
                )}
              </div> */}
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
      </div>
    </LayoutPrincipal>
  );
};

export default Page;
