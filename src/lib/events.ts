// src/lib/events.ts

/**
 * Dispatches a custom event to signal that the favorites list has been updated.
 * Components listening to this event can then re-fetch or re-calculate the favorite count.
 */
export const FAVORITES_UPDATE_EVENT = 'favoritesUpdate';

export const SHOW_MERGE_FAVORITES_MODAL_EVENT = 'showMergeFavoritesModal';

// Vous pourriez avoir d'autres événements ici
// export const ANOTHER_EVENT = 'anotherEvent';

// Fonction pour dispatcher l'événement (si elle existe)
export const dispatchFavoritesUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(FAVORITES_UPDATE_EVENT));
  }
};

interface MergeFavoritesEventDetail {
  localFavorites: { articleId: number }[];
  existingUserFavorites: { articleId: number }[];
}

export const dispatchShowMergeFavoritesModal = (detail: MergeFavoritesEventDetail) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(SHOW_MERGE_FAVORITES_MODAL_EVENT, { detail }));
  }
};

/**
 * Adds a listener for the custom 'favoritesUpdated' event.
 * @param callback The function to call when the event is dispatched.
 */
export const addFavoritesUpdateListener = (callback: () => void) => {
  if (typeof window !== 'undefined') {
    window.addEventListener(FAVORITES_UPDATE_EVENT, callback);
  }
};

/**
 * Removes a listener for the custom 'favoritesUpdated' event.
 * @param callback The function to remove.
 */
export const removeFavoritesUpdateListener = (callback: () => void) => {
  if (typeof window !== 'undefined') {
    window.removeEventListener(FAVORITES_UPDATE_EVENT, callback);
  }
};