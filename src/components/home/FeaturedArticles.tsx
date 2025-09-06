'use client';

import { useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import FavoriteButton from '@/components/favoris/FavoriteButton';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip'; // Import du composant Tooltip
// src/lib/data.ts
// import <data value=""></data> from '@/lib/data'; // Cette ligne doit être supprimée
import { PrismaArticle } from '@/interfaces';
import { PrismaPhotos } from '@/interfaces'; // Assurez-vous que Photos est bien défini dans vos interfaces

// Removed the local Article type definition

type FeaturedArticlesProps = {
  articles: PrismaArticle[]; // Article est supposé avoir un champ optionnel photos: Photos[]
                       // et Photos est supposé avoir url_photo: string et a_la_une?: boolean
};

// Fonction d'aide pour obtenir l'URL de l'image
const getArticleImageUrl = (article: PrismaArticle): string => {
  // Vérifier si l'article a un tableau de photos et qu'il n'est pas vide
  if (article.photos && article.photos.length > 0) {
    // Essayer de trouver une photo marquée "a_la_une"
    const photoAlaUne = article.photos.find(p => p.a_la_une === "Oui");
    if (photoAlaUne && photoAlaUne.url_photo) {
      return photoAlaUne.url_photo;
    }
    // Sinon, prendre la première photo du tableau si elle a une URL valide
    if (article.photos[0] && article.photos[0].url_photo) {
      return article.photos[0].url_photo;
    }
  }
  // Si aucune photo n'est trouvée dans le tableau 'photos',
  // ou si le tableau 'photos' n'existe pas,

  // En dernier recours, retourner une image placeholder
  return '/images/placeholder.png';
};

import Link from 'next/link'; // Ajout de l'importation pour Link
import Image from 'next/image'; // Ajout de l'importation pour Image

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const { data: session } = useSession();

  const formatPrice = (price: any) => {
    if (price !== null && price !== undefined && !isNaN(Number(price))) {
      return `${Number(price).toFixed(2)} €`;
    }
    return 'Prix non disponible';
  };

  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos derniers articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} passHref>
              {/* Modification de rounded-lg à rounded-xl et shadow-md à shadow-lg */}
              <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col p-4 h-full">
                {/* Image de l'article - Zone améliorée avec plus de padding-top */}
                {/* Modification de p-4 à pt-6 px-4 pb-4 */}
                <div className="relative w-full aspect-[1/1]">
                  <Image
                    src={getArticleImageUrl(article)}
                    alt={article.titre || 'Image de l\'article'}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Contenu de la carte - Typographie améliorée */}
                <div className="px-4 py-2 flex flex-col flex-grow">
                  {/* Ajout de l'attribut title pour la bulle d'information */}
                  <h3
                    className="text-base font-semibold text-gray-900 mb-3 line-clamp-3 font-serif"
                    title={article.titre || 'Titre non disponible'}
                  >
                    {article.titre || 'Titre non disponible'}
                  </h3>
                  <div className="text-sm text-gray-600 mb-2 font-sans">
                    <span className="font-semibold">Catégorie:</span> {article.categorie?.nom_categorie || 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600 mb-2 font-sans">
                    <span className="font-semibold">Thème:</span> {article.article_theme?.[0]?.theme.libelle_theme || 'N/A'}
                  </div>
                  {article.description && (
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3 font-sans">{article.description}</p>
                  )}
                </div>

                {/* Prix et icône favoris alignés en bas - Style du prix amélioré */}
                <div className="p-4 mt-auto flex justify-between items-baseline">
                  {session?.user?.role === 'ADMIN' ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-gray-800" title="Prix de vente">
                        {formatPrice(article.prix_vente_internet)}
                      </span>
                      <span className="text-xs text-gray-500" title="Prix d'achat">
                        (Achat: {formatPrice(article.prix_achat)})
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex items-center">
                      <TooltipProvider>
                        <Tooltip content={formatPrice(article.prix_vente_internet)}>
                          <span className="absolute -top-2 -right-5 bg-white border border-indigo-600 text-indigo-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold shadow-sm cursor-pointer" title="Information sur le prix">
                            i
                          </span>
                        </Tooltip>
                      </TooltipProvider>
                      <span className="text-xs font-bold text-indigo-600 ml-3">Prix</span>
                    </div>
                  )}
                  {session?.user?.role !== 'ADMIN' && <FavoriteButton articleId={article.id.toString()} />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}