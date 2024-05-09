const { NextResponse } = require("next/server")
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const user = await db.$transaction([
            db.producto.deleteMany({
                where:{
                    marca_id_marca: data,
                },
            }),
            db.marca.delete({
                where:{
                    id_marca: data
                }
            }) 
        ])
        console.log("Marca eliminada con éxito")
        return NextResponse.json("Marca eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Marca: ", e);
        return NextResponse.json("Error al eliminar la Marca");
    }
    
    
    
}