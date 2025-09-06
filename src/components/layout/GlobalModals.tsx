'use client';

import { useState, useEffect } from 'react';
import MergeFavoritesModal from '@/components/ui/MergeFavoritesModal';
import { useFavoritesStore } from '@/lib/store';
import { SHOW_MERGE_FAVORITES_MODAL_EVENT } from '@/lib/events';
import { FAVORITES_UPDATE_EVENT } from '@/lib/events';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface MergeFavoritesData {
  localFavorites: { articleId: number }[];
  existingUserFavorites: { articleId: number }[];
}

const GlobalModals = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [mergeFavoritesData, setMergeFavoritesData] = useState<MergeFavoritesData | null>(null);

  useEffect(() => {
    const handleShowMergeModal = (event: Event) => {
      const customEvent = event as CustomEvent<MergeFavoritesData>;
      setMergeFavoritesData(customEvent.detail);
    };

    window.addEventListener(SHOW_MERGE_FAVORITES_MODAL_EVENT, handleShowMergeModal);

    return () => {
      window.removeEventListener(SHOW_MERGE_FAVORITES_MODAL_EVENT, handleShowMergeModal);
    };
  }, []);

  const handleConfirmMerge = async () => {
    if (mergeFavoritesData?.localFavorites && mergeFavoritesData.localFavorites.length > 0) {
      await fetch('/api/favoris/merge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleIds: mergeFavoritesData.localFavorites.map(fav => fav.articleId) }),
      });
    }
    localStorage.removeItem('guestFavorites');
    window.dispatchEvent(new CustomEvent(FAVORITES_UPDATE_EVENT));
    setMergeFavoritesData(null);
    
    // La redirection se fait déjà dans le signin form, mais on peut la forcer ici si besoin
    // ou simplement rafraichir la page. Pour l'instant on ne fait rien pour éviter double redirection.
  };

  const handleCloseMergeModal = () => {
    // Vider les favoris locaux pour ne pas redemander la fusion
    localStorage.removeItem('guestFavorites');
    
    // Forcer la mise à jour de l'état pour refléter uniquement les favoris du serveur
    // en vidant d'abord le store, puis en déclenchant une mise à jour.
    useFavoritesStore.getState().setFavorites([]);
    window.dispatchEvent(new CustomEvent(FAVORITES_UPDATE_EVENT));

    setMergeFavoritesData(null);
  };

  return (
    <>
      {mergeFavoritesData && (
        <MergeFavoritesModal
          isOpen={!!mergeFavoritesData}
          onClose={handleCloseMergeModal}
          onConfirm={handleConfirmMerge}
          favoriteCount={mergeFavoritesData.localFavorites.length}
          localFavoritesToMerge={mergeFavoritesData.localFavorites}
          existingUserFavorites={mergeFavoritesData.existingUserFavorites}
        />
      )}
    </>
  );
};

export default GlobalModals;