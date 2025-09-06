import { getCategoriesWithPrisma } from './lib/data';
import { getArticlesWithPrisma } from './lib/data';

export type Choix = 'Oui' | 'Non'; // Define the Choix type

// Définition de l'interface pour les catégories
export interface PrismaCategorie {
    id: number;
    nom_categorie: string | null;
  }

// Définition de l'interface pour les articles
export interface PrismaArticle {
  id: string; // Changed to string
  isFavorite?: boolean;
  archivage_id?: string | null; // Changed to string
    categorie_id?: string | null; // Changed to string
    nom_auteur?: string | null;
    prenom_auteur?: string | null;
    titre?: string | null;
    illustrations?: string | null;
    editeur?: string | null;
    date_impression?: string | null;
    nombre_pages?: string | null;
    description?: string | null;
    prix_achat?: string | null; // Changed to string
    valeur_marche_min?: string | null; // Changed to string
    prix_vente_internet?: string | null; // Changed to string
    quantite_volume?: number | null;
    poids_net_kg?: string | null;
    frais_postaux?: string | null; // Changed to string
    date_creation?: Date | null;
    date_vente?: Date | null;
    nom_complet?: string | null;
    pseudo_titre?: string | null;
    collection?: string | null;
    justification?: string | null;
    date_EO?: string | null;
    estimation?: string | null;
    prix_reserve?: string | null; // Changed to string
    disponible?: 'Oui' | 'Non' | null;
    envoi_possible?: 'Oui' | 'Non' | null;
    artistOrAuthor?: string | null;
    year?: string | null;
    photos: PrismaPhotos[];
    categorie?: {
      nom_categorie: string | null;
    } | null;
    article_theme: {
      theme: {
        libelle_theme: string | null;
      };
    }[];
  }

  export interface PrismaPhotos {
    id: number; // ou le type approprié pour l'ID
    article_id: number; // ou le type approprié
    libelle_photo: string;
    url_photo: string | null; // Modifié de string à string | null
    a_la_une?: Choix | null; // Update the type of a_la_une
  }

  export interface PrismaFavoris {
    id: number; // ou le type approprié pour l'ID
    article_id: number; // ou le type approprié
    Utilisateur_id: string;
  }

  export interface Article {
    id: string;
    title: string;
    description: string;
    price: string;
    category?: { id: number; name: string };
    weight?: string;
    artistOrAuthor?: string;
    year?: string;
    disponible?: Choix | null;
    envoi_possible?: Choix | null;
    url_photo?: string;
    images?: { id: number; url: string; libelle_photo: string }[];
    prevArticleId?: number | null;
    nextArticleId?: number | null;
    article_theme?: {
      theme: {
        id: number;
        libelle_theme: string | null;
      };
    }[];
    illustrations?: string;
    editeur?: string;
    date_impression?: string;
    nombre_pages?: string;
    quantite_volume?: number;
    frais_postaux?: string | null;
    pseudo_titre?: string;
    collection?: string;
    justification?: string;
    edition_papier?: { libelle_edition_papier: string | null } | null;

    // Admin fields
    prix_achat?: string | null;
    valeur_marche_min?: string | null;
    prix_reserve?: string | null;
    estimation?: string | null;
    date_creation?: Date | null;
    date_vente?: Date | null;
    date_EO?: string | null;
  }

// Définition de l'interface pour les utilisateurs
export interface User {
  id: string; // Garder string pour la compatibilité avec next-auth, la conversion est faite côté serveur
  name: string | null; // Correspond à nom + prenom
  nom?: string | null;
  prenom?: string | null;
  email: string | null;
  adresse?: string | null;
  code_postal?: string | null;
  ville?: string | null;
  telephone?: string | null;
  role: string;
}
