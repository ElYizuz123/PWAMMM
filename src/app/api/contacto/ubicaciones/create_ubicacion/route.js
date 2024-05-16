import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const data = await request.json()
        const ubicaciones = await db.ubicacion.create({
            data:{
                json_marca:JSON.stringify(data)
            }
        })
        return NextResponse.json("Registrado")
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer los datos")
    }
}