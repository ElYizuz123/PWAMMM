import Image from 'next/image'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { contexto } from '../UpdateProvider'

const TarjetaUbicacion = ({idUbicacion,marca, mapa, openEdit, foto}) => {

    const {update, setUpdate} = useContext(contexto)

    //Objeto para eliminar las fotografías de asociadas  
    const data = {
        "id_producto": idUbicacion,
        "foto": foto,
        "source": "qrImagen"
    }

    const deleteUbicacion = async () =>{
         //Elminar las imágenes de la base de datos
         const deletedImage = await fetch('/api/delete_image', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const resDeletedImageJSON = await deletedImage.json()
        if (resDeletedImageJSON == 'Arhivo eliminado correctamente') {
            //Elminar a la asociada de la base de datos
            const res = await fetch('/api/ubicaciones/delete_ubicacion', {
                method: 'POST',
                body: JSON.stringify(idUbicacion),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const resJSON = await res.json()
            console.log(resJSON)
            if (resJSON == "Ubicación eliminada con éxito") {
                Swal.fire({
                    title: "Eliminado!",
                    text: "La ubicación fue eliminada",
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
    }

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
                deleteUbicacion()
            }
        });
    }


  return (
    <div>
            <div className="relative rounded-5 overflow-hidden card-reduced-as rounded-t-[120px]">
                <figure className='flex justify-center items-center'>
                    <iframe src={mapa} 
                        width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='h-64 rounded-t-[100px] border-2 border-pink-600'>
                    </iframe>
                </figure>
                <div className='w-full flex justify-center'>
                    <div className="min-details text-center">
                        <h1 className="text-xl font-semibold">
                            {marca}
                        </h1>
                        <button className="absolute bottom-0 right-48 m-2 p-2 text-pink-600 rounded eye-icon">
                            <Image onClick={() => openEdit(idUbicacion)} width={40} height={40} src="/emoticons/editar.png" alt="Icono" className='object-contain w-8 h-8' />
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

export default TarjetaUbicacion