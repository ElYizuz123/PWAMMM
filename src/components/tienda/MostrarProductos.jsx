"use client";
import React, { useEffect, useMemo, useState } from "react";
import Tarjeta from "./Tarjeta";

function MostrarProductos({ idMarca }) {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/api/read_producto");
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  const filteredProducts = useMemo(() => {
    let tempProductos = productos;

    if (searchTerm) {
      tempProductos = tempProductos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (Number(idMarca) !== 0) {
      tempProductos = tempProductos.filter(
        (producto) => producto.marca.id_marca === Number(idMarca)
      );
    }

    return tempProductos;
  }, [searchTerm, productos, idMarca]);

  return (
    <div>
      {/* <div>
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
              <img className="h-5 w-5" src="\emoticons\lupa.png" alt="Buscar" />
            </button>
          </form>
        </div>
      </div> */}

      {/* Componente que maneje su estado propio */}
      <div className="flex flex-wrap gap-8 mx-8 justify-center mr-24">
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
      </div>
    </div>
  );
}

export default MostrarProductos;
