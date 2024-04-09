"use client";
import React, { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import Ficha from "./Ficha";

const MostrarProductosFicha = ({ tipo, idProducto }) => {
  const [productos, setProductos] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [idMarca, setIdMarca] = useState();

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/api/read_producto");
      const data = await response.json();
      const response2 = await fetch("/api/read_acompanamientos");
      const data2 = await response2.json();

      setProductos(data);
      setAcompanamientos(data2);

      const productoEncontrado = data.find(
        (item) => item.id_producto === Number(idProducto)
      );
      setIdMarca(productoEncontrado);

      const acompanamientoEncontrado = data2.find(
        (item) => item.id_acompanamiento === Number(idProducto)
      );
      setIdMarca(productoEncontrado);
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <div>
        {tipo == 1 ? (
          <div>
            {productos
              .filter((item) => item.id_producto === Number(idProducto))
              .map((producto) => (
                <Ficha
                  tipo={1}
                  nombre={producto.nombre}
                  marca={producto.marca.nombre}
                  precio={producto.precio}
                  ml={producto.ml}
                  imagen={producto.foto}
                  mercadoLibre={producto?.mercadoLibre || "NULL"}
                  descripcion={producto.descripcion}
                  cantidad={producto.cantidad}
                  alcohol={producto.cantidad_alcohol}
                  agave={producto.tipo_agave}
                ></Ficha>
              ))}
          </div>
        ) : (
          <div>
            {acompanamientos
              .filter((item) => item.id_acompanamiento === Number(idProducto))
              .map((acompanamiento) => (
                <Ficha
                  tipo={2}
                  nombre={acompanamiento.nombre}
                  marca={acompanamiento.marca.nombre}
                  precio={"200"}
                  ml={acompanamiento.gr}
                  imagen={acompanamiento.foto}
                  mercadoLibre={"NULL"}
                  descripcion={acompanamiento.descripcion}
                  cantidad={acompanamiento.cantidad}
                ></Ficha>
              ))}
          </div>
        )}
      </div>

      {tipo == 1 ? (
        <div className="z-0  w-full flex flex-wrap gap-10 justify-center items-center top-11 pt-11">
          {productos
            .filter(
              (item) =>
                item.marca_id_marca === idMarca.marca_id_marca &&
                item.id_producto !== Number(idProducto)
            )
            .slice(0, 3)
            .map((producto) => (
              <Tarjeta
                id_producto={producto.id_producto}
                nombre={producto.nombre}
                marca={producto.marca.nombre}
                precio={producto.precio}
                contenido={producto.ml}
                imagen={producto.foto}
                mercadoLibre={producto?.mercadoLibre || "NULL"}
                descripcion={producto.descripcion}
                cantidad={producto.cantidad}
                tipo={1}
              ></Tarjeta>
            ))}
        </div>
      ) : (
        <div className="z-0  w-full flex flex-wrap gap-10 justify-center items-center top-11 pt-11">
          {acompanamientos
            .filter((item) => item.id_acompanamiento !== Number(idProducto))
            .slice(0, 3)
            .map((acompanamiento) => (
              <Tarjeta
                id_producto={acompanamiento.id_acompanamiento}
                nombre={acompanamiento.nombre}
                marca={acompanamiento.marca.nombre}
                precio={"200"}
                ml={acompanamiento.gr}
                imagen={acompanamiento.foto}
                mercadoLibre={"NULL"}
                cantidad={acompanamiento.cantidad}
                tipo={2}
              ></Tarjeta>
            ))}
        </div>
      )}
    </div>
  );
};

export default MostrarProductosFicha;