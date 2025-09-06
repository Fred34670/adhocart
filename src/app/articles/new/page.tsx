import ArticleDetailsClient from '@/components/articles/ArticleDetailsClient';
import { getCategoriesWithPrisma, getAllThemes } from '@/lib/data';
import { Article } from '@/interfaces';

export default async function NewArticlePage() {
  const [categories, themes] = await Promise.all([
    getCategoriesWithPrisma(),
    getAllThemes(),
  ]);

  // Créer un objet article vide avec des valeurs par défaut pour le formulaire
  const newArticle: Article = {
    id: '0', // Utiliser '0' ou un autre identifiant temporaire pour un nouvel article
    title: '',
    description: '',
    price: '0',
    disponible: 'Oui',
    envoi_possible: 'Oui',
    images: [],
    article_theme: [],
    // Initialiser tous les autres champs requis ou optionnels
    artistOrAuthor: '',
    year: '',
    weight: '',
    illustrations: '',
    editeur: '',
    date_impression: '',
    nombre_pages: '',
    quantite_volume: 0,
    frais_postaux: '0',
    pseudo_titre: '',
    collection: '',
    justification: '',
    prix_achat: null,
    valeur_marche_min: null,
    prix_reserve: null,
    estimation: '',
    date_creation: new Date(),
    date_vente: null,
    date_EO: '',
    url_photo: '/images/placeholder.png',
  };

  return (
    <ArticleDetailsClient article={newArticle} categories={categories} themes={themes} />
  );
}