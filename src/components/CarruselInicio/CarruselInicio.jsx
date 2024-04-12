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
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          spaceBetween: 10
        }}
        slidesPerView={3}
        centeredSlides
        
        autoplay={{ delay: 3500, disableOnInteraction: false }}

      >
        {eventos && eventos.map((evento, index) => {
          return (
            <div className="bg-gray-600" key={evento.id_evento}>
              <SwiperSlide key={evento.id_evento}>
              <div className="bg-gray-600" style={{ width: '300px', height: '500px' }}>
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