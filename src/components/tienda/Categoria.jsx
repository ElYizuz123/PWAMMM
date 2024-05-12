"use client";

import MostrarProductos from "./MostrarProductos";
import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

const Categoria = () => {
  const { marcaAsociada, setMarcaAsociada, marcaNombreAsociada, setMarcaNombreAsociada } = useContext(ProductContext);
  const [marcas, setMarcas] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState(marcaAsociada);
  const [selectedMarcaNombre, setSelectedMarcaNombre] = useState(marcaNombreAsociada);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/read_marcas");
      const dataMarcas = await response.json();

      setMarcas(dataMarcas);
    };
    fetchData();
    setMarcaAsociada(0);
    setMarcaNombreAsociada("Todos")
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block w-36 text-black z-10 mx-8 py-[75px]">
        <div className="flex flex-col">
          <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
            Categorias
          </span>

          <div>
            <div
              className={`cursor-pointer mb-2 p-2 px-4 hover:underline  ${
                selectedMarca == 0
                  ? "text-white bg-[#F70073] rounded-3xl hover:no-underline "
                  : "text-black"
              }`}
              onClick={() => {
                setSelectedMarca(0);
                setSelectedMarcaNombre("Todos");
              }}
            >
              {"TODOS"}
            </div>
          </div>

          <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
            Mezcales
          </span>

          {marcas
            .filter((item) => item.tipo === 1)
            .map((marca) => (
              <div key={marca.id_marca}>
                <div
                  className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                    selectedMarca === marca.id_marca
                      ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                      : "text-black"
                  }`}
                  onClick={() => {
                    setSelectedMarca(selectedMarca === marca.id_marca ? null : marca.id_marca);
                    setSelectedMarcaNombre(selectedMarca === marca.id_marca ? null : marca.nombre);
                  }}
                >
                  {marca.nombre}
                </div>
              </div>
            ))}

          <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
            Acompañamientos
          </span>
          {marcas
            .filter((item) => item.tipo === 2)
            .map((marca) => (
              <div key={marca.id_marca}>
                <div
                  className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                    selectedMarca === marca.id_marca
                      ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                      : "text-black"
                  }`}
                  onClick={() => {
                    setSelectedMarca(selectedMarca === marca.id_marca ? null : marca.id_marca);
                    setSelectedMarcaNombre(selectedMarca === marca.id_marca ? null : marca.nombre);
                  }}
                >
                  {marca.nombre}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex-grow">
        <MostrarProductos selectedMarca={selectedMarca} setSelectedMarca={setSelectedMarca} 
        selectedMarcaNombre={selectedMarcaNombre} setSelectedMarcaNombre={setSelectedMarcaNombre} marcas={marcas}/>
      </div>
    </div>
  );
};

export default Categoria;
