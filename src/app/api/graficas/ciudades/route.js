import db from '@/libs/db'
import { decrypt } from '@/libs/decrypt';
import { NextResponse } from 'next/server'

export const revalidate = 0;
const masVentasCiudades = (ventas) =>{
    var ciudades = []
    var ventasPorCiudad = []
    ventas.map((element, index) => {
        let data = {iv:element.iv_poblacion, data:element.poblacion}
        const poblacion = decrypt(data)
        if (!ciudades.includes(poblacion.toUpperCase())){ 
            ciudades.push(poblacion.toUpperCase())
            let ciudadVenta = {
                id:index,
                ciudad: poblacion.toUpperCase(),
                cantidad:0
            }
            ventasPorCiudad.push(ciudadVenta)
        }
    })
    ventas.map(element => {
        let data = {iv:element.iv_poblacion, data:element.poblacion}
        const poblacion = decrypt(data)
        const ciudadEncontrada = ventasPorCiudad.find(venta => venta.ciudad === poblacion.toUpperCase())
        if(ciudadEncontrada){
            ciudadEncontrada.cantidad+=1
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