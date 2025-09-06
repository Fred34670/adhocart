'use client';

import React, { useEffect, useState } from 'react';

interface VenteStat {
  acheteur: string;
  article: string;
  prix: number | null;
  date_vente: string | null;
}

type SortKey = keyof VenteStat;

const VentesPage = () => {
  const [ventes, setVentes] = useState<VenteStat[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' }>({ key: 'date_vente', direction: 'desc' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVentes = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          sortBy: sortConfig.key,
          sortOrder: sortConfig.direction,
        });
        const response = await fetch(`/api/admin/stats/ventes?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch ventes stats');
        }
        const data = await response.json();
        setVentes(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVentes();
  }, [sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return <div className="p-4">Chargement des statistiques des ventes...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Erreur: {error}</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Statistiques des Ventes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('acheteur')}>
                <div className="flex items-center">
                  Acheteur
                  {sortConfig.key === 'acheteur' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('article')}>
                <div className="flex items-center">
                  Article
                  {sortConfig.key === 'article' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('prix')}>
                <div className="flex items-center">
                  Prix
                  {sortConfig.key === 'prix' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('date_vente')}>
                <div className="flex items-center">
                  Date de vente
                  {sortConfig.key === 'date_vente' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ventes.map((vente, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vente.acheteur}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vente.article}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vente.prix ? `${vente.prix} €` : 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vente.date_vente ? new Date(vente.date_vente).toLocaleDateString('fr-FR') : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VentesPage;