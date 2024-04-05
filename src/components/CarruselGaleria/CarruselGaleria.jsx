"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

function Carousel({ categorias }) {

  const getFkId = {
    "fk_id": categorias,
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const [fotos, setFotos] = useState(null);
  const readData = async (categorias) => {
    const res = await fetch('/api/read_fotos', {
      method: 'POST',
      body: JSON.stringify(categorias)
    });
    const resJSON = await res.json();
    setFotos(JSON.parse(resJSON));
    console.log(resJSON);
  };

  useEffect(() => {
    readData(getFkId);
  }, []);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">

      <Slider {...settings} className="w-11/12 h-full"
        prevArrow={<SamplePrevArrow />}
        nextArrow={<SampleNextArrow />}>

        {fotos &&
          fotos.map((galeria_fotos) => {
            return (
              <div key={galeria_fotos.id_foto}>
                <Image src={"/galeria/" + galeria_fotos.foto} alt="imagen" width={400} height={270}
                  className="mt-4 border-4 border-pink-700 rounded-lg w-full shadow-lg cursor-pointer transition duration-300 hover:scale-105"
                  onClick={() => setSelectedImage(galeria_fotos.foto)}></Image>


                <div className="flex items-center text-center">
                  <p className="text-3xl">{galeria_fotos.descripcion}</p>
                </div>

              </div>)
          })
        }
      </Slider>

      {selectedImage && (
        <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
          <div className="modal-content bg-[#F3E8E8] border-2 border-[#D60064] rounded-lg p-4 shadow-2xl">
            <Image src={"/galeria/" + selectedImage} alt="imagen" width={800} height={700} className="rounded-lg transition duration-1000 hover:scale-105 shadow-lg" />
            <div className="flex justify-center items-center">
              <button className="close bg-[#D60064] hover:bg-[#d60064c9] text-white font-bold rounded-lg w-1/4 py-2 mt-4" onClick={() => setSelectedImage(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;