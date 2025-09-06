import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assurez-vous que ce chemin est correct
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { nom, email, password } = await request.json();

    // Validation de base (à améliorer selon vos besoins)
    if (!nom || !email || !password) {
      return NextResponse.json({ message: 'Tous les champs sont requis (nom, email, mot de passe).' }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ message: 'Le mot de passe doit contenir au moins 6 caractères.' }, { status: 400 });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Cet email est déjà utilisé.' }, { status: 409 }); // 409 Conflict
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10); // 10 est le nombre de "salt rounds"

    // Créer l'utilisateur
    // Assurez-vous que votre modèle User dans schema.prisma a les champs name, email, password et optionnellement role
    const newUser = await prisma.utilisateur.create({
      data: {
        nom,
        email,
        password: hashedPassword,
        type_utilisateur_id: 1, // <-- Ici, vous utilisez l'ID 1
        role: 'USER',
      },
    });

    // Exclure le mot de passe de la réponse
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({ user: userWithoutPassword, message: 'Compte créé avec succès.' }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur lors de la création du compte:', error);
    // En production, évitez d'exposer les détails de l'erreur
    let errorMessage = 'Erreur interne du serveur lors de la création du compte.';
    // Gérer spécifiquement la contrainte d'unicité de Prisma si elle n'a pas été attrapée plus tôt
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        errorMessage = 'Cet email est déjà utilisé.';
        return NextResponse.json({ message: errorMessage }, { status: 409 });
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}