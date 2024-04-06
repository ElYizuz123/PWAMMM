import db from "@/libs/db";
import { NextResponse } from "next/server";

export  async function GET() {
  
  try {
    const eventos = await db.evento.findMany();
    
    console.log(eventos);
    return NextResponse.json(eventos);
  } catch (error) {
     console.error("Error al leer los datos", error);
     return {
       status: 500,
       body: "Error al obtener los datos",
     };
    
  } 
}
