import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma'; // Assurez-vous que ce chemin est correct pour votre instance Prisma
import { handleApiError, AuthorizationError, createErrorResponse } from '@/lib/errorHandler';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Vérifier si l'utilisateur est connecté ET a le rôle ADMIN
    if (!session || session.user.role !== 'ADMIN') {
      return createErrorResponse('Accès non autorisé', 403);
    }

    // Récupérer tous les articles depuis la base de données
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        titre: true,
        nom_auteur: true,
        prix_vente_internet: true,
        photos: {
          where: {
            a_la_une: 'Oui',
          },
          select: {
            url_photo: true,
          },
          take: 1,
        },
      },
      orderBy: {
        id: 'asc',
      },
    });

    const articlesWithStringIds = articles.map(a => ({
      ...a,
      id: a.id.toString(),
    }));
    return NextResponse.json(articlesWithStringIds);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return createErrorResponse('Accès non autorisé', 403);
    }

    const body = await req.json();
    const { theme_ids, ...articleData } = body;

    // Validation simple
    if (!articleData.titre) {
      return createErrorResponse('Le titre est obligatoire', 400);
    }

    const dataToCreate = {
      ...articleData,
      archivage_id: articleData.archivage_id ? BigInt(articleData.archivage_id) : null,
      categorie_id: articleData.categorie_id ? BigInt(articleData.categorie_id) : null,
      edition_papier_id: articleData.edition_papier_id ? BigInt(articleData.edition_papier_id) : null,
    };

    const result = await prisma.$transaction(async (prisma) => {
      const newArticle = await prisma.article.create({
        data: dataToCreate,
      });

      if (theme_ids && theme_ids.length > 0) {
        await prisma.article_theme.createMany({
          data: theme_ids.map((theme_id: string) => ({
            article_id: newArticle.id,
            theme_id: BigInt(theme_id),
          })),
        });
      }

      return newArticle;
    });

    return NextResponse.json({
      ...result,
      id: result.id.toString(),
      archivage_id: result.archivage_id?.toString() ?? null,
      categorie_id: result.categorie_id?.toString() ?? null,
      edition_papier_id: result.edition_papier_id?.toString() ?? null,
    }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}