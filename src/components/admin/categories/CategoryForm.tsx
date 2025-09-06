import React, { useState, useEffect } from "react";
import { Category } from '@/types';

interface CategoryFormProps {
  initialData?: Category | null;
  onSubmit: (data: Omit<Category, "id" | "image_url">) => void;
  onCancel: () => void;
  loading?: boolean;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData, onSubmit, onCancel, loading }) => {
  const [nom_categorie, setNomCategorie] = useState(initialData?.nom_categorie || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [image_entete_url, setImageEnteteUrl] = useState(initialData?.image_entete_url || "");

  useEffect(() => {
    setNomCategorie(initialData?.nom_categorie || "");
    setDescription(initialData?.description || "");
    setImageEnteteUrl(initialData?.image_entete_url || "");
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom_categorie.trim()) return;
    onSubmit({ nom_categorie, description, image_entete_url });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Nom</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={nom_categorie}
          onChange={e => setNomCategorie(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          className="border rounded px-3 py-2 w-full"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Image de fond de la catégorie (URL)</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={image_entete_url}
          onChange={e => setImageEnteteUrl(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >{initialData ? "Enregistrer" : "Ajouter"}</button>
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={onCancel}
          disabled={loading}
        >Annuler</button>
      </div>
    </form>
  );
};

export default CategoryForm;