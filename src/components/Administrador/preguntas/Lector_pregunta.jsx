"use client"
import React, { useContext, useEffect, useState } from 'react'
import { contexto } from './UpdateProvider'

const Lector_pregunta = () => {
    let {update} = useContext(contexto)
    const [preguntas, setPreguntas] = useState(null)

    const readData = async () =>{
        const res = await fetch('/api/preguntas/read_preguntas')
        const resJSON = await res.json()
        setPreguntas(JSON.parse(resJSON))
    }

    useEffect(() => {
        readData()
    }, [update])

    return (
        <div className='w-full overflow-y-visible'>
            {preguntas && preguntas.map((pregunta) => (
                <div key={pregunta.id_pregunta_frencuente}>
                    <div className='flex justify-between w-full mt-0.5 pl-5 '>
                        <p className='font-bold w-44'>{pregunta.pregunta}</p>
                        <p className='font-bold ml-[7%] text-left w-44'>{pregunta.respuesta}</p>
                        <div className='flex items-center'>
                            <button className='w-12 h-6 font-bold flex justify-center items-center bg-[#91caf8]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                                onClick={() => openUMarca(marca.id_marca)}
                            >Editar</button>
                        </div>

                        <div className='flex items-center'>
                        <button className='w-16 h-6 font-bold flex justify-center items-center bg-[#f89191]  text-black border border-black hover:border-[#F70073] py-2 px-4 rounded'
                            onClick={() => handleDelete(marca.id_marca)}
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