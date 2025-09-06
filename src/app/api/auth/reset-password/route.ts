import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { token, password } = await request.json();

  if (!token || !password) {
    return NextResponse.json({ error: 'Jeton et nouveau mot de passe sont requis' }, { status: 400 });
  }

  try {
    const user = await prisma.utilisateur.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetExpires: { gt: new Date() },
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Jeton invalide ou expiré' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.utilisateur.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    return NextResponse.json({ message: 'Votre mot de passe a été réinitialisé avec succès.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la réinitialisation du mot de passe:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}