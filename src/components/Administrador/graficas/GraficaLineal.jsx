"use client"
import { CategoryScale, Chart, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip, scales } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

var ventas = [0,56,34,45,23]

var fechas= ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

var data = {
    labels: fechas,
    datasets:[
        {
            label:'Ventas',
            data:ventas,
            tension:0.5,
            fill:true,
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132,0.5)',
            pointRadious: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)'
        }
    ]
}

var options = {
    responsive:true,
    maintainAspectRatio: false,
    scales:{
        min:0
    },
    x:{
        ticks:{
            color: {color: 'blue'}
        }
    },
    plugins:{
        legend:{
            display: false
        }
    } 
}

const GraficaLineal = () => {
  return (
    <Line data={data} options={options}/>
  )
}

export default GraficaLineal