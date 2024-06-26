import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Categorias from '@/components/Administrador/galeria/Categorias'
import Crear_foto from '@/components/Administrador/galeria/Crear_foto'
import Paginacion from '@/components/Administrador/productos/Paginacion'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <LayoutCRUD title="Galería">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full min-h-[2300px]'>
          <div className='relative w-full min-h-[2300px] overflow-hidden'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Galería</p>
            </div>
            <div className='absolute bottom-0 w-full'>
              <Image src="/fondos/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
            </div>
            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-center mt-5'>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Crear_foto />
                </Suspense>

              </div>
              <div className="items-center justify-center">
                <Suspense fallback={<div>Cargando...</div>}>
                  <Categorias />
                </Suspense>
              </div>

            </div>
            <div className='absolute bottom-5 right-0'>
              <Suspense fallback={<div>Cargando...</div>}>
                <Paginacion />
              </Suspense>
            </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}

export default Page