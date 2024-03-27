import Link from "next/link";
import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  weight: ["400"],
  styles: ["normal"],
  subsets: ["latin"],
});

const Tarjeta = () => {
  return (
    <div className={k2d.className}>
      <div className="card relative rounded-5 overflow-hidden">
        <button className="absolute top-0 right-0 m-2 p-2 text-pink-600 rounded eye-icon">
          <img src="\emoticons\ojo.png" alt="Icono" width="32" height="32" />
        </button>
        <figure>
          <img
            className="object-cover"
            src="\botellas\bottle_don_mateo.jpg"
            alt="t-shirt"
          />
        </figure>
        <section className="details">
          <div className="min-details">
            <h1 className="text-xl font-semibold">
              Don Mateo 750ml <span className="text-">Don Mateo</span>
            </h1>
            <h1 className="price font-semibold">$350.00</h1>
          </div>

          <div className="options">
            <div>
              <div class="grid grid-cols-2 gap-2">
                <div class="col-span-1 flex items-center justify-center">
                  <ul class="list-disc">
                    <li>400 ml</li>
                    <li>Agave Cupeatra</li>
                  </ul>
                </div>
                <div class="col-span-1 flex items-center justify-center">
                  <ul class="list-disc ">
                    <li>42% Alcohol</li>
                    <li>Origen México</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link href="#" className="btn font-semibold">
            Añadir a carrito
          </Link>
          <button className="btn2 mt-1 flex items-center justify-center">
            <span className="font-semibold">Comprar en mercado libre</span>
            <img
              className="w-8 h-8"
              src="\emoticons\mercado_libre_logo.webp"
              alt="Mercado Libre"
            />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Tarjeta;
