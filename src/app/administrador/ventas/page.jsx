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
        <div className='relative w-full h-[1000px] overflow-hidden'>
          <div className='absolute bottom-0 w-full z-0'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
          </div>
          <div className='relative w-full h-screen'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Ventas</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='w-10/12 flex justify-end'>
                
              </div>
            </div>
            <div className='w-full h-full flex flex-col items-center'>
              <div className='w-10/12 h-[0.3%] bg-black mt-10' />
              <div className='flex justify-between w-10/12'>
                <p className='ml-5 font-bold'>N° de venta</p>
                <p className='font-bold'>Fecha de venta</p>
                <p className='font-bold'>Total</p>
                <p className='font-bold'>Detalles</p>
                <p className='mr-12 font-bold'>Cliente</p>
                <p className='mr-16 font-bold'>Status</p>
              </div>
              <div className='w-10/12 h-[0.3%] bg-[#F70073] ' />
              <Leer_ventas ventas={ventas}/>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default Page