// src/app/api/favoris/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// GET /api/favoris - Récupérer les favoris de l'utilisateur connecté ou le nombre de favoris
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }

  const userId = parseInt(session.user.id); // Assurez-vous que userId est bien un nombre

  try {
    const { searchParams } = new URL(request.url);
    const countOnly = searchParams.get('count') === 'true';

    if (countOnly) {
      const favorisCount = await prisma.favoris.count({
        where: { utilisateur_id: userId },
      });
      return NextResponse.json({ count: favorisCount });
    } else {
      const favoris = await prisma.favoris.findMany({
        where: { utilisateur_id: userId },
        include: {
          article: { // Inclure les détails de l'article
            include: { // Remplacer select par include pour récupérer tous les champs
              photos: true,
              categorie: true,
              article_theme: {
                include: {
                  theme: true
                }
              }
            }
          },
        },
      });
      const transformedFavoris = favoris.map(fav => {
        const article = fav.article;
        return {
          ...fav,
          utilisateur_id: fav.utilisateur_id.toString(),
          article_id: fav.article_id.toString(),
          article: {
            ...article,
            id: article.id.toString(),
            archivage_id: article.archivage_id?.toString() ?? null,
            categorie_id: article.categorie_id?.toString() ?? null,
            edition_papier_id: article.edition_papier_id?.toString() ?? null,
            
            // Convertir tous les champs Decimal en string
            prix_achat: article.prix_achat?.toString() ?? null,
            valeur_marche_min: article.valeur_marche_min?.toString() ?? null,
            prix_vente_internet: article.prix_vente_internet?.toString() ?? null,
            frais_postaux: article.frais_postaux?.toString() ?? null,
            prix_reserve: article.prix_reserve?.toString() ?? null,

            // Transformer les IDs et autres types dans les relations
            categorie: article.categorie ? {
                ...article.categorie,
                id: article.categorie.id.toString(),
            } : null,
            article_theme: article.article_theme.map(at => ({
                ...at,
                article_id: at.article_id.toString(),
                theme_id: at.theme_id.toString(),
                theme: {
                    ...at.theme,
                    id: at.theme.id.toString(),
                }
            })),
            photos: article.photos.map(p => ({
                ...p,
                id: p.id.toString(),
                article_id: p.article_id.toString(),
            })),
          }
        }
      });
      return NextResponse.json({ favoris: transformedFavoris });
    }
  } catch (error) {
    console.error('Failed to fetch favoris:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des favoris.' },
      { status: 500 }
    );
  }
}

// POST /api/favoris - Ajouter un article aux favoris de l'utilisateur connecté
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }

  const userId = parseInt(session.user.id); // Assurez-vous que l'ID utilisateur est un nombre

  try {
    const body = await request.json();
    const { articleId } = body;

    if (!articleId) {
      return NextResponse.json({ message: 'L\'ID de l\'article est requis.' }, { status: 400 });
    }

    const numericArticleId = parseInt(articleId, 10);

    if (isNaN(numericArticleId)) {
      return NextResponse.json({ message: 'L\'ID de l\'article est invalide.' }, { status: 400 });
    }

    // Vérifier si l'article existe
    const articleExists = await prisma.article.findUnique({
      where: { id: numericArticleId },
    });

    if (!articleExists) {
      return NextResponse.json({ message: 'Article non trouvé.' }, { status: 404 });
    }

    // Vérifier si le favori existe déjà
    const existingFavori = await prisma.favoris.findUnique({
      where: {
        utilisateur_id_article_id: {
          utilisateur_id: userId,
          article_id: numericArticleId,
        },
      },
    });

    if (existingFavori) {
      return NextResponse.json({ message: 'Cet article est déjà dans vos favoris.' }, { status: 409 });
    }

    const newFavori = await prisma.favoris.create({
      data: {
        utilisateur_id: userId,
        article_id: numericArticleId,
      },
      include: {
        article: {
          select: {
            id: true,
            titre: true,
          }
        }
      }
    });

    return NextResponse.json(newFavori, { status: 201 });
  } catch (error) {
    console.error('Failed to add to favoris:', error);
    // Gérer les erreurs spécifiques de Prisma, par exemple, si l'article_id n'existe pas
    return NextResponse.json(
      { message: 'Erreur lors de l\'ajout aux favoris.' },
      { status: 500 }
    );
  }
}