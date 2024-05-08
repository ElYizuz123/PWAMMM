import db from '@/libs/db'
import { NextResponse } from 'next/server'
export async function POST(request){
    try{
        const data = await request.json()
        const res = await db.marca.create({
            data:{
                nombre:data.nombre.toUpperCase(),
                tipo:parseInt(data.tipo) ,
                Asociada_id_asociada: parseInt(data.asociada)
            }
        })
        return NextResponse.json("Marca registrada")
    }catch(err){
        console.log(err)
        if(err.message.includes("Unique constraint failed")){
            return  NextResponse.json("Marca ya existente")
        }
        return NextResponse.json("Error al registrar la marca: "+err)
    }
}