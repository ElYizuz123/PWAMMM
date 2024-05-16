const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    try{
        var datos = await request.json()
        if(datos.page==null||datos.page==0)
        datos.page=1
        const data = await db.acompanamiento.findMany({
            take:12,
            skip:(parseInt(datos.page)-1)*12,
            where:{
                nombre: {
                    contains: datos.busqueda.toUpperCase(),
                },
            },
            include: {
                marca: true
            },
            orderBy:{
                id_acompanamiento:'asc'
            }
        });
        console.log(data)
        return NextResponse.json(JSON.stringify(data));

    }catch(error){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}