const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){

    try{
        const datos = await request.json()
        const data = await db.producto.findMany({
            take:12,
            skip:(datos-1)*12,
            include: {
                marca: true
            },
            orderBy:{
                id_producto:'asc'
            }
        });
        return NextResponse.json(JSON.stringify(data));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
