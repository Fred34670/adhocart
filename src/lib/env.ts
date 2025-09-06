// src/lib/env.ts
// Validation des variables d'environnement

interface EnvVariables {
  DATABASE_URL: string;
  NEXTAUTH_SECRET: string;
  NEXTAUTH_URL: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

// Fonction pour obtenir et valider les variables d'environnement
export function getEnvVariables(): EnvVariables {
  const {
    DATABASE_URL,
    NEXTAUTH_SECRET,
    NEXTAUTH_URL,
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
  } = process.env;

  // Vérifier que toutes les variables nécessaires sont définies
  if (!DATABASE_URL) {
    throw new Error('La variable d\'environnement DATABASE_URL est requise mais non définie.');
  }

  if (!NEXTAUTH_SECRET) {
    throw new Error('La variable d\'environnement NEXTAUTH_SECRET est requise mais non définie.');
  }

  if (!NEXTAUTH_URL) {
    throw new Error('La variable d\'environnement NEXTAUTH_URL est requise mais non définie.');
  }

  if (!SUPABASE_URL) {
    throw new Error('La variable d\'environnement SUPABASE_URL est requise mais non définie.');
  }

  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('La variable d\'environnement SUPABASE_SERVICE_ROLE_KEY est requise mais non définie.');
  }

  return {
    DATABASE_URL,
    NEXTAUTH_SECRET,
    NEXTAUTH_URL,
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
  };
}

// Obtenir les variables d'environnement validées
export const env = getEnvVariables();