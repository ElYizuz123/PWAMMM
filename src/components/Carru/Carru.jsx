"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';




const Carru = () => {
    
    const images = ['/eventos/1.jpeg', '/eventos/2.jpeg', '/eventos/3.jpeg', '/eventos/4.jpeg','/eventos/5.jpeg','/eventos/6.jpeg','/eventos/7.jpeg'];
  
    
    return (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((p, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={p} alt="" />
                </SwiperSlide>
              );
            })}
      
      ...
    </Swiper>
    );
  
  }
  



export default Carru