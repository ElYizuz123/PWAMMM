"use client"
import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../UpdateProvider'
import Tarjeta_Asociadas from './Tarjeta_Asociadas'
import Update_Asociada from './Update_Asociada'
import Paginacion from '../productos/Paginacion'
import { useSearchParams } from 'next/navigation'

const LeerAsociadas = () => {
    const { update, page, setTotalPages} = useContext(contexto)
    const [asociadas, setAsociadas] = useState(null)
    const [uAsociadasIsOpen, setUAsociadasIsOpen] = useState(false)
    const [updateAsociada, setUpdateAsociada] = useState(null)
    const searchParams = useSearchParams()

    const readData = async () => {
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        const res = await fetch('/api/asociadas/read_asociadas',{
            method: 'POST',
            body : JSON.stringify(search)
        })
        const resJSON = await res.json()
        setAsociadas(JSON.parse(resJSON))
    }

    const countData = async () =>{
        const res = await fetch('/api/asociadas/cont_asociadas')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON)/12))
    }

    const onClose = () => {
        setUAsociadasIsOpen(false)
    }

    const isOpen = (data) => {
        setUpdateAsociada(data)
        setUAsociadasIsOpen(true)
    }

    useEffect(() => {
        if (uAsociadasIsOpen) {
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }
    }, [uAsociadasIsOpen]);

    useEffect(() => {
        readData()
        countData()
    }, [update])

    return (
        <div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6/12 h-3/6 ${uAsociadasIsOpen ? "" : "pointer-events-none"}`}>
                {uAsociadasIsOpen && <Update_Asociada
                    isOpen={uAsociadasIsOpen}
                    onClose={onClose}
                    idAsociada={updateAsociada}
                />}

            </div>
            <div>
                <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
                    {asociadas && asociadas.map((asociada) => (
                        <Tarjeta_Asociadas key={asociada.id_asociada}
                            id_asociada={asociada.id_asociada}
                            nombre={asociada.nombre}
                            foto={asociada.foto}
                            openEdit={isOpen}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default LeerAsociadas