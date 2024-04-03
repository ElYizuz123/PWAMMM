"use client"
import React, { useContext, useEffect, useState } from 'react'
import { contexto } from './UpdateProvider'
import Editar_pregunta from './Editar_pregunta'
import Swal from 'sweetalert2'

const Lector_pregunta = () => {
    let { update } = useContext(contexto)
    const [preguntas, setPreguntas] = useState(null)
    const [uPreguntasIsOpen, setUPreguntasIsOpen] = useState(null)
    const [id_pregunta, setId_pregunta] = useState(null)


    const deletePregunta = async (data) =>{
        const res = await fetch('/api/preguntas/delete_pregunta',{
            method:'POST',
            body: data
        })
        const resJSON = await res.json()
        if(resJSON=="Pregunta eliminada con éxito"){
            Swal.fire({
                title: "Eliminado!",
                text: "La pregunta fue eliminada",
                icon: "success"
              });
              readData()
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
    }

    const handleDelete = async (data) =>{
        Swal.fire({
            title: "Eliminar marca",
            text: "Todos los productos asociados a esta marca serán eliminados y no hay forma de revertir la acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
          }).then((result) => {
            if (result.isConfirmed) {
                deletePregunta(data)
            }
          });
        
    }

    const upenUPregunta = (data) =>{
        setId_pregunta(data)
        setUPreguntasIsOpen(true)
    }

    const closeUPregunta = () =>{
        setUPreguntasIsOpen(false)
        readData()
    }

    const readData = async () => {
        const res = await fetch('/api/preguntas/read_preguntas')
        const resJSON = await res.json()
        setPreguntas(JSON.parse(resJSON))
    }

    useEffect(() => {
        if (uPreguntasIsOpen) {
          window.scrollTo({ top: 180, behavior: 'smooth' });
        }
      }, [uPreguntasIsOpen]);

    useEffect(() => {
        readData()
    }, [update])

    return (
        <div className='w-full overflow-y-visible'>
            <div className={`absolute top-1/3 left-[30%] z-10 w-4/12 ${uPreguntasIsOpen ? "" : "pointer-events-none"}`}>
                {uPreguntasIsOpen && <Editar_pregunta
                    isOpen={uPreguntasIsOpen}
                    onClose={closeUPregunta}
                    idPregunta={id_pregunta}
                />}
            </div>
            {preguntas && preguntas.map((pregunta) => (
                <div key={pregunta.id_pregunta_frencuente}>
                    <div className='flex justify-between w-full mt-0.5 pl-5 '>
                        <p className='font-bold w-44'>{pregunta.pregunta}</p>
                        <p className='font-bold ml-[7%] text-left w-44'>{pregunta.respuesta}</p>
                        <div className='flex items-center'>
                            <button className='w-12 h-6 font-bold flex justify-center items-center bg-[#91caf8]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                                onClick={() => upenUPregunta(pregunta.id_pregunta_frencuente)}
                            >Editar</button>
                        </div>

                        <div className='flex items-center'>
                            <button className='w-16 h-6 font-bold flex justify-center items-center bg-[#f89191]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                                onClick={() => handleDelete(pregunta.id_pregunta_frencuente)}
                            >Eliminar</button>
                        </div>
                    </div>
                    <div className='w-full h-0.5 bg-[#B1A8A8] mt-0.5' />
                </div>

            ))}
        </div>
    )
}

export default Lector_pregunta