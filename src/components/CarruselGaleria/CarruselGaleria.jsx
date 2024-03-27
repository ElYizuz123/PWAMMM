"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

function Arrow(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

}

function Carousel () {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (

    <div className="slider-container">
      <Slider {...settings}>
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
            <p className="text-3xl">nya uwu</p>
          </div>
        </div>

        <div>
          <Image src="/MairaMedel.jpg" alt="imagen" width={400} height={270} //1
          className="border-4 border-pink-700 rounded-lg"></Image>
          <div className="flex items-center text-center">
            <p className="text-3xl">Título de la foto</p>
          </div>
        </div>

      </Slider>
    </div>

  );
}

export default Carousel;