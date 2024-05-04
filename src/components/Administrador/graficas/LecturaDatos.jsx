"use client"
import React, { useEffect, useState } from 'react'
import GraficaPastel from './GraficaPastel'
import GraficaBarras from './GraficaBarras'
import GraficaLineal from './GraficaLineal'
import { DatePicker } from 'antd'


//Función para obtener los días entre las fechas seleccionadas
const obtenerDiasEntreFechas = (fechaInicio, fechaFin) => {
    const dias = []
    const diaActual = new Date(fechaInicio)
    while (diaActual <= fechaFin) {
        const day = diaActual.getDate()
        const month = diaActual.getMonth() + 1
        const year = diaActual.getFullYear()
        dias.push(day + "/" + month + "/" + year)
        diaActual.setDate(diaActual.getDate() + 1)
    }

    return dias;
}

//Función para obtener los meses entre las fechas seleccionadas
const obtenerMesesEntreFechas = (fechaInicio, fechaFin) => {
    // Arreglo para almacenar los meses
    const meses = [];

    const fechaActual = new Date(fechaInicio)

    while (fechaActual <= fechaFin) {
        const mes = fechaActual.getMonth() + 1
        const year = fechaActual.getFullYear()
        meses.push(mes + "/" + year) // Se agrega 1 porque los meses comienzan desde 0
        fechaActual.setMonth(fechaActual.getMonth() + 1)
    }


    return meses;
}

//Función para obtener los años entre las fechas seleccionadas
const obtenerYearEntreFechas = (fechaInicio, fechaFin) => {
    console.log("entre")
    const years = []
    const fechaActual = new Date(fechaInicio)
    while (fechaActual <= fechaFin) {
        const year = fechaActual.getFullYear()
        years.push(year)
        fechaActual.setFullYear(fechaActual.getFullYear() + 1)
    }
    return years
}



const LecturaDatos = () => {
    const [ventasProductos, setVentasProductos] = useState(null)
    const [ventasAcompanamientos, setVentasAcompanamientos] = useState(null)
    const [ventasCiudades, setVentasCiudades] = useState(null)
    const [formatoVentasTotales, setFormatoVentasTotales] = useState(null)
    const [ventasTotales, setVentarTotales] = useState(null)
    const { RangePicker } = DatePicker

    //Función para leer los productos mas vendidos
    const readProductos = async () => {
        const res = await fetch('/api/graficas/productos')
        const resJSON = await res.json()
        setVentasProductos(resJSON)
    }

    //Función para leer los acompañamientos mas vendidos

    const readAcompanamientos = async () => {
        const res = await fetch('/api/graficas/acompanamientos')
        const resJSON = await res.json()
        setVentasAcompanamientos(resJSON)
    }

    //Función para leer las ciudades con mas ventas

    const readCiudades = async () => {
        const res = await fetch('/api/graficas/ciudades')
        const resJSON = await res.json()
        setVentasCiudades(resJSON)
    }

    //Función para leer las ventas en el periodo de tiempo seleccionado

    const readVentasTotales = async (fechas) => {
        let fechasJSON = null
        if (fechas) {
            const fechaIni = new Date(fechas[0]['$d'])
            const fechaFin = new Date(fechas[1]['$d'])
            fechaIni.setDate(fechaIni.getDate()-1)
            fechaFin.setDate(fechaFin.getDate()+1)
            fechasJSON = {
                fechaIni: fechaIni,
                fechaFin: fechaFin
            }
        }
        const res = await fetch('/api/graficas/ventas', {
            method: 'POST',
            body: JSON.stringify(fechasJSON)
        })
        const resJSON = await res.json()
        setVentarTotales(resJSON)
    }

    //Lectura de datos

    useEffect(() => {
        readProductos()
        readAcompanamientos()
        readCiudades()
        readVentasTotales()
    }, [])

    //Manejo de los cambios de fecha

    const handleDateChange = (e) => {
        if (e) {
            
            const fechaIni = e[0]['$d']
            const fechaFin = e[1]['$d']
            const diferenciaFechas = fechaFin - fechaIni
            const diferenciaDias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
            var fechas = null
            if (diferenciaDias <= 31) {
                fechas = obtenerDiasEntreFechas(fechaIni, fechaFin)
            }
            else if (diferenciaDias <= 365) {
                fechas = obtenerMesesEntreFechas(fechaIni, fechaFin)
            }
            else {
                fechas = obtenerYearEntreFechas(fechaIni, fechaFin)
            }
            //Variable con el formato de fechas a mostrar
            setFormatoVentasTotales(fechas)
        } else {
            setFormatoVentasTotales(null)
        }
        //Arreglo de ventas 
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
                <RangePicker className='mb-3' onChange={handleDateChange} />
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl">
                    <GraficaLineal formato={formatoVentasTotales} ventas={ventasTotales} />
                </div>

            </div>
        </div>
    )
}

export default LecturaDatos