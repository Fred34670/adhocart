import { PrismaClient } from '@prisma/client'

// Déclare une variable globale pour stocker l'instance de PrismaClient
// Cela est nécessaire pour éviter de créer de nouvelles instances lors du rechargement à chaud en développement
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Assurez-vous que DATABASE_URL est toujours défini pour le constructeur PrismaClient
// Utilisez une URL de fallback si DATABASE_URL n'est pas défini (par exemple, pour les builds statiques sans DB)
const databaseUrl = process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/dummy_db';

// Crée l'instance de PrismaClient si elle n'existe pas, sinon réutilise l'instance globale existante
// En production, `globalThis.prisma` sera toujours undefined au premier chargement, donc une nouvelle instance sera créée.
// En développement, lors du rechargement à chaud, `globalThis.prisma` conservera l'instance précédente.

export const prisma = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl, // Utilise l'URL avec le fallback
    },
  },
});

// Si nous sommes en développement, assigne l'instance créée à la variable globale
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// export default prisma; // Supprimez ou commentez cette ligne
