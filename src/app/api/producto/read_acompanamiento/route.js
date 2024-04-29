const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){

    try{
        var datos = await request.json()
        const data = await db.acompanamiento.findUnique({
            where: {
                id_acompanamiento:datos
            },
            include:{
                marca:true
            }
        });
        return NextResponse.json(data);

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
