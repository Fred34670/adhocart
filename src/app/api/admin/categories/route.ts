// src/app/api/admin/categories/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getServerSession(authOptions);

  // Vérifier si l'utilisateur est connecté et a le rôle ADMIN
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const categories = await prisma.categorie.findMany();
    const categoriesWithStringIds = categories.map(c => ({
      ...c,
      id: c.id.toString(),
    }));
    return NextResponse.json(categoriesWithStringIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des catégories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const body = await request.json();
    console.log("Corps de la requête reçu:", body);
    const { nom } = body;

    if (!nom) {
      console.error("Validation échouée: le nom est manquant.");
      return NextResponse.json({ message: 'Le nom de la catégorie est requis' }, { status: 400 });
    }

    console.log(`Tentative de création de la catégorie avec le nom: ${nom}`);
    const newCategorie = await prisma.categorie.create({
      data: { nom_categorie: nom },
    });
    console.log("Catégorie créée avec succès:", newCategorie);
    return NextResponse.json({
      ...newCategorie,
      id: newCategorie.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la catégorie:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la création de la catégorie' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { id, nom } = await request.json();
    if (!id || !nom) {
      return NextResponse.json({ message: 'L\'ID et le nom de la catégorie sont requis' }, { status: 400 });
    }

    const updatedCategorie = await prisma.categorie.update({
      where: { id: parseInt(id, 10) },
      data: { nom_categorie: nom },
    });
    return NextResponse.json({
      ...updatedCategorie,
      id: updatedCategorie.id.toString(),
    });
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la modification de la catégorie' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { id } = await request.json(); // Ou utiliser searchParams si l\'ID est passé dans l\'URL
     if (!id) {
      return NextResponse.json({ message: 'L\'ID de la catégorie est requis' }, { status: 400 });
    }

    // Vérifier si la catégorie est utilisée par des articles avant de supprimer
    const articlesUsingCategory = await prisma.article.count({
      where: { categorie_id: parseInt(id, 10) },
    });

    if (articlesUsingCategory > 0) {
      return NextResponse.json({ message: `Impossible de supprimer la catégorie car ${articlesUsingCategory} article(s) y sont associés.` }, { status: 409 }); // Conflict
    }

    const deletedCategorie = await prisma.categorie.delete({
      where: { id: parseInt(id, 10) },
    });
    return NextResponse.json({
      ...deletedCategorie,
      id: deletedCategorie.id.toString(),
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la suppression de la catégorie' }, { status: 500 });
  }
}
