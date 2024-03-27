"use client"
import React, { useEffect, useState } from 'react'
import LayoutCRUD from '@/components/Layouts/LayoutCRUD'
import Image from 'next/image';



const page = () => {
  const [ventas, setVentas] = useState(null);
  const [orden, setOrden]=useState("reciente");
  const readData = async () => {
    const res = await fetch('/api/read_ventas');
    const resJSON = await res.json();
    setVentas(JSON.parse(resJSON));
    console.log(resJSON);
  };

  const handleChange = () => {
    if(document.getElementById("orden").value=="antiguo"){
      setVentas(ventas.reverse());
      setOrden("antiguo");
      console.log(ventas);
    }
    else{
      setOrden("reciente");
      readData();
    }
  }

  
  useEffect(() => {
    readData();
  }, []);

  return (
    <LayoutCRUD title="Ventas">
      <main className='flex flex-col items-center justify-between w-full h-full'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute -top-96 w-full z-0'>
            <Image src="/mezcal_background.png" alt="Imagen de fondo" width={1000} height={1000} className='w-full opacity-50' />
          </div>
          <div className='relative w-full h-screen'>
            <div className='w-full flex justify-center'>
              <p className='mt-6 text-3xl font-bold'>Bienvenido,</p>
              <p className='mt-6 ml-3 text-3xl font-bold text-[#F70073]'>Ventas</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='w-10/12 flex justify-end'>
                <select id="orden" className='border border-[#F70073]' onChange={handleChange}>
                  <option value="reciente">Mas reciente</option>
                  <option value="antiguo">Mas antiguo</option>
                </select>
              </div>
            </div>
            <div className='w-full h-full flex flex-col items-center'>
              <div className='w-10/12 h-[0.3%] bg-black mt-10' />
              <div className='flex justify-between w-10/12'>
                <p className='ml-5 font-bold'>N° de venta</p>
                <p className='font-bold'>Fecha de venta</p>
                <p className='font-bold'>Total</p>
                <p className='font-bold'>Detalles</p>
                <p className='mr-16 font-bold'>Status</p>
              </div>
              <div className='w-10/12 h-[0.3%] bg-[#F70073] ' />
              <div className='w-10/12 overflow-y-visible'>
                {ventas &&
                  ventas.map((venta) => (<div key={venta.id_venta}>
                    <div className='flex justify-between w-full mt-0.5 pl-12 pr-12'>
                      <p className='font-bold w-6 text-center'>{venta.id_venta}</p>
                      <p className='font-bold ml-12 text-left w-40'>{venta.fecha_venta.slice(0, 10) + " " + venta.fecha_venta.slice(11, 16)}</p>
                      <p className='font-bold w-16 text-left mr-4'>{"$ " + venta.total}</p>
                      <button className='w-12 h-6 mr-8 font-bold flex justify-center items-center bg-white text-[#F70073] border border-black hover:border-[#F70073] py-2 px-4 rounded'>Ver</button>
                      <p className='font-bold'>{venta.status}</p>
                    </div>
                    <div className='w-full h-0.5 bg-[#B1A8A8] mt-0.5' />
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutCRUD>
  )
}

export default page