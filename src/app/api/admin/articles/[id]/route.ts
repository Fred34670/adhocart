import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification et l'autorisation
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 403 }
      );
    }

    const { id: idStr } = params;
    const id = parseInt(idStr, 10);
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID d\'article invalide' },
        { status: 400 }
      );
    }

    // Récupérer l'article avec ses détails et ses photos
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        photos: true,
        article_theme: {
          include: {
            theme: true,
          },
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { message: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...article,
      id: article.id.toString(),
      archivage_id: article.archivage_id?.toString() ?? null,
      categorie_id: article.categorie_id?.toString() ?? null,
      edition_papier_id: article.edition_papier_id?.toString() ?? null,
      article_theme: article.article_theme.map(at => ({
        ...at,
        article_id: at.article_id.toString(),
        theme_id: at.theme_id.toString(),
      })),
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification et l'autorisation
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 403 }
      );
    }

    const { id: idStr } = params;
    const id = parseInt(idStr, 10);
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID d\'article invalide' },
        { status: 400 }
      );
    }

    // Vérifier si l'article existe
    const existingArticle = await prisma.article.findUnique({
      where: { id },
    });

    if (!existingArticle) {
      return NextResponse.json(
        { message: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer les données du corps de la requête
    const { theme_ids, ...body } = await request.json();

    const updateData: { [key: string]: any } = {};

    // Mapping des champs du formulaire vers le schéma Prisma
    if (body.title !== undefined) updateData.titre = body.title;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.artistOrAuthor !== undefined) updateData.nom_complet = body.artistOrAuthor;
    if (body.illustrations !== undefined) updateData.illustrations = body.illustrations;
    if (body.editeur !== undefined) updateData.editeur = body.editeur;
    if (body.date_impression !== undefined) updateData.date_impression = body.date_impression;
    if (body.nombre_pages !== undefined) updateData.nombre_pages = body.nombre_pages;
    if (body.price !== undefined) updateData.prix_vente_internet = parseFloat(body.price);
    if (body.quantite_volume !== undefined) updateData.quantite_volume = parseInt(body.quantite_volume, 10);
    if (body.weight !== undefined) updateData.poids_net_kg = body.weight;
    if (body.frais_postaux !== undefined) updateData.frais_postaux = parseFloat(body.frais_postaux);
    if (body.pseudo_titre !== undefined) updateData.pseudo_titre = body.pseudo_titre;
    if (body.collection !== undefined) updateData.collection = body.collection;
    if (body.justification !== undefined) updateData.justification = body.justification;
    if (body.date_EO !== undefined) updateData.date_EO = body.date_EO;
    if (body.estimation !== undefined) updateData.estimation = body.estimation;
    if (body.prix_reserve !== undefined) updateData.prix_reserve = parseFloat(body.prix_reserve);
    if (body.disponible !== undefined) updateData.disponible = body.disponible;
    if (body.envoi_possible !== undefined) updateData.envoi_possible = body.envoi_possible;
    if (body.categorie_id !== undefined) updateData.categorie_id = parseInt(body.categorie_id, 10);
    if (body.prix_achat !== undefined) updateData.prix_achat = parseFloat(body.prix_achat);
    if (body.valeur_marche_min !== undefined) updateData.valeur_marche_min = parseFloat(body.valeur_marche_min);

    // Mettre à jour l'article et ses thèmes dans une transaction
    const updatedArticle = await prisma.$transaction(async (prisma) => {
      // 1. Mettre à jour les champs simples de l'article
      const article = await prisma.article.update({
        where: { id },
        data: updateData,
      });

      // 2. Gérer la mise à jour des thèmes
      if (theme_ids && Array.isArray(theme_ids)) {
        // Supprimer les anciennes associations de thèmes
        await prisma.article_theme.deleteMany({
          where: { article_id: id },
        });

        // Ajouter les nouvelles associations de thèmes
        await prisma.article_theme.createMany({
          data: theme_ids.map((theme_id: string) => ({
            article_id: id,
            theme_id: parseInt(theme_id, 10),
          })),
        });
      }

      return article;
    });

    return NextResponse.json(updatedArticle);
  } catch (error: any) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    
    // Gérer l'erreur si l'article n'existe pas
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Erreur lors de la mise à jour de l\'article' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification et l'autorisation
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 403 }
      );
    }

    const { id: idStr } = params;
    const id = parseInt(idStr, 10);
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID d\'article invalide' },
        { status: 400 }
      );
    }

    // Utiliser une transaction pour supprimer les dépendances et l'article
    await prisma.$transaction([
      // Supprimer les relations dans article_theme
      prisma.article_theme.deleteMany({
        where: { article_id: id },
      }),
      // Supprimer les favoris associés
      prisma.favoris.deleteMany({
        where: { article_id: id },
      }),
      // Supprimer les photos associées
      prisma.photos.deleteMany({
        where: { article_id: id },
      }),
      // Enfin, supprimer l'article lui-même
      prisma.article.delete({
        where: { id },
      }),
    ]);

    return NextResponse.json({ message: 'Article supprimé avec succès' });
  } catch (error: any) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    
    // Gérer l'erreur si l'article n'existe pas
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
}