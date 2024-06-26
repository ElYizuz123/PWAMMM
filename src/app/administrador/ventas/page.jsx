import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image';
import Leer_ventas from '@/components/Administrador/ventas/Leer_ventas';
import { UpdateProvider } from '@/components/Administrador/UpdateProvider';
import { Suspense } from 'react';



const Page = async () => {
  return (
    <LayoutCRUD title="Ventas">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full h-full'>
          <div className='relative w-full h-[900px] overflow-hidden'>
            <div className='absolute bottom-0 w-full z-0'>
              <Image src="/fondos/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
            </div>
            <div className='relative w-full h-[800px]'>
              <div className='w-full flex justify-center'>
                <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
                <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Ventas</p>
              </div>
              <div className='w-full h-[720px] flex flex-col items-center mt-12'>
                <Suspense fallback={<div>Cargando...</div>}>
                 <Leer_ventas />
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