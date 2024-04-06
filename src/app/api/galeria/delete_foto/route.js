const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const user = await db.galeria_foto.delete({
            where:{
                id_foto: data
            }
        }) 
        console.log("Foto eliminada con éxito")
        return NextResponse.json("Foto eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Foto: ", e);
        return NextResponse.json("Error al eliminar la Foto");
    }
    
    
    
}