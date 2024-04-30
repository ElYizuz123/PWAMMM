"use server"

  import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const { total, metodoPago, metodoEnvio, marca, nombreBotella,cantidad, ml, precioBotella, 
    nombreCliente, apellidoCliente, nombreEmpresa, telefono, correo, 
    calle, colonia, ciudad, cp, numExterior, numInterior, pais} = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "aguimtz.2003@gmail.com",
        pass: "dwgt bnzs xygg bqpm",
      },
    });

    const mailOption = {
      from: "aguimtz.2003@gmail.com",
      to: "aguimtz.2003@gmail.com",
      subject: "VENTA NUEVA ASOCIACIÓN MEZCALERA",
      html: `
    <h3>Marca:  ${marca}</h3>
    <h3>Datos del producto: 
    ${nombreBotella}  ${ml} ${precioBotella} ${cantidad}</h3>
    <h3>Método envío: ${metodoEnvio}</h3>
    <h3>Total: ${total}</h3>
    <h3>Metodo del pago: ${metodoPago} 
    <h3>Nombre: ${nombreCliente} ${apellidoCliente}</h3>
    <h3>Telefono: ${telefono}</h3>
    <h3>Correo: ${correo}
    <h3>Nombre empresa: ${nombreEmpresa}</h3>
    <h3>Datos dirreción: ${pais} ${ciudad}</h3>
    <h3>  ${colonia} ${calle} ${numExterior} ${numInterior} ${cp} </h3>
    `
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Se han guardado sus datos." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Ha ocurrido un error al enviar el correo." }, { status: 500 })
  }
}