import db from '@/libs/db'
import { NextResponse } from 'next/server'

export const revalidate = 0;
const formatVentas = (ventas) =>{
    const formatedVentas = []
    const formatedCountVentas = []
    if(ventas){
        ventas.forEach(element => {
            const fVenta = element.fecha_venta.getDate()+"/"+
            (element.fecha_venta.getMonth()+1)+"/"+
            element.fecha_venta.getFullYear()
            if(!formatedVentas.includes(fVenta)){
                formatedVentas.push(fVenta)
                let venta = {
                    fecha:fVenta,
                    cantidad:1
                }
                formatedCountVentas.push(venta)
            }   
            else{
                const findedVenta = formatedCountVentas.find(venta => venta.fecha === fVenta)
                findedVenta.cantidad++
            }
        });
    }

    return  formatedCountVentas 
}
export async function POST(request){
    try{
        const data = await request.json()
        var ventas =null
        if(data){
            ventas = await db.venta_total.findMany({
                where:{
                    fecha_venta:{
                        gte:data.fechaIni,
                        lte:data.fechaFin
                    }
                },
                orderBy:{
                    fecha_venta:'asc'
                }
            })
        }
        else{
            ventas = await db.venta_total.findMany({
                orderBy:{
                    fecha_venta:'asc'
                }
            })
        }
        const formatedVentas = formatVentas(ventas)
        return NextResponse.json(formatedVentas)
    }catch(error){
        console.log(error)
        return NextResponse.json("Error al leer los datos", error)
    }
}