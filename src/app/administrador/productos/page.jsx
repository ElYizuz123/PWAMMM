import { Read_marcas } from '@/app/api/producto/read_marcas/route'
import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Agregar_producto from '@/components/Administrador/productos/Agregar_producto'
import Leer_productos from '@/components/Administrador/productos/Leer_productos'
import Paginacion from '@/components/Administrador/productos/Paginacion'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import { Suspense } from 'react'

const Page = async () => {

  return (
    <LayoutCRUD title="Productos">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full min-h-[2300px]'>
          <div className='relative h-full w-full overflow-hidden min-h-[2300px]'>
            <div className='absolute bottom-0 w-full'>
              <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
            </div>
            <div className='w-full h-auto relative'>
              <div className='w-full flex justify-center'>
                <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
                <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Productos</p>
              </div>
              <div className='w-full flex justify-start ml-[10%] mt-[80px]'>
                <Agregar_producto/>
              </div>
              <div>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Leer_productos/>
                </Suspense>
              </div>
            </div>
            <div className='absolute bottom-5 right-0'>
              <Suspense fallback={<div>Cargando...</div>}>
                <Paginacion/>
              </Suspense>
              </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}
export default Page 