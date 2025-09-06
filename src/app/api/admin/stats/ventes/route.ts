import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const sortBy = searchParams.get('sortBy') || 'date_vente';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const orderBy: any = {};
    if (sortBy === 'acheteur') {
      orderBy.utilisateur = { prenom: sortOrder };
    } else if (sortBy === 'article') {
      orderBy.titre = sortOrder;
    } else if (sortBy === 'prix') {
      orderBy.prix_vente_internet = sortOrder;
    } else {
      orderBy.date_vente = sortOrder;
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
        date_vente: true,
        titre: true,
        utilisateur: {
          select: {
            nom: true,
            prenom: true,
          },
        },
      },
      orderBy,
    });

    const responseData = articlesVendus.map(article => ({
      acheteur: `${article.utilisateur?.prenom || ''} ${article.utilisateur?.nom || ''}`.trim(),
      article: article.titre || 'N/A',
      prix: Number(article.prix_vente_internet),
      date_vente: article.date_vente,
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques des ventes:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}