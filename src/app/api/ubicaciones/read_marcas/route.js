import db from '@/libs/db'
import { NextResponse } from 'next/server'

export async function GET(){
    try{
        const marcas = await db.marca.findMany()
        return NextResponse.json(marcas)
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer las marcas")
    }
}