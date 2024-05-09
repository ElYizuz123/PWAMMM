import db from "@/libs/db";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const acompanamiento = await db.acompanamiento.findMany({
      include: {
        marca: true,
      },
    });

    console.log(acompanamiento);
    return NextResponse.json(acompanamiento);
  } catch (error) {
    console.error("Error al leer los datos", error);
    return {
      status: 500,
      body: "Error al obtener los datos",
    };
  }
}
