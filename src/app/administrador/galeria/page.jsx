import Carrusel_Admin from '@/components/Administrador/Carrusel_Admin'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <LayoutCRUD title="Eventos">
      <main className='flex flex-col items-center justify-between w-full h-auto'>
        <div className='relative w-full h-auto overflow-hidden'>
          <div className='w-full flex justify-center'>
            <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
            <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Eventos</p>
          </div>
          <div className='absolute bottom-0 w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className='w-full h-auto relative'>
            <div className='w-full flex justify-center mt-5'>
              <button className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
                <img src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar evento</p>
              </button>
            </div>
            <div className='w-full flex flex-col items-center pt-8 pb-16'>
            <div> 
              <Carrusel_Admin/>
            </div>
            <div className='mt-32'>
            <Carrusel_Admin/>
            </div>  
            <div className='mt-32'>
            <Carrusel_Admin/>
            </div> 
            <div className='mt-32'>
            <Carrusel_Admin/>
            </div> 
            <div className='mt-32'>
            <Carrusel_Admin/>
            </div>
            </div>
            
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page