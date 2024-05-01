"use client"
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Pie } from 'react-chartjs-2';

Chart.register(
    ArcElement, Tooltip, Legend
);

var options ={
    responsive: true,
    maintainAspectRatio: false,
}

var data = {
    labels: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3'],
    datasets:[
        {
            label:'Texto de ejemplo',
            data:[25,25,50],
            backgroundColor:[
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
            borderWidht:1,
        }
    ]
}
const GraficaPastel = () => {
  return (
    <Pie data={data} options={options}/>
  )
}

export default GraficaPastel