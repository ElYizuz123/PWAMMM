import React from 'react'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'

export const metadata = {
  title: "Ventas",
};
const page = () => {
  return (
    <LayoutCRUD title="Ventas">
      <main className='flex flex-col items-center justify-between w-full h-full'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute w-full z-0'>
          <div className="bg-cover bg-center opacity-60 w-full h-screen" style={{ backgroundImage: "url('/mezcal_background.png')" }}/>
          </div>
          <div className='relative w-full h-screen'>
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