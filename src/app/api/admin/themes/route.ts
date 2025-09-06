// src/app/api/admin/themes/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const themes = await prisma.theme.findMany();
    const themesWithStringIds = themes.map(t => ({
      ...t,
      id: t.id.toString(),
    }));
    return NextResponse.json(themesWithStringIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des thèmes:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des thèmes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { libelle_theme } = await request.json();
    if (!libelle_theme) {
      return NextResponse.json({ message: 'Le libellé est requis' }, { status: 400 });
    }

    const newTheme = await prisma.theme.create({
      data: { libelle_theme },
    });
    return NextResponse.json({
      ...newTheme,
      id: newTheme.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du thème:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la création du thème' }, { status: 500 });
  }
}