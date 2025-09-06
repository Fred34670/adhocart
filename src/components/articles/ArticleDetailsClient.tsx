"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Article } from '@/interfaces';
import FavoriteButton from '@/components/favoris/FavoriteButton';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import ContactModal from '@/components/messaging/ContactModal';

interface Category {
  id: number;
  name: string;
}

interface Theme {
  id: number;
  libelle_theme: string | null;
}

interface ArticleDetailsClientProps {
  article: Article;
  categories: Category[];
  themes: Theme[];
}

export default function ArticleDetailsClient({ article, categories, themes }: ArticleDetailsClientProps) {
  const { data: session } = useSession();
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const fromName = searchParams.get('fromName');
  const fromSlug = searchParams.get('fromSlug');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const isNewArticle = article.id === '0';
  const [formData, setFormData] = useState({
    title: article.title,
    description: article.description,
    artistOrAuthor: article.artistOrAuthor,
    year: article.year,
    weight: article.weight,
    disponible: article.disponible || 'Non',
    envoi_possible: article.envoi_possible || 'Non',
    price: article.price,
    illustrations: article.illustrations,
    editeur: article.editeur,
    date_impression: article.date_impression,
    nombre_pages: article.nombre_pages,
    quantite_volume: article.quantite_volume,
    frais_postaux: article.frais_postaux,
    pseudo_titre: article.pseudo_titre,
    collection: article.collection,
    justification: article.justification,
    edition_papier: article.edition_papier?.libelle_edition_papier,
    // Admin fields
    prix_achat: article.prix_achat,
    valeur_marche_min: article.valeur_marche_min,
    prix_reserve: article.prix_reserve,
    estimation: article.estimation,
    date_creation: article.date_creation,
    date_vente: article.date_vente,
    date_EO: article.date_EO,
    categorie_id: article.category?.id,
    theme_ids: article.article_theme?.map(at => at.theme.id) || [],
  });
  const [images, setImages] = useState(article.images || []);
  const [newImages, setNewImages] = useState<File[]>([]);

  const router = useRouter();

  useEffect(() => {
    const isModified =
      formData.title !== article.title ||
      formData.description !== article.description ||
      formData.price !== article.price ||
      formData.artistOrAuthor !== article.artistOrAuthor ||
      formData.year !== article.year ||
      formData.weight !== article.weight ||
      formData.disponible !== article.disponible ||
      formData.envoi_possible !== article.envoi_possible ||
      formData.illustrations !== article.illustrations ||
      formData.editeur !== article.editeur ||
      formData.date_impression !== article.date_impression ||
      formData.nombre_pages !== article.nombre_pages ||
      formData.quantite_volume !== article.quantite_volume ||
      formData.frais_postaux !== article.frais_postaux ||
      formData.pseudo_titre !== article.pseudo_titre ||
      formData.collection !== article.collection ||
      formData.justification !== article.justification ||
      formData.edition_papier !== article.edition_papier?.libelle_edition_papier ||
      // Admin fields
      formData.prix_achat !== article.prix_achat ||
      formData.valeur_marche_min !== article.valeur_marche_min ||
      formData.prix_reserve !== article.prix_reserve ||
      formData.estimation !== article.estimation ||
      formData.date_creation !== article.date_creation ||
      formData.date_vente !== article.date_vente ||
      formData.date_EO !== article.date_EO ||
      formData.categorie_id !== article.category?.id ||
      JSON.stringify(formData.theme_ids) !== JSON.stringify(article.article_theme?.map(at => at.theme.id) || []);
    setIsDirty(isModified);
  }, [formData, article]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleThemeChange = (themeId: number) => {
    setFormData(prev => {
      const newThemeIds = prev.theme_ids.includes(themeId)
        ? prev.theme_ids.filter(id => id !== themeId)
        : [...prev.theme_ids, themeId];
      return { ...prev, theme_ids: newThemeIds };
    });
  };

  const allImageObjects = useMemo(() => {
    console.log("Données des images reçues:", images);
  const result: { id: number; url: string, libelle_photo: string }[] = [];
  if (images) {
      images.forEach(img => {
          if (img.url) {
              result.push({ id: img.id, url: img.url, libelle_photo: img.libelle_photo });
          }
      });
  }
  return result;
}, [images]);

  const handleImageClick = (index: number) => {
    setFullScreenImageIndex(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImageIndex(null);
  };

  const handleNextImage = () => {
    if (fullScreenImageIndex !== null) {
      setFullScreenImageIndex((prevIndex) => (prevIndex! + 1) % allImageObjects.length);
    }
  };

  const handlePrevImage = () => {
    if (fullScreenImageIndex !== null) {
      setFullScreenImageIndex((prevIndex) => (prevIndex! - 1 + allImageObjects.length) % allImageObjects.length);
    }
  };

  const handleDelete = async () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/admin/articles/${article.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          router.push('/admin/articles');
        } else {
          console.error("Failed to delete article");
        }
      } catch (error) {
        console.error("Error deleting article:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

   const handleDeleteImage = async (imageId: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
      try {
        const response = await fetch(`/api/admin/images/${imageId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setImages(prev => prev.filter(img => img.id !== imageId));
          router.refresh();
        } else {
          console.error("Failed to delete image");
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImages(Array.from(e.target.files));
    }
  };

  const handleUploadImages = async () => {
    if (newImages.length === 0) return;

    const uploadFormData = new FormData();
    newImages.forEach(file => {
      uploadFormData.append('files', file);
    });

    try {
      const response = await fetch(`/api/admin/articles/${article.id}/images`, {
        method: 'POST',
        body: uploadFormData,
      });

      if (response.ok) {
        setNewImages([]);
        router.refresh();
      } else {
        console.error("Failed to upload images");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

   const handleUpdate = async () => {
    setIsUpdating(true);
    const isNewArticle = article.id === '0'; // Compare with string '0' or a better check
    const method = isNewArticle ? 'POST' : 'PUT';
    const url = isNewArticle ? '/api/admin/articles' : `/api/admin/articles/${article.id}`;

    try {
      // Pour la création, on envoie toujours les données du formulaire.
      // Pour la mise à jour, on envoie seulement si le formulaire a été modifié.
      if (isNewArticle || isDirty) {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to save article data');
        }
        
        const savedArticle = await response.json();
        setIsDirty(false);

        // Si c'est un nouvel article et qu'il y a des images à uploader
        if (isNewArticle && newImages.length > 0) {
          // On doit utiliser l'ID de l'article nouvellement créé pour l'upload
          const newArticleId = savedArticle.id;
          const uploadFormData = new FormData();
          newImages.forEach(file => {
            uploadFormData.append('files', file);
          });
          await fetch(`/api/admin/articles/${newArticleId}/images`, {
            method: 'POST',
            body: uploadFormData,
          });
        } else if (!isNewArticle && newImages.length > 0) {
          await handleUploadImages();
        }
        
        if (isNewArticle) {
          router.push('/admin/articles'); // Rediriger après la création
        } else {
          router.refresh(); // Rafraîchir les données pour la mise à jour
        }
      } else if (newImages.length > 0) {
        // Gérer le cas où seul les images sont ajoutées sans modification du formulaire
        await handleUploadImages();
        router.refresh();
      }

    } catch (error) {
      console.error("Error saving article:", error);
      // Afficher l'erreur à l'utilisateur
    } finally {
      setIsUpdating(false);
    }
  };

   const formatPrice = (price: number) => {
     return new Intl.NumberFormat('fr-FR', {
       style: 'currency',
       currency: 'EUR',
     }).format(price);
   };

  const fullScreenImageUrl = fullScreenImageIndex !== null ? allImageObjects[fullScreenImageIndex]?.url : null;

  return (
    <>
      <div className="container mx-auto p-4 bg-white mt-16 mb-16">
        <nav aria-label="Fil d'Ariane" className="py-3 px-4 rounded-md mb-4">
          <ol className="flex flex-wrap items-center space-x-1 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Accueil
              </Link>
            </li>
            {from && fromName && (
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                <Link href={from === 'category' && fromSlug ? `/categories/${fromSlug}` : `/${from}`} className="text-gray-500 hover:text-blue-600">
                  {fromName}
                </Link>
              </li>
            )}
            {session?.user?.role === 'ADMIN' && (
                <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                    <Link href="/admin/articles" className="text-gray-500 hover:text-blue-600">
                        Gestion des Articles
                    </Link>
                </li>
            )}
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              <span className="font-semibold text-gray-800 truncate" title={article.title}>
                {article.title && article.title.length > 30 ? `${article.title.substring(0, 30)}...` : article.title}
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="relative p-4 bg-white rounded-lg shadow-md">
              <Image
                src={(article.url_photo || '/images/placeholder.png').replace(/([^:]\/)\/+/g, "$1")}
                alt={article.title || `Image de l'article`}
                width={600}
                height={400}
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => handleImageClick(0)}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {allImageObjects.map((image, index) => (
                <div key={`${image.id}-${index}`} className="relative w-full bg-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center p-1">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img
                      src={image.url.replace(/([^:]\/)\/+/g, "$1")}
                      alt={`Image ${index + 1} de ${article.title || 'l\'article'}`}
                      className="max-h-full max-w-full object-contain cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                  {session?.user?.role === 'ADMIN' && (
                    <>
                      <p className="text-xs text-center mt-1 w-full" title={image.libelle_photo}>{image.libelle_photo}</p>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 h-6 w-6"
                        onClick={() => handleDeleteImage(image.id)}
                      >
                        &times;
                      </Button>
                    </>
                  )}
                </div>
              ))}
            </div>
            {session?.user?.role === 'ADMIN' && (
              <div className="mt-4">
                <Input type="file" multiple onChange={handleImageFileChange} />
                {newImages.length > 0 &&
                  <Button onClick={handleUpdate} className="mt-2">
                    Téléverser {newImages.length} image(s)
                  </Button>
                }
              </div>
            )}
          </div>
          <div className="md:w-3/4">
            {session?.user?.role === 'ADMIN' ? (
              <Input name="title" value={formData.title || ''} onChange={handleInputChange} className="text-4xl font-bold mb-4" />
            ) : (
              <h2 className="text-4xl font-bold mb-4 text-black font-serif">{article.title}</h2>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex items-center">
                {session?.user?.role === 'ADMIN' ? (
                  <Input name="price" type="number" value={formData.price || ''} onChange={handleInputChange} className="text-lg font-bold text-indigo-600 ml-3 w-32" />
                ) : (
                  <div className="relative flex items-center z-10">
                    <TooltipProvider>
                      <Tooltip content={formatPrice(Number(article.price))}>
                        <span className="absolute -top-2 -right-5 bg-white border border-indigo-600 text-indigo-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold shadow-sm cursor-pointer" title="Information sur le prix">
                          i
                        </span>
                      </Tooltip>
                    </TooltipProvider>
                    <span className="text-xs font-bold text-indigo-600 ml-3">Prix</span>
                  </div>
                )}
              </div>
              {session?.user?.role !== 'ADMIN' && (
                <TooltipProvider>
                  <Tooltip content="Ajouter aux favoris">
                    <FavoriteButton articleId={article.id.toString()} />
                  </Tooltip>
                </TooltipProvider>
              )}
              {session?.user?.role !== 'ADMIN' && (
                <Button onClick={() => setIsContactModalOpen(true)} variant="secondary">
                  Poser une question
                </Button>
              )}
            </div>
            {session?.user?.role === 'ADMIN' ? (
              <Textarea name="description" value={formData.description || ''} onChange={handleInputChange} className="text-gray-700 leading-relaxed mb-6 w-full" rows={5} />
            ) : (
              <p className="text-black leading-relaxed mb-6 font-sans">{session?.user?.role === 'ADMIN' ? <Textarea name="description" value={formData.description || ''} onChange={handleInputChange} className="font-sans" /> : article.description}</p>
            )}

            <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-black font-serif">Détails de l'article</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Auteur:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="artistOrAuthor" value={formData.artistOrAuthor || ''} onChange={handleInputChange} className="font-sans" /> : article.artistOrAuthor}</span></div>
                <div className="p-2 bg-white rounded shadow-sm">
                  <strong className="text-black font-sans">Catégorie:</strong>
                  {session?.user?.role === 'ADMIN' ? (
                    <select name="categorie_id" value={formData.categorie_id || ''} onChange={handleInputChange} className="ml-2 p-1 border rounded text-gray-900">
                      <option value="">Sélectionnez une catégorie</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-black">{article.category?.name}</span>
                  )}
                </div>
                <div className="p-2 bg-white rounded shadow-sm flex items-center">
                  <strong className="mr-2 text-black font-sans">Thème:</strong>
                  <div className="flex-grow">
                    {session?.user?.role === 'ADMIN' ? (
                      <div className="border rounded p-2 bg-gray-50 h-24 overflow-y-auto w-full">
                        {themes.map(theme => (
                          <div key={theme.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`theme-${theme.id}`}
                              value={theme.id}
                              checked={formData.theme_ids.includes(theme.id)}
                              onChange={() => handleThemeChange(theme.id)}
                              className="mr-2"
                            />
                            <label htmlFor={`theme-${theme.id}`} className="text-gray-800">{theme.libelle_theme}</label>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="border rounded p-1 bg-gray-50 min-h-[6rem] w-full flex items-center">
                        <span className="text-black">{article.article_theme?.map((at) => at.theme.libelle_theme).join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Illustrations:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="illustrations" value={formData.illustrations || ''} onChange={handleInputChange} className="font-sans" /> : article.illustrations}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Editeur:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="editeur" value={formData.editeur || ''} onChange={handleInputChange} className="font-sans" /> : article.editeur}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Date d'impression:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="date_impression" value={formData.date_impression || ''} onChange={handleInputChange} className="font-sans" /> : article.date_impression}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Nombre de pages:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="nombre_pages" value={formData.nombre_pages || ''} onChange={handleInputChange} className="font-sans" /> : article.nombre_pages}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Prix:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="price" type="number" value={formData.price || ''} onChange={handleInputChange} className="font-sans" /> : formatPrice(Number(article.price))}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Quantité/Volume:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="quantite_volume" type="number" value={formData.quantite_volume || ''} onChange={handleInputChange} className="font-sans" /> : article.quantite_volume}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Frais postaux:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="frais_postaux" type="number" value={formData.frais_postaux || ''} onChange={handleInputChange} className="font-sans" /> : article.frais_postaux ? formatPrice(Number(article.frais_postaux)) : 'N/A'}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Poids (kg):</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="weight" value={formData.weight || ''} onChange={handleInputChange} className="font-sans" /> : article.weight}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Pseudo titre:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="pseudo_titre" value={formData.pseudo_titre || ''} onChange={handleInputChange} className="font-sans" /> : article.pseudo_titre}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Collection:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="collection" value={formData.collection || ''} onChange={handleInputChange} className="font-sans" /> : article.collection}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Justification:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Textarea name="justification" value={formData.justification || ''} onChange={handleInputChange} className="font-sans" /> : article.justification}</span></div>
                <div className="p-2 bg-white rounded shadow-sm font-sans"><strong className="text-black">Edition papier:</strong> <span className="text-black">{session?.user?.role === 'ADMIN' ? <Input name="edition_papier" value={formData.edition_papier || ''} onChange={handleInputChange} className="font-sans" /> : article.edition_papier?.libelle_edition_papier}</span></div>
                <div className="p-2 bg-white rounded shadow-sm flex items-center">
                  <strong className="text-black font-sans">Disponible:</strong>
                  {session?.user?.role === 'ADMIN' ? (
                    <select name="disponible" value={formData.disponible} onChange={handleInputChange} className="ml-2 p-1 border rounded text-gray-900">
                      <option value="Oui">Oui</option>
                      <option value="Non">Non</option>
                    </select>
                  ) : (
                    <span className={`ml-2 px-2 py-1 rounded-full text-white ${article.disponible === 'Oui' ? 'bg-green-500' : 'bg-red-500'}`}>{article.disponible === 'Oui' ? 'Oui' : 'Non'}</span>
                  )}
                </div>
                <div className="p-2 bg-white rounded shadow-sm flex items-center">
                  <strong className="text-black font-sans">Envoi possible:</strong>
                  {session?.user?.role === 'ADMIN' ? (
                    <select name="envoi_possible" value={formData.envoi_possible} onChange={handleInputChange} className="ml-2 p-1 border rounded text-gray-900">
                      <option value="Oui">Oui</option>
                      <option value="Non">Non</option>
                    </select>
                  ) : (
                    <span className={`ml-2 px-2 py-1 rounded-full text-white ${article.envoi_possible === 'Oui' ? 'bg-green-500' : 'bg-red-500'}`}>{article.envoi_possible === 'Oui' ? 'Oui' : 'Non'}</span>
                  )}
                </div>

                {/* Admin-only fields */}
                {session?.user?.role === 'ADMIN' && (
                  <>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Prix d'achat:</strong> <Input name="prix_achat" type="number" value={formData.prix_achat || ''} onChange={handleInputChange} /></div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Valeur marché min:</strong> <Input name="valeur_marche_min" type="number" value={formData.valeur_marche_min || ''} onChange={handleInputChange} /></div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Prix de réserve:</strong> <Input name="prix_reserve" type="number" value={formData.prix_reserve || ''} onChange={handleInputChange} /></div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Estimation:</strong> <Input name="estimation" value={formData.estimation || ''} onChange={handleInputChange} /></div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Date EO:</strong> <Input name="date_EO" value={formData.date_EO || ''} onChange={handleInputChange} /></div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Date Création:</strong> {article.date_creation ? new Date(article.date_creation).toLocaleDateString() : 'N/A'}</div>
                    <div className="p-2 bg-red-50 rounded shadow-sm border border-red-200"><strong className="text-red-800">Date Vente:</strong> {article.date_vente ? new Date(article.date_vente).toLocaleDateString() : 'N/A'}</div>
                  </>
                )}
              </div>
            </div>
            {session?.user?.role === 'ADMIN' && (
              <div className="mt-4 flex gap-4">
                <Button onClick={handleUpdate} disabled={isUpdating || (!isDirty && newImages.length === 0)}>
                  {isUpdating ? 'Sauvegarde...' : (isNewArticle ? 'Ajouter l\'article' : 'Valider les modifications')}
                </Button>
                {!isNewArticle && (
                  <Button onClick={handleDelete} disabled={isDeleting} variant="destructive">
                    {isDeleting ? 'Suppression...' : 'Supprimer'}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          {article.prevArticleId ? (
            <Link href={`/articles/${article.prevArticleId}`} passHref>
              <Button variant="secondary">&larr; Article Précédent</Button>
            </Link>
          ) : (
            <div />
          )}
          {article.nextArticleId ? (
            <Link href={`/articles/${article.nextArticleId}`} passHref>
              <Button variant="secondary">Article Suivant &rarr;</Button>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {fullScreenImageUrl && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseFullScreen}
          >
            <div className="relative flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
                onClick={handleCloseFullScreen}
              >
                &times;
              </button>
              
              {allImageObjects.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 rounded-full p-2 z-10"
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  >
                    &#10094;
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 rounded-full p-2 z-10"
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  >
                    &#10095;
                  </button>
                </>
              )}

              <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]" onClick={handleCloseFullScreen}>
                <Image
                  src={fullScreenImageUrl}
                  alt={article.title || 'Image de l\'article en plein écran'}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        article={{
          ...article,
          photos: article.images?.map(img => ({ ...img, url_photo: img.url, article_id: parseInt(article.id, 10), a_la_une: null })) || [],
          article_theme: article.article_theme || [],
        }}
      />
    </>
  );
}