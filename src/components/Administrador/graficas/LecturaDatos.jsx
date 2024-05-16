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
    const [formatoVentasIndividuales, setFormatoVentasIndividuales] = useState(null)
    const [ventasTotales, setVentarTotales] = useState(null)
    const [ventasIndividuales, setVentasIndividuales] = useState(null)
    const [marcas, setMarcas] = useState(null)
    const [selectedMarca, setSelectedMarca] = useState(-1)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [productos, setProductos] = useState(null)
    const [fechasInd, setFechasInd] = useState(null)
    const { RangePicker } = DatePicker

    const readMarcas = async () =>{
        const res = await fetch('/api/administrador/ubicaciones/read_marcas')
        const resJSON = await res.json()
        setMarcas(resJSON)
    }

    const readProductosList = async () =>{
        const res = await fetch('/api/administrador/graficas/read_productos_marca',{
            method:'POST',
            body: JSON.stringify(selectedMarca)   
        })
        const resJSON = await res.json()
        setProductos(resJSON)
    }

    //Función para leer los productos mas vendidos
    const readProductos = async () => {
        const res = await fetch('/api/administrador/graficas/productos')
        const resJSON = await res.json()
        setVentasProductos(resJSON)
    }

    //Función para leer los acompañamientos mas vendidos

    const readAcompanamientos = async () => {
        const res = await fetch('/api/administrador/graficas/acompanamientos')
        const resJSON = await res.json()
        setVentasAcompanamientos(resJSON)
    }

    //Función para leer las ciudades con mas ventas

    const readCiudades = async () => {
        const res = await fetch('/api/administrador/graficas/ciudades')
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
        const res = await fetch('/api/administrador/graficas/ventas', {
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
        readVentasIndividuales()
        readMarcas()
    }, [])

    const readVentasIndividuales = async (fechas) =>{
        let datosJSON = null
        let fechaIni = null
        let fechaFin = null
        if (fechas) {
            fechaIni = new Date(fechas[0]['$d'])
            fechaFin = new Date(fechas[1]['$d'])
            fechaIni.setDate(fechaIni.getDate()-1)
            fechaFin.setDate(fechaFin.getDate()+1)
        }
        datosJSON = {
            fechaIni: fechaIni,
            fechaFin: fechaFin,
            marca: selectedMarca == -1 ? null:selectedMarca,
            producto: selectedProduct == -1 ? null:selectedProduct
        }
        
        const res = await fetch('/api/administrador/graficas/read_ventas_ind', {
            method: 'POST',
            body: JSON.stringify(datosJSON)
        })
        const resJSON = await res.json()
        setVentasIndividuales(resJSON)
    }


    const handleDataChangePerProduct = (e) =>{
        setFechasInd(e)
        if (e) {
            const fechaIni = e[0]['$d']
            const fechaFin = e[1]['$d']
            const diferenciaFechas = fechaFin - fechaIni
            const diferenciaDias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
            let fechas = null
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
            setFormatoVentasIndividuales(fechas)
        } else {
            setFormatoVentasIndividuales(null)
        }
        //Arreglo de ventas 
        readVentasIndividuales(e)
    }

    //Manejo de los cambios de fecha

    const handleDateChange = (e) => {
        if (e) {
            const fechaIni = e[0]['$d']
            const fechaFin = e[1]['$d']
            const diferenciaFechas = fechaFin - fechaIni
            const diferenciaDias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
            let fechas = null
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



    useEffect(()=>{
        if(selectedMarca!=-1){
            readProductosList()
        }else{
            setProductos(null)
        }
    }, [selectedMarca])

    useEffect(()=>{
        readVentasIndividuales(fechasInd)
    },[selectedMarca, selectedProduct])


    const handleChangeMarca = (e) =>{
        setSelectedMarca(e.target.value)
        setSelectedProduct(null)
    }

    const handleChangeProduct = (e) =>{
        setSelectedProduct(e.target.value)
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
            <div className='max-w-[780px] min-w-[500px] w-[75%]'>
                <p className='font-bold text-xl mb-3'>Número de ventas por producto</p>
                <RangePicker id={"rangeSelecter"} className='mb-3' onChange={handleDataChangePerProduct} />
                <div className='mb-3'>
                    <select onChange={handleChangeMarca}>
                        <option value={-1}>MARCA</option>
                        {marcas &&
                            marcas.map((marca) => (
                                <option value={marca.id_marca} key={marca.id_marca}>{marca.nombre}</option>
                            ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <select onChange={handleChangeProduct}>
                        <option value={-1}>PRODUCTO</option>
                        {productos &&
                            productos.map((producto) => (
                                <option value={producto.id_producto} key={producto.id_producto}>{producto.nombre}</option>
                            ))}
                    </select>
                </div>
                <div className="max-w-[780px] min-w-[500px] w-full h-96 border-2 bg-white border-[#F70073] shadow-2xl">
                    <GraficaLineal formato={formatoVentasIndividuales} ventas={ventasIndividuales} />
                </div>
            </div>
        </div>
    )
}

export default LecturaDatos