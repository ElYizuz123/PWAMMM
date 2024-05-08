"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Tarjeta_Producto_Admin from './Tarjeta_Producto_Admin'
import Editar_Producto from './Editar_Producto';
import { contexto } from '../UpdateProvider';
import { useSearchParams } from 'next/navigation';
import Modal from 'react-modal'
import Editar_Acompanamiento from './Editar_Acompanamiento';

const Leer_productos = () => {

    const [filteredProducts, setFilteredProducts] = useState(null)
    const [marcasBotellas, setMarcasBotellas] = useState(null)
    const [marcasAcompanamientos, setMarcasAcompanamientos] = useState(null)
    const [uProductIsOpen, setUProductIsOpen] = useState(false)
    const [uAcompanamientosIsOpen, setUAcompanamientosIsOpen] = useState(false)
    const [productos, setProductos] = useState(null)
    const [productoEdit, setProductoEdit] = useState(null)
    const { update, page, setTotalPages } = useContext(contexto)
    const searchParams = useSearchParams()

    //Función para abrir pop-up editar productos
    const openUProduct = (id_producto) => {
        setUProductIsOpen(true)
        setProductoEdit(id_producto)
    }

    const openUAcompanamiento = (id_producto) => {
        setUAcompanamientosIsOpen(true)
        setProductoEdit(id_producto)
    }

    const closeUAcompanamientos = () => {
        setUAcompanamientosIsOpen(false)
    }

    //Función para actualizar la página después de eliminación
    const updatePage = () => {
        readData()
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '60%',
            bottom: '50%',
            marginRight: '-50%',
            marginBottom: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000000',
            border: 'none',
            boxShadow: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
    };

    //Función para leer productos
    const readData = async () => {
        var search = ""
        if (!page) {
            search = searchParams.get('pages')
        }
        else {
            search = page
        }
        const res = await fetch('/api/producto/read_productos', {
            method: 'POST',
            body: JSON.stringify(search)
        })
        const resJSON = await res.json()
        const parseado = JSON.parse(resJSON)
        setProductos(parseado)
    };

    //Función para contar las páginas a utilizar
    const countData = async () => {
        const res = await fetch('/api/producto/cont_productos')
        const resJSON = await res.json()
        setTotalPages(Math.ceil((resJSON) / 12))
    }

    //Función para leer las marcas de las botellas

    const readMarcasBotellas = async () => {
        const res = await fetch('/api/producto/read_marcas', {
            method: 'POST',
            body: JSON.stringify(1)
        })
        const resJSON = await res.json()
        console.log(resJSON)
        setMarcasBotellas(resJSON)
    }

    //Función para leer las marcas de los acompañamientos
    const readMarcasAcompanamientos = async () => {
        const res = await fetch('/api/producto/read_marcas', {
            method: 'POST',
            body: JSON.stringify(2)
        })
        const resJSON = await res.json()
        setMarcasAcompanamientos(resJSON)
    }


    //Cerrar el popup para actualizar botellas 
    const closeUProduct = () => {
        setUProductIsOpen(false)
    };

    //Confirmación en la búsqueda
    const handleSubmit = async (e) => {
        e.preventDefault()
        var search = ""
        if (!page) {
            search = searchParams.get('pages')
        }
        else {
            search = page
        }
        const data = {
            busqueda: e.target[0].value,
            page: search
        }
        const res = await fetch('/api/producto/read_producto_like', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const resJSON = await res.json()
        setFilteredProducts(JSON.parse(resJSON))
    }

    //Cambio en la búsqueda
    const handleChange = (event) => {
        if (event.target.value == "") {
            readData()
        }
    };



    //Actualización
    useEffect(() => {
        readData()
        countData()
    }, [update])

    //Inicializar lecturas de las marcas 
    useEffect(() => {
        readMarcasBotellas()
        readMarcasAcompanamientos()
    }, [])


    //Set de los productos filtrados
    useEffect(() => {
        setFilteredProducts(productos)
    }, [productos]);


    return (
        <div >
            <Modal
                isOpen={uProductIsOpen}
                onRequestClose={closeUProduct}
                style={customStyles}
                ariaHideApp={false}
            >
                <Editar_Producto
                    onClose={closeUProduct}
                    marcas={marcasBotellas}
                    idProducto={productoEdit}
                />
            </Modal>
            <Modal
                isOpen={uAcompanamientosIsOpen}
                onRequestClose={closeUAcompanamientos}
                style={customStyles}
                ariaHideApp={false}
            >
                <Editar_Acompanamiento
                    onClose={closeUAcompanamientos}
                    marcas={marcasAcompanamientos}
                    idProducto={productoEdit}
                />
            </Modal>
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
                        isAcompanamiento={producto.acompanamiento[0] ? true:false}
                        id_producto={producto.id_producto}
                        nombre={producto.nombre}
                        ml={producto.botella[0] ? producto.botella[0].ml : producto.acompanamiento[0].gr}
                        marca={producto.marca.nombre}
                        precio={producto.precio}
                        foto={producto.foto}
                        updatePage={updatePage}
                        editProduct={producto.botella[0] ? openUProduct:openUAcompanamiento}
                    />))
                }
            </div>
        </div>
    )
}

export default Leer_productos