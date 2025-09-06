// src/app/api/admin/users/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  // Vérifier si l'utilisateur est connecté et a le rôle ADMIN
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    // Exclure le mot de passe des résultats
    const users = await prisma.utilisateur.findMany({
      select: {
        id: true,
        nom: true,
        email: true,
        // emailVerified: true,
        // photo: true,
        role: true,
      },
    });
    const usersWithStringIds = users.map(u => ({
      ...u,
      id: u.id.toString(),
    }));
    return NextResponse.json(usersWithStringIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la récupération des utilisateurs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { nom, email, password, role } = await request.json();
    if (!email || !password || !role) {
      return NextResponse.json({ message: 'L\'email, le mot de passe et le rôle sont requis' }, { status: 400 });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Un utilisateur avec cet email existe déjà' }, { status: 409 });
    }

    // Hasher le mot de passe (vous devriez utiliser une bibliothèque de hachage comme bcrypt)
    // Note: Pour cet exemple simple, nous ne hachons pas, mais c'est CRUCIAL en production.
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.utilisateur.create({
      data: {
        nom,
        email,
        password, // Stockage en clair pour l'exemple, à remplacer par un hachage
        role,
        type_utilisateur_id: 1, // Temporaire, à remplacer par une logique de sélection
      },
      select: { id: true, nom: true, email: true, role: true }, // Ne pas retourner le mot de passe
    });
    return NextResponse.json({
      ...newUser,
      id: newUser.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la création de l\'utilisateur' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { id, nom, email, password, role } = await request.json();
    if (!id) {
      return NextResponse.json({ message: 'L\'ID de l\'utilisateur est requis' }, { status: 400 });
    }

    // Construire l'objet de données à mettre à jour
    const updateData: any = {};
    if (nom !== undefined) updateData.nom = nom;
    if (email !== undefined) updateData.email = email;
    if (role !== undefined) {
      updateData.role = role;
      // La logique pour type_utilisateur_id doit être ajoutée ici si nécessaire
    }
    // Gérer la mise à jour du mot de passe si fourni (avec hachage)
    if (password !== undefined && password !== '') {
       // updateData.password = await bcrypt.hash(password, 10);
       updateData.password = password; // Stockage en clair pour l'exemple
    }

    if (Object.keys(updateData).length === 0) {
       return NextResponse.json({ message: 'Aucune donnée à mettre à jour fournie' }, { status: 400 });
    }

    const updatedUser = await prisma.utilisateur.update({
      where: { id: parseInt(id, 10) },
      data: updateData,
      select: { id: true, nom: true, email: true, role: true }, // Ne pas retourner le mot de passe
    });
    return NextResponse.json({
      ...updatedUser,
      id: updatedUser.id.toString(),
    });
  } catch (error) {
    console.error('Erreur lors de la modification de l\'utilisateur:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la modification de l\'utilisateur' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 403 });
  }

  try {
    const { id } = await request.json(); // Ou utiliser searchParams si l'ID est passé dans l'URL
     if (!id) {
      return NextResponse.json({ message: 'L\'ID de l\'utilisateur est requis' }, { status: 400 });
    }

    // Optionnel: Vérifier si l'utilisateur à supprimer n'est pas l'utilisateur actuellement connecté
    if (session.user.id === id) {
       return NextResponse.json({ message: 'Impossible de supprimer votre propre compte' }, { status: 400 });
    }

    const deletedUser = await prisma.utilisateur.delete({
      where: { id: parseInt(id, 10) },
      select: { id: true, nom: true, email: true, role: true }, // Retourner les infos de l'utilisateur supprimé (sans mot de passe)
    });
    return NextResponse.json({
      ...deletedUser,
      id: deletedUser.id.toString(),
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    return NextResponse.json({ message: 'Erreur serveur lors de la suppression de l\'utilisateur' }, { status: 500 });
  }
}