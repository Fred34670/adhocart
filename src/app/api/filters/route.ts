import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const categories = await prisma.categorie.findMany({
      select: {
        nom_categorie: true,
      },
      orderBy: {
        nom_categorie: 'asc',
      },
    });

    const themes = await prisma.theme.findMany({
      select: {
        libelle_theme: true,
      },
      orderBy: {
        libelle_theme: 'asc',
      },
    });

    const categoryNames = categories.map(c => c.nom_categorie).filter(Boolean) as string[];
    const themeNames = themes.map(t => t.libelle_theme).filter(Boolean) as string[];

    return NextResponse.json({ categories: categoryNames, themes: themeNames });
  } catch (error) {
    console.error('Failed to fetch filters:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des filtres.' },
      { status: 500 }
    );
  }
}