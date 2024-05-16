"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import MostrarAcompanamientoCarrito from "./MostrarAcompanamientoCarrito";
import { CantidadContext } from "@/context/CantidadContext";

const AcompañamientoCarrito = () => {
  const [acompanamientos, setAcompanamientos] = useState([]);
  const { stock } = useContext(CantidadContext);

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
            cantidad={stock[acompanamiento.producto.id_producto]}
          ></MostrarAcompanamientoCarrito>
        ))}
    </div>
  );
};

export default AcompañamientoCarrito;
