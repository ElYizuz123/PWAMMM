"use client"
import React, { useContext, useEffect, useState } from 'react'
import Carrusel_Admin from './Carrusel_Admin'
import { contexto } from '../UpdateProvider'

const Categorias = () => {
    const {update, setUpdate} = useContext(contexto)
    const [categorias, setCategorias] = useState()

    const readData = async () => {
        const res = await fetch('/api/galeria/read_categorias')
        const resJSON = await res.json()
        setCategorias(JSON.parse(resJSON))
    }

    useEffect(() => {
        readData()
    }, [update])

    return (
        <div>
            {categorias && categorias.map((categoria) => (
                <div key={categoria.id_categoria} className='flex justify-center'>
                    <div className='w-[1050px]'>
                        <p className='text-left w-[980px] font-bold text-2xl mb-4' >{categoria.categoria}</p>
                        <div className='pb-28 flex justify-center'>
                            <Carrusel_Admin fotos={categoria.galeria_foto} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Categorias