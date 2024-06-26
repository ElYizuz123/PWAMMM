"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Ficha_Botella from "./Ficha_Botella";
import Ficha_Acompañamiento from "./Ficha_Acompañamiento";
import Tarjeta_Botella from "../Principal/Tarjeta_Botella";
import Tarjeta_Acompañamiento from "../Principal/Tarjeta_Acompañamiento";
import { CantidadContext } from "@/context/CantidadContext";
import { useContext } from "react";

const MostrarProductosFicha = ({ tipo, idProducto }) => {
  const { stock } = useContext(CantidadContext);
  const [botellas, setBotellas] = useState([]);
  const [acompanamientos, setAcompanamientos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const responseBotella = await fetch("/api/tienda/read_botellas");
      const dataBotella = await responseBotella.json();
      const responseAcompanamiento = await fetch("/api/tienda/read_acompanamientos");
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
    <div className="  pb-16  flex justify-center">
      <div className="pt-5 items-center relative h-[1800x] w-full ">
        <div className="flex justify-center items-center">
          <div className="relative  py-44   flex items-start  w-full">
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
              key={botellaEncontrada.producto.id_producto}
              id_producto={botellaEncontrada.producto.id_producto}
              nombre={botellaEncontrada.producto.nombre}
              marca={botellaEncontrada.producto.marca.nombre}
              precio={botellaEncontrada.producto.precio}
              ml={botellaEncontrada.ml}
              foto={botellaEncontrada.producto.fotoUri}
              mercadoLibre={botellaEncontrada.producto?.mercadoLibre || "NULL"}
              descripcion={botellaEncontrada.producto.descripcion}
              cantidad={stock[idProducto]}
              cantidadOficial={botellaEncontrada.producto.cantidad}
              alcohol={botellaEncontrada.cantidad_alcohol}
              agave={botellaEncontrada.tipo_agave}
            />
          ) : Number(tipo) === 2 && acompanamientoEncontrado ? (
            <Ficha_Acompañamiento
              key={acompanamientoEncontrado.producto.id_producto}
              id_producto={acompanamientoEncontrado.producto.id_producto}
              nombre={acompanamientoEncontrado.producto.nombre}
              marca={acompanamientoEncontrado.producto.marca.nombre}
              precio={acompanamientoEncontrado.producto.precio}
              gr={acompanamientoEncontrado.gr}
              foto={acompanamientoEncontrado.producto.fotoUri}
              mercadoLibre={
                acompanamientoEncontrado.producto?.mercadoLibre || "NULL"
              }
              descripcion={acompanamientoEncontrado.producto.descripcion}
              cantidad={stock[idProducto]}
              cantidadOficial={acompanamientoEncontrado.producto.cantidad}
            />
          ) : (
            <p></p>
          )}
        </div>
        <div className=" flex justify-center">
          {botellas.filter(
            (item) =>
              item.producto.marca_id_marca === item.producto.marca.id_marca &&
              item.id_roducto !== botellaEncontrada
          ).length > 0 && (
            <div
              className=" w-80  mt-32
              sm:w-[300px]  sm:mt-20
              md:w-[300px]
              lg:w-[400px]
              xl:w-[400px]
              2xl:w-[500px]
           "
            >
              <p
                className="relative text-[#dd6c5a] text-sm font-bold bg-white px-9 rounded-lg
              
                sm:text-xl  sm:text-center
                 md:text-xl md:text-center
                 lg:text-2xl lg:text-center
                 xl:text-2xl xl:text-center
                 2xl:text-3xl 2xl:text-center"
              >
                PRODUCTOS RELACIONADOS
              </p>
            </div>
          )}
        </div>
        <div className=" relative w-full flex flex-wrap gap-10 justify-center items-center pt-11  ">
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
                  key={filteredItem.producto.id_producto}
                  id_producto={filteredItem.producto.id_producto}
                  nombre={filteredItem.producto.nombre}
                  marca={filteredItem.producto.marca.nombre}
                  precio={filteredItem.producto.precio}
                  ml={filteredItem.ml}
                  imagen={filteredItem.producto.fotoUri}
                  mercadoLibre={filteredItem.producto?.mercadoLibre || "NULL"}
                  descripcion={filteredItem.producto.descripcion}
                  cantidad={stock[filteredItem.producto.id_producto]}
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
                  key={filteredItem.producto.id_producto}
                  id_producto={filteredItem.producto.id_producto}
                  nombre={filteredItem.producto.nombre}
                  marca={filteredItem.producto.marca.nombre}
                  precio={filteredItem.producto.precio}
                  gr={filteredItem.gr}
                  imagen={filteredItem.producto.fotoUri}
                  mercadoLibre={filteredItem.producto?.mercadoLibre || "NULL"}
                  descripcion={filteredItem.producto.descripcion}
                  cantidad={stock[filteredItem.producto.id_producto]}
                />
              ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MostrarProductosFicha;
