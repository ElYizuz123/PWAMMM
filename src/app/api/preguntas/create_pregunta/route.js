import db from '@/libs/db'
import { NextResponse } from 'next/server'
export async function POST(request){
    try{
        const data = await request.json()
        const res = await db.pregunta_frecuente.create({
            data:{
                pregunta:data.pregunta,
                respuesta:data.respuesta,
            }
        })
        return NextResponse.json("Creado con éxito")
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al registrar la marca: "+err)
    }
}