"use client"
import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "@/context/ProductContext";
import { XIcon } from "@heroicons/react/solid";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";
import Link from "next/link";
import Image from "next/image";

const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const CarruselAsociadas = () => {
  const { idMarcaAsociada } = useContext(ProductContext);
  const [asociadas, setAsociadas] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [nombreMezcalera, setNombreMezcalera] = useState();
  const [idMezcalera, setIdMezcalera] = useState();

  const handleAsociada = (nombre, id_asociada) => {
    setNombreMezcalera(nombre);
    setIdMezcalera(id_asociada);
    setIsPopupOpen(true);
  };

  const handleMarca = (id_marca) => {
    idMarcaAsociada(id_marca);
  };

  useEffect(() => {
    const fetchAsociadas = async () => {
      const response = await fetch("/api/read_asociadas");
      const data = await response.json();
      setAsociadas(data);

      const responseMarca = await fetch("/api/read_marcas");
      const dataMarca = await responseMarca.json();
      setMarcas(dataMarca);
    };

    fetchAsociadas();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        navigation
        pagination={{
          el: ".paginacionCarruselAsociadas",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="miSwiper"
      >
        {asociadas &&
          asociadas.map((asociada, index) => {
            {
              /*La informacion del carrusel como historia, nombre, etc*/
            }
            return (
              <SwiperSlide key={asociada.id_asociada}>
                <div className="bg-white mt-56  border-[#f70073] h-[533px] w-[395px]  text-black rounded-3xl border-t-2 border-l-2 border-b-2 border-r-2">
                  <div className=" bg-white flex justify-center items-center rounded-t-3xl">
                    <img
                      src={`${ruta}${asociada.foto}`}
                      alt=""
                      className="h-64 w-11/12 rounded-t-3xl rounded-b-none mt-4 object-cover "
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                    <p className="text-xl font-extrabold ">{asociada.nombre}</p>
                    <div className=" flex justify-center items-center ">
                      <hr className="w-[175px] border-t-2 border-[#f70073] custom-shadow " />
                    </div>

                    <p className="text-xs text-justify font-semibold ">
                      {asociada.historia}
                    </p>

                    <button
                      className="bg-[#f70073] hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg hover:font-bold text-white text-lg px-6 py-1 rounded -xl"
                      onClick={() =>
                        handleAsociada(asociada.nombre, asociada.id_asociada)
                      }
                    >
                      Productos
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative bg-white p-5 rounded shadow-lg w-full max-w-lg mt-16">
            {/* Título del popup y botón de cerrar */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold space-x-2">
                <span>MARCAS DE</span>
                <span className="text-[#f70073]">{nombreMezcalera}</span>
              </h3>
              <button onClick={() => setIsPopupOpen(false)}>
                <XIcon className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:text-red-500 hover:rotate-180" />
              </button>
            </div>

            {/* Lista de marcas */}
            <div>
              {marcas
                .filter((item) => item.Asociada_id_asociada === idMezcalera)
                .map((marca) => (
                  <div
                    key={marca.id_marca}
                    className="flex justify-between items-center py-2"
                  >
                    <span>{marca.nombre}</span>
                    <Link href="/tienda">
                      <button
                        className="text-white bg-[#f70073] p-2 rounded-md hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg"
                        onClick={() => handleMarca(marca.id_marca)}
                      >
                        Ver
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {/* El Popup */}
    </div>
  );
};

export default CarruselAsociadas;
