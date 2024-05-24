const { NextResponse } = require("next/server")
import { deleteImageFile } from '@/libs/cloudinary';
import db from '@/libs/db'

export const revalidate = 0;
export async function POST(request){
    const data = await request.json();
    console.log(data)
    try{
        const productos =await db.producto.findMany({
            where:{
                marca_id_marca: data
            }
        })
        
        const marca = await db.marca.delete({
            where:{
                id_marca: data
            }
        }) 

        if(productos){
            await productos.map(producto =>{
                deleteImageFile(producto.fotoId)
            })
        }
        console.log("Marca eliminada con éxito")
        return NextResponse.json("Marca eliminada con éxito");
    } catch(e){
        console.error("Error al eliminar la Marca: ", e);
        return NextResponse.json("Error al eliminar la Marca");
    }
    
    
    
}