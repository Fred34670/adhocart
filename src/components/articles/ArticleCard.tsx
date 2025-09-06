import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import FavoriteButton from '@/components/favoris/FavoriteButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PrismaArticle } from '@/interfaces'; // Utiliser PrismaArticle
import { formatPrice } from '@/lib/utils';

interface ArticleCardProps {
  article: PrismaArticle;
  source?: {
    type: 'collection' | 'category' | 'home' | 'search';
    name?: string;
    slug?: string;
  };
  showFavoriteButton?: boolean;
  enableHoverEffect?: boolean;
  showDescription?: boolean;
  showCategory?: boolean;
  showTheme?: boolean;
  showAuthor?: boolean;
  showEditor?: boolean;
  showAvailability?: boolean;
  showShipping?: boolean;
  showIllustrations?: boolean;
  showDateImpression?: boolean;
  showNombrePages?: boolean;
  showPrixAchat?: boolean;
  showValeurMarcheMin?: boolean;
  showQuantiteVolume?: boolean;
  showPoidsNetKg?: boolean;
  showFraisPostaux?: boolean;
  showDateCreation?: boolean;
  showDateVente?: boolean;
  showPseudoTitre?: boolean;
  showCollection?: boolean;
  showJustification?: boolean;
  showDateEO?: boolean;
  showEstimation?: boolean;
  showPrixReserve?: boolean;
  showArtistOrAuthor?: boolean;
  showYear?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  source,
  showFavoriteButton = true,
  enableHoverEffect = true,
  showDescription = false,
  showCategory = false,
  showTheme = false,
  showAuthor = false,
  showEditor = false,
  showAvailability = false,
  showShipping = false,
  showIllustrations = false,
  showDateImpression = false,
  showNombrePages = false,
  showPrixAchat = false,
  showValeurMarcheMin = false,
  showQuantiteVolume = false,
  showPoidsNetKg = false,
  showFraisPostaux = false,
  showDateCreation = false,
  showDateVente = false,
  showPseudoTitre = false,
  showCollection = false,
  showJustification = false,
  showDateEO = false,
  showEstimation = false,
  showPrixReserve = false,
  showArtistOrAuthor = false,
  showYear = false,
}) => {
  const { data: session } = useSession();
  // Logique pour trouver l'image "à la une"
  const aLaUnePhoto = article.photos?.find(p => p.a_la_une === 'Oui');
  const imageUrl = aLaUnePhoto?.url_photo || article.photos?.[0]?.url_photo || '/images/placeholder.png';

  const formattedArticlePrice = article?.prix_vente_internet !== undefined ? formatPrice(article.prix_vente_internet) : "Prix Indisponible";

  const buildHref = () => {
    if (!source) {
      return `/articles/${article.id}`;
    }
    const params = new URLSearchParams();
    if (source.type) {
      params.set('from', source.type);
    }
    if (source.name) {
      params.set('fromName', source.name);
    }
    if (source.slug) {
      params.set('fromSlug', source.slug);
    }
    return `/articles/${article.id}?${params.toString()}`;
  };
  const href = buildHref();
  return (
    <Link href={href}>
      <div className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col p-4 ${enableHoverEffect ? 'transform hover:scale-105 transition-transform duration-300 ease-in-out' : ''}`}>
        <div className="relative w-full aspect-[1/1]">
          <Image
            src={imageUrl}
            alt={article.titre || 'Article image'} // Utiliser article.titre
            fill
            className="object-cover transition-transform duration-300 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="px-4 py-2 flex flex-col">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 line-clamp-2 h-[3.2rem] font-serif" title={article.titre || 'Titre non disponible'}>{article.titre || 'Titre non disponible'}</h3>
            {showDescription && <p className="text-sm text-gray-700 mt-2 line-clamp-3 font-sans" title={article.description || 'Pas de description.'}><span className="font-semibold">Description :</span> {article.description || 'Pas de description.'}</p>}
            {showCategory && <p className="text-sm text-gray-700 font-sans"><span className="font-semibold">Catégorie :</span> {article.categorie?.nom_categorie || 'Catégorie'}</p>}
            {showTheme && <p className="text-sm text-gray-700 font-sans"><span className="font-semibold">Thème :</span> {article.article_theme?.[0]?.theme.libelle_theme }</p>}
            {showAuthor && <p className="text-sm text-gray-700 mt-2"><span className="font-semibold">Auteur :</span> {article.nom_complet || 'N/A'}</p>}
            {showEditor && <p className="text-sm text-gray-700"><span className="font-semibold">Éditeur :</span> {article.editeur || 'N/A'}</p>}
            {showAvailability && <p className="text-sm text-gray-700"><span className="font-semibold">Disponible :</span> {article.disponible}</p>}
            {showShipping && <p className="text-sm text-gray-700"><span className="font-semibold">Envoi possible :</span> {article.envoi_possible}</p>}
            {showIllustrations && <p className="text-sm text-gray-700"><span className="font-semibold">Illustrations :</span> {article.illustrations || 'N/A'}</p>}
            {showDateImpression && <p className="text-sm text-gray-700"><span className="font-semibold">Date d'impression :</span> {article.date_impression || 'N/A'}</p>}
            {showNombrePages && <p className="text-sm text-gray-700"><span className="font-semibold">Nombre de pages :</span> {article.nombre_pages || 'N/A'}</p>}
            {showPrixAchat && <p className="text-sm text-gray-700"><span className="font-semibold">Prix d'achat :</span> {formatPrice(article.prix_achat)}</p>}
            {showValeurMarcheMin && <p className="text-sm text-gray-700"><span className="font-semibold">Valeur marché min. :</span> {formatPrice(article.valeur_marche_min)}</p>}
            {showQuantiteVolume && <p className="text-sm text-gray-700"><span className="font-semibold">Quantité/Volume :</span> {article.quantite_volume || 'N/A'}</p>}
            {showPoidsNetKg && <p className="text-sm text-gray-700"><span className="font-semibold">Poids :</span> {article.poids_net_kg || 'N/A'}</p>}
            {showFraisPostaux && <p className="text-sm text-gray-700"><span className="font-semibold">Frais postaux :</span> {formatPrice(article.frais_postaux)}</p>}
            {showDateCreation && <p className="text-sm text-gray-700"><span className="font-semibold">Date de création :</span> {article.date_creation ? new Date(article.date_creation).toLocaleDateString() : 'N/A'}</p>}
            {showDateVente && <p className="text-sm text-gray-700"><span className="font-semibold">Date de vente :</span> {article.date_vente ? new Date(article.date_vente).toLocaleDateString() : 'N/A'}</p>}
            {showPseudoTitre && <p className="text-sm text-gray-700"><span className="font-semibold">Pseudo-titre :</span> {article.pseudo_titre || 'N/A'}</p>}
            {showCollection && <p className="text-sm text-gray-700"><span className="font-semibold">Collection :</span> {article.collection || 'N/A'}</p>}
            {showJustification && <p className="text-sm text-gray-700"><span className="font-semibold">Justification :</span> {article.justification || 'N/A'}</p>}
            {showDateEO && <p className="text-sm text-gray-700"><span className="font-semibold">Date E.O. :</span> {article.date_EO || 'N/A'}</p>}
            {showEstimation && <p className="text-sm text-gray-700"><span className="font-semibold">Estimation :</span> {article.estimation || 'N/A'}</p>}
            {showPrixReserve && <p className="text-sm text-gray-700"><span className="font-semibold">Prix de réserve :</span> {formatPrice(article.prix_reserve)}</p>}
            {showArtistOrAuthor && <p className="text-sm text-gray-700"><span className="font-semibold">Artiste/Auteur :</span> {article.artistOrAuthor || 'N/A'}</p>}
            {showYear && <p className="text-sm text-gray-700"><span className="font-semibold">Année :</span> {article.year || 'N/A'}</p>}
          </div>
        </div>

        <div className="p-4 mt-auto flex justify-between items-baseline">
          <div className="flex items-baseline gap-2">
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
          </div>
          {showFavoriteButton && session?.user?.role !== 'ADMIN' && <FavoriteButton articleId={article.id.toString()} />}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;