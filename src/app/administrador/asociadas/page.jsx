import Tarjeta_Asociadas from '@/components/Administrador/Tarjeta_Asociadas'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <LayoutCRUD title="Asociadas">
      <main className='flex flex-col items-center justify-between w-full h-auto'>
        <div className='relative w-full h-auto overflow-hidden'>
          <div className='absolute bottom-0 w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className='w-full h-auto relative'>
            <div className='w-full flex justify-start ml-[10%] mt-5'>
              <button className='bg-[#98E47D] w-48 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <img src='/emoticons/plus.png' className='w-8 ml-2'/>
                <p className='mr-3'>Agregar producto</p>
              </button>
              <button className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center ml-4 hover:bg-[#98e47dab]'>
                <img src='/emoticons/plus.png' className='w-8 ml-2'/>
                <p className='mr-3'>Agregar marca</p>
              </button>
            </div>
            <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
              <Tarjeta_Asociadas/>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page