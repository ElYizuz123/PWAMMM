"use client";
import React, { useEffect, useMemo, useState } from "react";
import Tarjeta_Botella from "./Tarjeta_Botella";
import Tarjeta_Acompañamiento from "./Tarjeta_Acompañamiento";
import { FiSearch } from "react-icons/fi";

function MostrarProductos({ idMarca }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const [botellas, setBotellas] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //LLAMA API PARA MOSTRAR LA INFORMACIÓN DE BOTELLAS Y ACOMPAÑAMIENTOS EN LAS TARJETAS
  useEffect(() => {
    const fetchProductos = async () => {
      const responseBotellas = await fetch("/api/read_botellas");
      const dataBotellas = await responseBotellas.json();
      const responseAcompanamientos = await fetch("/api/read_acompanamientos");
      const dataAcompanamientos = await responseAcompanamientos.json();

      setBotellas(dataBotellas);
      setAcompanamientos(dataAcompanamientos);
    };
    fetchProductos();
  }, []);

  //FILTRAR POR BOTELLAS
  const filteredBotellas = useMemo(() => {
    return botellas
      .filter((botella) =>
        searchTerm
          ? botella.producto.nombre
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : true
      )
      .filter((botella) =>
        Number(idMarca) !== 0
          ? botella.producto.marca.id_marca === Number(idMarca)
          : true
      );
  }, [searchTerm, botellas, idMarca]);

  const filteredAcompanamientos = useMemo(() => {
    return acompanamientos
      .filter((acompanamiento) =>
        searchTerm
          ? acompanamiento.producto.nombre
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : true
      )
      .filter((acompanamiento) =>
        Number(idMarca) !== 0
          ? acompanamiento.producto.marca.id_marca === Number(idMarca)
          : true
      );
  }, [searchTerm, acompanamientos, idMarca]);

  const currentBotellas = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * productsPerPage;
    const lastPageIndex = firstPageIndex + productsPerPage;
    return filteredBotellas.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productsPerPage, filteredBotellas]);

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
          {/* DISEÑO MOSTRAR CANTIDAD DE PRODUCTOS POR PAGINA */}
          <span className="text-black font-semibold text-sm rounded-full z-10 text-center">
            Mostrando {currentBotellas.length + currentAcompanamientos.length}{" "}
            resultados...
          </span>

          {/* DISEÑO BUSCADOR  */}
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
      {/* LLAMA COMPOTENENTE TARJETA ENVIANDO LA INFORMACIÓN OBTENIDA EN API  */}

      <div className="flex flex-wrap gap-8 justify-start px-24 pb-8">
        {currentBotellas.map((botella) => (
          <Tarjeta_Botella key={botella.id_producto}
            id_producto={botella.producto.id_producto}
            nombre={botella.producto.nombre}
            marca={botella.producto.marca.nombre}
            agave={botella.tipo_agave}
            precio={botella.producto.precio}
            alcohol={botella.cantidad_alcohol}
            ml={botella.ml}
            imagen={botella.producto.fotoUri}
            mercadoLibre={botella.producto?.mercadoLibre || "NULL"}
            cantidad={botella.producto.cantidad}
            tipo={1}
          />
        
        ))}
        {currentAcompanamientos.map((acompanamiento) => (
          <Tarjeta_Acompañamiento key={acompanamiento.id_producto}
            id_producto={acompanamiento.producto.id_producto}
            nombre={acompanamiento.producto.nombre}
            marca={acompanamiento.producto.marca.nombre}
            precio={acompanamiento.producto.precio}
            gr={acompanamiento.gr}
            imagen={acompanamiento.producto.fotoUri}
            mercadoLibre={acompanamiento.producto?.mercadoLibre || "NULL"}
            cantidad={acompanamiento.producto.cantidad}
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
                (filteredBotellas.length + filteredAcompanamientos.length) /
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
                (filteredBotellas.length + filteredAcompanamientos.length) /
                  productsPerPage
              )
            }
            className={`px-3 py-1 rounded-md ${
              currentPage ===
              Math.ceil(
                (filteredBotellas.length + filteredAcompanamientos.length) /
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
