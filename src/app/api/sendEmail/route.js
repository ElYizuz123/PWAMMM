"use server"

  import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");
export const revalidate = 0;
export async function POST(request) {
  try {
    const { motivo, nombre, apellidos, correo, telefono, comentarios } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "carlosgascac@gmail.com",
        pass: "isii xgeq dooi szvw",
      },
    });

    const mailOption = {
      from: "carlosgascac@gmail.com",
      to: "carlosgascac@gmail.com",
      subject: motivo,
      html: `
    <h3>Nombre: ${nombre} ${apellidos}</h3>
    <h3>Correo: ${correo}</h3>
    <h3>Teléfono: ${telefono}</h3>
    <h3>Comentarios extra: ${comentarios}</h3>
    `
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Correo enviado correctamente." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Ha ocurrido un error al enviar el correo." }, { status: 500 })
  }
}