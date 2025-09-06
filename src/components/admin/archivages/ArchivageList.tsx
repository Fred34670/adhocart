// src/components/admin/archivages/ArchivageList.tsx
import React from 'react';
import { Archivage } from '@/types';

interface ArchivageListProps {
  archivages: Archivage[];
  onEdit: (archivage: Archivage) => void;
  onDelete: (id: string) => void;
}

const ArchivageList: React.FC<ArchivageListProps> = ({ archivages, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-300 mx-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-r border-gray-300 text-gray-700">Nom</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {archivages.map((archivage, index) => (
          <tr key={archivage.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <td className="px-4 py-2 border-b border-r border-gray-300 text-gray-800">{archivage.nom_archivage}</td>
            <td className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => onEdit(archivage)}
                >Modifier</button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(archivage.id)}
                >Supprimer</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArchivageList;