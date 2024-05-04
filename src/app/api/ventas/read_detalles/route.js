import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const data = await request.json()
        const detalles = await db.venta_individual.findMany({
            where:{
                venta_total_id_venta:data
            },
            include:{
                producto:{
                    include:{
                        marca:true,
                    }
                }
            }
        })
        return NextResponse.json(detalles)
    }catch(error){
        console.log(error)
        return NextResponse.json("Error al leer los detalles")
    }
} 