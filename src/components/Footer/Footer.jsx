import React from 'react'
import Link from "next/link";
import autoprefixer from 'autoprefixer';

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
    <div className="text-center flex   p-6 dark:border-neutral-500 lg:justify-center" style={{ backgroundImage: "url('/navbar/banner.jpg')" }}>
      <div className="mr-12 hidden lg:block">

        <span className="text-center text-2xl font-bold">Datos de contacto</span>
      </div>
    </div>
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="text-center">
       <Link href="https://maps.app.goo.gl/rqeTDQR3dqkG4C53A">
        <h1>Aristeo Mercado No. 161, Local 4, Col. Del Empleado, Morelia, Mich.Plaza  </h1>
       
        <h1>Comercial “Takamba”</h1>
        </Link>
        <div className='flex  justify-end ml-8'>
        <img className='mr-5' src="/multimedia/banderaUsa.svg" width={50} height={25}  />
        <Link href="/">
        <img src="/multimedia/banderasMexico.jpg" width={50} height={25}  />
        </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/contacto">
            <img className="ml-5" src="/multimedia/gmail icon.png" width={50} height={50} />
          </Link>
          <Link href="https://www.facebook.com/mujeresmezcalerasdemichoacan">
            <img className="ml-5" src="/multimedia/facebook icon.png" width={50} height={50} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=4431386613">
            <img className="ml-5" src="/multimedia/whatsapp icon.png" width={50} height={50} />
          </Link>

        </div>
      </div>
    </div>
    <div className="bg-neutral-700 p-6 text-center dark:bg-neutral-700">
      <span>© 2024 Copyright: </span>
      
      4JA Designers
    </div>
  </footer>
  )
}

export default Footer