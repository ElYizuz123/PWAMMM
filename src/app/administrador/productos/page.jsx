"use client"
import Crear_Producto from '@/components/Administrador/productos/Crear_Producto'
import Editar_Producto from '@/components/Administrador/productos/Editar_Producto'
import Tarjeta_Producto_Admin from '@/components/Administrador/productos/Tarjeta_Producto_Admin'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [cProductIsOpen, setCProductIsOpen] = useState(false);
  const [uProductIsOpen, setUProductIsOpen] = useState(false);
  const [productos, setProductos] = useState(null);
  const [productoEdit, setProductoEdit] = useState(null);
  const [marcas, setMarcas] = useState(null);
  const [busqueda, setBusqueda] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  //Función para abrir pop-up crear productos
  const openCProduct = () => {
    setCProductIsOpen(true);
  };

  //Función para cerrar pop-up crear productos
  const closeCProduct = () => {
    setCProductIsOpen(false);
    readData()
  };

  //Función para abrir pop-up editar productos
  const openUProduct = (id_producto) => {
    setUProductIsOpen(true);
    setProductoEdit(id_producto)
  };

  //Función para cerrar pop-up editar productos
  const closeUProduct = (uImage) => {
    setUProductIsOpen(false)
    if(uImage){
      window.location.reload()
    }
    else{
      readData()
    }
    
  };

  //Función para actualizar la página después de eliminación
  const updatePage = () => {
    readData()
  }

  //Función para leer productos
  const readData = async () => {
    const res = await fetch('/api/producto/read_productos')
    const resJSON = await res.json()
    const parseado = JSON.parse(resJSON)
    setProductos(parseado)
    
  };

  //Función para leer marcas
  const readMarcas = async () => {
    const res = await fetch('/api/marcas/read_marcas_admin');
    const resJSON = await res.json();
    setMarcas(JSON.parse(resJSON));
  };

  //Lectura inicial de productos y marcas
  useEffect(() => {
    readData();
    readMarcas();
    
  }, []);

  //Scroll automático a ventana emergente
  useEffect(() => {
    if (cProductIsOpen) {
      window.scrollTo({ top: 230, behavior: 'smooth' });
    }
    else if(uProductIsOpen){
      window.scrollTo({ top: 230, behavior: 'smooth' });
    }
  }, [cProductIsOpen, uProductIsOpen]);

  //Set de los productos filtrados
  useEffect(() => {
    setFilteredProducts(productos)
  }, [productos]);

  //Búsqueda
  useEffect(() => {
    if(productos){
      const filtered = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda?.toLowerCase()),
      
      );
      setFilteredProducts(filtered);
    }
    
  }, [busqueda]);

  //Cambio en la búsqueda
  const handleChange = (event) => {
    setBusqueda(event.target.value);
  }; 

  //Confirmación en la búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda)
  }

  return (
    <LayoutCRUD title="Productos">
      <div className={`absolute top-1/2 left-[35%] z-10 w-6/12 h-4/6 ${cProductIsOpen ? "": "pointer-events-none"}`}>
        {cProductIsOpen && <Crear_Producto 
        isOpen={cProductIsOpen} 
        onClose={closeCProduct} 
        marcas={marcas} 
        nProductos={productos ? Object.keys(productos).length:0}
        />}
      </div>
      <div className={`absolute top-1/2 left-[35%] z-10 w-6/12 h-4/6 ${uProductIsOpen ? "": "pointer-events-none"}`}>
        {uProductIsOpen && <Editar_Producto 
        isOpen={uProductIsOpen} 
        onClose={closeUProduct} 
        marcas={marcas} 
        nProductos={productos ? Object.keys(productos).length:0}
        idProducto={productoEdit}
        />}
      </div>
      <main className='flex h-[2300px] flex-col items-center justify-between w-full '>
        <div className='relative h-full w-full overflow-hidden'>
          <div className='absolute bottom-0 w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className='w-full h-auto relative'>
          <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Productos</p>
            </div>
            <form onSubmit={handleSubmit}>
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
                  <img className="w-5 h-5 ml-3" src="\emoticons\lupa.png"></img>
                </button>
              </div>
            </form>
            <div className='w-full flex justify-start ml-[10%] mt-5'>
              <button onClick={openCProduct} className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <img src='/emoticons/plus.png' className='w-8 ml-2'/>
                <p className='mr-3'>Agregar producto</p>
              </button>
            </div>
            <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
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
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page