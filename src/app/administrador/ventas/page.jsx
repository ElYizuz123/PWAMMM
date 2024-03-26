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
              <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60'/>
            </div>
            <div className='w-full h-screen '>
            </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page