import db from '@/libs/db'
import { NextResponse } from 'next/server'

const masVentasCiudades = (ciudades, ventas) =>{
    var ventasPorCiudad = []
    ciudades.forEach((element, index) => {
        let ciudadVenta = {
            id:index,
            ciudad:element.poblacion.toUpperCase(),
            cantidad:0
        }
        ventasPorCiudad[index] = ciudadVenta
    });
    ventas.forEach(element => {
        const ciudadEncontrada = ventasPorCiudad.find(venta => venta.ciudad === element.poblacion.toUpperCase())
        if(ciudadEncontrada){
            ciudadEncontrada.cantidad+=1
        }
    });
    ventasPorCiudad.sort((a,b) => b.cantidad - a.cantidad)
    return ventasPorCiudad
}
export async function GET(){
    try{
        const ciudades = await db.venta_total.findMany({
            distinct: ['poblacion']
        })
        const ventas = await db.venta_total.findMany()
        var ventasCiudades = masVentasCiudades(ciudades, ventas)
        return NextResponse.json(ventasCiudades)
    }catch(error){
        console.log(error)
        return NextResponse.json("Error al leer los datos", error)
    }
}