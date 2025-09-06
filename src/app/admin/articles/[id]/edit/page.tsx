// src/app/admin/articles/[id]/edit/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArticleFormData, CategorieOption, ArchivageOption, ThemeOption, EditionPapierOption, AddItemFormProps } from '@/types';
import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const AddItemForm: FC<AddItemFormProps> = ({ onAddItem, label }) => {
  const [newItemName, setNewItemName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');

  const handleAddNew = async () => {
    if (!newItemName.trim()) {
      setError(`Le ${label.toLowerCase()} ne peut pas être vide.`);
      return;
    }
    setError('');
    setIsAdding(true);
    try {
      await onAddItem(newItemName);
      setNewItemName('');
    } catch (e) {
      setError(`Erreur lors de l'ajout.`);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="mt-2 flex items-center gap-2">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder={`Nouveau ${label.toLowerCase()}`}
        className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="button"
        onClick={handleAddNew}
        disabled={isAdding}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {isAdding ? '...' : '+'}
      </button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const articleId = params.id;

  const [formData, setFormData] = useState<ArticleFormData>({
    id: '',
    archivage_id: 0,
    categorie_id: 0,
    nom_auteur: '',
    prenom_auteur: '',
    titre: '',
    illustrations: '',
    editeur: '',
    date_impression: '',
    nombre_pages: '',
    description: '',
    prix_achat: '',
    valeur_marche_min: '',
    prix_vente_internet: '',
    quantite_volume: '',
    poids_net_kg: '',
    frais_postaux: '',
    pseudo_titre: '',
    collection: '',
    justification: '',
    date_EO: '',
    estimation: '',
    prix_reserve: '',
    disponible: 'Oui',
    envoi_possible: 'Oui',
    theme_ids: [],
    date_creation: '',
    date_vente: '',
    edition_papier_id: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategorieOption[]>([]);
  const [archivages, setArchivages] = useState<ArchivageOption[]>([]);
  const [themes, setThemes] = useState<ThemeOption[]>([]);
  const [editionsPapier, setEditionsPapier] = useState<EditionPapierOption[]>([]);
  const [showAddForms, setShowAddForms] = useState({ categorie: false, archivage: false, theme: false, edition_papier: false });

  useEffect(() => {
    async function fetchData() {
      if (!articleId) return;
      setIsLoading(true);
      setError(null);

      try {
        const [articleRes, catRes, arcRes, thmRes, edpRes] = await Promise.all([
          fetch(`/api/admin/articles/${articleId}`),
          fetch('/api/admin/categories'),
          fetch('/api/admin/archivages'),
          fetch('/api/admin/themes'),
          fetch('/api/admin/editions-papier'),
        ]);

        if (!articleRes.ok) {
          throw new Error(`Erreur HTTP ! Statut: ${articleRes.status}`);
        }

        const articleData = await articleRes.json();
        const categoriesData = await catRes.json();
        const archivagesData = await arcRes.json();
        const themesData = await thmRes.json();
        const editionsPapierData = await edpRes.json();

        setCategories(categoriesData);
        setArchivages(archivagesData);
        setThemes(themesData);
        setEditionsPapier(editionsPapierData);

        setFormData({
          // Conserver les champs qui ne sont pas dans articleData mais dans le formulaire
          ...formData,
          // Mettre à jour avec les données de l'article, en s'assurant qu'il n'y a pas de `null`
          id: articleData.id.toString(),
          archivage_id: articleData.archivage_id?.toString() ?? '',
          categorie_id: articleData.categorie_id?.toString() ?? '',
          nom_auteur: articleData.nom_auteur ?? '',
          prenom_auteur: articleData.prenom_auteur ?? '',
          titre: articleData.titre ?? '',
          illustrations: articleData.illustrations ?? '',
          editeur: articleData.editeur ?? '',
          date_impression: articleData.date_impression ?? '',
          nombre_pages: articleData.nombre_pages ?? '',
          description: articleData.description ?? '',
          prix_achat: articleData.prix_achat?.toString() ?? '',
          valeur_marche_min: articleData.valeur_marche_min?.toString() ?? '',
          prix_vente_internet: articleData.prix_vente_internet?.toString() ?? '',
          quantite_volume: articleData.quantite_volume?.toString() ?? '',
          poids_net_kg: articleData.poids_net_kg ?? '',
          frais_postaux: articleData.frais_postaux?.toString() ?? '',
          pseudo_titre: articleData.pseudo_titre ?? '',
          collection: articleData.collection ?? '',
          justification: articleData.justification ?? '',
          date_EO: articleData.date_EO ?? '',
          estimation: articleData.estimation ?? '',
          prix_reserve: articleData.prix_reserve?.toString() ?? '',
          disponible: articleData.disponible ?? 'Oui',
          envoi_possible: articleData.envoi_possible ?? 'Oui',
          edition_papier_id: articleData.edition_papier_id?.toString() ?? '',
          theme_ids: articleData.article_theme.map((at: any) => at.theme_id.toString()),
          date_creation: articleData.date_creation ? new Date(articleData.date_creation).toISOString().split('T')[0] : '',
          date_vente: articleData.date_vente ? new Date(articleData.date_vente).toISOString().split('T')[0] : '',
        });

      } catch (e: any) {
        console.error('Échec de la récupération des données:', e);
        setError(e.message || 'Erreur lors du chargement des données.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [articleId]);

  const handleAddItem = async (type: 'categorie' | 'archivage' | 'theme' | 'edition_papier', name: string) => {
    const endpoints = {
      categorie: '/api/admin/categories',
      archivage: '/api/admin/archivages',
      theme: '/api/admin/themes',
      edition_papier: '/api/admin/editions-papier'
    };
    const bodyPayloads = {
        categorie: { nom: name },
        archivage: { nom_archivage: name },
        theme: { libelle_theme: name },
        edition_papier: { libelle_edition_papier: name }
    }

    const response = await fetch(endpoints[type], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyPayloads[type]),
    });

    if (!response.ok) throw new Error(`Failed to add ${type}`);
    const newItem = await response.json();

    switch (type) {
      case 'categorie':
        setCategories(prev => [...prev, newItem]);
        setFormData(prev => ({ ...prev, categorie_id: newItem.id }));
        break;
      case 'archivage':
        setArchivages(prev => [...prev, newItem]);
        setFormData(prev => ({ ...prev, archivage_id: newItem.id }));
        break;
      case 'theme':
        setThemes(prev => [...prev, newItem]);
        break;
      case 'edition_papier':
        setEditionsPapier(prev => [...prev, newItem]);
        setFormData(prev => ({ ...prev, edition_papier_id: newItem.id }));
        break;
    }
    setShowAddForms(prev => ({ ...prev, [type]: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const articleDataToSubmit = {
        ...formData,
        prix_vente_internet: parseFloat(formData.prix_vente_internet) || null,
      };

      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleDataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      router.push('/admin/articles');
    } catch (e: any) {
      console.error('Failed to update article:', e);
      setError(e.message || 'Erreur lors de la mise à jour de l’article.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ? Cette action est irréversible.')) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la suppression');
      }

      // Rediriger vers la liste des articles après la suppression
      router.push('/admin/articles');
    } catch (e: any) {
      console.error('Failed to delete article:', e);
      setError(e.message || 'Erreur lors de la suppression de l’article.');
    } finally {
      setIsDeleting(false);
    }
  };

  const renderSelectWithAdd = (
    id: 'categorie_id' | 'archivage_id' | 'edition_papier_id',
    label: string,
    options: any[],
    displayField: string,
    formToggle: 'categorie' | 'archivage' | 'edition_papier'
  ) => (
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>{label}</label>
        <div className="flex gap-2">
            <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id={id} name={id} value={formData[id]} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                {options.map(opt => <option key={opt.id} value={opt.id}>{opt[displayField]}</option>)}
            </select>
            <button type="button" onClick={() => setShowAddForms(p => ({...p, [formToggle]: !p[formToggle]}))} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded">
                {showAddForms[formToggle] ? '−' : '+'}
            </button>
        </div>
        {showAddForms[formToggle] && <AddItemForm onAddItem={(name) => handleAddItem(formToggle, name)} label={label} />}
    </div>
  );

  if (isLoading) return <p>Chargement de l'article...</p>;
  if (error && !isLoading) return <p>Erreur: {error} <Link href="/admin/articles">Retour à la liste</Link></p>;
  if (!formData && !isLoading) return <p>Article non trouvé. <Link href="/admin/articles">Retour à la liste</Link></p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-playfair text-gray-800">Modifier l'Article</h1>
        <Link href="/admin/articles" passHref>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Retour à la liste
          </button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Informations Générales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div><Label htmlFor="titre">Titre</Label><Input id="titre" name="titre" value={formData.titre} onChange={handleChange} placeholder="Titre" /></div>
          <div><Label htmlFor="pseudo_titre">Pseudo Titre</Label><Input id="pseudo_titre" name="pseudo_titre" value={formData.pseudo_titre} onChange={handleChange} placeholder="Pseudo Titre" /></div>
          <div><Label htmlFor="collection">Collection</Label><Input id="collection" name="collection" value={formData.collection} onChange={handleChange} placeholder="Collection" /></div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Auteur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div><Label htmlFor="nom_auteur">Nom Auteur</Label><Input id="nom_auteur" name="nom_auteur" value={formData.nom_auteur} onChange={handleChange} placeholder="Nom Auteur" /></div>
          <div><Label htmlFor="prenom_auteur">Prénom Auteur</Label><Input id="prenom_auteur" name="prenom_auteur" value={formData.prenom_auteur} onChange={handleChange} placeholder="Prénom Auteur" /></div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Détails de l'édition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div><Label htmlFor="editeur">Éditeur</Label><Input id="editeur" name="editeur" value={formData.editeur} onChange={handleChange} placeholder="Éditeur" /></div>
          <div><Label htmlFor="date_impression">Date d'impression</Label><Input id="date_impression" name="date_impression" value={formData.date_impression} onChange={handleChange} placeholder="Date d'impression" /></div>
          <div><Label htmlFor="nombre_pages">Nombre de pages</Label><Input id="nombre_pages" name="nombre_pages" value={formData.nombre_pages} onChange={handleChange} placeholder="Nombre de pages" /></div>
          <div><Label htmlFor="illustrations">Illustrations</Label><Input id="illustrations" name="illustrations" value={formData.illustrations} onChange={handleChange} placeholder="Illustrations" /></div>
          <div><Label htmlFor="date_EO">Date d'édition originale</Label><Input id="date_EO" name="date_EO" value={formData.date_EO} onChange={handleChange} placeholder="Date d'édition originale" /></div>
        </div>

        <div className="mb-6"><Label htmlFor="description">Description</Label><Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description" /></div>
        <div className="mb-6"><Label htmlFor="justification">Justification</Label><Textarea id="justification" name="justification" value={formData.justification} onChange={handleChange} placeholder="Justification" /></div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Informations financières</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div><Label htmlFor="prix_achat">Prix d'achat</Label><Input id="prix_achat" name="prix_achat" value={formData.prix_achat} onChange={handleChange} placeholder="Prix d'achat" /></div>
            <div><Label htmlFor="valeur_marche_min">Valeur Marché Min</Label><Input id="valeur_marche_min" name="valeur_marche_min" value={formData.valeur_marche_min} onChange={handleChange} placeholder="Valeur Marché Min" /></div>
            <div><Label htmlFor="prix_vente_internet">Prix Vente Internet</Label><Input id="prix_vente_internet" name="prix_vente_internet" value={formData.prix_vente_internet} onChange={handleChange} placeholder="Prix Vente Internet" /></div>
            <div><Label htmlFor="prix_reserve">Prix de Réserve</Label><Input id="prix_reserve" name="prix_reserve" value={formData.prix_reserve} onChange={handleChange} placeholder="Prix de Réserve" /></div>
            <div><Label htmlFor="estimation">Estimation</Label><Input id="estimation" name="estimation" value={formData.estimation} onChange={handleChange} placeholder="Estimation" /></div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Logistique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div><Label htmlFor="quantite_volume">Quantité/Volume</Label><Input id="quantite_volume" name="quantite_volume" value={formData.quantite_volume} onChange={handleChange} placeholder="Quantité/Volume" /></div>
            <div><Label htmlFor="poids_net_kg">Poids Net (kg)</Label><Input id="poids_net_kg" name="poids_net_kg" value={formData.poids_net_kg} onChange={handleChange} placeholder="Poids Net (kg)" /></div>
            <div><Label htmlFor="frais_postaux">Frais Postaux</Label><Input id="frais_postaux" name="frais_postaux" value={formData.frais_postaux} onChange={handleChange} placeholder="Frais Postaux" /></div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Disponibilité et Relations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <select name="disponible" value={formData.disponible} onChange={handleChange}>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
            <select name="envoi_possible" value={formData.envoi_possible} onChange={handleChange}>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
            {renderSelectWithAdd('categorie_id', 'Catégorie', categories, 'nom_categorie', 'categorie')}
            {renderSelectWithAdd('archivage_id', 'Archivage', archivages, 'nom_archivage', 'archivage')}
            {renderSelectWithAdd('edition_papier_id', 'Édition Papier', editionsPapier, 'libelle_edition_papier', 'edition_papier')}
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Thèmes</h3>
            <button type="button" onClick={() => setShowAddForms(p => ({...p, theme: !p.theme}))} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded text-xs">
              {showAddForms.theme ? '−' : '+'}
            </button>
          </div>
          {showAddForms.theme && <AddItemForm onAddItem={(name) => handleAddItem('theme', name)} label="Thème" />}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {themes.map(theme => (
              <div key={theme.id}>
                <input type="checkbox" id={`theme-${theme.id}`} name="theme_ids" value={theme.id} checked={formData.theme_ids.includes(theme.id)} onChange={(e) => {
                  const themeId = Number(e.target.value);
                  setFormData(prev => ({
                    ...prev,
                    theme_ids: prev.theme_ids.includes(themeId)
                      ? prev.theme_ids.filter(id => id !== themeId)
                      : [...prev.theme_ids, themeId]
                  }));
                }} />
                <label htmlFor={`theme-${theme.id}`}>{theme.libelle_theme}</label>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div><Label htmlFor="date_creation">Date de création</Label><Input type="date" id="date_creation" name="date_creation" value={formData.date_creation} onChange={handleChange} /></div>
          <div><Label htmlFor="date_vente">Date de vente</Label><Input type="date" id="date_vente" name="date_vente" value={formData.date_vente} onChange={handleChange} /></div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? 'Mise à jour en cours...' : 'Mettre à jour l\'article'}
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isDeleting || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isDeleting || isSubmitting}
          >
            {isDeleting ? 'Suppression...' : 'Supprimer'}
          </button>
        </div>
      </form>
    </div>
  );
}