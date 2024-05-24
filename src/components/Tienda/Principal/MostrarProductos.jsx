"use client";
import React, { useEffect, useMemo, useState } from "react";
import Tarjeta_Botella from "./Tarjeta_Botella";
import Tarjeta_Acompañamiento from "./Tarjeta_Acompañamiento";
import { FiSearch } from "react-icons/fi";
import {
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { CantidadContext } from "@/context/CantidadContext";
import { useContext } from "react";

function MostrarProductos({
  selectedMarca,
  setSelectedMarca,
  selectedMarcaNombre,
  setSelectedMarcaNombre,
  marcas,
}) {
  const { stock, initializeStock } = useContext(CantidadContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const [botellas, setBotellas] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMezcales, setShowMezcales] = useState(false);
  const [showAcompanamientos, setShowAcompanamientos] = useState(false);
  const [showDefault, setShowDefault] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMezcales = () => setShowMezcales(!showMezcales);
  const toggleAcompanamientos = () =>
    setShowAcompanamientos(!showAcompanamientos);
  const toggleDefault = () => setShowDefault(!showDefault);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //LLAMA API PARA MOSTRAR LA INFORMACIÓN DE BOTELLAS Y ACOMPAÑAMIENTOS EN LAS TARJETAS
  useEffect(() => {
    const fetchProductos = async () => {
      const responseBotellas = await fetch("/api/tienda/read_botellas");
      const dataBotellas = await responseBotellas.json();
      const responseAcompanamientos = await fetch(
        "/api/tienda/read_acompanamientos"
      );
      const dataAcompanamientos = await responseAcompanamientos.json();

      if (!sessionStorage.getItem("stock")) {
        // Reducir botellas para crear un stock inicial
        const stockBotellas = dataBotellas.reduce((acc, botella) => {
          acc[botella.producto.id_producto] = botella.producto.cantidad; // Asume que cada botella tiene un 'id' y una 'cantidad'
          return acc;
        }, {});

        // Reducir acompañamientos para agregar al stock inicial
        const stockAcompanamientos = dataAcompanamientos.reduce(
          (acc, acompanamiento) => {
            acc[acompanamiento.producto.id_producto] =
              acompanamiento.producto.cantidad; // Asume que cada acompañamiento tiene un 'id' y una 'cantidad'
            return acc;
          },
          {}
        );

        const initialStock = { ...stockBotellas, ...stockAcompanamientos };
        initializeStock(initialStock);
      }

      setBotellas(dataBotellas);
      setAcompanamientos(dataAcompanamientos);
    };
    fetchProductos();
  }, [initializeStock]);

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
        Number(selectedMarca) !== 0
          ? botella.producto.marca.id_marca === Number(selectedMarca)
          : true
      );
  }, [searchTerm, botellas, selectedMarca]);

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
        Number(selectedMarca) !== 0
          ? acompanamiento.producto.marca.id_marca === Number(selectedMarca)
          : true
      );
  }, [searchTerm, acompanamientos, selectedMarca]);

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
        <div className="md:flex-row">
          <Transition.Root show={isMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 overflow-y-auto"
              onClose={() => setIsMenuOpen(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full" // Corrected this line
                >
                  <Dialog.Panel className="relative w-64 md:w-80 bg-white shadow-xl">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between p-4 border-b">
                        <Dialog.Title className="px-2 text-2xl font-bold text-[#F70073]">
                          Categorías
                        </Dialog.Title>
                        <button
                          type="button"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <XIcon className="h-6 w-6 mx-1 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180" />
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4">
                        <div
                          className="flex items-center justify-between w-full p-2 text-lg font-semibold mb-2"
                          onClick={toggleDefault}
                        >
                          <span className="flex-grow">Default</span>
                          <div className="flex-none">
                            {showDefault ? (
                              <ChevronUpIcon className="h-5 w-5" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        <div className="border-b mb-2"></div>
                        <AnimatePresence>
                          {showDefault && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1 }}
                              className={`block w-full text-left p-1 px-4 text-sm transition duration-150 ease-in-out ${
                                selectedMarca === 0
                                  ? "bg-[#F70073] text-white rounded-md"
                                  : "hover:bg-gray-100 hover:rounded-md"
                              }`}
                              onClick={() => {
                                setSelectedMarca(0);
                                setSelectedMarcaNombre("Todos");
                                setIsMenuOpen(false);
                              }}
                            >
                              TODOS LOS PRODUCTOS
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Acordeón para Mezcales */}
                        <div
                          className="flex items-center justify-between w-full p-2 text-lg font-semibold mb-2"
                          onClick={toggleMezcales}
                        >
                          <span className="flex-grow">Mezcales</span>
                          <div className="flex-none">
                            {showMezcales ? (
                              <ChevronUpIcon className="h-5 w-5" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        <div className="border-b mb-2"></div>
                        <AnimatePresence>
                          {showMezcales && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              {marcas
                                .filter((m) => m.tipo === 1)
                                .map((marca) => (
                                  <button
                                    key={marca.id_marca}
                                    className={`block w-full text-left p-1 px-4 text-sm transition duration-150 ease-in-out ${
                                      selectedMarca === marca.id_marca
                                        ? "bg-[#F70073] text-white rounded-md"
                                        : "hover:bg-gray-100 hover:rounded-md"
                                    }`}
                                    onClick={() => {
                                      setSelectedMarca(
                                        selectedMarca === marca.id_marca
                                          ? null
                                          : marca.id_marca
                                      );
                                      setSelectedMarcaNombre(
                                        selectedMarca === marca.id_marca
                                          ? null
                                          : marca.nombre
                                      );
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    {marca.nombre}
                                  </button>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Acordeón para Acompañamientos */}
                        <div
                          className="flex items-center justify-between w-full p-2 text-lg font-semibold mb-2"
                          onClick={toggleAcompanamientos}
                        >
                          <span className="flex-grow">Acompañamientos</span>
                          <div className="flex-none">
                            {showAcompanamientos ? (
                              <ChevronUpIcon className="h-5 w-5" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        <div className="border-b mb-2"></div>
                        <AnimatePresence>
                          {showAcompanamientos && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              {marcas
                                .filter((m) => m.tipo === 2)
                                .map((marca) => (
                                  <button
                                    key={marca.id_marca}
                                    className={`block w-full text-left p-1 px-4 text-sm ${
                                      selectedMarca === marca.id_marca
                                        ? "bg-[#F70073] text-white rounded-md"
                                        : "hover:bg-gray-100 hover:rounded-md"
                                    }`}
                                    onClick={() => {
                                      setSelectedMarca(
                                        selectedMarca === marca.id_marca
                                          ? null
                                          : marca.id_marca
                                      );
                                      setSelectedMarcaNombre(
                                        selectedMarca === marca.id_marca
                                          ? null
                                          : marca.nombre
                                      );
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    {marca.nombre}
                                  </button>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div
                  className="flex-1"
                  onClick={() => setIsMenuOpen(false)}
                ></div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        {/* DISEÑO EN COMPUTADORA */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center px-12">
            {/* DISEÑO MOSTRAR CANTIDAD DE PRODUCTOS POR PAGINA */}
            <div className="flex-1">
              <span className="text-gray-700 font-bold rounded-full z-10 text-center px-4 py-1">
                {selectedMarcaNombre ? (
                  <span>
                    <span className="text-xl">
                      {selectedMarcaNombre.charAt(0).toUpperCase() +
                        selectedMarcaNombre.slice(1).toLowerCase()}
                    </span>
                    <span>
                      {" "}
                      ({currentBotellas.length +
                        currentAcompanamientos.length}{" "}
                      resultados)
                    </span>
                  </span>
                ) : (
                  <span className="text-sm">
                    {currentBotellas.length + currentAcompanamientos.length}{" "}
                    resultados
                  </span>
                )}
              </span>
            </div>

            {/* DISEÑO BUSCADOR */}
            <div className="flex-1 max-w-md">
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

        {/* DISEÑO EN CELULAR  */}
        <div className="block md:hidden px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="w-full mb-4 md:mb-0">
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

            {/* Resultados y Filtrador en la misma línea en dispositivos pequeños */}
            <div className="flex justify-between items-center w-full">
              <button
                className="bg-[#66c719] text-white py-1  px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
                onClick={toggleMenu}
              >
                <span className="mr-2 font-medium">Filtrar</span>
                <AdjustmentsIcon className="h-6 w-6" />
              </button>
              <span className="text-gray-700 font-bold rounded-full z-10 text-center py-1 block">
                {selectedMarcaNombre ? (
                  <>
                    <span className="font-bold block">
                      {selectedMarcaNombre.charAt(0).toUpperCase() +
                        selectedMarcaNombre.slice(1).toLowerCase()}
                    </span>
                    <span className="text-xs block">
                      ({currentBotellas.length + currentAcompanamientos.length}{" "}
                      resultados)
                    </span>
                  </>
                ) : (
                  <span className="block">
                    {currentBotellas.length + currentAcompanamientos.length}{" "}
                    resultados
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 relative ">
        {filteredBotellas.length === 0 &&
          filteredAcompanamientos.length === 0 && (
            <p className="text-center text-black font-bold w-full ">
              {`"No se encontraron productos relacionados"`}
            </p>
          )}
      </div>

      {/* LLAMA COMPOTENENTE TARJETA ENVIANDO LA INFORMACIÓN OBTENIDA EN API  */}
      <div className="flex flex-wrap gap-3 justify-center">
        {currentBotellas.map((botella) => (
          <Tarjeta_Botella
            key={botella.id_producto}
            id_producto={botella.producto.id_producto}
            nombre={botella.producto.nombre}
            marca={botella.producto.marca.nombre}
            agave={botella.tipo_agave}
            precio={botella.producto.precio}
            alcohol={botella.cantidad_alcohol}
            ml={botella.ml}
            imagen={botella.producto.fotoUri}
            mercadoLibre={botella.producto?.mercadoLibre || "NULL"}
            cantidad={stock[botella.producto.id_producto]}
            cantidadOficial={botella.producto.cantidad}
            tipo={1}
          />
        ))}
        {currentAcompanamientos.map((acompanamiento) => (
          <Tarjeta_Acompañamiento
            key={acompanamiento.id_producto}
            id_producto={acompanamiento.producto.id_producto}
            nombre={acompanamiento.producto.nombre}
            marca={acompanamiento.producto.marca.nombre}
            precio={acompanamiento.producto.precio}
            gr={acompanamiento.gr}
            imagen={acompanamiento.producto.fotoUri}
            mercadoLibre={acompanamiento.producto?.mercadoLibre || "NULL"}
            cantidad={stock[acompanamiento.producto.id_producto]}
            cantidadOficial={acompanamiento.producto.cantidad}
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
