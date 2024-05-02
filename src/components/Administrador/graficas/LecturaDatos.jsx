"use client"
import React, { useEffect, useState } from 'react'
import GraficaPastel from './GraficaPastel'
import GraficaBarras from './GraficaBarras'
import GraficaLineal from './GraficaLineal'
import { DatePicker } from 'antd'
import { UpdateProvider } from '../UpdateProvider'

const obtenerDiasEntreFechas = (fechaInicio, fechaFin) => {
    const dias = []
    const diaActual = fechaInicio
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

    const fechaActual = fechaInicio

    while (fechaActual <= fechaFin) {
        const mes = fechaActual.getMonth() +1
        const year = fechaActual.getFullYear()
        meses.push(mes+"/"+year) // Se agrega 1 porque los meses comienzan desde 0
        fechaActual.setMonth(fechaActual.getMonth()+1)
        console.log(fechaActual)
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
    const [fechaVentas, setFechaVentas] = useState(null)
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
        setFechaVentas(e)
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
                
                <p className='font-bold text-xl mb-3'>Número de ventas</p>
                <RangePicker className='mb-3' onChange={handleDateChange}/>
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl"><GraficaLineal formato={formatoVentasTotales}/></div>
            
            </div>
        </div>
    )
}

export default LecturaDatos