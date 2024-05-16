"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Tarjeta_evento from './Tarjeta_evento'
import { contexto } from '../UpdateProvider'
import Editar_evento from './Editar_evento'
import Paginacion from '../productos/Paginacion'
import { useSearchParams } from 'next/navigation'
import Modal from 'react-modal'

const Leer_evento = () => {
    const { update, page, setTotalPages } = useContext(contexto)
    const [eventos, setEventos] = useState(null)
    const [uEventoIsOpen, setUEventoIsOpen] = useState(false)
    const [updateEvento, setUpdateEvento] = useState(null)
    const searchParams = useSearchParams()

    //Configuración de los modales
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            height: '65%',
            transform: 'translate(-40%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Lectura de los eventos
    const readData = async () => {
        var search = ""
        if (!page) {
            search = searchParams.get('pages')
        }
        else {
            search = page
        }
        const res = await fetch('/api/administrador/eventos/read_eventos', {
            method: 'POST',
            body: JSON.stringify(search)
        })
        const resJSON = await res.json()
        setEventos(JSON.parse(resJSON))
    }

    //Conteo de eventos para paginación
    const countData = async () => {
        const res = await fetch('/api/administrador/eventos/count_eventos')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON) / 12))
    }

    //Cerrado del popup para editar eventos
    const onClose = () => {
        setUEventoIsOpen(false)
    }

    //Abrir el popup para editar eventos
    const isOpen = (data) => {
        setUpdateEvento(data)
        setUEventoIsOpen(true)
    }


    //Inicialización de lectura de datos 
    useEffect(() => {
        readData()
        countData()
    }, [update])

    return (
        <div>

            <Modal
                isOpen={uEventoIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <Editar_evento
                    onClose={onClose}
                    idEvento={updateEvento}
                />
            </Modal>
            <div className='w-full flex flex-wrap gap-20 pl-10 pt-8 pb-36'>
                {eventos && eventos.map((evento) => (
                    <Tarjeta_evento key={evento.id_evento}
                        id_evento={evento.id_evento}
                        foto={evento.fotoUri}
                        fotoId ={evento.fotoId}
                        duracion={evento.fecha_fin}
                        openEdit={isOpen}
                    />
                ))}
            </div>

        </div>


    )
}

export default Leer_evento