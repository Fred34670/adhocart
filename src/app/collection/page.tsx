'use client';

import React, { useState, useEffect } from 'react';
import { PrismaArticle } from '@/interfaces';
import ArticleCard from '@/components/articles/ArticleCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import PaginationControls from '@/components/ui/PaginationControls';
import { SortControls, SortOrder } from '@/components/ui/SortControls'; // Importer le nouveau composant

export default function CollectionPage() {
  const [articles, setArticles] = useState<PrismaArticle[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalArticles, setTotalArticles] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      setLoading(true);
      
      const apiUrl = new URL('/api/articles', window.location.origin);
      apiUrl.searchParams.append('sortBy', sortOrder);
      apiUrl.searchParams.append('page', currentPage.toString());
      apiUrl.searchParams.append('limit', itemsPerPage.toString());
      if (selectedCategory) {
        apiUrl.searchParams.append('category', selectedCategory);
      }
      if (selectedTheme) {
        apiUrl.searchParams.append('theme', selectedTheme);
      }

      try {
        const response = await fetch(apiUrl.toString());
        if (!response.ok) {
          console.error('Failed to fetch articles from API:', response.statusText);
        }
        const data = await response.json();
        
        setArticles(data.articles);
        setTotalArticles(data.totalCount);

      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, [sortOrder, currentPage, itemsPerPage, selectedCategory, selectedTheme]);

  const resetFilters = () => {
    setSortOrder('alphabetical');
    setCurrentPage(1);
    setSelectedCategory(null);
    setSelectedTheme(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen f5f5dc">
      <div className="container mx-auto p-4">
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center font-playfair text-gray-800">Notre Collection</h1>

            <div>
              <div className="mb-8">
                <SortControls
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  resetFilters={resetFilters}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                />
              </div>

              <div className="w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                  <div className="flex items-center gap-2 ml-auto">
                    <label htmlFor="itemsPerPage" className="text-sm font-medium text-gray-800 text-right">Articles par page:</label>
                    <select
                      id="itemsPerPage"
                      value={itemsPerPage}
                      onChange={(e) => {
                        setItemsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      className="block w-full max-w-[80px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-gray-800"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>

                {articles.length === 0 && !loading ? (
                  <p className="text-center text-gray-600 py-10">Aucun article à afficher pour le moment.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {articles.map(article => (
                      <ArticleCard key={article.id} article={article} showDescription={true} source={{ type: 'collection', name: 'Collection' }} />
                    ))}
                  </div>
                )}
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={Math.ceil(totalArticles / itemsPerPage)}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}