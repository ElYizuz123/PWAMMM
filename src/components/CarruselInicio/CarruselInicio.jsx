"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss';

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
    <div className="relative z-10 p-8 mb-16  ">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,   //Efecto similar 3D
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          spaceBetween: 10  //Espacio entre cada Imagen
        }}
        slidesPerView={3} // Por defecto se ven 3 imagenes 
        centeredSlides
        
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
              <div className="bg-gray-600 w-[250px] h-[350px] sm:w-[150px] sm:h-[500px]  md:w-[300px] md:h-[600px] lg:w-[480px] lg:h-[500px] xl:w-[250px] xl:h-[500px] " > {/*Tamaño de la imagen segun el dispositivo*/}
                <Image src={ruta + evento.foto} alt=""  layout="fill" objectFit="cover" />
                </div>
              </SwiperSlide >
            </div>
          );

        })}
      </Swiper>
    </div>

  );

}

export default CarruselInicio;