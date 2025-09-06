'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import PaginationControls from '@/components/ui/PaginationControls';
import { AdminArticle } from '@/types';

/**
 * Composant pour afficher la liste des articles dans l'interface d'administration
 * Gère le filtrage, la pagination et les opérations CRUD sur les articles
 */
export default function ArticleList() {
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<AdminArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Filtrer les articles en fonction du terme de recherche
   * Le filtre s'applique sur le titre, l'auteur et le prix de vente
   */
  useEffect(() => {
    const filtered = articles.filter(article => {
      const searchLower = searchTerm.toLowerCase();
      return (
        (article.titre?.toLowerCase().includes(searchLower) ?? false) ||
        (article.nom_auteur?.toLowerCase().includes(searchLower) ?? false) ||
        (article.prix_vente_internet?.toString().includes(searchLower) ?? false)
      );
    });
    setFilteredArticles(filtered);
    setCurrentPage(1); // Reset to first page on new search
  }, [searchTerm, articles]);

  /**
   * Calculer les articles à afficher pour la page actuelle
   * Utilise la liste filtrée si un terme de recherche est présent, sinon la liste complète
   */
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentArticles = (searchTerm ? filteredArticles : articles).slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil((searchTerm ? filteredArticles : articles).length / itemsPerPage);

  /**
   * Charger la liste des articles depuis l'API
   * Cette fonction est appelée une seule fois au montage du composant
   */
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/admin/articles'); // Appel à la nouvelle route API
        if (!response.ok) {
          // Gérer les erreurs HTTP (ex: 401 Unauthorized, 403 Forbidden, 500 Internal Server Error)
          const errorData = await response.json();
          throw new Error(errorData.message || 'Erreur lors du chargement des articles');
        }
        const data: AdminArticle[] = await response.json();
        setArticles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois au montage

  /**
   * Fonction pour supprimer un article
   * Affiche une confirmation avant la suppression
   * Met à jour la liste des articles après la suppression
   */
  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    setDeleteLoading(id);
    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la suppression de l\'article');
      }

      // Mettre à jour la liste des articles en supprimant l'article supprimé
      setArticles(articles.filter(article => article.id !== id));
    } catch (err: any) {
      setError(err.message);
      alert(`Erreur: ${err.message}`);
    } finally {
      setDeleteLoading(null);
    }
  };

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  if (error) {
    return <div className="text-red-500">Erreur : {error}</div>;
  }

  if (articles.length === 0) {
    return <p>Aucun article trouvé.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Link href="/articles/new" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ajouter un nouvel article
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800">Articles par page :</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
            className="p-2 border rounded text-gray-800"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher par titre, auteur ou prix..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Photo
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xs">
              Titre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Auteur
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prix Vente
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentArticles.map((article) => (
            <tr key={article.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {article.photos && article.photos.length > 0 && article.photos[0].url_photo ? (
                  <img src={article.photos[0].url_photo} alt={article.titre || 'Photo de l\'article'} className="h-12 w-12 object-cover rounded-md" />
                ) : (
                  <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
                    N/A
                  </div>
                )}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={article.titre || ''}>
                <Link href={`/articles/${article.id}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {article.titre}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {article.nom_auteur}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {article.prix_vente_internet ? `${Number(article.prix_vente_internet).toFixed(2)} €` : 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/articles/${article.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                  Modifier/Voir
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-red-600 hover:text-red-900"
                  disabled={deleteLoading === article.id}
                >
                  {deleteLoading === article.id ? 'Suppression...' : 'Supprimer'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}