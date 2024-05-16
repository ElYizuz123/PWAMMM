"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";


// Import Swiper styles
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss';
import CardCarruselnicio from "../CardCarruselInicio/CardCarruselnicio";

const ruta = '/eventos/';





const CarruselInicio = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const response = await fetch("/api/read_evento");
      const data = await response.json();
      setEventos(data);
    };

    fetchEventos();
  }, []);



  return (
    <div className="relative z-1 p-8   ">
      <div className="w-[600px] h-[1000px] overflow-hidden absolute bottom-0 right-0 mr-0 -z-10">
          <div className=" w-[1000px] h-[1000px] rounded-full bg-[#f70073] bg-opacity-40 flex justify-center items-center absolute left-0 "></div>
        </div>
      
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,   //Efecto similar 3D
          stretch: 0,
          depth: 100, //Controla la profundidad o la distancia entre las imágenes en el carrusel
          modifier: 1, //efecto de transición entre las imágenes.
          slideShadows: false,// Sombras en los bordes
          spaceBetween: 10  //Espacio entre cada Imagen
        }}
        slidesPerView={3} // Por defecto se ven 3 imagenes 
        centeredSlides={true}
        
        autoplay={{ delay: 3500, disableOnInteraction: false }} breakpoints={{  //Cada imagen/evento cambia cada 3.5s 
          // Cuando el ancho de la pantalla sea igual o superior a 300px
          300: {
            slidesPerView: 1, // Mostrar 2 slides
            spaceBetween: 2, // Espacio entre slides
            
          },
          768: {
            slidesPerView: 1, // Mostrar 2 slides
            spaceBetween: 20, // Espacio entre slides
           
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
        {eventos && eventos.map((evento, index) => {
          return (
            <div className="bg-gray-600" key={evento.id_evento}> {/*De llave se asigna el id del evento*/}
              <SwiperSlide key={evento.id_evento}>
             <CardCarruselnicio 
             nombre={evento.nombre}
             descripcion={evento.descripcion}
              foto={evento.fotoUri}
              alte={index}
            />
               
              </SwiperSlide >
            </div>
          );

        })}
      </Swiper>
    </div>

  );

}

export default CarruselInicio;