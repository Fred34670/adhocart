import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ isFavorite: false });
  }

  const userId = parseInt(session.user.id);
  const articleId = parseInt(params.id);

  if (isNaN(articleId)) {
    return NextResponse.json({ message: 'Article ID invalide' }, { status: 400 });
  }

  try {
    const favori = await prisma.favoris.findUnique({
      where: {
        utilisateur_id_article_id: {
          utilisateur_id: userId,
          article_id: articleId,
        },
      },
    });

    return NextResponse.json({ isFavorite: !!favori });
  } catch (error) {
    console.error('Erreur lors de la vérification du statut de favori:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}