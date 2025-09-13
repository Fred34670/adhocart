import React from "react";
import { getImagePath } from "@/components/home/Categories";
import { Category } from '@/types';
import { TooltipRoot, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onEdit, onDelete }) => {
  return (
    <table className="w-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Bouton catégorie</th>
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Nom</th>
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">
            <div className="flex items-center justify-center">
              <span>Description</span>
              <TooltipRoot>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 ml-2 text-gray-500 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ce texte sera affiché sous le titre de la catégorie, sur l'image de fond.</p>
                </TooltipContent>
              </TooltipRoot>
            </div>
          </th>
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Image de fond de la catégorie</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat, index) => (
          <tr key={cat.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">
              <img
                src={getImagePath(cat.nom_categorie)}
                alt={cat.nom_categorie}
                className="h-24 w-24 object-cover"
              />
            </td>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">{cat.nom_categorie}</td>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">{cat.description || "-"}</td>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">
              {cat.image_entete_url ? (
                <img
                  src={cat.image_entete_url}
                  alt={`Image d'en-tête pour ${cat.nom_categorie}`}
                  className="h-24 w-48 object-cover"
                />
              ) : (
                "-"
              )}
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => onEdit(cat)}
              >Modifier</button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => onDelete(cat.id)}
              >Supprimer</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;