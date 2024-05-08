"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contexto } from '../UpdateProvider'
import Editar_pregunta from './Editar_pregunta'
import Swal from 'sweetalert2'
import Modal from 'react-modal'

const Lector_pregunta = () => {
    let { update } = useContext(contexto)
    const [preguntas, setPreguntas] = useState(null)
    const [uPreguntasIsOpen, setUPreguntasIsOpen] = useState(null)
    const [id_pregunta, setId_pregunta] = useState(null)

    //Configuración de los modales
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '60%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Manejo de eliminación de una pregunta 
    const deletePregunta = async (data) => {
        const res = await fetch('/api/preguntas/delete_pregunta', {
            method: 'POST',
            body: data
        })
        const resJSON = await res.json()
        if (resJSON == "Pregunta eliminada con éxito") {
            Swal.fire({
                title: "Eliminado!",
                text: "La pregunta fue eliminada",
                icon: "success"
            });
            readData()
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
            });
        }
    }

    //Manejo de alerta en eliminación
    const handleDelete = async (data) => {
        Swal.fire({
            title: "Eliminar pregunta",
            text: "La pregunta será eliminada y esta acción es irreversible!",
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

    //Abir popup de pregunta
    const openUPregunta = (data) => {
        setId_pregunta(data)
        setUPreguntasIsOpen(true)
    }

    //Cerrar popup de pregunta
    const closeUPregunta = () => {
        setUPreguntasIsOpen(false)
        readData()
    }

    //Leer las preguntas 
    const readData = async () => {
        const res = await fetch('/api/preguntas/read_preguntas')
        const resJSON = await res.json()
        setPreguntas(JSON.parse(resJSON))
    }

    //Leer los datos de las preguntas
    useEffect(() => {
        readData()
    }, [update])

    return (

        <div className='w-10/12 flex justify-center overflow-y-auto'>
            <Modal
                isOpen={uPreguntasIsOpen}
                onRequestClose={closeUPregunta}
                style={customStyles}
            >
                <Editar_pregunta
                    onClose={closeUPregunta}
                    idPregunta={id_pregunta}
                />
            </Modal>
            <table className='table-auto font-bold w-full'>
                <thead>
                    <tr>
                        <th colSpan="4">
                            <hr className='border border-black w-full' />
                        </th>
                    </tr>
                    <tr>
                        <th className='px-4 py-2 text-left'>Pregunta</th>
                        <th className='px-4 py-2 text-left'>Respuesta</th>
                    </tr>
                    <tr>
                        <th colSpan="4">
                            <hr className='border border-[#F70073] w-full' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {preguntas &&
                        preguntas.map((pregunta) => (
                            <tr key={pregunta.id_pregunta_frencuente}>
                                <td className='px-4 py-2 border-b border-gray-500'>{pregunta.pregunta}</td>
                                <td className='px-4 py-2 border-b border-gray-500'>{pregunta.respuesta}</td>
                                <td className='px-4 py-2 border-b border-gray-500'>
                                    <button onClick={() => openUPregunta(pregunta.id_pregunta_frencuente)} className='w-12 h-6 font-bold flex justify-center items-center bg-[#91caf8] text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'>
                                        Editar
                                    </button>
                                </td>
                                <td className='px-4 py-2 border-b border-gray-500'>
                                    <button onClick={() => handleDelete(pregunta.id_pregunta_frencuente)} className='w-16 h-6 font-bold flex justify-center items-center bg-[#f89191] text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    )
}

export default Lector_pregunta