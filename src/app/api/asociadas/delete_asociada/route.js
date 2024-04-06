const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const user = await db.asociada.delete({
            where:{
                id_asociada: data
            }
        }) 
        console.log("Asociada eliminada con éxito")
        return NextResponse.json("Asociada eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Asociada: ", e);
        return NextResponse.json("Error al eliminar la Asociada");
    }
    
    
    
}