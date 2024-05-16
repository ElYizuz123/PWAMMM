import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function GET(){
    try{
        const ubicaiones = await db.ubicacion.findMany()
        return NextResponse.json(ubicaiones)
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer los datos")
    }
}