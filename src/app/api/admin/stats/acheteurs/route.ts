import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const sortBy = searchParams.get('sortBy') || 'nom_acheteur';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    const orderBy: any = {};
    if (sortBy === 'nom_acheteur') {
      orderBy.utilisateur = { nom: sortOrder };
    } else if (sortBy === 'categorie') {
      orderBy.categorie = { nom_categorie: sortOrder };
    } else if (sortBy === 'titre') {
      orderBy.titre = sortOrder;
    } else if (sortBy === 'prix_vente') {
        orderBy.prix_vente_internet = sortOrder;
    } else if (sortBy === 'frais_envoi') {
        orderBy.frais_postaux = sortOrder;
    }

    const articlesVendus = await prisma.article.findMany({
      where: {
        id_utilisateur: {
          not: null,
        },
        date_vente: {
          not: null,
        },
      },
      select: {
        prix_vente_internet: true,
        frais_postaux: true,
        titre: true,
        utilisateur: {
          select: {
            nom: true,
            prenom: true,
          },
        },
        categorie: {
          select: {
            nom_categorie: true,
          },
        },
      },
      orderBy,
    });

    // Les types Decimal de Prisma doivent être convertis en string ou number pour la sérialisation JSON.
    const responseData = articlesVendus.map(article => ({
      nom_acheteur: `${article.utilisateur?.prenom || ''} ${article.utilisateur?.nom || ''}`.trim(),
      categorie: article.categorie?.nom_categorie || 'N/A',
      titre: article.titre || 'N/A',
      prix_vente: Number(article.prix_vente_internet),
      frais_envoi: Number(article.frais_postaux),
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques des acheteurs:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}