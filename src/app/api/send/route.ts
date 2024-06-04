
import { EmailTemplate } from '@/app/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_hFW6dx8t_J2Ug7cSJm7Z32QdVKSvjSoU7');

export async function POST() {
  try {
    const  data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['tongadt@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text:''
    });

   console.log(data)
    return NextResponse.json({message: 'Email Send' }, {status:200})
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
