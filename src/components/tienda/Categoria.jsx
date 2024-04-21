"use client";
import Link from "next/link";

import MostrarProductos from "./MostrarProductos";
import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

const Categoria = () => {
  const { marcaAsociada, idMarcaAsociada } = useContext(ProductContext);
  const [items, setItems] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState(marcaAsociada);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/read_marcas");
      const data = await response.json();

      setItems(data); // Suponiendo que 'data' es un array de items.
    };
    fetchData();
    idMarcaAsociada(0);
  }, []);

  return (
    <div>
      <div className="flex">
        <div className=" w-36 text-black z-10 mx-8 py-[75px]">
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
                onClick={() => setSelectedMarca(0)}
              >
                {"TODOS"}
              </div>
            </div>

            <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
              Marcas
            </span>

            {items
              .filter((item) => item.tipo === 1) // Asegúrate de que la comparación sea con el tipo correcto
              .map((marca) => (
                <div key={marca.id_marca}>
                  <div
                    className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                      selectedMarca === marca.id_marca
                        ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                        : "text-black"
                    }`}
                    onClick={() =>
                      setSelectedMarca(
                        selectedMarca === marca.id_marca ? null : marca.id_marca
                      )
                    } // Toggle la selección al hacer clic
                  >
                    {marca.nombre}
                  </div>
                </div>
              ))}

            <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
              Acompañamientos
            </span>
            {items
              .filter((item) => item.tipo === 2) // Asegúrate de que la comparación sea con el tipo correcto
              .map((marca) => (
                <div key={marca.id_marca}>
                  <div
                    className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                      selectedMarca === marca.id_marca
                        ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                        : "text-black"
                    }`}
                    onClick={() =>
                      setSelectedMarca(
                        selectedMarca === marca.id_marca ? null : marca.id_marca
                      )
                    } // Toggle la selección al hacer clic
                  >
                    {marca.nombre}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex-grow">
          <MostrarProductos idMarca={selectedMarca} />
        </div>
      </div>
    </div>
  );
};

export default Categoria;
