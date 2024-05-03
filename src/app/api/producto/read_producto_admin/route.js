const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const res = await db.producto.findMany({
            where: {
                id_producto: data,
            },
            include: {
                marca: true,
                botella: true
            }
        });
        console.log(res);
        return NextResponse.json(JSON.stringify(res));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
