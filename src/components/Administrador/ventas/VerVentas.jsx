"use client"
import React, { useEffect, useState } from 'react'

const VerVentas = ({ onClose, idVenta }) => {
    const [detalles, setDetalles] = useState(null)

    //Leer ventas individuales
    const readData =async () =>{
        const res = await fetch('/api/administrador/ventas/read_detalles',{
            method:'POST',
            body:idVenta
        })
        const resJSON = await res.json()
        setDetalles(resJSON)
    }

    //Alternar colores de las ventas
    const back ={
        0:"bg-pink-100 text-black",
        1:"bg-pink-200 text-black"
    }

    //Inicializar lectura
    useEffect(()=>{
        readData()
    },[])

    
    return (
        <div className='w-[80%] bg-[#f3e0e0] rounded-3xl border-2 border-[#F70073] min-w-[600px] min-h-full'>
            <div className='w-full bg-[#F70073] rounded-t-2xl flex justify-between'>
                <p className='font-bold pl-5'>Detalles de venta</p>
                <button className='mr-4 font-bold eye-icon' onClick={onClose}>X</button>
            </div>
            <div>
                <table className="table-auto w-full font-bold">
                    <thead className='text-xl'>
                        <tr>
                            <th colSpan="4">
                            <hr className=' border border-black w-full' />
                            </th>
                        </tr>
                        <tr>
                            <td className="px-4  text-black">Producto</td>
                            <td className="px-4  text-black">Marca</td>
                            <td className="px-4  text-black">Cantidad</td>
                            <td className="px-4  text-black">Subtotal</td>
                        </tr>
                        <tr>
                            <th colSpan="4">
                            <hr className='mt-1 border border-[#F70073] w-full' />
                            </th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {detalles && 
                            detalles.map((detalle, index)=>(
                                <tr key={detalle.id_venta_individual} className={`${back[index%2]}}`}>
                                    {console.log(index%2)}
                                    <td className="border px-4 py-2">{detalle.producto.nombre}</td>
                                    <td className="border px-4 py-2">{detalle.producto.marca.nombre}</td>
                                    <td className="border px-4 py-2">{detalle.cantidad_producto}</td>
                                    <td className="border px-4 py-2">{detalle.subtotal}</td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VerVentas