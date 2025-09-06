'use client';

import React, { useEffect, useState } from 'react';

interface AcheteurStat {
  nom_acheteur: string;
  categorie: string;
  titre: string;
  prix_vente: number | null;
  frais_envoi: number | null;
}

type SortKey = keyof AcheteurStat;

const AcheteursPage = () => {
  const [acheteurs, setAcheteurs] = useState<AcheteurStat[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' }>({ key: 'nom_acheteur', direction: 'asc' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcheteurs = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          sortBy: sortConfig.key,
          sortOrder: sortConfig.direction,
        });
        const response = await fetch(`/api/admin/stats/acheteurs?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch acheteurs stats');
        }
        const data = await response.json();
        setAcheteurs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAcheteurs();
  }, [sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return <div className="p-4">Chargement des statistiques des acheteurs...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Erreur: {error}</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Statistiques des Acheteurs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('nom_acheteur')}>
                <div className="flex items-center">
                  Nom de l'acheteur
                  {sortConfig.key === 'nom_acheteur' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('categorie')}>
                <div className="flex items-center">
                  Catégorie
                  {sortConfig.key === 'categorie' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('titre')}>
                <div className="flex items-center">
                  Titre
                  {sortConfig.key === 'titre' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('prix_vente')}>
                <div className="flex items-center">
                  Prix de vente
                  {sortConfig.key === 'prix_vente' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => requestSort('frais_envoi')}>
                <div className="flex items-center">
                  Frais d'envoi
                  {sortConfig.key === 'frais_envoi' && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {acheteurs.map((acheteur, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{acheteur.nom_acheteur}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{acheteur.categorie}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{acheteur.titre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{acheteur.prix_vente ? `${acheteur.prix_vente} €` : 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{acheteur.frais_envoi ? `${acheteur.frais_envoi} €` : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcheteursPage;