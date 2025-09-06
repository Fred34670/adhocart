// Page principale utilisant les composants modulaires

import React from 'react';

import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import Newsletter from '@/components/home/Newsletter';
import HomeFooter from '@/components/home/Footer';
import { getArticlesWithPrisma, getCategoriesWithPrisma } from '@/lib/data'; // Ajustez le chemin si nécessaire
import FavoriteButton from '@/components/favoris/FavoriteButton'; // Ajout de l'importation
import { Button } from "@/components/ui/button"; // Ajout de l'importation du bouton
import { PrismaArticle } from '@/interfaces'; // Correction ici : Importer PrismaArticle


// Le composant FeaturedArticles utilise directement l'interface Article importée depuis @/interfaces

export default async function Home() { // Rendre le composant asynchrone

  // Récupérer les 3 derniers articles créés (triés par date de création décroissante)
  const articlesResult = await getArticlesWithPrisma({ sortBy: 'date_creation', order: 'desc', limit: 3 });
  // Les articles sont maintenant directement conformes à l'interface Article
  const latestArticles: PrismaArticle[] = articlesResult.articles as PrismaArticle[];
  const articlesError = articlesResult.error;
  const categories = await getCategoriesWithPrisma();

  // Le bloc commenté pour FeaturedArticlesData n'est plus nécessaire

  if (articlesError) {
    console.error("Erreur lors de la récupération des articles:", articlesError);
    return (
      <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center justify-center">

        <main className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur de chargement des articles</h1>
          <p className="text-gray-700 mb-2">Nous n'avons pas pu charger les articles. Veuillez réessayer plus tard.</p>
          {typeof articlesError === 'string' && <p className="text-sm text-gray-500 mt-2">Détail: {articlesError}</p>}
        </main>
        {/* <HomeFooter /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">

      <Hero />
      <Categories categories={categories} />
      {/* latestArticles doit maintenant avoir la structure attendue par FeaturedArticles */}
      <FeaturedArticles articles={latestArticles} />
      {/* Le reste de la section commentée pour "Nos derniers articles" peut être supprimé ou adapté */}
      {/* <Newsletter /> */}
      {/* <HomeFooter /> */}
    </div>
  );
}

