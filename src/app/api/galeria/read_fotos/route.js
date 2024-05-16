import db from "@/libs/db";
import { NextResponse } from "next/server";

export const revalidate = 0;
export  async function GET() {
  
  try {
    const fotos = await db.galeria_foto.findMany();
    
    console.log(fotos);
    return NextResponse.json(JSON.stringify(fotos));
  } catch (error) {
     console.error("Error al leer los datos", error);
     return {
       status: 500,
       body: "Error al obtener los datos",
     };
    
  } 
}

// const { NextResponse } = require("next/server")
// import db from '@/libs/db'

// export async function POST(request){
//     const datos = await request.json();
//     try{
//         const data = await db.galeria_foto.findMany({
//             where:{
//                 fk_id_categoria: datos.fk_id
//             }
//         });
//         const dataReversed = data.reverse();
//         console.log(dataReversed);
//         return NextResponse.json(JSON.stringify(dataReversed));

//     }catch(err){
//         console.error('Error al leer los datos', error)
//         return{
//             status: 500,
//             body: 'Error al obtener los datos'
//         }
//     }
    
// }
