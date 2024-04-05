"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Tarjeta_Producto_Admin from './Tarjeta_Producto_Admin'
import Editar_Producto from './Editar_Producto';
import { contexto } from '../UpdateProvider';
import Paginacion from './Paginacion';

const Leer_productos = ({ marcas }) => {

    const [filteredProducts, setFilteredProducts] = useState(null);
    const [busqueda, setBusqueda] = useState(null);
    const [uProductIsOpen, setUProductIsOpen] = useState(false)
    const [productos, setProductos] = useState(null)
    const [productoEdit, setProductoEdit] = useState(null)
    const {update} = useContext(contexto)


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
        const res = await fetch('/api/producto/read_productos', { cache: "no-cache" })
        const resJSON = await res.json()
        const parseado = JSON.parse(resJSON)
        setProductos(parseado)

    };

    const closeUProduct = () => {
        setUProductIsOpen(false)
    };

    //Confirmación en la búsqueda
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(busqueda)
    }

    //Cambio en la búsqueda
    const handleChange = (event) => {

        setBusqueda(event.target.value);
    };

    //Scroll automático a ventana emergente
    useEffect(() => {
        if (uProductIsOpen) {
            window.scrollTo({ top: 230, behavior: 'smooth' })
        }

    }, [uProductIsOpen])

    //Actualización
    useEffect(()=>{
        readData()
    }, [update])

    //Búsqueda
    useEffect(() => {
        if (productos) {
            const filtered = productos.filter((producto) =>
                producto.nombre.toLowerCase().includes(busqueda?.toLowerCase()),
            );
            setFilteredProducts(filtered);
        }
    }, [productos, busqueda]);

    //Set de los productos filtrados
    useEffect(() => {
        setFilteredProducts(productos)
    }, [productos]);

    return (
        <div >
            <div className={`absolute top-[300px] left-[25%] z-10 w-6/12 h-[700px] ${uProductIsOpen ? "" : "pointer-events-none"}`}>
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
            </div>
            <div className='w-full flex justify-end'>
                <Paginacion totalPages={10}/>
            </div>
        </div>
    )
}

export default Leer_productos