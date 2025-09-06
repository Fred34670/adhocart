import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma'; // Modifié pour importer l'instance partagée

// const prisma = new PrismaClient(); // Supprimez cette ligne

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const params = await context.params; // Correction : attendre params si nécessaire
  console.log('[API /api/articles/[id]] Route atteinte');
  console.log('[API /api/articles/[id]] Params reçus:', params);

  const articleId = parseInt(params.id, 10); // Utilisation après await
  console.log('[API /api/articles/[id]] ID de l\'article parsé:', articleId);

  if (isNaN(articleId)) {
    console.log('[API /api/articles/[id]] ID d\'article invalide (isNaN)');
    return NextResponse.json({ message: 'ID d\'article invalide' }, { status: 400 });
  }

  try {
    console.log(`[API /api/articles/[id]] Recherche de l'article avec ID: ${articleId}`);
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
      include: {
        photos: true,
        article_theme: {
          include: {
            theme: true,
          },
        },
      },
    });

    console.log('[API /api/articles/[id]] Résultat de Prisma:', article);

    if (!article) {
      console.log(`[API /api/articles/[id]] Article non trouvé pour ID: ${articleId}`);
      return NextResponse.json({ message: 'Article non trouvé' }, { status: 404 });
    }

    console.log(`[API /api/articles/[id]] Article trouvé et retourné pour ID: ${articleId}`);
    return NextResponse.json(article);

  } catch (error) {
    console.error('[API /api/articles/[id]] Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}

// Vous pourriez aussi avoir d'autres fonctions (PUT, DELETE) ici si nécessaire