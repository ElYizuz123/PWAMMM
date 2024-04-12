"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { K2D } from "next/font/google";
import { ProductContext } from "@/context/ProductContext";
import { useContext, useState } from "react";
import { CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid';


const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Tarjeta = ({
  id_producto,
  nombre,
  marca,
  agave,
  precio,
  alcohol,
  ml,
  imagen,
  cantidad,
  mercadoLibre,
  tipo,
}) => {
  const { addProductos } = useContext(ProductContext);
  const handleAddToCart = () => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");

      const newProduct = {
        id_producto,
        imagen,
        nombre,
        marca,
        precio,
        ml,
      };
  
      addProductos(newProduct);
    }, 2000);

  };

  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className={k2d.className}>
      <div className="card relative rounded-5 overflow-hidden">
        <div className="relative">
          <Link
            href={`/tienda/abrir_producto/${tipo}/${id_producto}`}
            // className="absolute top-0 right-0 m-2 p-1 z-0"
            className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon"
          >
            <div class="relative">
              <div class="text-xl p-1 font-bold">
                <img
                  src="\emoticons\ojo.png"
                  alt="Icono"
                  width="32"
                  height="32"
                />
              </div>
              <div class="tooltiptext">Más información!</div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center p-4">
          <Image
            src={`/productos/${imagen}`}
            width={300}
            height={450}
            quality={100}
            alt="Fondo"
          />
        </div>

        <section className="details">
          {tipo !== 2 ? (
            <div>
              <div className="min-details">
                <h1 className="text-xl flex justify-between font-bold">
                  {nombre}
                  <div className="price text-green-700 font-bold">
                    <h1>${precio}</h1>
                  </div>
                </h1>

                <span className="font-normal text-sm">{marca}</span>
              </div>
              <div className="options">
                <div>
                  <div class="gap-2 py-2">
                    <div class="col-span-1 flex items-start justify-start">
                      <ul>
                        <li>{ml} ML </li>
                      </ul>
                    </div>
                    <div class="col-span-1 flex items-start justify-start">
                      <ul>
                        <li>{alcohol}% ALCOHOL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="pb-4">
              <div className="min-details ">
                <h1 className="text-xl flex justify-between font-semibold">
                  {nombre} {ml}gr
                  <div>
                    <h1 className="price text-green-700">${precio}</h1>
                  </div>
                </h1>
                <span className="font-normal">{marca}</span>
              </div>
            </div>
          )}

          {cantidad !== 0 ? (
            <button
              className={`mt-2 btn font-semibold ${buttonState === 'loading' && 'bg-pink-300'}`}
              onClick={handleAddToCart}
            >
              {buttonState === "idle" && "Añadir A Carrito"}
              {buttonState === "loading" && (
                <RefreshIcon className="h-5 w-5 animate-spin mx-auto" />
              )}
              {buttonState === "success" && (
                <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
              )}
            </button>
          ) : (
            <div className="mt-2 bg-red-600 text-white font-semibold flex justify-center items-center">
              SIN EXISTENCIA
            </div>
          )}

          {mercadoLibre !== "NULL" && (
            <button className="btn2 mt-1 flex items-center justify-center">
              <a href={mercadoLibre} target="_blank" className="font-semibold">
                Comprar en mercado libre
              </a>
              <img
                className="w-8 h-8"
                src="\emoticons\mercado_libre_logo.webp"
                alt="Mercado Libre"
              />
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Tarjeta;
