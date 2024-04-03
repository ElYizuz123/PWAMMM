  "use client";
  import Ficha from "@/components/tienda/Ficha";
  import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
  import React, { useEffect, useState } from "react";
  import Image from "next/image";


  const abrir_producto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const fetchProductos = async () => {
        const response = await fetch("/api/read_producto");
        const data = await response.json();
        setProductos(data);
      };

      fetchProductos();
    }, []);
    return (
      // <LayoutPrincipal>
        <div className="w-full ">
          {productos.map((producto) => (
            <Ficha
              key={producto.idProducto}
              nombre={producto.nombre}
              marca={producto.marca.nombre}
              precio={producto.precio}
              contenido={producto.ml}
              imagen={producto.foto}
              mercadoLibre={producto?.mercadoLibre || "NULL"}
              descripcion={producto.descripcion}
              cantidad={producto.cantidad}
            ></Ficha>
          ))}
        </div>
      // </LayoutPrincipal>
    );
  };

  export default abrir_producto;
