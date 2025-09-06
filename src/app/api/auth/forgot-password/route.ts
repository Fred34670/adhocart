import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email est requis' }, { status: 400 });
  }

  try {
    const user = await prisma.utilisateur.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetExpires = new Date(Date.now() + 3600000); // 1 heure

    await prisma.utilisateur.update({
      where: { id: user.id },
      data: {
        passwordResetToken: resetToken,
        passwordResetExpires: passwordResetExpires,
      },
    });

    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Réinitialisation de votre mot de passe Adhocart',
      html: `
        <p>Vous avez demandé une réinitialisation de mot de passe.</p>
        <p>Veuillez cliquer sur ce lien pour réinitialiser votre mot de passe :</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>Ce lien expirera dans une heure.</p>
        <p>Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la demande de réinitialisation du mot de passe:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}