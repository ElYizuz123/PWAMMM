import db from '@/libs/db'
import { NextResponse } from 'next/server'

export const revalidate = 0;
export async function POST(request){
    try{
        const data = await request.json()
        console.log(data)
        const productos = await db.producto.findMany({
            where:{
                marca_id_marca: parseInt(data) 
            }
        })
        return NextResponse.json(productos)
    }catch(err){
        console.log(err)
        return NextResponse.json("Error al leer los datos")
    }
}