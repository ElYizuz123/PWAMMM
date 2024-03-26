import React from 'react'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image';

export const metadata = {
  title: "Ventas",
};
const page = () => {
  return (
    <LayoutCRUD title="Ventas">
      <main className='flex flex-col items-center justify-between w-full h-full'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute -top-[60%] w-full'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-50' />
          </div>
          <div className='w-full h-screen'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Ventas</p>
            </div>
            <div className='w-full h-full flex grid-flow-row justify-center'>
              <div className='w-9/12 h-[0.3%] bg-black mt-10'/>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page