import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const data = await request.json()
        const ubicacion = await db.ubicacion.findUnique({
            where:{
                id_ubicacion: parseInt(data) 
            }
        })
        return NextResponse.json(ubicacion)
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer los datos")
    }
}