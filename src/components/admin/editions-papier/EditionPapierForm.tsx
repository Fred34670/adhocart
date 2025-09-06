// src/components/admin/editions-papier/EditionPapierForm.tsx
import React, { useState, useEffect } from 'react';
import { EditionPapier } from '@/types';

interface EditionPapierFormProps {
  initialData?: EditionPapier | null;
  onSubmit: (data: Omit<EditionPapier, 'id'>) => void;
  onCancel: () => void;
  loading?: boolean;
}

const EditionPapierForm: React.FC<EditionPapierFormProps> = ({ initialData, onSubmit, onCancel, loading }) => {
  const [libelle_edition_papier, setLibelleEditionPapier] = useState(initialData?.libelle_edition_papier || '');

  useEffect(() => {
    setLibelleEditionPapier(initialData?.libelle_edition_papier || '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!libelle_edition_papier.trim()) return;
    onSubmit({ libelle_edition_papier });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Nom</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={libelle_edition_papier}
          onChange={(e) => setLibelleEditionPapier(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >{initialData ? 'Enregistrer' : 'Ajouter'}</button>
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

export default EditionPapierForm;