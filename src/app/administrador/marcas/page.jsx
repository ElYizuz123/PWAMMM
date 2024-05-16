
import { read_asociadas } from '@/app/api/administrador/marcas/read_asociadas/read_asociadas'
import { UpdateProvider } from '@/components/Administrador/UpdateProvider'
import Agregar_marca from '@/components/Administrador/marcas/Agregar_marca'
import Leer_marcas from '@/components/Administrador/marcas/Leer_marcas'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'

const Page = async () => {

  const res = await read_asociadas()
  const resJSON = await res.json()
  const asociadas=(JSON.parse(resJSON))

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
                  <Agregar_marca asociadas={asociadas} />
                </div>
              </div>
              <div className='w-full h-full flex flex-col items-center mt-5'>
                <Leer_marcas asociadas={asociadas}/>
              </div>
            </div>
          </div>
        </main>
      </UpdateProvider>
    </LayoutCRUD>
  )
}

export default Page