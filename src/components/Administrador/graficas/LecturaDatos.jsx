"use client"
import React, { useEffect, useState } from 'react'
import GraficaPastel from './GraficaPastel'
import GraficaBarras from './GraficaBarras'
import GraficaLineal from './GraficaLineal'

const LecturaDatos = () => {
    const [ventasProductos, setVentasProductos] = useState(null)
    const readData = async () =>{
        const res = await fetch('/api/graficas/productos')
        const resJSON = await res.json()
        setVentasProductos(resJSON)
    }

    useEffect(() =>{
        readData()
    }, [])

    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mt-8 mb-8">
            <div className="w-96 h-96 border-2 bg-white border-[#F70073] "><GraficaPastel productos={ventasProductos}/></div>
            <div className="w-96 h-96 border-2 bg-white border-[#F70073] "><GraficaPastel /></div>
            <div className="max-w-[780px] min-w-[500px] w-[75%] h-96 border-2 bg-white border-[#F70073] md-[300px]"><GraficaBarras /></div>
            <div className="max-w-[780px] min-w-[500px] w-[75%] h-96 border-2 bg-white border-[#F70073] md-[300px]"><GraficaLineal /></div>
        </div>
    )
}

export default LecturaDatos