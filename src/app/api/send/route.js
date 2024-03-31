import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/EmailTemplate/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend("re_J4skiXKF_6ju1UPLPDobcbswwQkPSrG3c");

export async function POST() {

  try {
    const data = await resend.emails.send({
      from: 'Asociación de mujeres Mezcaleras de Michoacán <onboarding@resend.dev>',
      to: ['carlosgascac@gmail.com'],
      subject: "Holiwis",
      react: EmailTemplate({ firstName: 'Gask' }),
    });

    console.log(data)

    return NextResponse.json({ message: "Correo enviado." }, {
      status: 200
    });

  } catch (error) {
    return NextResponse.json({ message: "Error al enviar el correo." }, {
      status: 500
    });
  }


}