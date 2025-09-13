// src/app/admin/stats/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface StatsData {
  totalUsers: number;
  totalArticles: number;
  totalCategories: number;
  articlesDisponibles: number;
  valeurTotaleDisponible: number;
}

const StatCard = ({ title, value, formatAsCurrency = false }: { title: string; value: number | string, formatAsCurrency?: boolean }) => {
    const displayValue = formatAsCurrency 
      ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(value))
      : value;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">{displayValue}</p>
      </div>
    );
};

export default function AdminStatsPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setStats(data);
      } catch (err: any) {
        console.error('Impossible de charger les statistiques:', err);
        setError(err.message || 'Une erreur est survenue.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Chargement des statistiques...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Statistiques du Site</h1>
        <div className="flex gap-4">
          <Link href="/admin/stats/ventes" className="px-4 py-2 bg-[#E2E8F0] text-[#1a202c] rounded-md hover:bg-[#CBD5E0] transition-colors">
            Voir les ventes
          </Link>
          <Link href="/admin/stats/acheteurs" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Voir les acheteurs
          </Link>
        </div>
      </div>
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Nombre d'utilisateurs" value={stats.totalUsers} />
          <StatCard title="Nombre total d'articles" value={stats.totalArticles} />
          <StatCard title="Nombre de catégories" value={stats.totalCategories} />
          <StatCard title="Articles en vente" value={stats.articlesDisponibles} />
          <StatCard title="Valeur totale du stock" value={stats.valeurTotaleDisponible} formatAsCurrency={true} />
        </div>
      )}
    </div>
  );
}