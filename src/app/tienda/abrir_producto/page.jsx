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
      <LayoutPrincipal>
        <div className="w-full ">
          {productos.map((producto) => (
            <Ficha
              key={producto.idProducto}
              nombre={producto.nombre}
              marca={producto.marca.Nombre}
              precio={producto.precio}
              agave={producto.producto_informacion?.tipo_agave}
              cosecha={producto.producto_informacion?.tipo_cosecha}
              elaboracion={producto.producto_informacion?.tipo_elaboracion}
              horno={producto.producto_informacion?.tipo_horno}
              molienda={producto.producto_informacion?.tipo_molienda}
              fermentacion={producto.producto_informacion?.tipo_fermentacion}
              destilador={producto.producto_informacion?.tipo_destilador}
              alcohol={producto.producto_informacion?.riquezaAlcoholica}
              contenido={producto.producto_informacion?.contenido}
              botella={producto.foto}
              mercadoLibre={producto?.mercadoLibre || "NULL"}
            ></Ficha>
          ))}
        </div>
      </LayoutPrincipal>
    );
  };

  export default abrir_producto;
