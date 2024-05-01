"use client"
import { BarElement, CategoryScale, Chart, Filler, Legend, LinearScale, PointElement, Title, Tooltip, scales } from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

var valores = [72,56,20,36, 90]
var etiquetas = ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3", "Ejemplo 4", "Ejemplo 5"]

var options = {
    responsive:true,
    maintainAspectRatio: false,
    plugins:{
        legend:{
            display:false
        }
    },
    scales:{
        y:{
            min:0
        },
        x:{
            ticks:{
                color: 'rgba(0,220,195)'
            }
        }
    }
}

var data = {
    labels:etiquetas,
    datasets: [
        {
            label:'Valores',
            data:valores,
            backgroundColor: 'rgba(0,220,195,0.5)'
        }
    ]
}
const GraficaBarras = () => {
  return (
    <Bar className='w-full' data={data} options={options}/>
  )
}

export default GraficaBarras