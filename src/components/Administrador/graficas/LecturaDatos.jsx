"use client"
import React, { useEffect, useState } from 'react'
import GraficaPastel from './GraficaPastel'
import GraficaBarras from './GraficaBarras'
import GraficaLineal from './GraficaLineal'

const LecturaDatos = () => {
    const [ventasProductos, setVentasProductos] = useState(null)
    const [ventasAcompanamientos, setVentasAcompanamientos] = useState(null)
    const readProductos = async () => {
        const res = await fetch('/api/graficas/productos')
        const resJSON = await res.json()
        setVentasProductos(resJSON)
    }

    const readAcompanamientos = async () => {
        const res = await fetch('/api/graficas/acompanamientos')
        const resJSON = await res.json()
        setVentasAcompanamientos(resJSON)
    }

    useEffect(() => {
        readProductos()
        readAcompanamientos()
    }, [])

    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mt-8 mb-8">
            <div>
                <p className='font-bold text-xl mb-3'>Productos mas vendidos</p>
                <div className="w-96 h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaPastel productos={ventasProductos} /></div>
            </div>
            <div>
                <p className='font-bold text-xl mb-3'>Acompañamientos mas vendidos</p>
                <div className="w-96 h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaPastel productos={ventasAcompanamientos} /></div>
            </div>
            <div className='max-w-[780px] min-w-[500px] w-[75%]'>
                <p className='font-bold text-xl mb-3'>Ciudades con mas ventas</p>
                
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaBarras /></div>
            </div>
            <div className='max-w-[780px] min-w-[500px] w-[75%]'>
                <p className='font-bold text-xl mb-3'>Número de ventas</p>
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaLineal /></div>
            </div>
        </div>
    )
}

export default LecturaDatos