"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { K2D } from "next/font/google";
import { ProductContext } from "@/context/ProductContext";
import { useContext, useState } from "react";
import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Tarjeta_Botella = ({
  id_producto,
  nombre,
  marca,
  precio,
  alcohol,
  ml,
  imagen,
  cantidad,
  mercadoLibre,
  tipo,
}) => {
  const { addProductos } = useContext(ProductContext);
  const [buttonState, setButtonState] = useState("idle");
  const [showTooltip, setShowTooltip] = useState(false);
  const existencia = cantidad !== 0;

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
      
      setTimeout(() => {
        setButtonState("idle");
      }, 3000);
    }, 2500);
  };

  return (
    <div className= {`${k2d.className} ${existencia ? "" : "opacity-80 "}` }>
      {/* DISEÑO TARJETA SIN EXISTENCIA */}
      <div className="card relative rounded-5 overflow-hidden ">
        {!existencia && (
          <div className="absolute inset-0 flex justify-center items-center ">
            <p className="bg-red-700  px-60 text-white font-semibold text-2xl text-center rotate-45">
              Sin existencia
            </p>
          </div>
        )}
        {/* DISEÑO VER MÁS DETALLES */}
        <Link
          href={`/tienda/abrir_producto/${tipo}/${id_producto}`}
          className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded"
        >
          <div className="absolute top-0 right-0 mt-2 mr-2 hover:scale-110 transition transform duration-300 ease-in-out">
            <div
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative cursor-pointer"
            >
              <EyeIcon className="h-8 w-8 text-pink-600" />
              {showTooltip && (
                <div className="absolute -bottom-10 left-0 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded tooltip">
                  Ver más detalles
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="flex justify-center items-center p-4 object-cover">
          <Image
            src={`/productos/${imagen}`}
            width={300}
            height={450}
            quality={100}
            alt="Botellas_Tarjeta"
          />
        </div>
        {/* DISEÑO TARJETAS MEZCAL */}
        <section className="details">
          <div className="pb-4">
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
          {/*DISEÑO BOTÓN SIN EXISTENCIAS  */}
          {cantidad !== 0 ? (
            <button
              className={`mt-2 btn font-semibold ${
                buttonState === "loading" && "bg-pink-300"
              }`}
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
          {/* DISEÑO BOTÓN MERCADO LIBRE (SOLO SI HAY EN PAGINA) */}
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

export default Tarjeta_Botella;
