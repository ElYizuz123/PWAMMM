"use client";
import React, { useEffect, useMemo, useState } from "react";
import Tarjeta from "./Tarjeta";
import { FiSearch } from "react-icons/fi";

function MostrarProductos({ idMarca }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const [productos, setProductos] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const responseProducts = await fetch("/api/read_producto");
      const dataProducts = await responseProducts.json();
      const responseAcompanamientos = await fetch("/api/read_acompanamientos");
      const dataAcompanamientos = await responseAcompanamientos.json();

      setProductos(dataProducts);
      setAcompanamientos(dataAcompanamientos);
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

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * productsPerPage;
    const lastPageIndex = firstPageIndex + productsPerPage;
    return filteredProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productsPerPage, filteredProducts]);

  const currentAcompanamientos = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * productsPerPage;
    const lastPageIndex = firstPageIndex + productsPerPage;
    return filteredAcompanamientos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productsPerPage, filteredAcompanamientos]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between lg:mr-24 lg:ml-[100px]">
          <span className="text-black font-semibold text-sm rounded-full z-10 text-center">
            Mostrando {currentProducts.length + currentAcompanamientos.length}{" "}
            resultados...
          </span>

          <div className="justify-end items-center">
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

      <div className="flex flex-wrap gap-8 justify-start px-24 pb-8">
        {currentProducts.map((producto) => (
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
        ))}
        {currentAcompanamientos.map((acompanamiento) => (
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
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center my-8">
        <div className="space-x-1 mr-24">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Anterior
          </button>
          {[
            ...Array(
              Math.ceil(
                (filteredProducts.length + filteredAcompanamientos.length) /
                  productsPerPage
              )
            ).keys(),
          ].map((number) => (
            <button
              key={number + 1}
              onClick={() => setCurrentPage(number + 1)}
              className={`px-4 py-1 rounded-md ${
                currentPage === number + 1
                  ? "bg-[#F70073] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(
                (filteredProducts.length + filteredAcompanamientos.length) /
                  productsPerPage
              )
            }
            className={`px-3 py-1 rounded-md ${
              currentPage ===
              Math.ceil(
                (filteredProducts.length + filteredAcompanamientos.length) /
                  productsPerPage
              )
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default MostrarProductos;
