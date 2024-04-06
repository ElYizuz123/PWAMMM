const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function GET(){
    try{
        const data = await db.producto.findMany({
            take:12,
            skip:0,
            include: {
                marca: true
            },
            orderBy:{
                id_producto:'asc'
            }
        });
        console.log(data);
        return NextResponse.json(JSON.stringify(data));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
