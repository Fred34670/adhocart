// src/components/ui/FavoriteButton.tsx
'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useFavoritesStore } from '@/lib/store';
import AuthModal from '@/components/auth/AuthModal';

interface FavoriteButtonProps {
  articleId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ articleId }) => {
  const { data: session, status } = useSession();
  const { favoriteIds, toggleFavorite } = useFavoritesStore();
  const isFavorite = favoriteIds.has(articleId);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(articleId, isFavorite);
  };

  if (status === 'loading') {
    return (
      <button className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-500 cursor-not-allowed" disabled>
        ...
      </button>
    );
  }

  if (status !== 'authenticated') {
    return <AuthModal />;
  }

  return (
    <button
      onClick={handleToggle}
      className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ${
        isFavorite
          ? 'bg-red-100 text-red-700 hover:bg-red-200'
          : 'bg-green-100 text-green-700 hover:bg-green-200'
      }`}
      title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      type="button"
    >
      {isFavorite ? '❤️ Retirer' : '🤍 Ajouter'}
    </button>
  );
};

export default FavoriteButton;