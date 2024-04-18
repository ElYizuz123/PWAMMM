const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    try{
        var datos = await request.json()
        if(datos==null)
        datos=1
        const res = await db.galeria_categoria.findMany({
            take:6,
            skip:(datos-1)*6,
            include:{
                galeria_foto: true
            }
        });
        return NextResponse.json(JSON.stringify(res));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
