const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){

    try{
        var datos = await request.json()
        const data = await db.producto.findUnique({
            where: {
                id_producto:datos
            },
            include:{
                marca:true,
                acompanamiento:true
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
