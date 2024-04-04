"use client"
import React, { useContext, useEffect, useState } from 'react'
import Carrusel_Admin from './Carrusel_Admin'
import { contexto } from '../UpdateProvider'
import Editar_foto from './Editar_foto'

const Categorias = () => {
    const {update, setUpdate} = useContext(contexto)
    const [categorias, setCategorias] = useState()
    const [updateFoto, setUpdateFoto] = useState(null)
    const [uFotoIsOpen, setUFotoIsOpen] =useState(false)
    const [onlyCategorias, setOnlyCategorias] = useState(null)

    const readData = async () => {
        const res = await fetch('/api/galeria/read_categorias')
        const resJSON = await res.json()
        setCategorias(JSON.parse(resJSON))
    }

    const readCategorias = async () =>{
        const res = await fetch('/api/galeria/read_only_categorias')
        const resJSON = await res.json()
        setOnlyCategorias(JSON.parse(resJSON))
    }

    useEffect(() => {
        if (uFotoIsOpen) {
            window.scrollTo({ top: 230, behavior: 'smooth' });
        }
    }, [uFotoIsOpen]);

    const onClose = () =>{
        setUFotoIsOpen(false)
    }

    const handleEdit = (data) =>{
        setUpdateFoto(data)
        setUFotoIsOpen(true)
    }

    useEffect(() => {
        readData()
        readCategorias()
    }, [update])

    return (
        <div>
            <div className={`absolute top-[10%] left-[25%] z-10 w-6/12 h-[1200px] ${uFotoIsOpen ? "" : "pointer-events-none"}`}>
            {uFotoIsOpen && <Editar_foto
                    isOpen={uFotoIsOpen}
                    onClose={onClose}
                    idFoto={updateFoto}
                    categorias={onlyCategorias}
                />}
            </div>
            {categorias && categorias.map((categoria) => (
                <div key={categoria.id_categoria} className='flex justify-center'>
                    <div className='w-[1050px]'>
                        <p className='text-left w-[980px] font-bold text-2xl mb-4' >{categoria.categoria}</p>
                        <div className='pb-28 flex justify-center'>
                            <Carrusel_Admin fotos={categoria.galeria_foto} handleEdit={handleEdit}/>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Categorias