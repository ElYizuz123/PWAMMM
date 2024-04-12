"use client"
import React, { useContext } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'




const Carrusel_Admin = ({ fotos, handleEdit }) => {
  console.log(fotos)
  const {update, setUpdate} = useContext(contexto)


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

  const deleteEvento = (async (idFoto, foto) => {
    const data = {
      "id_producto": idFoto,
      "foto": foto,
      "source": "galeria"
    }
    console.log(data)
    const deletedImage = await fetch('/api/delete_image', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    const resDeletedImageJSON = await deletedImage.json()
    if (resDeletedImageJSON == 'Arhivo eliminado correctamente') {
      const res = await fetch('/api/galeria/delete_foto', {
        method: 'POST',
        body: JSON.stringify(idFoto),
        headers: {
          'Content-Type': 'aplication/json'
        }
      })
      const resJSON = await res.json()
      console.log(resJSON)
      if (resJSON == "Foto eliminada con éxito") {
        Swal.fire({
          title: "Eliminado!",
          text: "El evento fue eliminado",
          icon: "success"
        });
        const up = !update
        setUpdate(up)
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal!",
        });
        const up = !update
        setUpdate(up)
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
      const up = !update
        setUpdate(up)
    }
  })

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

  const handleDelete = (idFoto, foto) => {
    Swal.fire({
      title: "Eliminar foto",
      text: "Esta acción no puede ser revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, borrar!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvento(idFoto, foto)
      }
    });
  }

  return (
    <div className="w-full flex justify-center">

    <Slider {...settings} className="w-11/12 h-full"
        prevArrow={<SamplePrevArrow />}
        nextArrow={<SampleNextArrow />}>

        {fotos &&
          fotos.map((galeria_fotos) => {
            return (
              <div key={galeria_fotos.id_foto}>
                <button onClick={() => handleEdit(galeria_fotos.id_foto)} className="absolute z-10 top-0 m-2 p-2 text-pink-600 rounded eye-icon w-12 h-12">
                  <Image src="/emoticons/editar.png" alt="Icono" width="50" height="50" className='w-10 h-8' />
                </button>
                <button onClick={() => handleDelete(galeria_fotos.id_foto, galeria_fotos.foto)} className="absolute z-10 top-0 m-2 ml-12 p-2 text-pink-600 rounded eye-icon w-12 h-12">
                  <Image src="/emoticons/eliminar.png" alt="Icono" width="50" height="50" className='w-10 h-8' />
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