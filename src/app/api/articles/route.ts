import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic'; // Garantit que la route est toujours dynamique

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const sortBy = searchParams.get('sortBy') || 'alphabetical';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const searchTerm = searchParams.get('searchTerm') || '';
    const category = searchParams.get('category');
    const theme = searchParams.get('theme');

    const skip = (page - 1) * limit;

    let orderBy: any;

    switch (sortBy) {
      case 'price_asc':
        orderBy = { prix_vente_internet: 'asc' };
        break;
      case 'price_desc':
        orderBy = { prix_vente_internet: 'desc' };
        break;
      case 'category':
        orderBy = { categorie: { nom_categorie: 'asc' } };
        break;
      case 'theme':
        // Le tri par thème (relation many-to-many) est complexe.
        // On trie par titre en attendant une solution plus avancée.
        orderBy = { titre: 'asc' };
        break;
      case 'alphabetical':
      default:
        orderBy = { titre: 'asc' };
        break;
      case 'type':
        orderBy = { collection: 'asc' };
        break;
    }

    let where: any = {};
    if (searchTerm) {
      where.OR = [
        { titre: { contains: searchTerm, mode: 'insensitive' } },
        { nom_auteur: { contains: searchTerm, mode: 'insensitive' } },
        { prenom_auteur: { contains: searchTerm, mode: 'insensitive' } },
        { description: { contains: searchTerm, mode: 'insensitive' } },
      ];
    }

    if (category) {
      where.categorie = {
        nom_categorie: {
          equals: category,
          mode: 'insensitive',
        },
      };
    }

    if (theme) {
     where.article_theme = {
       some: {
         theme: {
           libelle_theme: {
             equals: theme,
             mode: 'insensitive',
           },
         },
       },
     };
   }

    const session = await getServerSession(authOptions);
    const userId = session?.user?.id ? parseInt(session.user.id) : null;

    let userFavorites: number[] = [];
    if (userId) {
      const favoris = await prisma.favoris.findMany({
        where: { utilisateur_id: userId },
        select: { article_id: true },
      });
      userFavorites = favoris.map(f => f.article_id);
    }

    const articles = await prisma.article.findMany({
      where: where,
      orderBy: orderBy,
      skip: skip,
      take: limit,
      include: {
        photos: {
          select: {
            url_photo: true,
            a_la_une: true,
          },
        },
        categorie: {
          select: {
            nom_categorie: true,
            image_entete_url: true,
          },
        },
        article_theme: {
          include: {
            theme: true,
          },
        },
      },
    });

    const totalCount = await prisma.article.count({
      where: where,
    });

    let categoryName = null;
    let image_entete_url = null;
    let description = null;
    if (category) {
      const categoryData = await prisma.categorie.findFirst({
        where: {
          nom_categorie: {
            equals: category,
            mode: 'insensitive',
          },
        },
        select: {
          nom_categorie: true,
          image_entete_url: true,
          description: true,
        },
      });
      categoryName = categoryData?.nom_categorie;
      image_entete_url = categoryData?.image_entete_url;
      description = categoryData?.description;
    }

    const formattedArticles = articles.map(article => ({
      ...article,
      id: article.id.toString(),
      isFavorite: userFavorites.includes(article.id),
      archivage_id: article.archivage_id?.toString() ?? null,
      categorie_id: article.categorie_id?.toString() ?? null,
      edition_papier_id: article.edition_papier_id?.toString() ?? null,
      prix_achat: article.prix_achat?.toString() ?? null,
      valeur_marche_min: article.valeur_marche_min?.toString() ?? null,
      prix_vente_internet: article.prix_vente_internet?.toString() ?? null,
      frais_postaux: article.frais_postaux?.toString() ?? null,
      prix_reserve: article.prix_reserve?.toString() ?? null,
    }));

    return NextResponse.json({
      articles: formattedArticles,
      totalCount,
      categoryName,
      image_entete_url,
      description,
    });

  } catch (error) {
    console.error('API Error in /api/articles:', error); // Log plus détaillé
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des articles.', error: errorMessage },
      { status: 500 }
    );
  }
}