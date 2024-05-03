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

const cantidadOtros = (productos) =>{
    var cantidad=0
    if(productos.length !=0){
        productos.forEach((element, index) => {
            if(index>5){
                cantidad+=element.cantidad
            }
        })
    }
    return cantidad
}


const GraficaPastel = ({productos}) => {
    var data = {
        labels:[
            
        ],
        datasets:[
            
        ] 
    }
    if(productos){
        data = {
            labels: [
                productos[0] ? productos[0].nombre:"No definido", 
                productos[1] ? productos[1].nombre:"No definido", 
                productos[2] ? productos[2].nombre:"No definido",
                productos[3] ? productos[3].nombre:"No definido",
                productos[4] ? productos[4].nombre:"No definido",
                productos[5] ? productos[5].nombre:"No definido",
                'Otros'
            ],
            datasets:[
                {
                    label:'Texto de ejemplo',
                    data:[
                        productos[0]?.cantidad,
                        productos[1]?.cantidad,
                        productos[2]?.cantidad,
                        productos[3]?.cantidad,
                        productos[4]?.cantidad,
                        productos[5]?.cantidad,
                        cantidadOtros(productos)
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 192, 203, 0.8)',
                        'rgba(255, 255, 0, 0.8)',
                        'rgba(255, 165, 0, 0.8)',
                        'rgba(144, 238, 144, 0.8)',
                    ],
                    
                    borderColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 192, 203, 0.8)',
                        'rgba(255, 255, 0, 0.8)',
                        'rgba(255, 165, 0, 0.8)',
                        'rgba(144, 238, 144, 0.8)',
                    ],
                    borderWidht:1,
                }
            ]
        }
    }

  return (
    <Pie data={data} options={options}/>
  )
}

export default GraficaPastel