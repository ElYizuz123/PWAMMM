"use client"
import React, { useContext, useEffect, useState } from 'react'
import galeria from '/src/components/Galeria/galeria.css'
import { contexto } from '../UpdateProvider'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { useSearchParams } from 'next/navigation'
import { VscChromeClose } from 'react-icons/vsc'

const Categorias = () => {
    const { update, setUpdate, page, setTotalPages } = useContext(contexto)
    const [imagenes, setImagenes] = useState(null)
    const [model, setModel] = useState(false);
    const [tempImgSrc, settempImgSrc] = useState('')
    const searchParams = useSearchParams()

    const readData = async () => {
        var search = ""
        if (!page) {
            search = searchParams.get('pages')
        }
        else {
            search = page
        }
        const res = await fetch('/api/galeria/read_fotos', {
            method: 'POST',
            body: JSON.stringify(search)
        })
        const resJSON = await res.json()
        setImagenes(JSON.parse(resJSON))
    }

    const countData = async () => {
        const res = await fetch('/api/galeria/count_categorias')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON) / 6))
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


    useEffect(() => {
        readData()
        //countData()
    }, [update])


    const getImg = (imgSrc) => {
        settempImgSrc(imgSrc);
        setModel(true);
    }


    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <Image alt='Visualizador' src={tempImgSrc} width={1000} height={1000} />
                <VscChromeClose onClick={() => setModel(false)} />
            </div>
            <div className="gallery mt-10 ml-2 mr-2">
                {imagenes &&
                    imagenes.map((foto, index) => 
                         (
                            <div className="pics relative" key={index} >
                                <button onClick={() => handleDelete(foto.id_foto, foto.foto)} className="absolute top-0 right-0 m-2 ml-12 p-2 text-pink-600 rounded eye-icon w-12 h-12">
                                    <Image src="/emoticons/eliminar.png" alt="Icono" width="50" height="50" className='w-10 h-8' />
                                </button>
                                <Image onClick={() => getImg("/galeria/" + foto.foto)} alt='Imagen' className="rounded-lg cursor-pointer"
                                    src={"/galeria/" + foto.foto} width={1000} height={1000} style={{ width: '100%' }} />
                                
                            </div>
                        )
                    )}
            </div>

        </div >
    )
}

export default Categorias