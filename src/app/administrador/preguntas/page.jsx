import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Crear_pregunta from '@/components/Administrador/preguntas/Crear_pregunta'
import Lector_pregunta from '@/components/Administrador/preguntas/Lector_pregunta'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'

const Page = () => {
  return (
    <LayoutCRUD title="Preguntas frecuentes">
      <UpdateProvider>
        <main className='flex flex-col items-center justify-between w-full h-full min-h-[1100px]'>
          <div className='relative w-full overflow-hidden min-h-[1100px]'>
            <div className='absolute bottom-0 w-full z-0'>
              <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
            </div>
            <div className='relative w-full h-[800px]'>
              <div className='w-full flex justify-center'>
                <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
                <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Preguntas frecuentes</p>
              </div>
              <div className='w-full flex justify-center mt-4'>
                <div className='w-10/12 flex justify-begin'>
                  <Crear_pregunta />
                </div>
              </div>
              <div className='w-full h-full flex flex-col items-center mt-5'>
                <Lector_pregunta/>
              </div>
            </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}

export default Page