import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const data = await request.json()
        const ubicacion = await db.ubicacion.update({
            where:{
                id_ubicacion:data.id_ubicacion
            },
            data:{
                json_marca:JSON.stringify(data)
            }
        })
        return NextResponse.json("Registrada")
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al crear la ubicación")
    }   
}