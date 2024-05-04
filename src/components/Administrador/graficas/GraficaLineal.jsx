"use client"
import { CategoryScale, Chart, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
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



var options = {
    responsive:true,
    maintainAspectRatio: false,
    x:{
        ticks:{
            color: {color: 'blue'}
        }
    },
    scale:{
        min:0
    },
    plugins:{
        legend:{
            display: false
        }
    } 
}

const GraficaLineal = ({formato, ventas}) => {
    var data = {
        labels: [],
        datasets:[]
    }
    if(!formato){
        formato = []
        const fechaAcutal = new Date()
        const yearActual = fechaAcutal.getFullYear()
        for(var i=1 ; i<13; i++){
            formato.push(i+"/"+yearActual)
        }
    }
    
    if(ventas){
        var cantVentas=[]
        formato.forEach((element, index) => {
            const findVenta = ventas.filter(venta => venta.fecha.includes(element))
            if(findVenta[0]){
                cantVentas[index]=0
                findVenta.forEach(element => {
                    cantVentas[index]+=element.cantidad
                });
                
            }
            else{
                cantVentas[index]=0
            }
        });
        data = {
            labels: formato ? formato: "Prueba",
            datasets:[
                {
                    label:'Ventas',
                    data:cantVentas,
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
    }
  return (
    <Line data={data} options={options}/>
  )
}

export default GraficaLineal