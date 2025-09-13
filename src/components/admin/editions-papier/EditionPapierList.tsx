// src/components/admin/editions-papier/EditionPapierList.tsx
import React from 'react';
import { EditionPapier } from '@/types';

interface EditionPapierListProps {
  editionsPapier: EditionPapier[];
  onEdit: (editionPapier: EditionPapier) => void;
  onDelete: (id: string) => void;
}

const EditionPapierList: React.FC<EditionPapierListProps> = ({ editionsPapier, onEdit, onDelete }) => {
  return (
    <table className="w-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Nom</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {editionsPapier.map((editionPapier, index) => (
          <tr key={editionPapier.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">{editionPapier.libelle_edition_papier}</td>
            <td className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => onEdit(editionPapier)}
                >Modifier</button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(editionPapier.id)}
                >Supprimer</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditionPapierList;