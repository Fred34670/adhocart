// src/app/api/admin/archivages/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // Empêche le build statique de cette route

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const archivages = await prisma.archivage.findMany();
    const archivagesWithStringIds = archivages.map(a => ({
      ...a,
      id: a.id.toString(),
    }));
    return NextResponse.json(archivagesWithStringIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des archivages:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des archivages' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { nom_archivage } = await request.json();
    if (!nom_archivage) {
      return NextResponse.json({ message: 'Le nom est requis' }, { status: 400 });
    }

    const newArchivage = await prisma.archivage.create({
      data: { nom_archivage },
    });
    return NextResponse.json({
      ...newArchivage,
      id: newArchivage.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'archivage:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la création de l\'archivage' }, { status: 500 });
  }
}
