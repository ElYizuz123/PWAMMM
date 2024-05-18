import Login from '@/components/Administrador/Login';
import React from 'react'
import Image from 'next/image'
import { Berkshire_Swash } from "next/font/google"

const berkshire_swash = Berkshire_Swash({ subsets: ['latin'], weight: '400' })
const Page = () => {



  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-pink-50">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className={berkshire_swash.className}>
          <h1 className='text-center pb-5 text-3xl'>Mujeres Mezcaleras de Michoacán</h1>
        </div>
        <Image width={100} height={100} src="/fondos/mezcaleras_logo.png" alt="Logo" className="mx-auto mb-6" />
        <Login />
      </div>
    </div>
  );
}

export default Page