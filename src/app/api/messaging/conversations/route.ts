import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  const { articleId, message, guestName, guestEmail } = body;

  if (!articleId || !message) {
    return NextResponse.json({ message: 'Article ID and message are required.' }, { status: 400 });
  }

  let userId: number | undefined = undefined;
  if (session?.user?.id) {
    userId = parseInt(session.user.id, 10);
  } else if (!guestName || !guestEmail) {
    return NextResponse.json({ message: 'Guest name and email are required for unauthenticated users.' }, { status: 400 });
  }

  try {
    const conversation = await prisma.conversation.create({
      data: {
        articleId: parseInt(articleId, 10),
        userId: userId,
        guestName: guestName,
        guestEmail: guestEmail,
        isReadByAdmin: false, // Marquer comme non lu pour l'admin
        isReadByUser: true,   // Marquer comme lu pour l'utilisateur qui envoie
        messages: {
          create: {
            content: message,
            senderIsAdmin: false,
          },
        },
      },
      include: {
        messages: true,
        article: true,
        user: true,
      },
    });

    // --- Logique d'envoi d'e-mail à l'admin ---
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const conversationUrl = `${process.env.NEXTAUTH_URL}/admin/messagerie/${conversation.id}`;
        const mailOptions = {
          from: `"Adhocart" <${process.env.SMTP_USER}>`,
          to: adminEmail,
          subject: `Nouvelle question sur l'article "${conversation.article.titre}"`,
          html: `
            <p>Un utilisateur a posé une question sur l'article : <strong>${conversation.article.titre}</strong>.</p>
            <p><strong>Message :</strong></p>
            <p style="padding: 12px; border-left: 4px solid #ccc; margin: 12px 0;">${message}</p>
            <p><strong>Expéditeur :</strong> ${session?.user?.name || guestName} (${session?.user?.email || guestEmail})</p>
            <p>Pour répondre, veuillez cliquer sur le lien ci-dessous :</p>
            <p><a href="${conversationUrl}" style="background-color: #3b82f6; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Voir la conversation</a></p>
          `,
        };
        await transporter.sendMail(mailOptions);
      }
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'e-mail de notification à l'admin:", emailError);
    }
    // --- Fin de la logique d'envoi d'e-mail ---

    return NextResponse.json(conversation, { status: 201 });
  } catch (error) {
    console.error('Error creating conversation:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}