import React from 'react'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image';

export const metadata = {
  title: "Ventas",
};
const page = () => {
  return (
    <LayoutCRUD title="Ventas">
      <div className='w-full h-screen flex items-end justify-end'>
        <div className="w-full h-full flex justify-end">
            
            <Image src='/mezcal_background.png' alt="Imagen de fondo" height={500} width={500} objectFit='cover' className='opacity-50 w-7/12 h-full flex justify-end'/>
            
        </div>
      </div>
    </LayoutCRUD>
  )
}

export default page