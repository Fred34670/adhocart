import { create } from 'zustand';

interface FavoritesState {
  favoriteIds: Set<number>;
  fetchFavorites: (userId: string) => Promise<void>;
  toggleFavorite: (articleId: number, isCurrentlyFavorite: boolean) => Promise<void>;
  setFavorites: (ids: number[]) => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favoriteIds: new Set(),

  setFavorites: (ids) => {
    set({ favoriteIds: new Set(ids) });
  },

  fetchFavorites: async (userId) => {
    if (!userId) {
      // Gérer les favoris des invités depuis le localStorage
      const localFavorites = JSON.parse(localStorage.getItem('guestFavorites') || '[]');
      const idsAsNumbers = localFavorites.map((id: string) => parseInt(id, 10));
      set({ favoriteIds: new Set(idsAsNumbers) });
      return;
    }
    try {
      const response = await fetch('/api/favoris');
      if (response.ok) {
        const data = await response.json();
        const ids = data.favoris.map((fav: any) => parseInt(fav.article_id, 10));
        set({ favoriteIds: new Set(ids) });
      } else {
        console.error('Failed to fetch favorites');
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  },

  toggleFavorite: async (articleId, isCurrentlyFavorite) => {
    const originalFavorites = new Set(get().favoriteIds);
    
    // Mise à jour optimiste
    const newFavorites = new Set(originalFavorites);
    if (isCurrentlyFavorite) {
      newFavorites.delete(articleId);
    } else {
      newFavorites.add(articleId);
    }
    set({ favoriteIds: newFavorites });

    // Appel API
    try {
      const url = isCurrentlyFavorite ? `/api/favoris/${articleId}` : '/api/favoris';
      const method = isCurrentlyFavorite ? 'DELETE' : 'POST';
      const body = isCurrentlyFavorite ? null : JSON.stringify({ articleId });

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!response.ok) {
        // Si l'appel échoue, revenir à l'état précédent
        set({ favoriteIds: originalFavorites });
        const errorData = await response.json();
        console.error('Failed to toggle favorite:', errorData.message);
        // Optionnel: afficher une notification à l'utilisateur
      }
    } catch (error) {
      // Si l'appel échoue, revenir à l'état précédent
      set({ favoriteIds: originalFavorites });
      console.error('Error toggling favorite:', error);
    }
  },
}));