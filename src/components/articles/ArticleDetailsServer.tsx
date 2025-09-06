import { getArticleDetails, getCategoriesWithPrisma, getAllThemes } from '@/lib/data';
import ArticleDetailsClient from './ArticleDetailsClient';
import { Article as ClientArticle } from '@/interfaces';

interface ArticleDetailsServerProps {
  articleId: string;
}

export default async function ArticleDetailsServer({ articleId }: ArticleDetailsServerProps) {
  const [articleFromDb, categories, themes] = await Promise.all([
    getArticleDetails(Number(articleId)),
    getCategoriesWithPrisma(),
    getAllThemes(),
  ]);

  if (!articleFromDb) {
    return <p>Article non trouvé.</p>;
  }

  // Convertir l'objet de la base de données en un objet sérialisable pour le composant client
  const articleForClient: ClientArticle = {
    id: String(articleFromDb.id),
    title: articleFromDb.titre || 'Titre non disponible',
    description: articleFromDb.description || '',
    price: articleFromDb.prix_vente_internet ? String(articleFromDb.prix_vente_internet) : '0',
    category: articleFromDb.categorie ? { id: articleFromDb.categorie.id, name: articleFromDb.categorie.nom_categorie || '' } : undefined,
    artistOrAuthor: articleFromDb.nom_complet || `${articleFromDb.prenom_auteur || ''} ${articleFromDb.nom_auteur || ''}`.trim() || undefined,
    year: articleFromDb.date_impression || undefined,
    weight: articleFromDb.poids_net_kg || undefined,
    images: articleFromDb.photos.map(p => ({ id: p.id, url: p.url_photo || '/images/placeholder.png', libelle_photo: p.libelle_photo || '' })),
    url_photo: articleFromDb.photos?.find(p => p.a_la_une === 'Oui')?.url_photo || articleFromDb.photos?.[0]?.url_photo || '/images/placeholder.png',
    disponible: articleFromDb.disponible,
    envoi_possible: articleFromDb.envoi_possible,
    prevArticleId: articleFromDb.prevArticleId,
    nextArticleId: articleFromDb.nextArticleId,
    article_theme: articleFromDb.article_theme.map(at => ({
      theme: {
        id: at.theme.id,
        libelle_theme: at.theme.libelle_theme,
      }
    })),
    illustrations: articleFromDb.illustrations || undefined,
    editeur: articleFromDb.editeur || undefined,
    date_impression: articleFromDb.date_impression || undefined,
    nombre_pages: articleFromDb.nombre_pages || undefined,
    quantite_volume: articleFromDb.quantite_volume || undefined,
    frais_postaux: articleFromDb.frais_postaux ? String(articleFromDb.frais_postaux) : undefined,
    pseudo_titre: articleFromDb.pseudo_titre || undefined,
    collection: articleFromDb.collection || undefined,
    justification: articleFromDb.justification || undefined,
    edition_papier: articleFromDb.edition_papier || undefined,

    // Admin fields
    prix_achat: articleFromDb.prix_achat ? String(articleFromDb.prix_achat) : null,
    valeur_marche_min: articleFromDb.valeur_marche_min ? String(articleFromDb.valeur_marche_min) : null,
    prix_reserve: articleFromDb.prix_reserve ? String(articleFromDb.prix_reserve) : null,
    estimation: articleFromDb.estimation || undefined,
    date_creation: articleFromDb.date_creation,
    date_vente: articleFromDb.date_vente,
    date_EO: articleFromDb.date_EO || undefined,
  };

  return (
    <ArticleDetailsClient article={articleForClient} categories={categories} themes={themes} />
  );
}