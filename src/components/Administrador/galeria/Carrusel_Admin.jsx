"use client"
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'




const Carrusel_Admin = ({ fotos, handleEdit }) => {
  console.log(fotos)

  var settings = {
    dots: false,
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
          infinite: false,
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

  const handleDelete = () =>{

  }

  return (
    <div className="w-[1050px] flex justify-center">

      <Slider {...settings} className="w-[100%] flex justify-center">

        {fotos &&
          fotos.map((galeria_fotos) => {
            return (
              <div key={galeria_fotos.id_foto}>
                <button onClick={() => handleEdit(galeria_fotos.id_foto)} className="absolute z-10 top-0 m-2 p-2 text-pink-600 rounded eye-icon w-12 h-12">
                  <Image src="/emoticons/editar.png" alt="Icono" width="50" height="50" className='w-10 h-8'/>
                </button>
                <button onClick={handleDelete} className="absolute z-10 top-0 m-2 ml-12 p-2 text-pink-600 rounded eye-icon w-12 h-12">
                  <Image src="/emoticons/eliminar.png" alt="Icono" width="50" height="50" className='w-10 h-8'/>
                </button>
                <Image src={"/galeria/" + galeria_fotos.foto} alt="imagen" width={400} height={270} //1
                  className="border-4 border-pink-700 rounded-lg shadow-lg"></Image>

                <div className="flex items-center text-center">
                  <p className="text-3xl">{galeria_fotos.descripcion}</p>
                </div>

              </div>)
          })
        }

      </Slider>
    </div>
  );
}

export default Carrusel_Admin