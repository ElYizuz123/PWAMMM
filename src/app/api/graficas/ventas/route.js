import db from '@/libs/db'
import { NextResponse } from 'next/server'

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
        
        return NextResponse.json(ventas)
    }catch(error){
        console.log(error)
        return NextResponse.json("Error al leer los datos", error)
    }
}