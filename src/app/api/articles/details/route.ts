import { prisma } from '@/lib/prisma'; // Utiliser l'instance Prisma partagée

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const articleIdsStrings: string[] = body.articleIds;

    // Vérifier si articleIds est un tableau de chaînes
    if (!Array.isArray(articleIdsStrings) || !articleIdsStrings.every(id => typeof id === 'string')) {
      return new Response(JSON.stringify({ message: 'Format de données invalide. Attendu: { articleIds: string[] }' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convertir les chaînes en nombres pour la requête Prisma
    const articleIds = articleIdsStrings.map(id => parseInt(id, 10)).filter(id => !isNaN(id));

    if (articleIds.length !== articleIdsStrings.length) {
      // Gérer le cas où certains ID ne sont pas des nombres valides
      return new Response(JSON.stringify({ message: 'Certains ID d\'articles fournis sont invalides.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Requête API /api/articles/details reçue pour les IDs:', articleIds);

    // Récupérer les articles de la base de données dont les IDs sont dans la liste
    const articles = await prisma.article.findMany({
      where: {
        id: {
          in: articleIds, // Utilise l'opérateur 'in' de Prisma pour filtrer par une liste d'IDs
        },
      },
      // Inclure les champs nécessaires pour l'affichage sur la page des favoris
      include: { // Remplacer select par include pour récupérer tous les champs
        photos: true,
        categorie: true,
        article_theme: {
          include: {
            theme: true
          }
        }
      }
    });

    console.log(`Trouvé ${articles.length} articles pour les IDs demandés.`);

    const transformedArticles = articles.map(article => ({
      ...article,
      id: article.id.toString(),
      archivage_id: article.archivage_id?.toString() ?? null,
      categorie_id: article.categorie_id?.toString() ?? null,
      edition_papier_id: article.edition_papier_id?.toString() ?? null,
      
      // Convertir tous les champs Decimal en string
      prix_achat: article.prix_achat?.toString() ?? null,
      valeur_marche_min: article.valeur_marche_min?.toString() ?? null,
      prix_vente_internet: article.prix_vente_internet?.toString() ?? null,
      frais_postaux: article.frais_postaux?.toString() ?? null,
      prix_reserve: article.prix_reserve?.toString() ?? null,

      // Transformer les IDs et autres types dans les relations
      categorie: article.categorie ? {
          ...article.categorie,
          id: article.categorie.id.toString(),
      } : null,
      article_theme: article.article_theme.map(at => ({
          ...at,
          article_id: at.article_id.toString(),
          theme_id: at.theme_id.toString(),
          theme: {
              ...at.theme,
              id: at.theme.id.toString(),
          }
      })),
      photos: article.photos.map(p => ({
          ...p,
          id: p.id.toString(),
          article_id: p.article_id.toString(),
      })),
    }));

    return new Response(JSON.stringify(transformedArticles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des détails des articles:', error);
    return new Response(JSON.stringify({ message: 'Erreur interne du serveur lors de la récupération des articles' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // La déconnexion manuelle de prisma (`await prisma.$disconnect()`) a également été retirée
  // car elle est généralement gérée par l'instance partagée ou Next.js.
}