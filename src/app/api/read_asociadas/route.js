import db from "@/libs/db";
import { NextResponse } from "next/server";

export const revalidate = 0;
export  async function GET() {
  
  try {
    const asociadas = await db.asociada.findMany();
    
    console.log(asociadas);
    return NextResponse.json(asociadas);
  } catch (error) {
     console.error("Error al leer los datos", error);
     return {
       status: 500,
       body: "Error al obtener los datos",
     };
    
  } 
}
