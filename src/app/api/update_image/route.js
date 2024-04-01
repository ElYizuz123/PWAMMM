import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import path from 'path'

export async function POST(request){

    const data = await request.formData()
    const file = data.get('file')
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(process.cwd(), 'public', data.source, data.foto)
    await unlink (filePath)
    const filePath2 = path.join(process.cwd(), 'public', data.get('source'), file.name.split('.')[0]+data.get('modifier')+"."+file.name.split('.')[1])
    writeFile(filePath2, buffer)


    console.log("Archivo guardado en el servidor")

    return NextResponse.json("Archivo subido correctamente")
}