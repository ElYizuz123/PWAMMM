"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Ficha_Botella from "./Ficha_Botella";
import Ficha_Acompañamiento from "./Ficha_Acompañamiento";

const MostrarProductosFicha = ({ tipo, idProducto }) => {
  const [botellas, setBotellas] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const responseBotella = await fetch("/api/read_botellas");
      const dataBotella = await responseBotella.json();
      const responseAcompanamiento = await fetch("/api/read_acompanamientos");
      const dataAcompanamiento = await responseAcompanamiento.json();

      setBotellas(dataBotella);
      setAcompanamientos(dataAcompanamiento);
    };

    fetchProductos();
  }, []);

  const botellaEncontrada = botellas.find(
    (botella) => botella.producto.id_producto === Number(idProducto)
  );

  const acompanamientoEncontrado = acompanamientos.find(
    (acompanamiento) =>
      acompanamiento.producto.id_producto === Number(idProducto)
  );

  return (
    <div className="pb-16">
      <div className="pt-5 items-center relative h-screen">
        <div className="flex justify-center items-center">
          <div className="relative  py-44  z-10 flex items-start  w-[1250px]">
            <Link href="/tienda">
              <button class="enter-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 27"
                  class="arrow"
                >
                  <line
                    stroke-width="2"
                    stroke="white"
                    y2="14"
                    x2="40"
                    y1="14"
                    x1="1"
                  ></line>
                  <line
                    stroke-width="2"
                    stroke="white"
                    y2="1.41537"
                    x2="10.4324"
                    y1="14.2433"
                    x1="1.18869"
                  ></line>
                  <line
                    stroke-width="2"
                    stroke="white"
                    y2="13.6007"
                    x2="1.20055"
                    y1="26.2411"
                    x1="10.699"
                  ></line>
                  <line
                    stroke="white"
                    y2="14.3133"
                    x2="1.07325"
                    y1="13.6334"
                    x1="0.33996"
                  ></line>
                  <line
                    stroke-width="2"
                    stroke="white"
                    y2="13"
                    x2="39"
                    y1="8"
                    x1="39"
                  ></line>
                </svg>
                <p className="font-semibold ">REGRESAR</p>
              </button>
            </Link>
          </div>
        </div>

        <div>
          {Number(tipo) === 1 && botellaEncontrada ? (
            <Ficha_Botella
              id_producto={botellaEncontrada.producto.id_producto}
              nombre={botellaEncontrada.producto.nombre}
              marca={botellaEncontrada.producto.marca.nombre}
              precio={botellaEncontrada.producto.precio}
              ml={botellaEncontrada.ml}
              foto={botellaEncontrada.producto.foto}
              mercadoLibre={botellaEncontrada.producto?.mercadoLibre || "NULL"}
              descripcion={botellaEncontrada.producto.descripcion}
              cantidad={botellaEncontrada.producto.cantidad}
              alcohol={botellaEncontrada.producto.cantidad_alcohol}
              agave={botellaEncontrada.producto.tipo_agave}
            />
          ) : Number(tipo) === 2 && acompanamientoEncontrado ? (
            <Ficha_Acompañamiento
              id_producto={acompanamientoEncontrado.producto.id_producto}
              nombre={acompanamientoEncontrado.nombre}
              marca={acompanamientoEncontrado.producto.marca.nombre}
              precio={acompanamientoEncontrado.producto.precio}
              gr={acompanamientoEncontrado.gr}
              foto={acompanamientoEncontrado.producto.foto}
              mercadoLibre={
                acompanamientoEncontrado.producto?.mercadoLibre || "NULL"
              }
              descripcion={acompanamientoEncontrado.producto.descripcion}
              cantidad={acompanamientoEncontrado.producto.cantidad}
            />
          ) : (
            <p>No se encontró el producto solicitado.</p>
          )}
        </div>
        {/* {productos.filter(
        (item) =>
          item.marca_id_marca === idMarca.marca_id_marca &&
          item.id_producto !== Number(id_producto)
      ).length > 0 && (
        <div className="relative w-full flex justify-center items-center mt-40">
          <p className="text-[#dd6c5a] text-3xl font-bold bg-white px-9 rounded-lg">
            PRODUCTOS RELACIONADOS
          </p>
        </div>
      )} */}
        {/* {tipo == 1 ? (
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
                id_producto={botella.producto.id_producto}
                    nombre={botella.producto.nombre}
                    marca={botella.producto.marca.nombre}
                    precio={botella.producto.precio}
                    ml={botella.ml}
                    foto={botella.producto.foto}
                    mercadoLibre={botella.producto?.mercadoLibre || "NULL"}
                    alcohol={botella.producto.cantidad_alcohol}
                    agave={botella.producto.tipo_agave}
              ></Tarjeta>
            ))}
        </div>
      ) : (
        <div className="z-0  w-full flex flex-wrap gap-10 justify-center items-center top-11 pt-11">
          {acompanamientos
            .filter((item) => item.id_acompanamiento !== Number(id_producto))
            .slice(0, 3)
            .map((acompanamiento) => (
              <Tarjeta_Acompa
otneima
               <Ficha_Acompañamiento
                    id_producto={acompanamiento.producto.id_producto}
                    nombre={acompanamiento.nombre}
                    marca={acompanamiento.marca.nombre}
                    precio={acompanamiento.producto.precio}
                    gr={acompanamiento.gr}
                    foto={acompanamiento.producto.foto}
                    mercadoLibre={
                      acompanamiento.producto?.mercadoLibre || "NULL"
                    }
                    cantidad={acompanamiento.producto.cantidad}
              ></Tarjeta>
            ))}
        </div>
      )} */}
      </div>
    </div>
  );
};

export default MostrarProductosFicha;
