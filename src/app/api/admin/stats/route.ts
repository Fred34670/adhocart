// src/app/api/admin/stats/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const totalUsers = await prisma.utilisateur.count();
    const totalArticles = await prisma.article.count();
    const totalCategories = await prisma.categorie.count();
    
    const articlesDisponibles = await prisma.article.count({
      where: { disponible: 'Oui' },
    });

    const valeurBrute = await prisma.article.aggregate({
      _sum: {
        prix_vente_internet: true,
      },
      where: { disponible: 'Oui' },
    });

    const valeurTotaleDisponible = valeurBrute._sum.prix_vente_internet || 0;

    return NextResponse.json({
      totalUsers,
      totalArticles,
      totalCategories,
      articlesDisponibles,
      valeurTotaleDisponible,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des statistiques' }, { status: 500 });
  }
}