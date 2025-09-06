import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface Params {
  params: { id: string };
}

// DELETE /api/favoris/[id] - Supprimer un article des favoris de l'utilisateur connecté
export async function DELETE(request: Request, { params }: Params) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }

  const userId = parseInt(session.user.id);
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: 'L\'ID de l\'article est requis.' }, { status: 400 });
  }

  const articleId = parseInt(id);

  try {
    // Vérifier si le favori existe avant de le supprimer
    const favoriExists = await prisma.favoris.findUnique({
      where: {
        utilisateur_id_article_id: {
          utilisateur_id: userId,
          article_id: articleId,
        },
      },
    });

    if (!favoriExists) {
      return NextResponse.json({ message: 'Favori non trouvé.' }, { status: 404 });
    }

    await prisma.favoris.delete({
      where: {
        utilisateur_id_article_id: {
          utilisateur_id: userId,
          article_id: articleId,
        },
      },
    });

    return NextResponse.json({ message: 'Article retiré des favoris avec succès.' }, { status: 200 });
  } catch (error) {
    console.error('Failed to remove from favoris:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la suppression du favori.' },
      { status: 500 }
    );
  }
}
