import db from "@/libs/db";
import { NextResponse } from "next/server";

export  async function GET() {
  
  try {
    const marcas = await db.marca.findMany();
    
    console.log(marcas);
    return NextResponse.json(marcas);
  } catch (error) {
     console.error("Error al leer los datos", error);
     return {
       status: 500,
       body: "Error al obtener los datos",
     };
    
  } 
}
