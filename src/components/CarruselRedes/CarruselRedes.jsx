"use client"
import React, { Suspense,useState, useEffect, useContext } from "react";
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
import CardMezcalerasRedes from "../CardMezcalerasRedes/CardMezcalerasRedes";

//import CardCarrusel from "../CardCarruselA/CardCarrusel";
const CardCarrusel = React.lazy(() => import('../CardCarruselA/CardCarrusel'));

const ruta = "/mezcaleras/";
const tienda = "/tienda/";

const CarruselRedes = () => {
const [asociadas, setAsociadas] = useState([]);

  useEffect(() => {
    const fetchAsociadas = async () => {
      const response = await fetch("/api/read_asociadas"); // Se leen los datos de las asociadas de la base de datos
      const data = await response.json();
      setAsociadas(data);

    };

    fetchAsociadas();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay,Scrollbar]} // Modulos necesarios para que funcione el swiper.
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
        autoplay={{ delay: 1500, disableOnInteraction: false }} // Reproducción automática cada 4 segundos 
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
                <CardMezcalerasRedes
                  nombre={asociada.nombre}
                  foto={`${ruta}${asociada.foto}`}
                />
                </Suspense>
              </SwiperSlide>
            );
          })}

      </Swiper>
     
    </div>
  );
};

export default CarruselRedes




