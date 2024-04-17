"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Tarjeta_Producto_Admin from './Tarjeta_Producto_Admin'
import Editar_Producto from './Editar_Producto';
import { contexto } from '../UpdateProvider';
import Paginacion from './Paginacion';
import { useSearchParams } from 'next/navigation';

const Leer_productos = ({ marcas }) => {

    const [filteredProducts, setFilteredProducts] = useState(null);
    const [uProductIsOpen, setUProductIsOpen] = useState(false)
    const [productos, setProductos] = useState(null)
    const [productoEdit, setProductoEdit] = useState(null)
    const {update, page, setTotalPages} = useContext(contexto)
    const [totalBottles, setTotalBottles] = useState(0)
    const [acompanamientos, setAcompanamientos] = useState(null)
    const searchParams = useSearchParams()
    const upRef = useRef(null)

    //Función para abrir pop-up editar productos
    const openUProduct = (id_producto) => {
        setUProductIsOpen(true);
        setProductoEdit(id_producto)
    };

    //Función para actualizar la página después de eliminación
    const updatePage = () => {
        readData()
    }


    //Función para leer productos
    const readData = async () => {
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        const res = await fetch('/api/producto/read_productos',{
            method:'POST',
            body: JSON.stringify(search)
        })
        const resJSON = await res.json()
        const parseado = JSON.parse(resJSON)
        setProductos(parseado)
        setAcompanamientos(null)
    };

    const countData = async () =>{
        const res = await fetch('/api/producto/cont_productos')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON)/12))
        setTotalBottles(parseInt(resJSON))
    }

    const readAcomp = async () =>{
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        if(filteredProducts){
            const sobrante = 12-(filteredProducts.length%12)
            var pagActual = 1
            if(search){
                pagActual = parseInt(search)-(Math.ceil(totalBottles/12))+1
            }
            if(sobrante>0 && filteredProducts.length<12){
                const data ={
                    toma:sobrante,
                    pag:pagActual
                }
                const res = await fetch('/api/producto/read_acompanamientos',{
                    method:'POST',
                    body:JSON.stringify(data)
                })
                const resJSON = await res.json()
                setAcompanamientos(JSON.parse(resJSON))
            }
        }
    }

    useEffect(() =>{
        readAcomp()
    }, [filteredProducts])

    const closeUProduct = () => {
        setUProductIsOpen(false)
    };

    //Confirmación en la búsqueda
    const handleSubmit =  async (e) => {
        e.preventDefault()
        var search = ""
        if(!page){
            search = searchParams.get('pages')
        }
        else{
            search = page
        }
        const data = {
            busqueda:e.target[0].value,
            page:search
        }
        const res = await fetch('/api/producto/read_producto_like',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        setFilteredProducts(JSON.parse(resJSON))
    }

    //Cambio en la búsqueda
    const handleChange = (event) => {
        if(event.target.value==""){
            readData()
        }
    };

    //Scroll automático a ventana emergente
    useEffect(() => {
        if (uProductIsOpen) {
            upRef.current.scrollIntoView({ behavior: 'smooth' })
        }

    }, [uProductIsOpen])

    //Actualización
    useEffect(()=>{
        readData()
        countData()
    }, [update])


    //Set de los productos filtrados
    useEffect(() => {
        setFilteredProducts(productos)
    }, [productos]);

    return (
        <div >
            <div ref={upRef} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6/12 h-[700px] ${uProductIsOpen ? "" : "pointer-events-none"}`}>
                {uProductIsOpen && <Editar_Producto
                    isOpen={uProductIsOpen}
                    onClose={closeUProduct}
                    marcas={marcas}
                    idProducto={productoEdit}
                />}
            </div>
            <form className='absolute top-10 w-full' onSubmit={handleSubmit}>
                <div className="flex justify-center items-center">
                    <input
                        className="bg-white w-9/12 h-[55px] mt-8  px-7 border-2 border-gray-300 text-black outline-none rounded-l-full "
                        placeholder="Buscar productos..."
                        type="search"
                        name="search"
                        id="search"
                        onChange={handleChange}
                    />
                    <button
                        className="p-3 text-sm h-[55px] w-20 mt-8 border-2 border-gray-300 text-white bg-[#F70073] rounded-e-full  hover:opacity-75"
                        type="submit"
                    >
                        <Image alt="lupa" layout='intrinsic' width={40} height={40} className="w-5 h-5 ml-3" src="/emoticons/lupa.png" />
                    </button>
                </div>
            </form>
            <div className='w-full flex flex-wrap gap-20 pl-44 pt-6 pb-36'>
                {filteredProducts &&
                    filteredProducts.map((producto) => (<Tarjeta_Producto_Admin key={producto.id_producto}
                        isAcompanamiento={false}
                        id_producto={producto.id_producto}
                        nombre={producto.nombre}
                        ml={producto.ml}
                        marca={producto.marca.nombre}
                        precio={producto.precio}
                        foto={producto.foto}
                        updatePage={updatePage}
                        editProduct={openUProduct}
                    />))
                }
                {acompanamientos &&
                    acompanamientos.map((acompanamiento) => (<Tarjeta_Producto_Admin key={acompanamiento.id_acompanamiento}
                        isAcompanamiento={true}
                        id_producto={acompanamiento.id_acompanamiento}
                        nombre={acompanamiento.nombre}
                        ml={acompanamiento.gr}
                        marca={acompanamiento.marca.nombre}
                        precio={acompanamiento.precio}
                        foto={acompanamiento.foto}
                        updatePage={updatePage}
                        editProduct={openUProduct}
                    />))
                }
            </div>
        </div>
    )
}

export default Leer_productos