"use client"
import React, { useContext, useEffect, useState } from 'react'
import Tarjeta_evento from './Tarjeta_evento'
import { contexto } from '../UpdateProvider'
import Editar_evento from './Editar_evento'

const Leer_evento = () => {
    const { update } = useContext(contexto)
    const [eventos, setEventos] = useState(null)
    const [uEventoIsOpen, setUEventoIsOpen] = useState(false)
    const [updateEvento, setUpdateEvento] = useState(null)

    const readData = async () =>{
        const res = await fetch('/api/eventos/read_eventos')
        const resJSON = await res.json()
        setEventos(JSON.parse(resJSON))
    }

    const onClose = () => {
        setUEventoIsOpen(false)
    }

    const isOpen = (data) => {
        setUpdateEvento(data)
        setUEventoIsOpen(true)
    }

    useEffect(() => {
        if (uEventoIsOpen) {
          window.scrollTo({ top: 230, behavior: 'smooth' });
        }
      }, [uEventoIsOpen]);

    useEffect(() =>{
        readData()
    }, [update])

    return (
        <div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6/12 h-3/6 ${uEventoIsOpen ? "" : "pointer-events-none"}`}>
                {uEventoIsOpen && <Editar_evento
                    isOpen={uEventoIsOpen}
                    onClose={onClose}
                    idEvento={updateEvento}
                />}
    
            </div>
            <div className='w-full flex flex-wrap gap-20 pl-10 pt-8 pb-36'>
            {eventos && eventos.map((evento) => (
                <Tarjeta_evento key={evento.id_evento} 
                id_evento={evento.id_evento}
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