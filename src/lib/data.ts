// src/lib/data.ts
import { prisma } from '@/lib/prisma'; // Assurez-vous que le chemin vers l'instance Prisma est correct
import { PrismaCategorie } from '@/interfaces'; // Importer PrismaCategorie depuis interfaces.ts

// Type pour les options de getArticlesWithPrisma
interface GetArticlesOptions {
  sortBy?: string; // Champ par lequel trier (ex: 'date_creation', 'prix_vente_internet')
  order?: 'asc' | 'desc'; // Ordre de tri
  limit?: number; // Nombre maximum d'articles à retourner
  categorieId?: number; // Filtrer par ID de catégorie
  // Ajoutez d'autres options de filtrage/tri si nécessaire
}

// Fonction pour récupérer les articles avec des options de tri et de filtrage
export async function getArticlesWithPrisma(options: GetArticlesOptions = {}) {
  const { sortBy = 'date_creation', order = 'desc', limit, categorieId } = options;

  try {
    const articlesFromDb = await prisma.article.findMany({
      where: {
        ...(categorieId && { categorie_id: categorieId }),
        disponible: 'Oui',
      },
      orderBy: {
        [sortBy]: order,
      },
      ...(limit && { take: limit }),
      include: {
        photos: {
          select: {
            id: true,
            article_id: true,
            libelle_photo: true,
            url_photo: true,
            a_la_une: true,
          }
        },
        categorie: {
          select: {
            nom_categorie: true,
          }
        },
        article_theme: {
          select: {
            theme: {
              select: {
                libelle_theme: true,
              }
            }
          }
        }
      },
    });

    const formattedArticles = articlesFromDb.map(article => {
      const mappedPhotos = article.photos.map(p => ({
        ...p,
        // Assurez-vous que a_la_une est booléen. Si ce n'est pas le cas depuis Prisma, convertissez ici.
        // Par exemple, si a_la_une est une chaîne 'true'/'false': p.a_la_une === 'true'
        // Ou si c'est 'Oui'/'Non': p.a_la_une === 'Oui'
        // Pour cet exemple, nous supposons que Prisma retourne déjà un booléen pour a_la_une.
        a_la_une: p.a_la_une,
      }));

      let primaryUrlPhoto: string | null | undefined = undefined; // Correction ici : ajouter | null
      if (mappedPhotos.length > 0) {
        const alaUnePhoto = mappedPhotos.find(p => p.a_la_une === "Oui");
        if (alaUnePhoto) {
          primaryUrlPhoto = alaUnePhoto.url_photo;
        } else if (mappedPhotos[0]) { // S'il n'y a pas de photo "a_la_une", prendre la première
          primaryUrlPhoto = mappedPhotos[0].url_photo;
        }
      }

      return {
        // Mappage explicite des champs pour correspondre à l'interface Article
        id: article.id,
        archivage_id: article.archivage_id,
        categorie_id: article.categorie_id,
        nom_auteur: article.nom_auteur,
        prenom_auteur: article.prenom_auteur,
        titre: article.titre || 'Titre non disponible',
        illustrations: article.illustrations,
        editeur: article.editeur,
        date_impression: article.date_impression,
        nombre_pages: article.nombre_pages,
        description: article.description || '',
        prix_achat: article.prix_achat ? Number(article.prix_achat) : null,
        valeur_marche_min: article.valeur_marche_min ? Number(article.valeur_marche_min) : null,
        prix_vente_internet: article.prix_vente_internet ? Number(article.prix_vente_internet) : null, // Convertir Decimal en number
        quantite_volume: article.quantite_volume,
        poids_net_kg: article.poids_net_kg,
        frais_postaux: article.frais_postaux ? Number(article.frais_postaux) : null,
        date_creation: article.date_creation,
        date_vente: article.date_vente,
        nom_complet: (article.prenom_auteur && article.nom_auteur) ? `${article.prenom_auteur} ${article.nom_auteur}` : 'Auteur inconnu',
        pseudo_titre: article.pseudo_titre,
        collection: article.collection,
        justification: article.justification,
        date_EO: article.date_EO,
        estimation: article.estimation,
        prix_reserve: article.prix_reserve ? Number(article.prix_reserve) : null,
        disponible: article.disponible as ('Oui' | 'Non' | null), // Cast si nécessaire
        envoi_possible: article.envoi_possible as ('Oui' | 'Non' | null), // Cast si nécessaire
        photos: mappedPhotos,
        url_photo: primaryUrlPhoto || '/images/placeholder.png', // Fallback au placeholder ici aussi
        categorie: article.categorie,
        article_theme: article.article_theme,
      };
    });

    return { articles: formattedArticles };
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return { articles: [], error: 'Impossible de récupérer les articles.' };
  }
}

// Fonction pour récupérer toutes les catégories
export async function getCategoriesWithPrisma() {
  try {
    const categories = await prisma.categorie.findMany({
      select: {
        id: true,
        nom_categorie: true,
      }
    });
    return categories.map((cat: PrismaCategorie) => { // Correction ici : Utilisation de PrismaCategorie
        const categoryName = cat.nom_categorie || ''; // Assurer que categoryName est une chaîne
        return {
          id: cat.id,
          name: categoryName,
          // Les icônes et slugs étaient dans home-data.ts. Ils devront être gérés autrement.
          // Pour l'instant, on peut les définir ici temporairement ou les gérer dans les composants.
          icon: mapCategoryToIcon(categoryName), // mapCategoryToIcon attend une chaîne
          slug: categoryName.toLowerCase().replace(/\s+/g, '-') // Génération basique de slug
        };
      });
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    return [];
  }
}

// Fonction utilitaire pour mapper le nom de la catégorie à une icône FontAwesome (exemple)
// Cette fonction devrait être étendue ou remplacée par une solution plus robuste (ex: stocker en DB)
function mapCategoryToIcon(categoryName: string): string {
  switch (categoryName.toLowerCase()) {
    case 'livres':
      return 'fa-book';
    case 'arts graphiques':
      return 'fa-palette';
    case 'vieux papier': // Corrigé de 'papiers anciens' à 'vieux papiers'
      return 'fa-scroll';
    case 'cartes postales':
      return 'fa-image'; // Exemple d'icône
    case 'affiches':
      return 'fa-file-image'; // Exemple d'icône
    case 'gravures':
      return 'fa-paint-brush'; // Exemple d'icône
    case 'photos':
      return 'fa-camera'; // Exemple d'icône
    default:
      return 'fa-tag'; // Icône par défaut
  }
}

export async function getAllThemes() {
  try {
    const themes = await prisma.theme.findMany({
      select: {
        id: true,
        libelle_theme: true,
      },
    });
    return themes;
  } catch (error) {
    console.error('Erreur lors de la récupération des thèmes:', error);
    return [];
  }
}

// Initialisation de Prisma Client (si ce n'est pas déjà fait ailleurs, par exemple dans src/lib/prisma.ts)
// Si vous avez un fichier séparé pour l'instance Prisma (ex: src/lib/prisma.ts), importez-le.
// Sinon, vous pouvez l'initialiser ici ou dans un fichier dédié.
// Exemple:
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// export default prisma;
// Assurez-vous que `prisma` est correctement initialisé et exporté/importé.
// Dans ce cas, je suppose que vous avez un `src/lib/prisma.ts` qui exporte l'instance Prisma.

export async function getArticleDetails(articleId: number) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        photos: {
          select: {
            id: true,
            article_id: true,
            libelle_photo: true,
            url_photo: true,
            a_la_une: true,
          },
        },
        categorie: {
          select: {
            id: true,
            nom_categorie: true,
          },
        },
        edition_papier: {
          select: {
            libelle_edition_papier: true,
          },
        },
        article_theme: {
          include: {
            theme: {
              select: {
                id: true,
                libelle_theme: true,
              },
            },
          },
        },
      },
    });

    if (!article) {
      return null;
    }

    const prevArticle = await prisma.article.findFirst({
      where: {
        id: {
          lt: articleId,
        },
        disponible: 'Oui',
      },
      orderBy: {
        id: 'desc',
      },
      select: {
        id: true,
      },
    });

    const nextArticle = await prisma.article.findFirst({
      where: {
        id: {
          gt: articleId,
        },
        disponible: 'Oui',
      },
      orderBy: {
        id: 'asc',
      },
      select: {
        id: true,
      },
    });

    return {
      ...article,
      prevArticleId: prevArticle?.id || null,
      nextArticleId: nextArticle?.id || null,
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article ${articleId}:`, error);
    return null;
  }
}