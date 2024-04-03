import Carrusel_Admin from '@/components/Administrador/galeria/Carrusel_Admin'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <LayoutCRUD title="Eventos">
      <main className='flex flex-col items-center justify-between w-full h-auto'>
        <div className='relative w-full h-auto overflow-hidden'>
          <div className='w-full flex justify-center'>
            <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
            <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Galería</p>
          </div>
          <div className='absolute bottom-0 w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className='w-full h-auto relative'>
            <div className='w-full flex justify-center mt-5'>
              <button className='bg-[#98E47D] w-44 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab]'>
              <Image alt="mas" layout='intrinsic' width={40}  height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar foto</p>
              </button>
              <button className='bg-[#98E47D] w-52 h-10 font-bold rounded-lg flex justify-between items-center hover:bg-[#98e47dab] ml-5'>
              <Image alt="mas" layout='intrinsic' width={40}  height={40} src='/emoticons/plus.png' className='w-8 ml-2' />
                <p className='mr-4'>Agregar categoría</p>
              </button>
            </div>
            <div className='w-full flex flex-col items-center pt-8 pb-32'>
            <p className='text-left w-[980px] font-bold text-2xl mb-4'>CATEGORÍA 1</p>
            <div> 
              <Carrusel_Admin/>
            </div>
            <p className='text-left w-[980px] font-bold text-2xl mb-4 mt-32'>CATEGORÍA 2</p>
            <div >
            <Carrusel_Admin/>
            </div>  
            <p className='text-left w-[980px] font-bold text-2xl mb-4 mt-32'>CATEGORÍA 3</p>
            <div>
            <Carrusel_Admin/>
            </div> 
            <p className='text-left w-[980px] font-bold text-2xl mb-4 mt-32'>CATEGORÍA 3</p>
            <div>
            <Carrusel_Admin/>
            </div> 
            <p className='text-left w-[980px] font-bold text-2xl mb-4 mt-32'>CATEGORÍA 4</p>
            <div>
            <Carrusel_Admin/>
            </div>
            </div>
            
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default Page