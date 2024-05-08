"use server"

import { Resend } from 'resend';

const resend = new Resend("re_XfQDaeQe_PsGLmAgSS8BWPnHhy98yd4Q2");

export async function POST(request) {
  try {
    const data = await request.json();
    const { motivo, nombre, apellidos, correo, telefono, comentarios } = data;


    const emailResponse = await resend.emails.send({
      from: "Asociación de Mujeres Mezcaleras de Michoacán <onboarding@resend.dev>",
      to: "carlosgascac@gmail.com",
      subject: motivo,

      html: `
      <h2 className="font-bold text-blue-400">Datos de Contacto:</h2>
      <h3>Nombre: ${nombre} ${apellidos}</h3>
      <h3>Correo: ${correo}</h3>
      <h3>Teléfono: ${telefono}</h3>
      <h3>Comentarios extra: ${comentarios}</h3>
      `,
    });

    return new Response(JSON.stringify({ message: "Email enviado" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Si ocurrió un error, devuelve una respuesta de error
    return new Response(JSON.stringify({ error: "Error en email" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}