import { type ClassValue, clsx } from 'clsx';
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction d'aide pour formater le prix
export const formatPrice = (price: string | number | { toString(): string } | null | undefined): string => {
  if (price === null || price === undefined || price === '') {
    return 'Non spécifié';
  }

  // Gère les objets Decimal en les convertissant en chaîne de caractères
  const priceAsString = typeof price === 'object' ? price.toString() : String(price);

  const numericPrice = Number(priceAsString);

  if (isNaN(numericPrice)) {
    return 'Prix invalide';
  }

  return `${numericPrice.toFixed(2)} €`;
};

// Fonction d'aide pour obtenir l'URL de l'image d'un article
export const getArticleImageUrl = (article: any, index: number): string => {
  if (index === 0 && article.url_photo) {
    return article.url_photo;
  } else if (article.images && article.images[index] && article.images[index].url) {
    return article.images[index].url;
  }
  return '/images/placeholder.png'; // Fallback image
};