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
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
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
    <div className="w-[1050px] flex justify-center">

      <Slider {...settings} className="w-[100%] flex justify-center">

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