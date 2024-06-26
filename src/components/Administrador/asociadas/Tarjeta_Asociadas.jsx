"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { contexto } from '../UpdateProvider'
import Swal from 'sweetalert2'

const Tarjeta_Asociadas = ({ id_asociada, nombre, foto, openEdit, fotoId}) => {
    const {update, setUpdate} = useContext(contexto)

    //Objeto para eliminar las fotografías de asociadas  
    const data = {
        "id_producto": id_asociada,
        "foto": fotoId,
        "source": "mezcaleras"
    }


    //Elminar uns asociada
    const deleteAsociada = (async () => {
        //Elminar las imágenes de la base de datos
        const deletedImage = await fetch('/api/administrador/delete_image', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const resDeletedImageJSON = await deletedImage.json()
        if (resDeletedImageJSON == 'Arhivo eliminado correctamente') {
            //Elminar a la asociada de la base de datos
            const res = await fetch('/api/administrador/asociadas/delete_asociada', {
                method: 'POST',
                body: JSON.stringify(id_asociada),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Asociada eliminada con éxito") {
                Swal.fire({
                    title: "Eliminado!",
                    text: "La asociada fue eliminada",
                    icon: "success"
                });
                const up =!update
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

    //Alerta para evitar borrado accidental 
    const handleDelete = () => {
        Swal.fire({
            title: "Eliminar",
            text: "Esta acción no puede ser revertida!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAsociada()
            }
        });
    }

    return (
        <div>
            <div className="relative rounded-5 overflow-hidden card-reduced-as rounded-t-[120px]">
                <figure className='flex justify-center items-center'>
                    <Image
                        width={400}
                        height={400}
                        className="object-top object-cover rounded-t-[100px] w-full h-64"
                        src={foto}
                        alt="t-shirt"
                    />
                </figure>
                <div className='w-full flex justify-center'>
                    <div className="min-details text-center">
                        <h1 className="text-xl font-semibold">
                            {nombre}
                        </h1>
                        <button className="absolute bottom-0 right-48 m-2 p-2 text-pink-600 rounded eye-icon">
                            <Image onClick={() => openEdit(id_asociada)} width={40} height={40} src="/emoticons/editar.png" alt="Icono" className='object-contain w-8 h-8' />
                        </button>
                        <button className="absolute bottom-0 right-24 m-2 p-2 text-pink-600 rounded eye-icon">
                            <Image onClick={handleDelete} width={40} height={40} src="/emoticons/eliminar.png" alt="Icono" className='object-contain w-8 h-8' />
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Tarjeta_Asociadas