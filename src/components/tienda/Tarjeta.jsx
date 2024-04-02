import Link from "next/link";
import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Tarjeta = ({ nombre, marca, precio, ml, imagen, mercadoLibre, tipo }) => {
  return (
    <div className={k2d.className}>
      <div className="card relative rounded-5 overflow-hidden ">
        <Link
          href="\tienda\abrir_producto"
          className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon"
        >
          <img src="\emoticons\ojo.png" alt="Icono" width="32" height="32" />
        </Link>
        <figure>
          <img className="object-cover" src={`/tienda_productos/${imagen}`} />
        </figure>

        <section className="details">
          {tipo !== 2 ? (
            <div>
              <div className="min-details">
                <h1 className="text-xl flex justify-between font-semibold">
                  {nombre} {ml}ml
                  <div>
                    <span className="font-normal">{marca}</span>
                  </div>
                </h1>
                <h1 className="price ">${precio}</h1>
              </div>
              <div className="options">
                <div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="col-span-1 flex items-center justify-center">
                      <ul class="list-disc">
                        <li>Agave cupreata</li>
                      </ul>
                    </div>
                    <div class="col-span-1 flex items-center justify-center">
                      <ul class="list-disc ">
                        <li>45% Alcohol</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="min-details ">
                <h1 className="text-xl flex justify-between font-semibold">
                  {nombre} {ml}gr
                  <div>
                    <span className="font-normal">{marca}</span>
                  </div>
                </h1>
                <h1 className="price ">${precio}</h1>
              </div>
            </div>
          )}
          <Link href="#" className="mt-2 btn font-semibold">
            Añadir a carrito
          </Link>

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
