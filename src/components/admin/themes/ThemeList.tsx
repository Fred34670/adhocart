// src/components/admin/themes/ThemeList.tsx
import React from 'react';
import { Theme } from '@/types';

interface ThemeListProps {
  themes: Theme[];
  onEdit: (theme: Theme) => void;
  onDelete: (id: string) => void;
}

const ThemeList: React.FC<ThemeListProps> = ({ themes, onEdit, onDelete }) => {
  return (
    <table className="w-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Nom</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {themes.map((theme, index) => (
          <tr key={theme.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">{theme.libelle_theme}</td>
            <td className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => onEdit(theme)}
                >Modifier</button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(theme.id)}
                >Supprimer</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ThemeList;