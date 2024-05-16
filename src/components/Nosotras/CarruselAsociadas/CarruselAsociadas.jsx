"use client"
import React, { Suspense, useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "@/context/ProductContext";
import { XIcon } from "@heroicons/react/solid";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";
import Link from "next/link";
const CardCarrusel = React.lazy(() => import ('../CardCarruselA/CardCarrusel'))

//import CardCarrusel from "../CardCarruselA/CardCarrusel";
//const CardCarrusel = React.lazy(() => import('./Nosotras/CardCarruselA/CardCarrusel'));

const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const CarruselAsociadas = () => {
  const { setMarcaAsociada, setMarcaNombreAsociada } = useContext(ProductContext);
  const { idMarcaAsociada } = useContext(ProductContext);
  const [asociadas, setAsociadas] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [nombreMezcalera, setNombreMezcalera] = useState();
  const [idMezcalera, setIdMezcalera] = useState();

  //Para manejar la apertura del popup
  const handleAsociada = (nombre, id_asociada) => {
    setNombreMezcalera(nombre);
    setIdMezcalera(id_asociada);
    setIsPopupOpen(true);
  };
    //Cambio de la marca asociada
  const handleMarca = (id_marca, nombre) => {
    setMarcaAsociada(id_marca);
    setMarcaNombreAsociada(nombre)
  };
  //Efecto para cargar los datos de las asociadas y las marcas desde la BD
  useEffect(() => {
    const fetchAsociadas = async () => {
      const response = await fetch("/api/read_asociadas"); // Se leen los datos de las asociadas de la base de datos
      const data = await response.json();
      setAsociadas(data);

      const responseMarca = await fetch("/api/read_marcas"); // Se leen las marcas de la base de datos
      const dataMarca = await responseMarca.json();
      setMarcas(dataMarca);
    };

    fetchAsociadas();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay, Scrollbar]} // Modulos necesarios para que funcione el swiper.
        navigation
        pagination={{
          el: ".paginacionCarruselAsociadas",                         // Para la paginación, en globals.css se detalla más sobre esto(swiper-button-next,swiper-button-prev,)
          clickable: true,                                            // en donde se va acomoda la posición de las flechas y su color.
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },

        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,  // Sin efecto de rotación 
          slideShadows: false,
        }}
        spaceBetween={20} //Espacio entre cada fotografía de las mezcaleres
        slidesPerView={3} // Número de fotografías visibles 
        centeredSlides={true} //Centradas
        autoplay={{ delay: 4000, disableOnInteraction: false }} // Reproducción automática cada 4 segundos 
        className="miSwiper"

        breakpoints={{
          // Cuando el ancho de la pantalla sea igual o superior a 300px
          300: {
            slidesPerView: 1, // Mostrar 2 slides
            spaceBetween: 2, // Espacio entre slides
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true,
            },

          },
          768: {
            slidesPerView: 2, // Mostrar 2 slides
            spaceBetween: 25, // Espacio entre slides


          },
          // Cuando el ancho de la pantalla sea igual o superior a 1024px
          1024: {
            slidesPerView: 2, // Mostrar 3 slides
            spaceBetween: 20, // Espacio entre slides
          },
          1280: {
            slidesPerView: 3, // Mostrar 3 slides
            spaceBetween: 20, // Espacio entre slides
          },
        }}
      >
        {asociadas &&
          asociadas.map((asociada, index) => {

            return (
              /* Sección de cada card del carrusel de las Asociadas
              La informacion del carrusel como historia, nombre, etc*/
              <SwiperSlide key={asociada.id_asociada}>
                <Suspense fallback={<div>Cargando...</div>} >
                  <CardCarrusel
                    asociada={asociada}
                    nombreA={asociada.nombre}
                    foto={asociada.fotoUri}
                    historia={asociada.historia}
                    handleAsociada={handleAsociada}
                    alt={index}
                  />
                </Suspense>
              </SwiperSlide>
            );
          })}

      </Swiper>
      {isPopupOpen && (   //El Popup al momento de dar clic en productos de cada mezcalera
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center z-50 ">
          <div className="relative bg-white p-5 rounded shadow-lg w-full max-w-lg mt-16">
            {/* Título del popup y botón de cerrar */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold space-x-2">
              <h3 className="text-lg font-bold space-x-2">
                <span >{'"'}Te invito a descubrir el auténtico sabor de Michoacán{'"'}</span>
                {/* <span className="text-[#C1D128]" >de Michoacán{'"'} </span> */}
              </h3>
              
              <br />
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
                    <Link href="/tienda"> {/* Al momento de dar clic se redirecciona a la tienda, y se filtran los productos de cada asociada */}
                      <button
                        className="text-white bg-[#f70073] p-2 rounded-md hover:bg-[#e39abd] hover:scale-105 hover:shadow-lg"
                        onClick={() => handleMarca(marca.id_marca, marca.nombre)}
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
