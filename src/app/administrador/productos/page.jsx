"use client"
import Tarjeta_Producto_Admin from '@/components/Administrador/Tarjeta_Producto_Admin'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {

  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda)
  }

  return (
    <LayoutCRUD title="Productos">
      <main className='flex flex-col items-center justify-between w-full h-auto'>
        <div className='relative w-full h-auto overflow-hidden'>
          <div className='absolute bottom-0 w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className='w-full h-auto relative'>
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
            <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
              <Tarjeta_Producto_Admin />
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page