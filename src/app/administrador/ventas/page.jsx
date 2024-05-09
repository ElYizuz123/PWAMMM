import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image';
import Leer_ventas from '@/components/Administrador/ventas/Leer_ventas';
import { Read_ventas } from '@/app/api/ventas/read_ventas/route';



const Page = async () => {
  const res = await Read_ventas();
  const resJSON = await res.json();
  const ventas = (JSON.parse(resJSON));


  return (
    <LayoutCRUD title="Ventas">
      <main className='flex flex-col items-center justify-between w-full h-full'>
        <div className='relative w-full h-[900px] overflow-hidden'>
          <div className='absolute bottom-0 w-full z-0'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
          </div>
          <div className='relative w-full h-[800px]'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Ventas</p>
            </div>
            <div className='w-full h-[720px] flex flex-col items-center mt-12'>
              <Leer_ventas ventas={ventas}/>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default Page