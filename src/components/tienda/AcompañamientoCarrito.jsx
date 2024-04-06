"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import MostrarAcompanamientoCarrito from "./MostrarAcompanamientoCarrito";

const AcompañamientoCarrito = () => {
  const [acompanamientos, setAcompanamientos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/api/read_acompanamientos");
      const data = await response.json();

      setAcompanamientos(data);
    };

    fetchProductos();
  }, []);

  return (
    <div>
      {acompanamientos 
       .map((acompanamiento) => (
          <MostrarAcompanamientoCarrito
            id_producto={acompanamiento.id_acompanamiento}
            nombre={acompanamiento.nombre}
            precio={"200"}
            ml={acompanamiento.gr}
            imagen={acompanamiento.foto}
           marca={acompanamiento.marca.nombre}
          ></MostrarAcompanamientoCarrito>
        ))}
    </div>
  );
};

export default AcompañamientoCarrito;
