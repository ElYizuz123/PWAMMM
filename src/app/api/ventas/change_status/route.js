import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const data = await request.json()
        const status = await db.venta_total.update({
            where:{
                id_venta:data.id
            },
            data:{
                status:data.statusA
            }
        })
        return NextResponse.json("Exito")
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer los datos")
    }
}