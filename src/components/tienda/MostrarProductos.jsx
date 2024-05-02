"use client";
import React, { useEffect, useMemo, useState } from "react";
import Tarjeta from "./Tarjeta";
import { FiSearch } from "react-icons/fi";

function MostrarProductos({ idMarca }) {
  const [productos, setProductos] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/api/read_producto");
      const data = await response.json();
      const response2 = await fetch("/api/read_acompanamientos");
      const data2 = await response2.json();

      setProductos(data);
      setAcompanamientos(data2);
    };
    fetchProductos();
  }, []);

  const filteredProducts = useMemo(() => {
    return productos
      .filter((producto) =>
        searchTerm
          ? producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
          : true
      )

      .filter((producto) =>
        Number(idMarca) !== 0
          ? producto.marca.id_marca === Number(idMarca)
          : true
      );
  }, [searchTerm, productos, idMarca]);

  const filteredAcompanamientos = useMemo(() => {
    return acompanamientos

      .filter((acompanamiento) =>
        searchTerm
          ? acompanamiento.nombre
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : true
      )
      .filter((acompanamiento) =>
        Number(idMarca) !== 0
          ? acompanamiento.marca.id_marca === Number(idMarca)
          : true
      );
  }, [searchTerm, acompanamientos, idMarca]);

  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between md:mx-8 lg:mr-24 lg:ml-[100px]">
          <div className="relative top-7 text-black font-semibold text-sm rounded-full z-10 text-center ">
            Mostrando {filteredProducts.length + filteredAcompanamientos.length}{" "}
            resultados...
          </div>

          <div className="flex justify-end items-center">
            <form className="relative">
              <input
                className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-full transition ease-out duration-300 focus:border-[#F70073] focus:outline-none focus:ring-[#F70073]"
                placeholder="Buscar productos..."
                type="search"
                name="search"
                id="search"
                onChange={handleSearchChange}
              />

              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F70073] text-white p-2 rounded-full transition-colors duration-300 ease-in-out"
                type="submit"
              >
                <FiSearch className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Componente que maneje su estado propio */}
      <div>
        <div className="flex flex-wrap gap-8 justify-start px-24 pb-8">
          {filteredProducts.map(
            (
              producto // Cambia productos a filteredProducts
            ) => (
              <Tarjeta
                id_producto={producto.id_producto}
                nombre={producto.nombre}
                marca={producto.marca.nombre}
                agave={producto.tipo_agave}
                precio={producto.precio}
                alcohol={producto.cantidad_alcohol}
                ml={producto.ml}
                imagen={producto.foto}
                mercadoLibre={producto?.mercadoLibre || "NULL"}
                cantidad={producto.cantidad}
                tipo={1}
              />
            )
          )}

          {filteredAcompanamientos.map(
            (
              acompanamiento // Cambia productos a filteredProducts
            ) => (
              <Tarjeta
                id_producto={acompanamiento.id_acompanamiento}
                nombre={acompanamiento.nombre}
                marca={acompanamiento.marca.nombre}
                precio={"200"}
                ml={acompanamiento.gr}
                imagen={acompanamiento.foto}
                mercadoLibre={"NULL"}
                cantidad={acompanamiento.cantidad}
                tipo={2}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default MostrarProductos;
