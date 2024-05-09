"use client"
import { BarElement, CategoryScale, Chart, Filler, Legend, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

//Elemento necesario para funcionamiento de la librería 
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

//Configuraciones de la gráfica
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

//Sumado de datos sobrantes
const otrosCantidad = (ventas) =>{
    var cantidad=0
    if(ventas.length !=0 ){
        ventas.forEach((element, index) => {
            if(index>6){
                cantidad+=element.cantidad
            }
        })
    }
    return cantidad
}


const GraficaBarras = ({ventas}) => {

    //Inicialización vacía
    var data = {
        labels:[],
        datasets: [ ]
    }

    //Inicializaón con datos
    if(ventas){
        data = {
            labels:[
                ventas[0] ? ventas[0].ciudad:"No registrada",
                ventas[1] ? ventas[1].ciudad:"No registrada",
                ventas[2] ? ventas[1].ciudad:"No registrada",
                ventas[3] ? ventas[1].ciudad:"No registrada",
                ventas[4] ? ventas[1].ciudad:"No registrada",
                ventas[5] ? ventas[1].ciudad:"No registrada",
                "Otras",
            ],
            datasets: [
                {
                    label:'Ventas',
                    data:[
                        ventas[0]?.cantidad,
                        ventas[1]?.cantidad,
                        ventas[2]?.cantidad,
                        ventas[3]?.cantidad,
                        ventas[4]?.cantidad,
                        ventas[5]?.cantidad,
                        otrosCantidad(ventas)
                    ],
                    backgroundColor: 'rgba(0,220,195,0.5)'
                }
            ]
        }
    }
    
  return (
    <Bar className='w-full' data={data} options={options}/>
  )
}

export default GraficaBarras