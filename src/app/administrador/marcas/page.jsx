
import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Agregar_marca from '@/components/Administrador/marcas/Agregar_marca'
import Leer_marcas from '@/components/Administrador/marcas/Leer_marcas'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import { Suspense } from 'react'

const Page = async () => {

  return (
    <LayoutCRUD title="Marcas">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full h-full min-h-[1100px]'>
          <div className='relative w-full overflow-hidden min-h-[1100px]'>
            <div className='absolute bottom-0 w-full z-0'>
              <Image src="/fondos/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
            </div>
            <div className='relative w-full h-[800px]'>
              <div className='w-full flex justify-center'>
                <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
                <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Marcas</p>
              </div>
              <div className='w-full flex justify-center mt-4'>
                <div className='w-10/12 flex justify-begin'>
                  <Suspense fallback={<div>Cargando...</div>}>
                    <Agregar_marca/>
                  </Suspense>
                </div>
              </div>
              <div className='w-full h-full flex flex-col items-center mt-5'>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Leer_marcas/>
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}

export default Page