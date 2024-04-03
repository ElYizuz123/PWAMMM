"use client"
import React, { useContext, useEffect, useState } from 'react'
import Tarjeta_evento from './Tarjeta_evento'
import { contexto } from '../UpdateProvider'

const Leer_evento = () => {
    const { update } = useContext(contexto)
    const [eventos, setEventos] = useState(null)
    const [uAsociadasIsOpen, setUAsociadasIsOpen] = useState(false)
    const [updateAsociada, setUpdateAsociada] = useState(null)

    const readData = async () =>{
        const res = await fetch('/api/eventos/read_eventos')
        const resJSON = await res.json()
        setEventos(JSON.parse(resJSON))
    }

    const onClose = (imageUpdated) => {
        if(imageUpdated){
            window.location.reload()
        }
        else{
            setUAsociadasIsOpen(false)
        }   
        
    }

    const isOpen = (data) => {
        setUpdateAsociada(data)
        setUAsociadasIsOpen(true)
    }

    useEffect(() => {
        if (uAsociadasIsOpen) {
          window.scrollTo({ top: 230, behavior: 'smooth' });
        }
      }, [uAsociadasIsOpen]);

    useEffect(() =>{
        readData()
    }, [update])

    return (
        <div>
            <div className={`absolute top-[10%] left-[25%] z-10 w-6/12 h-3/6 ${uAsociadasIsOpen ? "" : "pointer-events-none"}`}>
                {uAsociadasIsOpen && <Update_Asociada
                    isOpen={uAsociadasIsOpen}
                    onClose={onClose}
                    idAsociada={updateAsociada}
                />}
    
            </div>
            <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
            {eventos && eventos.map((evento) => (
                <Tarjeta_evento key={evento.id_evento} 
                id_asociada={evento.id_evento}
                foto={evento.foto}
                duracion={evento.fecha_fin}
                openEdit={isOpen}
                />
            ))}
        </div>
        </div>
        
    )
}

export default Leer_evento