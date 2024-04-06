"use client"
import React, { useState } from 'react'

const Leer_ventas = ({ventas}) => {
    const [orden, setOrden] = useState("reciente")
    const [ventasOr, setVentasOr] = useState(ventas)

    const handleChange = (e) => {
        if (e.target.value == "antiguo") {
            setVentasOr(ventas.reverse());
            setOrden("antiguo");
            console.log(ventas);
        }
        else {
            setOrden("reciente");
            setVentasOr(ventas.reverse());
        }
    }
    return (
        <div className='w-full flex justify-center'>
            <select id="orden" className='absolute right-32 top-14 border border-[#F70073]' onChange={handleChange}>
                <option value="reciente">Mas reciente</option>
                <option value="antiguo">Mas antiguo</option>
            </select>
            <div className='w-10/12 overflow-y-visible'>
                {ventasOr &&
                  ventasOr.map((venta) => (<div key={venta.id_venta}>
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

    )
}

export default Leer_ventas