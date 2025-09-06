import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma'; // Assurez-vous que le chemin est correct pour votre client Prisma

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Convertir userId en nombre car il est de type string par défaut dans la session NextAuth
  const userId = parseInt(session.user.id, 10);

  // Vérifier si la conversion a réussi
  if (isNaN(userId)) {
     return NextResponse.json({ message: 'Invalid user ID format' }, { status: 400 });
  }

  const { articleIds } = await request.json();

  if (!Array.isArray(articleIds)) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  try {
    // 1. Récupérer les favoris existants de l'utilisateur
    const existingFavorites = await prisma.favoris.findMany({
      where: { utilisateur_id: userId }, // Utiliser le userId converti en nombre
      select: { article_id: true },
    });

    const existingFavoriteIds = new Set(existingFavorites.map(fav => fav.article_id));

    // 2. Filtrer les IDs locaux pour n'ajouter que les nouveaux
    const newFavoriteIdsToMerge = articleIds
      .map(id => parseInt(String(id), 10)) // Convertir en nombre
      .filter(id => !isNaN(id) && !existingFavoriteIds.has(id));

    // 3. Préparer les données pour l'insertion
    const favoritesToCreate = newFavoriteIdsToMerge.map((articleId: number) => ({
      utilisateur_id: userId, // Utiliser le userId converti en nombre
      article_id: articleId,
    }));

    // 4. Insérer les nouveaux favoris en base de données
    if (favoritesToCreate.length > 0) {
      await prisma.favoris.createMany({
        data: favoritesToCreate,
        skipDuplicates: true,
      });
      console.log(`Merged ${favoritesToCreate.length} new favorites for user ${userId}`);
    } else {
      console.log(`No new local favorites to merge for user ${userId}`);
    }


    return NextResponse.json({ message: 'Favorites merged successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error merging favorites:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}