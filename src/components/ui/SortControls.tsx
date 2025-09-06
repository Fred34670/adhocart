'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, Tag, Folder, ChevronsUpDown, RotateCcw } from 'lucide-react';

export type SortOrder =
  | 'alphabetical'
  | 'price_asc'
  | 'price_desc';

interface SortControlsProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  resetFilters: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedTheme: string | null;
  setSelectedTheme: (theme: string | null) => void;
  showCategoryFilter?: boolean; // Nouvelle prop
}

export const SortControls: React.FC<SortControlsProps> = ({
  sortOrder,
  setSortOrder,
  resetFilters,
  selectedCategory,
  setSelectedCategory,
  selectedTheme,
  setSelectedTheme,
  showCategoryFilter = true // Valeur par défaut
}) => {
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [themes, setThemes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch('/api/filters');
        const data = await response.json();
        setCategories(data.categories || []);
        setThemes(data.themes || []);
      } catch (error) {
        console.error('Failed to fetch filters:', error);
      }
    }
    fetchFilters();
  }, []);

  const handleReset = () => {
    resetFilters();
    setSelectedCategory(null);
    setSelectedTheme(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      
      <div className="flex items-center gap-2">
        <label className="text-sm font-semibold text-black">Trier par:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-black"
        >
          <option value="alphabetical">Alphabétique</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
        </select>
      </div>

      {showCategoryFilter && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-black">Catégorie:</label>
          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-black"
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      )}

      <div className="flex items-center gap-2">
        <label className="text-sm font-semibold text-black">Thème:</label>
        <select
          value={selectedTheme || ''}
          onChange={(e) => setSelectedTheme(e.target.value || null)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-black"
        >
          <option value="">Tous les thèmes</option>
          {themes.map(theme => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>
      </div>
      
      <Button
        variant="ghost"
        className="text-black hover:text-gray-900"
        onClick={handleReset}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Réinitialiser
      </Button>
    </div>
  );
};