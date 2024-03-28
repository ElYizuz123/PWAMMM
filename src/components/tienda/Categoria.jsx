"use client";
import React, { useEffect, useState } from "react";



const Categoria = () => {
const [items, setItems] = useState([]);
const [selectedMarca, setSelectedMarca] = useState("Todos");

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
      <div className="flex flex-col p-4">
        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Default
        </span>

        <span
          onClick={() => setSelectedMarca("Todos")}
          className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
            selectedMarca === "Todos"
              ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
              : "text-black"
          }`}
        >
          Todos
        </span>

        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Marcas
        </span>

        {items
          .filter((item) => item.Tipo === "1") // Asegúrate de que la comparación sea con el tipo correcto
          .map((marca) => (
            <h3
              key={marca.idMarca}
              onClick={() => setSelectedMarca(marca.Nombre)}
              className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                selectedMarca === marca.Nombre
                  ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                  : "text-black"
              }`}
            >
              {marca.Nombre}
            </h3>
          ))}
        <span className="text-lg font-bold border-b-2 border-[#F70073] mb-2">
          Acompañamientos
        </span>
        {items
          .filter((item) => item.Tipo === "2")
          .map((acompañamiento) => (
            <h3
              key={acompañamiento.idMarca}
              onClick={() => setSelectedMarca(acompañamiento.Nombre)}
              className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
                selectedMarca === acompañamiento.Nombre
                  ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                  : "text-black"
              }`}
            >
              {acompañamiento.Nombre}
            </h3>
          ))}
        {/* {items.map((acompañamiento) => (
          <h3
            key={acompañamiento.name}
            onClick={() => setSelectedCategory(acompañamiento.name)}
            className={`cursor-pointer mb-2 p-2 px-4 hover:underline ${
              selectedCategory === acompañamiento.name
                ? "text-white bg-[#F70073] rounded-3xl hover:no-underline"
                : "text-black"
            }`}
          >
            {acompañamiento.name}
          </h3>
        ))} */}
      </div>
    </div>
  );
};

export default Categoria;
