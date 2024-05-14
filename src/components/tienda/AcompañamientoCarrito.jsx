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
  
  return(
    <div>
      {acompanamientos 
       .map((acompanamiento) => (
          <MostrarAcompanamientoCarrito key={acompanamiento.id_acompanamiento}
            id_producto={acompanamiento.producto.id_producto}
            nombre={acompanamiento.producto.nombre}
            precio={acompanamiento.producto.precio}
            imagen={acompanamiento.producto.fotoUri}
            ml={acompanamiento.gr}
            marca={acompanamiento.producto.marca.nombre}
            cantidad={acompanamiento.producto.cantidad}
          ></MostrarAcompanamientoCarrito>
        ))}
    </div>
  );
};

export default AcompañamientoCarrito;
