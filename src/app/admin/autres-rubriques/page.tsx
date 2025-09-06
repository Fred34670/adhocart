// src/app/admin/autres-rubriques/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Category, Theme, Archivage, EditionPapier } from '@/types';
import CategoryList from '@/components/admin/categories/CategoryList';
import CategoryForm from '@/components/admin/categories/CategoryForm';
import ThemeList from '@/components/admin/themes/ThemeList';
import ThemeForm from '@/components/admin/themes/ThemeForm';
import ArchivageList from '@/components/admin/archivages/ArchivageList';
import ArchivageForm from '@/components/admin/archivages/ArchivageForm';
import EditionPapierList from '@/components/admin/editions-papier/EditionPapierList';
import EditionPapierForm from '@/components/admin/editions-papier/EditionPapierForm';

const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch('/api/admin/categories');
  if (!res.ok) throw new Error('Erreur lors du chargement des catégories');
  return res.json();
};

const createCategory = async (data: { nom_categorie: string, description?: string }) => {
  const res = await fetch('/api/admin/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout de la catégorie");
  return res.json();
};

const updateCategory = async (id: string, data: { nom_categorie: string, description?: string }) => {
  const res = await fetch('/api/admin/categories', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification de la catégorie");
  return res.json();
};

const deleteCategory = async (id: string) => {
  const res = await fetch('/api/admin/categories', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression de la catégorie");
  return res.json();
};

const CategoriesManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState<Category | null>(null);

  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleAdd = () => {
    setEditCategory(null);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (cat: Category) => {
    setEditCategory(cat);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Confirmer la suppression de cette catégorie ?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteCategory(id);
      setSuccess('Catégorie supprimée avec succès.');
      loadCategories();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data: Omit<Category, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const { nom_categorie, description } = data;
      const submitData = { nom_categorie, description };

      if (editCategory) {
        await updateCategory(editCategory.id, {
          ...submitData,
          description: submitData.description ?? undefined,
        });
        setSuccess('Catégorie modifiée avec succès.');
      } else {
        await createCategory({
          ...submitData,
          description: submitData.description ?? undefined,
        });
        setSuccess('Catégorie ajoutée avec succès.');
      }
      setShowForm(false);
      loadCategories();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Gestion des catégories</h2>
      {error && <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">{success}</div>}
      {showForm ? (
        <CategoryForm
          initialData={editCategory}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          loading={loading}
        />
      ) : (
        <>
          <button
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAdd}
          >Ajouter une catégorie</button>
          {loading ? (
            <div>Chargement...</div>
          ) : (
            <CategoryList
              categories={categories}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

const AdminAutresRubriquesPage = () => {
  const [activeTab, setActiveTab] = useState('categories');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Gestion des autres rubriques</h1>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('categories')}
            className={`${
              activeTab === 'categories'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Catégories
          </button>
          <button
            onClick={() => setActiveTab('themes')}
            className={`${
              activeTab === 'themes'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Thèmes
          </button>
          <button
            onClick={() => setActiveTab('archivages')}
            className={`${
              activeTab === 'archivages'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Archivages
          </button>
          <button
            onClick={() => setActiveTab('editions-papier')}
            className={`${
              activeTab === 'editions-papier'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Éditions Papier
          </button>
        </nav>
      </div>
      <div className="mt-8">
        {activeTab === 'categories' && <CategoriesManager />}
        {activeTab === 'themes' && <ThemesManager />}
        {activeTab === 'archivages' && <ArchivagesManager />}
        {activeTab === 'editions-papier' && <EditionsPapierManager />}
      </div>
    </div>
  );
};

const fetchThemes = async (): Promise<Theme[]> => {
  const res = await fetch('/api/admin/themes');
  if (!res.ok) throw new Error('Erreur lors du chargement des thèmes');
  return res.json();
};

const createTheme = async (data: { libelle_theme: string }) => {
  const res = await fetch('/api/admin/themes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout du thème");
  return res.json();
};

const updateTheme = async (id: string, data: { libelle_theme: string }) => {
  const res = await fetch('/api/admin/themes', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification du thème");
  return res.json();
};

const deleteTheme = async (id: string) => {
  const res = await fetch('/api/admin/themes', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression du thème");
  return res.json();
};

const ThemesManager = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editTheme, setEditTheme] = useState<Theme | null>(null);

  const loadThemes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchThemes();
      setThemes(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadThemes();
  }, []);

  const handleAdd = () => {
    setEditTheme(null);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (theme: Theme) => {
    setEditTheme(theme);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Confirmer la suppression de ce thème ?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteTheme(id);
      setSuccess('Thème supprimé avec succès.');
      loadThemes();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data: Omit<Theme, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      if (editTheme) {
        await updateTheme(editTheme.id, data);
        setSuccess('Thème modifié avec succès.');
      } else {
        await createTheme(data);
        setSuccess('Thème ajouté avec succès.');
      }
      setShowForm(false);
      loadThemes();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Gestion des thèmes</h2>
      {error && <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">{success}</div>}
      {showForm ? (
        <ThemeForm
          initialData={editTheme}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          loading={loading}
        />
      ) : (
        <>
          <button
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAdd}
          >Ajouter un thème</button>
          {loading ? (
            <div>Chargement...</div>
          ) : (
            <ThemeList
              themes={themes}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

const fetchArchivages = async (): Promise<Archivage[]> => {
  const res = await fetch('/api/admin/archivages');
  if (!res.ok) throw new Error('Erreur lors du chargement des archivages');
  return res.json();
};

const createArchivage = async (data: { nom_archivage: string }) => {
  const res = await fetch('/api/admin/archivages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout de l'archivage");
  return res.json();
};

const updateArchivage = async (id: string, data: { nom_archivage: string }) => {
  const res = await fetch('/api/admin/archivages', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification de l'archivage");
  return res.json();
};

const deleteArchivage = async (id: string) => {
  const res = await fetch('/api/admin/archivages', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression de l'archivage");
  return res.json();
};

const ArchivagesManager = () => {
  const [archivages, setArchivages] = useState<Archivage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editArchivage, setEditArchivage] = useState<Archivage | null>(null);

  const loadArchivages = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchArchivages();
      setArchivages(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArchivages();
  }, []);

  const handleAdd = () => {
    setEditArchivage(null);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (archivage: Archivage) => {
    setEditArchivage(archivage);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Confirmer la suppression de cet archivage ?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteArchivage(id);
      setSuccess('Archivage supprimé avec succès.');
      loadArchivages();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data: Omit<Archivage, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      if (editArchivage) {
        await updateArchivage(editArchivage.id, data);
        setSuccess('Archivage modifié avec succès.');
      } else {
        await createArchivage(data);
        setSuccess('Archivage ajouté avec succès.');
      }
      setShowForm(false);
      loadArchivages();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Gestion des archivages</h2>
      {error && <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">{success}</div>}
      {showForm ? (
        <ArchivageForm
          initialData={editArchivage}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          loading={loading}
        />
      ) : (
        <>
          <button
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAdd}
          >Ajouter un archivage</button>
          {loading ? (
            <div>Chargement...</div>
          ) : (
            <ArchivageList
              archivages={archivages}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

const fetchEditionsPapier = async (): Promise<EditionPapier[]> => {
  const res = await fetch('/api/admin/editions-papier');
  if (!res.ok) throw new Error('Erreur lors du chargement des éditions papier');
  return res.json();
};

const createEditionPapier = async (data: { libelle_edition_papier: string }) => {
  const res = await fetch('/api/admin/editions-papier', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout de l'édition papier");
  return res.json();
};

const updateEditionPapier = async (id: string, data: { libelle_edition_papier: string }) => {
  const res = await fetch('/api/admin/editions-papier', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification de l'édition papier");
  return res.json();
};

const deleteEditionPapier = async (id: string) => {
  const res = await fetch('/api/admin/editions-papier', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression de l'édition papier");
  return res.json();
};

const EditionsPapierManager = () => {
  const [editionsPapier, setEditionsPapier] = useState<EditionPapier[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editEditionPapier, setEditEditionPapier] = useState<EditionPapier | null>(null);

  const loadEditionsPapier = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchEditionsPapier();
      setEditionsPapier(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEditionsPapier();
  }, []);

  const handleAdd = () => {
    setEditEditionPapier(null);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (editionPapier: EditionPapier) => {
    setEditEditionPapier(editionPapier);
    setShowForm(true);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Confirmer la suppression de cette édition papier ?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteEditionPapier(id);
      setSuccess('Édition papier supprimée avec succès.');
      loadEditionsPapier();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data: Omit<EditionPapier, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      if (editEditionPapier) {
        await updateEditionPapier(editEditionPapier.id, data);
        setSuccess('Édition papier modifiée avec succès.');
      } else {
        await createEditionPapier(data);
        setSuccess('Édition papier ajoutée avec succès.');
      }
      setShowForm(false);
      loadEditionsPapier();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Gestion des éditions papier</h2>
      {error && <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">{success}</div>}
      {showForm ? (
        <EditionPapierForm
          initialData={editEditionPapier}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          loading={loading}
        />
      ) : (
        <>
          <button
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAdd}
          >Ajouter une édition papier</button>
          {loading ? (
            <div>Chargement...</div>
          ) : (
            <EditionPapierList
              editionsPapier={editionsPapier}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

export default AdminAutresRubriquesPage;