// src/components/favoris/FavoriteButton.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Heart } from 'lucide-react'; // Utilisation d'une icône pour le bouton
import { dispatchFavoritesUpdate, FAVORITES_UPDATE_EVENT } from '@/lib/events'; // Import the event dispatcher

interface FavoriteButtonProps {
  articleId: string;
  className?: string;
}

// Fonction utilitaire pour lire les favoris depuis localStorage
export const getLocalFavorites = (): string[] => {
  if (typeof window !== 'undefined') {
    const localFavorites = localStorage.getItem('guestFavorites');
    try {
      const favoritesArray = localFavorites ? JSON.parse(localFavorites) : [];
      // Reconvertir les ID de chaîne en nombres
      return Array.isArray(favoritesArray) ? favoritesArray.map(String) : [];
    } catch (e) {
      console.error("Failed to parse local favorites from localStorage", e);
      return [];
    }
  }
  return [];
};

// Fonction utilitaire pour définir les favoris dans localStorage
export const setLocalFavorites = (favorites: (string | number | bigint)[]) => {
  if (typeof window !== 'undefined') {
    // Convertir tous les IDs en chaînes pour gérer les BigInts, qui ne peuvent pas être sérialisés directement
    const favoritesAsString = favorites.map(id => id.toString());
    localStorage.setItem('guestFavorites', JSON.stringify(favoritesAsString));
    dispatchFavoritesUpdate(); // Dispatch event after update
  }
};


const FavoriteButton: React.FC<FavoriteButtonProps> = ({ articleId, className }) => {
  const { data: session, status } = useSession();
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Pour gérer l'état de chargement pendant les appels API

  // Fonction pour vérifier si l'article est déjà en favori
  const checkIfFavorited = useCallback(async () => {
    setIsLoading(true);
    try {
      if (status === 'authenticated' && session?.user?.id) {
        // Logique pour utilisateur authentifié (vérification via API)
        // Idéalement, nous aurions un endpoint pour vérifier un seul favori
        // ou nous filtrons la liste complète des favoris.
        // Pour cet exemple, nous supposons que la liste des favoris est petite
        // ou qu'un endpoint spécifique existe (non implémenté ici pour la vérification simple).
        // Une meilleure approche serait d'avoir un état global des favoris ou un hook dédié.
        const response = await fetch('/api/favoris', { cache: 'no-store' });
        if (response.ok) {
          const data = await response.json();
          const userFavoris = data.favoris || [];
          setIsFavorited(userFavoris.some((fav: any) => fav.article_id.toString() === articleId));
        } else {
          console.error('Failed to fetch user favorites for check');
          setIsFavorited(false); // Assumer non favori en cas d'erreur
        }
      } else if (status === 'unauthenticated') {
        // Logique pour utilisateur non authentifié (vérification via localStorage)
        const localFavoriteIds = getLocalFavorites();
        setIsFavorited(localFavoriteIds.includes(articleId.toString()));
      }
    } catch (error) {
      console.error('Error checking favorite status:', error);
      setIsFavorited(false); // Assumer non favori en cas d'erreur
    } finally {
      setIsLoading(false);
    }
  }, [articleId, session?.user?.id, status]); // Dépend de articleId, session et status

  useEffect(() => {
    // Exécuter la vérification lorsque le statut d'authentification change ou au montage
    if (status !== 'loading') { // Attendre que le statut soit déterminé
       checkIfFavorited();
    }
  }, [status, checkIfFavorited]); // Dépend de status et checkIfFavorited

  // Ajouter un écouteur d'événement pour les changements de localStorage
  // Cela permet de mettre à jour l'état si un favori est ajouté/retiré sur une autre page
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'guestFavorites' && status === 'unauthenticated') {
        console.log('localStorage guestFavorites changed, updating favorite status...');
        const localFavoriteIds = getLocalFavorites();
        setIsFavorited(localFavoriteIds.includes(articleId.toString()));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [articleId, status]); // Dépend de articleId et status

  // Écouter les mises à jour globales des favoris pour rafraîchir l'état
  useEffect(() => {
    const handleUpdate = () => {
      // Pas besoin de console.log en production, mais utile pour le débogage
      // console.log(`FavoriteButton for article ${articleId} received update event. Re-checking status.`);
      checkIfFavorited();
    };

    const eventName = FAVORITES_UPDATE_EVENT;
    window.addEventListener(eventName, handleUpdate);

    return () => {
      window.removeEventListener(eventName, handleUpdate);
    };
  }, [articleId, checkIfFavorited]); // S'assurer d'inclure les dépendances

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Empêcher la navigation si le bouton est dans un lien
    e.stopPropagation(); // Empêcher la propagation de l'événement

    setIsLoading(true);

    if (status === 'authenticated' && session?.user?.id) {
      // Logique pour utilisateur authentifié (API)
      const method = isFavorited ? 'DELETE' : 'POST';
      const url = isFavorited ? `/api/favoris/${articleId}` : '/api/favoris';
      const body = method === 'POST' ? JSON.stringify({ articleId }) : null;

      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });

        if (response.ok) {
          setIsFavorited(!isFavorited);
          dispatchFavoritesUpdate(); // Dispatch event after successful API call
          // Optionnel: afficher une notification de succès
        } else {
          const errorData = await response.json();
          console.error('Failed to toggle favorite (authenticated):', errorData.message);
          alert(`Erreur: ${errorData.message || 'Impossible de modifier le favori.'}`);
        }
      } catch (error) {
        console.error('Error toggling favorite (authenticated):', error);
        alert('Une erreur est survenue.');
      } finally {
        setIsLoading(false);
      }
    } else if (status === 'unauthenticated') {
      // Logique pour utilisateur non authentifié (localStorage)
      const localFavoriteIds = getLocalFavorites();
      let updatedFavorites: (string | number | bigint)[];

      if (isFavorited) {
        // Retirer de localStorage
        updatedFavorites = localFavoriteIds.filter((id: string) => id !== articleId);
        console.log(`Removed article ${articleId} from local favorites.`);
      } else {
        // Ajouter à localStorage (éviter les doublons)
        if (!localFavoriteIds.includes(articleId.toString())) {
           updatedFavorites = [...localFavoriteIds, articleId];
           console.log(`Added article ${articleId} to local favorites.`);
        } else {
           updatedFavorites = localFavoriteIds; // Déjà présent
           console.log(`Article ${articleId} already in local favorites.`);
        }
      }

      setLocalFavorites(updatedFavorites); // This now dispatches the event
      setIsFavorited(!isFavorited); // Basculer l'état local
      setIsLoading(false); // Pas d'appel API, donc pas de chargement réseau
      // Optionnel: afficher une notification de succès local
    } else {
       // Statut 'loading' - ne rien faire ou afficher un message
       console.log('Cannot toggle favorite while authentication status is loading.');
       setIsLoading(false);
    }
  };

  // Le bouton est désactivé uniquement si le statut est 'loading'
  // ou si une action est en cours (isLoading)
  const isDisabled = isLoading || status === 'loading';

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isDisabled}
      className={`p-2 rounded-full transition-colors duration-200 ease-in-out ${className} ${
        isDisabled
          ? 'bg-gray-200 cursor-not-allowed'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      aria-label={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      title={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
    </button>
  );
};

export default FavoriteButton;