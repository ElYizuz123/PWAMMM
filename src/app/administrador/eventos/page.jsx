import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Crear_evento from '@/components/Administrador/eventos/Crear_evento'
import Leer_evento from '@/components/Administrador/eventos/Leer_evento'
import Paginacion from '@/components/Administrador/productos/Paginacion'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <LayoutCRUD title="Eventos">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full min-h-[2300px]'>
          <div className='relative w-full min-h-[2300px] overflow-hidden'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Eventos</p>
            </div>
            <div className='absolute bottom-0 w-full'>
              <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
            </div>
            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-center mt-5'>
                <Crear_evento/>
              </div>
              <div className='w-full flex flex-wrap gap-20 pl-44 pt-8 pb-36'>
                <Leer_evento/>
              </div>
            </div>
            <div className='absolute bottom-5 right-0'>
                    <Paginacion totalPages={10}/>
              </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}

export default Page