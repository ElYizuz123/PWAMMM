"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Categoria = ({ selec }) => {
  const [items, setItems] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState(selec);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/read_marcas");
      const data = await response.json();

      setItems(data); // Suponiendo que 'data' es un array de items.
    };

    fetchData();
  }, []);

  return (
    <div>




      
      <div className="flex flex-col">
        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Default
        </span>

        <Link href="/tienda/0">
          <div
            className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
              selectedMarca == 0
                ? "text-white bg-[#F70073] rounded-3xl hover:no-underline "
                : "text-black"
            }`}
            onClick={() => setSelectedMarca(0)}
          >
            {"TODOS"}
          </div>
        </Link>

        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Marcas
        </span>

        {items
          .filter((item) => item.tipo === 1) // Asegúrate de que la comparación sea con el tipo correcto
          .map((marca) => (
            <Link href={`/tienda/${marca.id_marca}`} key={marca.id_marca}>
              <div
                className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                  selectedMarca == marca.id_marca
                    ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                    : "text-black"
                }`}
                onClick={() => setSelectedMarca(marca.id_marca)}
              >
                {marca.nombre}
              </div>
            </Link>
          ))}
        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Acompañamientos
        </span>
        {items
          .filter((item) => item.tipo === 2) // Asegúrate de que la comparación sea con el tipo correcto
          .map((marca) => (
            <Link href={`/tienda/${marca.id_marca}`} key={marca.id_marca}>
              <div
                className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                  selectedMarca == marca.id_marca
                    ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                    : "text-black"
                }`}
                onClick={() => setSelectedMarca(marca.id_marca)}
              >
                {marca.nombre}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categoria;
