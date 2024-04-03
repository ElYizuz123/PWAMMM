"use client"
import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../UpdateProvider'
import Tarjeta_Asociadas from './Tarjeta_Asociadas'

const LeerAsociadas = () => {
    const { update } = useContext(contexto)
    const [asociadas, setAsociadas] = useState(null)

    const readData = async () =>{
        const res = await fetch('/api/asociadas/read_asociadas')
        const resJSON = await res.json()
        setAsociadas(JSON.parse(resJSON))
    }


    useEffect(() =>{
        readData()
    }, [update])

    return (
        <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
            {asociadas && asociadas.map((asociada) => (
                <Tarjeta_Asociadas key={asociada.id_asociada} 
                id_asociada={asociada.id_asociada}
                nombre={asociada.nombre}
                foto={asociada.foto}
                />
            ))}
        </div>
    )
}

export default LeerAsociadas