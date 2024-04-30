import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <LayoutCRUD title="Gráficas">
      <main className='flex flex-col items-center justify-between w-full min-h-[1000px]'>
        <div className='relative w-full min-h-[1000px] overflow-hidden'>
          <div className='w-full flex justify-center'>
            <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
            <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Gráficas</p>
          </div>
          <div className='absolute bottom-0 w-full -z-10'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} objectFit='cover' className='w-full opacity-60' />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
              <div className="w-96 h-96 border-2 border-[#F70073] "></div>
              <div className="w-96 h-96 border-2 border-[#F70073] "></div>
              <div className="w-96 h-96 border-2 border-[#F70073]"></div>
              <div className="w-96 h-96 border-2 border-[#F70073]"></div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default Page
