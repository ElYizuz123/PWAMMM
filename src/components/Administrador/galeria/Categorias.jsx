"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Carrusel_Admin from './Carrusel_Admin'
import { contexto } from '../UpdateProvider'
import Editar_foto from './Editar_foto'
import Image from 'next/image'
import Editar_categoria from './Editar_categoria'
import Swal from 'sweetalert2'
import { useSearchParams } from 'next/navigation'

const Categorias = () => {
    const { update, setUpdate, page, setTotalPages } = useContext(contexto)
    const [categorias, setCategorias] = useState()
    const [updateFoto, setUpdateFoto] = useState(null)
    const [uFotoIsOpen, setUFotoIsOpen] = useState(false)
    const [onlyCategorias, setOnlyCategorias] = useState(null)
    const [uCategoriaIsOpen, setUCategoriaIsOpen] = useState(false)
    const [idCategoria, setIdCategoria] = useState(null)
    const searchParams = useSearchParams()
    const editCatRef = useRef(null)
    const editFotoRef = useRef(null)

    const readData = async () => {
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        const res = await fetch('/api/galeria/read_categorias',{
            method:'POST',
            body:JSON.stringify(search)
        })
        const resJSON = await res.json()
        setCategorias(JSON.parse(resJSON))
    }

    const countData = async () =>{
        const res = await fetch('/api/galeria/count_categorias')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON)/6))
    }

    const readCategorias = async () => {
        
        const res = await fetch('/api/galeria/read_only_categorias')
        const resJSON = await res.json()
        setOnlyCategorias(JSON.parse(resJSON))
    }

    useEffect(() => {
        if (uFotoIsOpen) {
            editFotoRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [uFotoIsOpen]);

    useEffect(() => {
        if (uCategoriaIsOpen) {
            editCatRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [uCategoriaIsOpen]);

    const onClose = () => {
        setUFotoIsOpen(false)
    }

    const onCloseCategorias = () => {
        setUCategoriaIsOpen(false)
    }

    const handleEdit = (data) => {
        setUpdateFoto(data)
        setUFotoIsOpen(true)
    }

    const handleEditCategoria = (categoria) => {
        setIdCategoria(categoria)
        setUCategoriaIsOpen(true)
    }

    useEffect(() => {
        readData()
        countData()
        readCategorias()
    }, [update])

    const deleteCategoria = async (id_Categoria) =>{
        const res = await fetch('/api/galeria/delete_categoria', {
            method: 'POST',
            body: JSON.stringify(id_Categoria),
            headers: {
              'Content-Type': 'aplication/json'
            }
          })
          const resJSON = await res.json()
          console.log(resJSON)
          if (resJSON == "Categoria eliminada") {
            Swal.fire({
              title: "Eliminado!",
              text: "El evento fue eliminado",
              icon: "success"
            });
            const up = !update
            setUpdate(up)
          }
          else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal!",
            });
            const up = !update
            setUpdate(up)
          }
    }

    const handleDelete = (id_Categoria) =>{
        Swal.fire({
            title: "Eliminar categoría",
            text: "Esta acción no puede ser revertida!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteCategoria(id_Categoria)
            }
          });
    }

    return (
        <div>
            <div ref={editFotoRef} className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6/12 h-[1200px] ${uFotoIsOpen ? "" : "pointer-events-none"}`}>
                {uFotoIsOpen && <Editar_foto
                    isOpen={uFotoIsOpen}
                    onClose={onClose}
                    idFoto={updateFoto}
                    categorias={onlyCategorias}
                />}
            </div>
            <div ref={editCatRef} className={`absolute top-3/4 left-1/2 transform -translate-x-1/4 -translate-y-1/3 z-10 w-6/12 h-[1200px] ${uCategoriaIsOpen ? "" : "pointer-events-none"}`}>
                {uCategoriaIsOpen && <Editar_categoria
                    isOpen={uCategoriaIsOpen}
                    onClose={onCloseCategorias}
                    idCategoria={idCategoria}
                />}
            </div>
            {categorias && categorias.map((categoria) => (
                <div key={categoria.id_categoria} className='flex justify-center'>
                    <div className='w-[1050px]'>
                        <div className='flex justify-start'>
                            <p className='text-left font-bold text-2xl mb-4 ml-12' >{categoria.categoria}</p>
                            <button onClick={() => handleEditCategoria(categoria.id_categoria)} className="ml-1 pl-1 text-pink-600 rounded eye-icon w-12 h-12">
                                <Image src="/emoticons/editar.png" alt="Icono" width="50" height="50" className='w-8 h-8' />
                            </button>
                            <button onClick={() => handleDelete(categoria.id_categoria)} className="pl-1 text-pink-600 rounded eye-icon w-12 h-12">
                                <Image src="/emoticons/eliminar.png" alt="Icono" width="50" height="50" className='w-8 h-8' />
                            </button>
                        </div>

                        <div className='pb-28 flex justify-center'>
                            <Carrusel_Admin fotos={categoria.galeria_foto} handleEdit={handleEdit} />
                        </div>
                    </div>

                </div>


            ))
            }
        </div >
    )
}

export default Categorias