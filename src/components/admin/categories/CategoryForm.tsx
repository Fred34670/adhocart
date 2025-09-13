import React, { useState, useEffect } from "react";
import { Category } from '@/types';
import { TooltipRoot, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

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
        <label className="block mb-1 font-semibold text-gray-900">Nom</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full text-gray-800"
          value={nom_categorie}
          onChange={e => setNomCategorie(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="flex items-center">
          <label className="block mb-1 font-semibold text-gray-900">Description</label>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 ml-2 text-gray-500 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Ce texte sera affiché sous le titre de la catégorie, sur l'image de fond.</p>
            </TooltipContent>
          </TooltipRoot>
        </div>
        <textarea
          className="border rounded px-3 py-2 w-full text-gray-800"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-900">Image de fond de la catégorie (URL)</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full text-gray-800"
          value={image_entete_url}
          onChange={e => setImageEnteteUrl(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-[#E2E8F0] text-[#1a202c] px-4 py-2 rounded hover:bg-[#CBD5E0]"
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