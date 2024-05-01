"use client"
import React, { useEffect, useState } from 'react'
import GraficaPastel from './GraficaPastel'
import GraficaBarras from './GraficaBarras'
import GraficaLineal from './GraficaLineal'
import { DatePicker } from 'antd'
import { UpdateProvider } from '../UpdateProvider'

const obtenerDiasEntreFechas = (fechaInicio, fechaFin) => {
    const dias = []
    const diaActual = new Date(fechaInicio)

    while (diaActual <= fechaFin) {
        const day = diaActual.getDate()
        const month = diaActual.getMonth() + 1
        const year = diaActual.getFullYear()
        dias.push(day+"/"+month+"/"+year)
        diaActual.setDate(diaActual.getDate() + 1)
    }

    return dias;
}

const obtenerMesesEntreFechas = (fechaInicio, fechaFin) => {
    // Arreglo para almacenar los meses
    const meses = [];

    // Obtener el año y el mes de la fecha de inicio y de la fecha de fin
    const yearInicio = fechaInicio.getFullYear()
    const mesInicio = fechaInicio.getMonth()
    const yearFin = fechaFin.getFullYear()
    const mesFin = fechaFin.getMonth()

    // Iterar desde la fecha de inicio hasta la fecha de fin
    for (let year = yearInicio; year <= yearFin; year++) {
        const mesInicial = (year === yearInicio) ? mesInicio : 0
        const mesFinal = (year === yearFin) ? mesFin : 11

        // Iterar sobre los meses del año actual
        for (let mes = mesInicial; mes <= mesFinal; mes++) {
            meses.push(mes+1+"/"+year) // Se agrega 1 porque los meses comienzan desde 0
        }
    }

    return meses;
}

const obtenerYearEntreFechas = (fechaInicio, fechaFin) =>{
    const years = []
    const yearInicio =  fechaInicio.getFullYear()

}

 

const LecturaDatos = () => {
    const [ventasProductos, setVentasProductos] = useState(null)
    const [ventasAcompanamientos, setVentasAcompanamientos] = useState(null)
    const [ventasCiudades, setVentasCiudades] = useState(null)
    const [formatoVentasTotales, setFormatoVentasTotales] = useState(null)
    const { RangePicker } = DatePicker
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

    const readCiudades = async () => {
        const res = await fetch('/api/graficas/ciudades')
        const resJSON = await res.json()
        setVentasCiudades(resJSON)
    }

    const readVentasTotales = async (fechas) =>{
        let fechasJSON=null
        if(fechas){
            fechasJSON = {
                fechaIni:fechas[0]['$d'],
                fechaFin:fechas[1]['$d']
            }
        }
        const res = await fetch('/api/graficas/ventas',{
            method:'POST',
            body: JSON.stringify(fechasJSON)
        })
    }

    useEffect(() => {
        readProductos()
        readAcompanamientos()
        readCiudades()
        readVentasTotales()
    }, [])

    const handleDateChange = (e) =>{
        if(e){
            const fechaIni = e[0]['$d']
            const fechaFin = e[1]['$d']

            const diferenciaFechas = fechaFin-fechaIni
            const diferenciaDias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
            var fechas =null
            if(diferenciaDias<=31){
                fechas = obtenerDiasEntreFechas(fechaIni, fechaFin)
            }
            else if(diferenciaDias<=365){
                fechas = obtenerMesesEntreFechas(fechaIni, fechaFin)
            }
            else{

            }
            console.log(fechas)
        }
        readVentasTotales(e)
    }

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
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaBarras ventas={ventasCiudades} /></div>
            </div>
            <div className='max-w-[780px] min-w-[500px] w-[75%]'>
                <UpdateProvider>
                    <p className='font-bold text-xl mb-3'>Número de ventas</p>
                    <RangePicker className='mb-3' onChange={handleDateChange}/>
                    <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaLineal formato={formatoVentasTotales}/></div>
                </UpdateProvider>
            </div>
        </div>
    )
}

export default LecturaDatos