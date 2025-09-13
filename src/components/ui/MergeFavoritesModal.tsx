// src/components/ui/MergeFavoritesModal.tsx
'use client';

import React from 'react';
import Modal from './Modal'; // Assurez-vous que le chemin est correct

interface MergeFavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  favoriteCount: number;
  localFavoritesToMerge: { articleId: number }[]; // Ajout pour la comparaison
  existingUserFavorites: { articleId: number }[]; // Ajout pour la comparaison
}

const MergeFavoritesModal: React.FC<MergeFavoritesModalProps> = ({ isOpen, onClose, onConfirm, favoriteCount, localFavoritesToMerge, existingUserFavorites }) => {
  const [duplicateCount, setDuplicateCount] = React.useState(0);

  React.useEffect(() => {
    if (isOpen && localFavoritesToMerge && existingUserFavorites) {
      const localIds = localFavoritesToMerge.map(fav => fav.articleId);
      const existingIds = existingUserFavorites.map(fav => fav.articleId);
      const duplicates = localIds.filter(id => existingIds.includes(id));
      setDuplicateCount(duplicates.length);
    }
  }, [isOpen, localFavoritesToMerge, existingUserFavorites]);
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fusionner les favoris ?">
      <div className="p-4 text-center">
        <p className="text-gray-700 mb-2">
          Vous avez {favoriteCount} favori(s) sauvegardé(s) localement. Voulez-vous les ajouter à votre compte ?
        </p>
        {duplicateCount > 0 && (
          <p className="text-sm text-orange-600 mb-4">
            ({duplicateCount} de ces favoris {duplicateCount === 1 ? 'fait' : 'font'} déjà partie de votre sélection en ligne.)
          </p>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="bg-[#E2E8F0] text-[#1a202c] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Oui, ajouter
          </button>
          <button
            onClick={onClose} // Simplement fermer la modale si l'utilisateur refuse
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Non, merci
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MergeFavoritesModal;