"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Ficha_Botella from "./Ficha_Botella";
import Ficha_Acompañamiento from "./Ficha_Acompañamiento";
import Tarjeta_Botella from "./Tarjeta_Botella";
import Tarjeta_Acompañamiento from "./Tarjeta_Acompañamiento";

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
    <div
      className="  pb-16  flex justify-center"
    >
      <div className="pt-5 items-center relative h-screen">
        <div className="flex justify-center items-center">
          <div className="relative  py-44   flex items-start  w-[1250px]">
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
              alcohol={botellaEncontrada.cantidad_alcohol}
              agave={botellaEncontrada.tipo_agave}
            />
          ) : Number(tipo) === 2 && acompanamientoEncontrado ? (
            <Ficha_Acompañamiento
              id_producto={acompanamientoEncontrado.producto.id_producto}
              nombre={acompanamientoEncontrado.producto.nombre}
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

        {botellas.filter(
          (item) =>
            item.producto.marca_id_marca === item.producto.marca.id_marca &&
            item.id_roducto !== botellaEncontrada
        ).length > 0 && (
          <div className=" w-full flex justify-center items-center mt-40 ">
            <p className="text-[#dd6c5a] text-3xl font-bold bg-white px-9 rounded-lg  ">
              PRODUCTOS RELACIONADOS
            </p>
          </div>
        )}
        <div className="w-full flex flex-wrap gap-10 justify-center items-center top-11 pt-11  ">
          {Number(tipo) === 1 && botellaEncontrada ? (
            botellas
              .filter(
                (item) =>
                  item.producto.marca_id_marca ===
                    botellaEncontrada.producto.marca.id_marca &&
                  item.id_producto !== botellaEncontrada.producto.id_producto
              )
              .slice(0, 3)
              .map((filteredItem) => (
                <Tarjeta_Botella
                  id_producto={filteredItem.producto.id_producto}
                  nombre={filteredItem.producto.nombre}
                  marca={filteredItem.producto.marca.nombre}
                  precio={filteredItem.producto.precio}
                  ml={filteredItem.ml}
                  imagen={filteredItem.producto.foto}
                  mercadoLibre={filteredItem.producto?.mercadoLibre || "NULL"}
                  descripcion={filteredItem.producto.descripcion}
                  cantidad={filteredItem.producto.cantidad}
                  alcohol={filteredItem.cantidad_alcohol}
                  agave={filteredItem.tipo_agave}
                />
              ))
          ) : Number(tipo) === 2 && acompanamientoEncontrado ? (
            acompanamientos
              .filter(
                (item) =>
                  item.producto.marca_id_marca ===
                    acompanamientoEncontrado.producto.marca.id_marca &&
                  item.id_producto !==
                    acompanamientoEncontrado.producto.id_producto
              )
              .slice(0, 3)
              .map((filteredItem) => (
                <Tarjeta_Acompañamiento
                  id_producto={filteredItem.producto.id_producto}
                  nombre={filteredItem.producto.nombre}
                  marca={filteredItem.producto.marca.nombre}
                  precio={filteredItem.producto.precio}
                  gr={filteredItem.gr}
                  imagen={filteredItem.producto.foto}
                  mercadoLibre={filteredItem.producto?.mercadoLibre || "NULL"}
                  descripcion={filteredItem.producto.descripcion}
                  cantidad={filteredItem.producto.cantidad}
                />
              ))
          ) : (
            <p>No se encontró el producto solicitado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MostrarProductosFicha;
