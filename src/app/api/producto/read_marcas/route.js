const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    try{
        const datos = await request.json()
        console.log("Este es el tipo de producto")
        console.log(datos)
        const data = await db.marca.findMany({
            where:{
                tipo:parseInt(datos)
            },
            include: {
                asociada:true
            }
        });
        console.log(data);
        return NextResponse.json(data);

    }catch(err){
        console.error('Error al leer los datos', err)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
