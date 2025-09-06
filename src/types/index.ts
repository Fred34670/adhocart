// src/types/index.ts

export interface User {
  id: string;
  nom?: string | null;
  email?: string | null;
  role?: string | null;
}

export interface Category {
  id: string;
  nom_categorie: string;
  description?: string | null;
  image_url?: string | null;
  image_entete_url?: string | null;
}

export interface Theme {
  id: string;
  libelle_theme: string;
}

export interface Archivage {
  id: string;
  nom_archivage: string;
}

export interface EditionPapier {
  id: string;
  libelle_edition_papier: string;
}

export interface Article {
  id: number;
  nom_auteur?: string | null;
  prenom_auteur?: string | null;
  titre?: string | null;
  illustrations?: string | null;
  editeur?: string | null;
  date_impression?: string | null;
  nombre_pages?: string | null;
  description?: string | null;
  prix_achat?: number | null;
  valeur_marche_min?: number | null;
  prix_vente_internet?: number | string | { toString(): string } | null;
  quantite_volume?: number | null;
  poids_net_kg?: string | null;
  frais_postaux?: number | null;
  date_creation?: Date | null;
  date_vente?: Date | null;
  nom_complet?: string | null;
  pseudo_titre?: string | null;
  collection?: string | null;
  justification?: string | null;
  date_EO?: string | null;
  estimation?: string | null;
  prix_reserve?: number | null;
  disponible?: 'Oui' | 'Non' | null;
  envoi_possible?: 'Oui' | 'Non' | null;
  archivage_id?: number | null;
  categorie_id?: number | null;
  edition_papier_id?: number | null;
  photos: {
    url_photo: string | null;
    a_la_une: string | null;
  }[];
  categorie: {
    nom_categorie: string;
    image_entete_url: string | null;
  } | null;
  article_theme: {
    theme: Theme;
  }[];
  artistOrAuthor?: string;
  year?: string;
  archivage?: {
    nom_archivage: string;
  };
}

export type PrismaArticle = Article;

/**
 * Interface pour un article dans le contexte de l'administration
 * Utilisée dans le composant ArticleList pour afficher la liste des articles
 */
export interface AdminArticle {
  id: string;
  titre: string | null;
  nom_auteur: string | null;
  prix_vente_internet: number | null;
  photos: { url_photo: string | null }[];
}

export interface ArticleFormData {
  id?: string;
  nom_auteur: string;
  prenom_auteur: string;
  titre: string;
  illustrations: string;
  editeur: string;
  date_impression: string;
  nombre_pages: string;
  description: string;
  prix_achat: string;
  valeur_marche_min: string;
  prix_vente_internet: string;
  quantite_volume: string;
  poids_net_kg: string;
  frais_postaux: string;
  pseudo_titre: string;
  collection: string;
  justification: string;
  date_EO: string;
  estimation: string;
  prix_reserve: string;
  disponible: 'Oui' | 'Non';
  envoi_possible: 'Oui' | 'Non';
  categorie_id: number;
  archivage_id: number;
  edition_papier_id: number;
  theme_ids: number[];
  date_creation: string;
  date_vente: string;
}

export interface CategorieOption {
  id: number;
  nom_categorie: string;
}

export interface ArchivageOption {
  id: number;
  nom_archivage: string | null;
}

export interface ThemeOption {
  id: number;
  libelle_theme: string | null;
}

export interface EditionPapierOption {
  id: number;
  libelle_edition_papier: string | null;
}

export interface AddItemFormProps {
  onAddItem: (name: string) => Promise<any>;
  label: string;
}

export interface FavoriteItem {
  article_id: number;
  article: {
    id: number;
    titre: string;
    nom_auteur: string;
    prix_vente_internet: number;
    photos: {
      url_photo: string;
    }[];
  };
}

export type SortOrder = 'alphabetical' | 'price_asc' | 'price_desc' | 'category' | 'theme' | 'type';