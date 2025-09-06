'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronRight } from 'lucide-react';
import { dispatchFavoritesUpdate, FAVORITES_UPDATE_EVENT } from '@/lib/events';
import { PrismaArticle } from '@/types';
import { getLocalFavorites, setLocalFavorites } from '@/components/favoris/FavoriteButton';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import RemoveFavoriteModal from '@/components/favoris/RemoveFavoriteModal';

interface FavoriteItem {
  article_id: number;
  article: PrismaArticle;
}

const FavorisPage = () => {
  const { data: session, status } = useSession();
  const [favoris, setFavoris] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToRemove, setArticleToRemove] = useState<number | null>(null);

  const fetchFavoris = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (status === 'authenticated') {
        const response = await fetch('/api/favoris');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFavoris(data.favoris || []);
      } else if (status === 'unauthenticated') {
        const localFavoriteIds = getLocalFavorites();
        if (localFavoriteIds.length > 0) {
          const detailsResponse = await fetch('/api/articles/details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ articleIds: localFavoriteIds }),
          });

          if (!detailsResponse.ok) {
            throw new Error(`HTTP error fetching article details! status: ${detailsResponse.status}`);
          }
          const articles: PrismaArticle[] = await detailsResponse.json();
          const favoriteItems: FavoriteItem[] = articles.map((article) => ({
            article_id: article.id,
            article: article,
          }));
          setFavoris(favoriteItems);
        } else {
          setFavoris([]);
        }
      }
    } catch (err: any) {
      console.error('Erreur lors de la récupération des favoris:', err);
      setError(err.message || 'Impossible de charger les favoris.');
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    if (status !== 'loading') {
      fetchFavoris();
    }

    const handleFavoritesUpdate = () => {
      fetchFavoris();
    };

    window.addEventListener(FAVORITES_UPDATE_EVENT, handleFavoritesUpdate);

    return () => {
      window.removeEventListener(FAVORITES_UPDATE_EVENT, handleFavoritesUpdate);
    };
  }, [status, fetchFavoris]);

  const handleRemoveFavorite = (articleId: number) => {
    const dontAskAgain = localStorage.getItem('dontAskAgainRemoveFavorite') === 'true';

    if (dontAskAgain) {
      proceedWithRemoval(articleId);
    } else {
      setArticleToRemove(articleId);
      setIsModalOpen(true);
    }
  };

  const proceedWithRemoval = async (articleId: number) => {
    try {
      if (status === 'authenticated') {
        const response = await fetch(`/api/favoris/${articleId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to remove favorite from server');
        }
      } else {
        const localFavorites = getLocalFavorites();
        const updatedFavorites = localFavorites.filter(id => id !== String(articleId));
        setLocalFavorites(updatedFavorites);
      }

      setFavoris(prevFavoris => prevFavoris.filter(fav => fav.article_id !== articleId));
      dispatchFavoritesUpdate();

    } catch (error) {
      console.error('Error removing favorite:', error);
      alert("Une erreur est survenue lors de la suppression du favori.");
    }
  };

  const onConfirmRemove = () => {
    if (articleToRemove) {
      proceedWithRemoval(Number(articleToRemove));
    }
    setIsModalOpen(false);
    setArticleToRemove(null);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#F5F5DC]">
        <main className="container mx-auto p-4 text-center">Chargement...</main>
      </div>
    );
  }

  if (session?.user?.role === 'ADMIN') {
    return (
      <div className="min-h-screen bg-[#F5F5DC]">
        <main className="container mx-auto p-4 text-center">
          <h1 className="text-2xl font-bold">Accès non autorisé</h1>
          <p className="mt-4">La gestion des favoris n'est pas disponible pour les administrateurs.</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F5F5DC]">
        <main className="container mx-auto p-4 text-center text-red-500">Erreur: {error}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-12">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-xl">
        <nav aria-label="Fil d'Ariane" className="py-3 px-4 rounded-md mb-4">
          <ol className="flex flex-wrap items-center space-x-1 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Accueil
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              <span className="text-gray-500">Mes favoris</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Mes favoris</h1>
        {favoris.length === 0 ? (
          <div className="text-center py-10 text-gray-500">Vous n'avez aucun article en favori pour le moment.</div>
        ) : (
          <div>
            <table className="w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th scope="col" className="w-4/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
                  <th scope="col" className="w-3/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auteur</th>
                  <th scope="col" className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                  <th scope="col" className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {favoris.map(({ article }) => {
                  const imageUrl = article.photos?.find(p => p.a_la_une === 'Oui')?.url_photo || article.photos?.[0]?.url_photo || '/images/placeholder.png';
                  return (
                    <tr key={article.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Image src={imageUrl} alt={article.titre || ''} width={40} height={40} className="rounded-md object-cover h-10 w-10" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate" title={article.titre || ''}>
                        {article.titre && article.titre.length > 50 ? `${article.titre.substring(0, 50)}...` : article.titre}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate" title={article.nom_complet || ''}>{article.nom_complet || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatPrice(article.prix_vente_internet)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <Button asChild variant="secondary" size="sm" title="Afficher les détails de cet article">
                            <Link href={`/articles/${article.id}?from=favoris&fromName=Mes%20favoris`}>Voir</Link>
                          </Button>
                          <Button
                            onClick={() => handleRemoveFavorite(article.id)}
                            variant="secondary"
                            size="sm"
                            title="Retirer cet article de vos favoris"
                          >
                            Supprimer
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <RemoveFavoriteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={onConfirmRemove}
      />
    </div>
  );
};

export default FavorisPage;