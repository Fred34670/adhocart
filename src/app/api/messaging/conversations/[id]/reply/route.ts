import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import nodemailer from 'nodemailer';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  
  const userId = parseInt(session.user.id, 10);
  const isAdmin = session.user.role === 'ADMIN';

  const conversationId = parseInt(params.id, 10);
  const { message, fromUser } = await request.json();

  if (!message) {
    return NextResponse.json({ message: 'Message is required.' }, { status: 400 });
  }

  try {
    // Vérifier que l'utilisateur a le droit de répondre
    if (!isAdmin) {
      const conv = await prisma.conversation.findFirst({ where: { id: conversationId, userId: userId }});
      if (!conv) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
    }

    const newMessage = await prisma.message.create({
      data: {
        conversationId: conversationId,
        content: message,
        senderIsAdmin: isAdmin && !fromUser,
      },
    });

    // Mettre à jour la date de la conversation et récupérer les infos pour l'email
    const updatedConversation = await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        updatedAt: new Date(),
        // Si l'admin répond, on notifie l'utilisateur. Si l'utilisateur répond, on notifie l'admin.
        isReadByUser: !isAdmin,
        isReadByAdmin: isAdmin,
      },
      include: {
        article: { select: { titre: true } },
        user: { select: { email: true, nom: true, prenom: true } }
      }
    });

    // --- Logique d'envoi d'e-mail ---
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const recipientEmail = isAdmin ? (updatedConversation.user?.email || updatedConversation.guestEmail) : process.env.ADMIN_EMAIL;
      
      if (recipientEmail) {
        let subject = '';
        let htmlBody = '';

        if (isAdmin) {
          // L'admin répond à l'utilisateur
          const conversationUrl = `${process.env.NEXTAUTH_URL}/profile/messagerie/${conversationId}`;
          subject = `Nouvelle réponse concernant l'article "${updatedConversation.article.titre}"`;
          htmlBody = `
            <p>Bonjour ${updatedConversation.user?.prenom || updatedConversation.guestName || 'Utilisateur'},</p>
            <p>Vous avez reçu une nouvelle réponse de l'administrateur concernant l'article : <strong>${updatedConversation.article.titre}</strong>.</p>
            <p style="padding: 12px; border-left: 4px solid #ccc; margin: 12px 0;">${message}</p>
            <p>Pour répondre ou consulter l'historique de vos échanges, veuillez cliquer sur le bouton ci-dessous :</p>
            <p style="margin: 20px 0;">
              <a href="${conversationUrl}" style="background-color: #3b82f6; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Voir la conversation</a>
            </p>
            <p>Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur : <a href="${conversationUrl}">${conversationUrl}</a></p>
            <p>Cordialement,<br>L'équipe Adhocart</p>
          `;
        } else {
          // L'utilisateur répond à l'admin
          const conversationUrl = `${process.env.NEXTAUTH_URL}/admin/messagerie/${conversationId}`;
          subject = `Nouveau message d'un utilisateur sur Adhocart`;
          htmlBody = `
            <p>Un utilisateur a répondu dans une conversation concernant l'article : <strong>${updatedConversation.article.titre}</strong>.</p>
            <p><strong>Message de l'utilisateur :</strong></p>
            <p style="padding: 12px; border-left: 4px solid #ccc; margin: 12px 0;">${message}</p>
            <p>Pour répondre, veuillez cliquer sur le lien ci-dessous :</p>
            <p><a href="${conversationUrl}">${conversationUrl}</a></p>
          `;
        }

        const mailOptions = {
          from: `"Adhocart" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          subject: subject,
          html: htmlBody,
        };
        await transporter.sendMail(mailOptions);
      }
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'e-mail de notification:", emailError);
      // Ne pas bloquer la réponse de l'API si l'e-mail échoue
    }
    // --- Fin de la logique d'envoi d'e-mail ---

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}