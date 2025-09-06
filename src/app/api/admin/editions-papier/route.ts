// src/app/api/admin/editions-papier/route.ts

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
    const editions = await prisma.edition_papier.findMany();
    const editionsWithStringIds = editions.map(e => ({
      ...e,
      id: e.id.toString(),
    }));
    return NextResponse.json(editionsWithStringIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des éditions papier:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des éditions papier' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { libelle_edition_papier } = await request.json();
    if (!libelle_edition_papier) {
      return NextResponse.json({ message: 'Le libellé est requis' }, { status: 400 });
    }

    const newEdition = await prisma.edition_papier.create({
      data: { libelle_edition_papier },
    });
    return NextResponse.json({
      ...newEdition,
      id: newEdition.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'édition papier:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la création de l\'édition papier' }, { status: 500 });
  }
}