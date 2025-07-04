import nodemailer from 'nodemailer';

export async function POST(request) {
  const data = await request.json();
  const { user_name, user_email, user_number, subject, message } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: 'michael_powell1989@hotmail.com',
      subject,
      text: `${message}\n\nPhone: ${user_number}`,
    });

    return new Response(JSON.stringify({ messageId: info.messageId }), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
