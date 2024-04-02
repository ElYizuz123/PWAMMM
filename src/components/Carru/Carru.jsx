"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './style.css';



const photos = [
 '/eventos/1.jpeg','/eventos/2.jpeg','/eventos/3.jpeg','/eventos/4.jpeg','/eventos/5.jpeg','/eventos/6.jpeg','/eventos/7.jpeg',
 
];





const Carru =()=>{   
    return (
     
      <section className="pt-[7rem] pb-[2rem] bg-teal-100">
         <br></br>
         <br></br>
         <br></br>
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Cover Flow
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={"auto"}
          pagination={{
            el:".swiper-pagination"
          }}
          
          
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth:100,
            modifier:1,
            slideShadows: true,
            

          }}
          className="coverflow"
        >
          {photos.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={p} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
  
  }
  



export default Carru