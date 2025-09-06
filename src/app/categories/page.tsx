// 'use client'; // Retiré car nous allons faire un fetch côté serveur

import React from 'react';

import Hero from '@/components/categories/Hero';
import { getCategoriesWithPrisma } from '@/lib/data'; // Importation de la nouvelle fonction
import Link from 'next/link';
import Image from 'next/image';

// Définir le type pour une catégorie récupérée de la base de données
type CategoryFromDb = {
  id: number;
  name: string;
  icon: string; // Assumant que mapCategoryToIcon dans data.ts fournit cela
  slug: string; // Assumant que la génération de slug dans data.ts fournit cela
};

export default async function CategoriesPage() { // Rendre le composant asynchrone
  const categories: CategoryFromDb[] = await getCategoriesWithPrisma();

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* <Header /> */}
      <Hero />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative py-4 mb-12">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-lg"></div>
            <h1 className="relative text-5xl font-playfair text-center text-gray-900 font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wide">Nos Catégories</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              // Le slug est maintenant fourni par getCategoriesWithPrisma
              const slug = category.slug;
              
              return (
                <Link href={`/categories/${slug}`} key={category.id}> // Utiliser category.id comme clé
                  <div className="relative h-80 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform shadow-md group">
                    <Image
                      src={category.name === 'Vieux papiers' ? '/images/Vieux_papiers.png' : `/images/${category.name.replace(/\s+/g, '_')}.png`}
                      alt={category.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <i className={`fas ${category.icon} text-5xl text-white mb-6 group-hover:scale-110 transition-transform`}></i>
                      <h3 className="text-3xl font-semibold text-white font-playfair">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}