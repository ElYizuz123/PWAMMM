"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss';

const ruta = 'url(/eventos/';





const carruselInicio = () => {
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
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          spaceBetween: 40
        }}
        slidesPerView={2}
        centeredSlides
        style={{
          height: "630px",
          backgroundImage: "url('/multimedia/agave 2.jpeg')"
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}

      >
        {eventos && eventos.map((evento, index) => {
          return (
            <div className="bg-gray-600">
              <SwiperSlide key={evento.id_evento}
                style={{
                  backgroundImage: ruta + evento.foto,
                  backgroundSize: 'cover',
                  borderRadius: '5%',
                  boxShadow: '0 4px 4px #f70073'


                }}

              >

              </SwiperSlide >
            </div>
          );

        })}
      </Swiper>
    </div>

  );

}

export default carruselInicio;