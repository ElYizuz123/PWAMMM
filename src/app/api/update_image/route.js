"use server"
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import { unlink } from "fs/promises";
import path from 'path'
import { deleteImageFile, uploadImageFile } from "@/libs/cloudinary";

export async function POST(request){
    try{
        const data = await request.formData()
        const file = data.get('file')
        await deleteImageFile(data.get('nombre'))
        const name = file.name.split('.')[0]+data.get('modifier')
        const foto = await uploadImageFile(file, name, data.get('source'))
        console.log("Archivo guardado en el servidor")
        return NextResponse.json(foto)
    }catch(err){
        console.log(err)
        return NextResponse.json("Error")
    }
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(process.cwd(), 'public', data.get('source'), data.get('nombre'))
    await unlink (filePath)
    const filePath2 = path.join(process.cwd(), 'public', data.get('source'), file.name.split('.')[0]+data.get('modifier')+"."+file.name.split('.')[1])
    writeFile(filePath2, buffer)


    
}