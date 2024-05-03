import db from '@/libs/db'
import { decrypt } from '@/libs/decrypt';
import { NextResponse } from 'next/server'

const masVentasCiudades = (ventas) =>{
    var ciudades = []
    var ventasPorCiudad = []
    ventas.forEach((element, index) => {
        let data = {iv:element.iv_poblacion, data:element.poblacion}
        const poblacion = decrypt(data)
        if (!ciudades.includes(poblacion)){ 
            ciudades.push(poblacion)
            let ciudadVenta = {
                id:index,
                ciudad: poblacion,
                cantidad:0
            }
            ventasPorCiudad[index] = ciudadVenta
        }
    })
    ventas.forEach(element => {
        let data = {iv:element.iv_poblacion, data:element.poblacion}
        const poblacion = decrypt(data)
        const ciudadEncontrada = ventasPorCiudad.find(venta => venta.ciudad === poblacion.toUpperCase())
        if(ciudadEncontrada){
            ciudadEncontrada.cantidad+=1
            console.log(ciudadEncontrada.cantidad)
        }
    });
    ventasPorCiudad.sort((a,b) => b.cantidad - a.cantidad)
    return ventasPorCiudad
}
export async function GET(){
    try{
        const ventas = await db.venta_total.findMany()
        var ventasCiudades = masVentasCiudades(ventas)
        return NextResponse.json(ventasCiudades)
    }catch(error){
        console.log(error)
        return NextResponse.json("Error al leer los datos", error)
    }
}