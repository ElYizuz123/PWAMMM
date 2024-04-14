const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    try{
        var datos = await request.json()
        if(datos==null)
        datos=1
        const data = await db.asociada.findMany({
            take:12,
            skip:(datos-1)*12,
        });
        console.log(data);
        return NextResponse.json(JSON.stringify(data));

    }catch(err){
        console.error('Error al leer los datos', err)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
