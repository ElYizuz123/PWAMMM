"use client";
import React from "react";
import ProductoCarrito from "@/components/tienda/ProductoCarrito";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

const MostrarItemsCarrito = () => {
  const { productos } = useContext(ProductContext);
  return (
    <div>
      {productos.map((producto) => (
        <ProductoCarrito key={producto.id_producto}
          id_producto={producto.id_producto}
          nombre={producto.nombre}
          marca={producto.marca}
          precio={producto.precio}
          ml={producto.ml}
          imagen={producto.imagen}
          cantidad={producto.cantidad}
          subtotal = {producto.precio * producto.cantidad}
          
        />
      ))}
    </div>
  );
};

export default MostrarItemsCarrito;
