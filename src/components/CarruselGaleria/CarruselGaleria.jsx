"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

function Carousel({fotos}) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,  
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <div>
        <p className="text-5xl mb-6 ml-3">Categoría</p>
      </div>
      
      <Slider {...settings} className="w-full">

      {/* {fotos.map(slide => {
          (
            <div key={slide.id_foto}>
              <h3>{slide}</h3>
            </div>
          );
      })} */}



        
        <div className=''>
        {fotos &&
        fotos.map((galeria_fotos) => {
          return (
          <div key={galeria_fotos.id_foto}>
          <Image src={galeria_fotos.foto} alt="imagen" width={400} height={270} //1
           className="border-4 border-pink-700 rounded-lg"></Image>
          
          
          <div className="flex items-center text-center">
            <p className="text-3xl">descripción</p>
          </div>

          </div>)
          })
        }
        </div>


{/* 
        <div>
        <Image src="/MairaMedel.jpg" alt="imagen" width={400} height={270} //1
          className="border-4 border-pink-700 rounded-lg"></Image>
          <div className="flex items-center text-center">
            <p className="text-3xl">Título de la foto</p>
          </div>
        </div>


        <div>
        <Image src="/MairaMedel.jpg" alt="imagen" width={400} height={270} //1
          className="border-4 border-pink-700 rounded-lg"></Image>
          <div className="flex items-center text-center">
            <p className="text-3xl">Título de la foto</p>
          </div>
        </div>
        <div>
        <Image src="/MairaMedel.jpg" alt="imagen" width={400} height={270} //1
          className="border-4 border-pink-700 rounded-lg"></Image>
          <div className="flex items-center text-center">
            <p className="text-3xl">Título de la foto</p>
          </div>
        </div> */}


      </Slider>
    </div>
  );
}

export default Carousel;