import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Champs manquants' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev', // à remplacer plus tard par ton domaine
      to: [process.env.RESEND_TO!],
      subject: 'Nouveau message depuis le site Hasev Group',
      html: `
        <h2>Nouveau message reçu :</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email :', error);
    return Response.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
