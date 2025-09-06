"use client";
import React from 'react';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import { PrismaArticle } from '@/interfaces';

// Fonction utilitaire pour récupérer les articles selon le terme de recherche
async function fetchArticles(searchTerm: string): Promise<PrismaArticle[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/articles?searchTerm=${encodeURIComponent(searchTerm)}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    return [];
  }
}

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState<PrismaArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParam = searchParams.get('query');
    const newSearchTerm = queryParam || '';
    setSearchTerm(newSearchTerm);
  }, [searchParams]);

  useEffect(() => {
    const getArticles = async () => {
      if (searchTerm) {
        setLoading(true);
        const fetchedArticles = await fetchArticles(searchTerm);
        setArticles(fetchedArticles);
        setLoading(false);
      } else {
        setArticles([]);
        setLoading(false);
      }
    };

    getArticles();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Résultats de recherche{searchTerm ? ` pour "${searchTerm}"` : ''}</h1>
        {loading ? (
          <p className="text-center text-gray-600">Chargement des articles...</p>
        ) : searchTerm ? (
          articles.length > 0 ? (
            <FeaturedArticles articles={articles} />
          ) : (
            <p className="text-center text-gray-600">Aucun article trouvé pour ce terme.</p>
          )
        ) : (
          <p className="text-center text-gray-600">Veuillez saisir un terme de recherche.</p>
        )}
      </div>
    </div>
  );
}