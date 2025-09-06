import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data, mapping } = await request.json();

    if (!Array.isArray(data) || !mapping || typeof mapping !== 'object') {
      return NextResponse.json({ message: 'Données ou mappage invalide.' }, { status: 400 });
    }

    const articlesToCreate = data.map((row: any) => {
      const articleData: any = {};
      for (const csvHeader in mapping) {
        const dbField = mapping[csvHeader];
        if (dbField && row[csvHeader] !== undefined) {
          let value = row[csvHeader];
          // Gestion des types
          if (['prix_vente_internet', 'prix_achat', 'valeur_marche_min', 'frais_postaux', 'prix_reserve'].includes(dbField)) {
            value = parseFloat(value.replace(',', '.'));
          } else if (['quantite_volume', 'categorie_id'].includes(dbField)) {
            value = parseInt(value, 10);
          }
          // Ajouter d'autres conversions si nécessaire (dates, etc.)
          
          if (value !== null && !isNaN(value)) {
            articleData[dbField] = value;
          }
        }
      }
      return articleData;
    }).filter(article => article.titre); // Filtrer les lignes sans titre

    if (articlesToCreate.length === 0) {
      return NextResponse.json({ message: 'Aucun article valide à importer.' }, { status: 400 });
    }

    const result = await prisma.article.createMany({
      data: articlesToCreate,
      skipDuplicates: true, // Ignorer les articles qui pourraient déjà exister (basé sur les contraintes uniques)
    });

    return NextResponse.json({ message: `${result.count} articles ont été importés avec succès.` });

  } catch (error) {
    console.error('API Error in /api/admin/articles/import:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Erreur lors de la préparation de l\'importation.', error: errorMessage },
      { status: 500 }
    );
  }
}